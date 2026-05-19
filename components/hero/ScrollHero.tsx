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
    const constrainedMemory = typeof memory === "number" && memory <= 3;
    const constrainedCpu =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency <= 4;
    const mobileLike = coarsePointer || smallViewport;

    const shouldUseFallback =
      prefersReducedMotion || constrainedMemory || constrainedCpu || mobileLike;

    setFallbackMode(shouldUseFallback);

    let updateTween: gsap.core.Tween | null = null;
    let scrubTrigger: ScrollTrigger | null = null;
    let autoplayInitiated = false;
    let animationFrameId = 0;

    const autoplayVideo = () => {
      if (autoplayInitiated && !video.paused) {
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

      const state = {
        targetTime: 0,
        smoothTime: 0,
      };

      video.pause();
      video.loop = false;
      video.currentTime = 0;

      const maxTime = Math.max(video.duration - 0.06, 0);
      const smoothFactor = 0.18;
      const holdRatio = 1 / 6;
      const holdStart = 1 - holdRatio;
      const targetFrameInterval = 1000 / 24;
      let lastSeekTimestamp = 0;
      let pendingSeekFrames = 0;

      const tick = (timestamp: number) => {
        state.smoothTime += (state.targetTime - state.smoothTime) * smoothFactor;

        if (
          video.readyState >= 2 &&
          timestamp - lastSeekTimestamp >= targetFrameInterval &&
          !video.seeking
        ) {
          const nextTime = Math.min(maxTime, Math.max(0, state.smoothTime));

          if (Math.abs(video.currentTime - nextTime) > 0.016) {
            video.currentTime = nextTime;
            lastSeekTimestamp = timestamp;
          }
        }

        if (video.seeking && Math.abs(video.currentTime - state.targetTime) > 0.08) {
          pendingSeekFrames += 1;
        } else {
          pendingSeekFrames = Math.max(0, pendingSeekFrames - 2);
        }

        if (pendingSeekFrames > 80) {
          scrubTrigger?.kill();
          setFallbackMode(true);
          autoplayVideo();
          return;
        }

        animationFrameId = window.requestAnimationFrame(tick);
      };

      animationFrameId = window.requestAnimationFrame(tick);

      scrubTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextProgress = gsap.utils.clamp(0, 1, self.progress);
          setProgress(nextProgress);

          const mappedProgress =
            nextProgress < holdStart ? nextProgress / holdStart : 1;
          state.targetTime = mappedProgress * maxTime;
        },
      });

      updateTween = gsap.to(video, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLoadedMetadata = () => {
      setIsReady(true);
      video.preload = "auto";

      if (shouldUseFallback) {
        autoplayVideo();
      } else {
        void video.play().then(() => video.pause()).catch(() => null);
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

    const onCanPlay = () => {
      if (shouldUseFallback) {
        autoplayVideo();
      }
    };

    const onFirstInteraction = () => {
      if (shouldUseFallback) {
        autoplayVideo();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    video.addEventListener("canplay", onCanPlay);
    window.addEventListener("touchstart", onFirstInteraction, {
      passive: true,
      once: true,
    });
    window.addEventListener("pointerdown", onFirstInteraction, {
      passive: true,
      once: true,
    });

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("canplay", onCanPlay);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.cancelAnimationFrame(animationFrameId);
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
          autoPlay
          loop
          preload="auto"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.35)_0%,rgba(18,11,8,0.08)_35%,rgba(18,11,8,0.78)_100%)]" />
        <div className="grain-overlay" />

        <HeroOverlayText progress={fallbackMode ? 0 : progress} isReady={isReady} />
      </div>
    </section>
  );
}
