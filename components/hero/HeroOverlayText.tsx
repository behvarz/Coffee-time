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
  const ctaOpacity =
    progress > 0.89 ? Math.min((progress - 0.89) / 0.06, 1) : 0;
  const hintOpacity =
    progress < 0.08 ? Math.max(0, Math.min((0.08 - progress) / 0.08, 1)) : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center text-center">
        {content.hero.moments.map((moment) => {
          const phaseOpacity = getOpacity(progress, moment.start, moment.end);
          const momentOpacity = isReady ? phaseOpacity * (1 - ctaOpacity) : 0;

          return (
            <p
              key={moment.text}
              className="absolute max-w-3xl text-4xl leading-tight tracking-[0.06em] text-[#FFF7ED] md:text-6xl lg:text-7xl font-display"
              style={{
                opacity: momentOpacity,
                transform: `translateY(${(1 - phaseOpacity) * 18}px)`,
              }}
            >
              {moment.text}
            </p>
          );
        })}

        <div
          className="absolute bottom-16 flex flex-col items-center gap-5 md:bottom-20"
          style={{
            opacity: ctaOpacity,
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

        <div
          className="absolute flex flex-col items-center gap-2 md:bottom-10"
          style={{
            opacity: isReady ? hintOpacity : 0,
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 5.5rem)",
          }}
        >
          <span className="text-[11px] tracking-[0.18em] text-[#F4E7D3]/86 uppercase">
            {content.hero.scrollHint}
          </span>
          <div className="relative h-9 w-5 rounded-full border border-[#E0A85A]/55">
            <span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#E0A85A] animate-[scrollDot_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
