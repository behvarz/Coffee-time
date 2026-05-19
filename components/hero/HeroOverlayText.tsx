"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

type HeroOverlayTextProps = {
  progress: number;
  isReady: boolean;
};

function getOpacity(progress: number, start: number, end: number): number {
  const fadeZone = 0.05;

  if (progress < start - fadeZone || progress > end + fadeZone) {
    return 0;
  }

  if (progress >= start && progress <= end) {
    return 1;
  }

  if (progress < start) {
    return (progress - (start - fadeZone)) / fadeZone;
  }

  return 1 - (progress - end) / fadeZone;
}

export default function HeroOverlayText({
  progress,
  isReady,
}: HeroOverlayTextProps) {
  const { content } = useLanguage();

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center text-center">
        {content.hero.moments.map((moment) => (
          <p
            key={moment.text}
            className="absolute max-w-3xl text-4xl leading-tight tracking-[0.06em] text-[#FFF7ED] md:text-6xl lg:text-7xl font-display"
            style={{
              opacity: isReady ? getOpacity(progress, moment.start, moment.end) : 0,
              transform: `translateY(${(1 - getOpacity(progress, moment.start, moment.end)) * 18}px)`,
            }}
          >
            {moment.text}
          </p>
        ))}

        <div
          className="absolute bottom-16 flex flex-col items-center gap-5 md:bottom-20"
          style={{
            opacity: progress > 0.92 ? Math.min((progress - 0.92) / 0.08, 1) : 0,
          }}
        >
          <span className="font-display text-xl tracking-[0.14em] text-[#F4E7D3] uppercase md:text-2xl">
            {content.hero.exploreCollection}
          </span>
          <Link
            href="#collection"
            className="pointer-events-auto inline-flex rounded-full border border-[#E0A85A]/50 px-6 py-3 text-xs tracking-[0.24em] text-[#FFF7ED] uppercase hover:border-[#E0A85A] hover:bg-[#C88A3D]/15"
          >
            {content.actions.enter}
          </Link>
        </div>
      </div>
    </div>
  );
}
