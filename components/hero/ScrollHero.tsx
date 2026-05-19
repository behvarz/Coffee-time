"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroOverlayText from "./HeroOverlayText";

type NavigatorWithMemory = Navigator & { deviceMemory?: number };

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [fallbackMode, setFallbackMode] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallViewport = window.innerWidth < 1024;
    const memory = (navigator as NavigatorWithMemory).deviceMemory;
    const constrainedMemory = typeof memory === "number" && memory <= 4;

    const shouldUseFallback =
      prefersReducedMotion || coarsePointer || smallViewport || constrainedMemory;

    setFallbackMode(shouldUseFallback);

    let updateTween: gsap.core.Tween | null = null;
    let scrubTrigger: ScrollTrigger | null = null;
    let autoplayInitiated = false;

    const autoplayVideo = () => {
      if (autoplayInitiated) {
        return;
      }

      autoplayInitiated = true;
      video.loop = true;
      video.muted = true;
      video.playbackRate = 0.9;
      video.setAttribute("autoplay", "");

      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          autoplayInitiated = false;
        });
      }
    };

    const setupScrub = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0.1) {
        return;
      }

      const target = {
        time: 0,
      };

      video.pause();
      video.loop = false;
      video.currentTime = 0;

      const maxTime = Math.max(video.duration - 0.06, 0);

      updateTween = gsap.to(target, {
        time: maxTime,
        ease: "none",
        paused: true,
        onUpdate: () => {
          if (video.readyState >= 2) {
            const nextTime = Math.min(maxTime, target.time);
            if (Math.abs(video.currentTime - nextTime) > 0.01) {
              video.currentTime = nextTime;
            }
          }
        },
      });

      scrubTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.9,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextProgress = gsap.utils.clamp(0, 1, self.progress);
          setProgress(nextProgress);
          if (updateTween) {
            updateTween.progress(nextProgress);
          }
        },
      });
    };

    const onLoadedMetadata = () => {
      setIsReady(true);
      if (shouldUseFallback) {
        autoplayVideo();
      } else {
        setupScrub();
      }
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    }

    const onVisibilityChange = () => {
      if (!document.hidden && shouldUseFallback) {
        autoplayVideo();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      updateTween?.kill();
      scrubTrigger?.kill();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          muted
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.35)_0%,rgba(18,11,8,0.08)_35%,rgba(18,11,8,0.78)_100%)]" />
        <div className="grain-overlay" />

        <HeroOverlayText progress={fallbackMode ? 0.08 : progress} isReady={isReady} />
      </div>
    </section>
  );
}
