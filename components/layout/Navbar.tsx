"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { languageCodes, type LanguageCode } from "@/lib/site-content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const { content, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
            Coffee Time
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

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-full border border-[#E0A85A]/35 bg-[#120B08]/45 p-1">
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

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => {
              setIsLanguageMenuOpen((prev) => !prev);
              setIsMobileMenuOpen(false);
            }}
            className="rounded-full border border-[#E0A85A]/45 bg-[#120B08]/50 px-3 py-2 text-[10px] tracking-[0.16em] text-[#F4E7D3]"
            aria-label={content.actions.language}
          >
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsLanguageMenuOpen(false);
            }}
            className="rounded-full border border-[#E0A85A]/45 bg-[#120B08]/50 px-4 py-2 text-[10px] tracking-[0.16em] text-[#F4E7D3]"
            aria-label={content.actions.menu}
          >
            {isMobileMenuOpen ? content.actions.close : content.actions.menu}
          </button>
        </div>
      </div>

      {isLanguageMenuOpen ? (
        <div className="px-6 pb-4 md:hidden">
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-[#E0A85A]/25 bg-[#120B08]/88 p-3 backdrop-blur-xl">
            <p className="mb-2 text-[10px] tracking-[0.14em] text-[#E0A85A] uppercase">
              {content.actions.language}
            </p>
            <div className="flex gap-2">
              {languageCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLanguage(code as LanguageCode);
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] ${
                    language === code
                      ? "bg-[#C88A3D]/25 text-[#FFF7ED]"
                      : "bg-[#2A1810]/70 text-[#F4E7D3]/80"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {isMobileMenuOpen ? (
        <div className="px-6 pb-4 md:hidden">
          <div className="mx-auto w-full max-w-[1320px] rounded-2xl border border-[#E0A85A]/25 bg-[#120B08]/88 p-3 backdrop-blur-xl">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-[#FFF7ED]/88 hover:bg-[#2A1810]/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3">
              <Link
                href="tel:+37496536006"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#E0A85A]/45 bg-[#C88A3D]/10 px-4 py-2.5 text-[11px] tracking-[0.18em] text-[#FFF7ED]"
              >
                {content.actions.orderCoffee}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
