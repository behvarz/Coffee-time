"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-[#E0A85A]/14 bg-[#120B08]/90">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 py-14 md:grid-cols-2 md:px-10 lg:px-16">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-[#FFF7ED] uppercase">
            Coffee Time
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F4E7D3]/70">
            {content.footer.description}
          </p>
        </div>

        <div className="grid gap-5 text-sm text-[#F4E7D3]/78 md:justify-end md:text-right">
          <Link
            href="https://www.instagram.com/coffeetimeyerevan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E0A85A]"
          >
            instagram.com/coffeetimeyerevan
          </Link>
          <div>
            <p>+37496536006</p>
            <p>+37433536006</p>
          </div>
          <p>Sundukyan 64/3, Yerevan</p>
        </div>
      </div>

      <div className="border-t border-[#E0A85A]/10 py-6 text-center text-xs tracking-[0.16em] text-[#F4E7D3]/55 uppercase">
        (c) {new Date().getFullYear()} COFFEE TIME. {content.footer.rights}
      </div>
      <div className="pb-8 text-center text-xs tracking-[0.16em] text-[#F4E7D3]/55">
        Powered by{" "}
        <Link
          href="https://orscale.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#E0A85A] hover:text-[#F4E7D3]"
        >
          Orscale
        </Link>
      </div>
    </footer>
  );
}
