"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { languageCodes, type LanguageCode } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const { content, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.collection, href: "#collection" },
    { label: content.nav.ritual, href: "#ritual" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#E0A85A]/20 bg-[#120B08]/72 backdrop-blur-xl shadow-[0_14px_38px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="#home" className="group">
          <p className="font-display text-base tracking-[0.28em] text-[#F4E7D3] md:text-lg">
            Coffee Time Yerevan
          </p>
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#FFF7ED]/80 hover:text-[#E0A85A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-[#E0A85A]/35 bg-[#120B08]/45 p-1 md:flex">
            {languageCodes.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code as LanguageCode)}
                className={`rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] transition-colors ${
                  language === code
                    ? "bg-[#C88A3D]/25 text-[#FFF7ED]"
                    : "text-[#F4E7D3]/65 hover:text-[#FFF7ED]"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href="tel:+37496536006"
            className="inline-flex items-center justify-center rounded-full border border-[#E0A85A]/45 bg-[#C88A3D]/10 px-5 py-2.5 text-[11px] tracking-[0.22em] text-[#FFF7ED] hover:-translate-y-0.5 hover:border-[#E0A85A] hover:bg-[#C88A3D]/20"
          >
            {content.actions.orderCoffee}
          </Link>
        </div>
      </div>
    </header>
  );
}
