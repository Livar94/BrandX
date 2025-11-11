"use client";

import React, { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";

export interface ScrollStackItemProps {
  className?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${className}`.trim()}
      style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 0,
  itemScale = 0.03,
  itemStackDistance = 16,
  stackPosition = "25%",
  scaleEndPosition = "10%",
  baseScale = 0.9,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false, // 👈 intern scroll som default för att undvika jitter
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((y: number, a: number, b: number) => {
    if (y < a) return 0;
    if (y > b) return 1;
    return (y - a) / (b - a);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerH: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerH;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const s = scrollerRef.current;
    return { scrollTop: s ? s.scrollTop : 0, containerHeight: s ? s.clientHeight : 0 };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (el: HTMLElement) => {
      if (useWindowScroll) {
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY;
      }
      // relativt wrappern
      let offset = 0;
      let node: HTMLElement | null = el;
      const wrapper = scrollerRef.current;
      while (node && node !== wrapper) {
        offset += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return offset;
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPx = parsePercentage(scaleEndPosition, containerHeight);

    const endEl = (useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end")) as HTMLElement | null;

    const endTop = endEl ? getElementOffset(endEl) : 0;

    cardsRef.current.forEach((card, i) => {
      const cardTop = getElementOffset(card);

      const triggerStart = cardTop - stackPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;
      const pinStart = cardTop - stackPx - itemStackDistance * i;
      const pinEnd = endTop - containerHeight / 2;

      const sProg = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - sProg * (1 - targetScale);
      const rot = rotationAmount ? i * rotationAmount * sProg : 0;

      let y = 0;
      const pinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (pinned) y = scrollTop - cardTop + stackPx + itemStackDistance * i;
      else if (scrollTop > pinEnd) y = pinEnd - cardTop + stackPx + itemStackDistance * i;

      card.style.zIndex = String(1000 + i);
      card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale}) rotate(${rot}deg)`;

      if (blurAmount) {
        // enkel blur baserat på djup
        const depth = Math.max(0, (cardsRef.current.length - 1) - i);
        const blur = Math.min(depth * blurAmount * sProg, 12);
        card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    // ✅ Korrekt init beroende på scroll-läge
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.08,
      });
      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return;
    }

    // 🔒 Intern scroll: bind Lenis till wrapper + content
    const wrapper = scrollerRef.current;
    const content = wrapper?.querySelector(".scroll-stack-inner") as HTMLElement | null;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: "vertical",
      syncTouch: true,
      syncTouchLerp: 0.08,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    // extra: om Lenis inaktiveras, fallback till native scroll
    const onNative = () => handleScroll();
    wrapper.addEventListener("scroll", onNative, { passive: true });

    return () => {
      wrapper.removeEventListener("scroll", onNative);
    };
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const nodeList = (useWindowScroll
      ? document.querySelectorAll(".scroll-stack-card")
      : scrollerRef.current?.querySelectorAll(".scroll-stack-card")) as
      | NodeListOf<HTMLElement>
      | undefined;

    const cards = nodeList ? Array.from(nodeList) : [];
    cardsRef.current = cards;

    // spacing & bas-styles
    cards.forEach((card, i) => {
      card.style.marginBottom = i < cards.length - 1 ? `${itemDistance}px` : "0px";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.willChange = "transform, filter";
      card.style.pointerEvents = i === cards.length - 1 ? "auto" : "none";
    });

    const cleanupLenis = setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lenisRef.current?.destroy();
      if (typeof cleanupLenis === "function") cleanupLenis();
    };
  }, [useWindowScroll, itemDistance, setupLenis, updateCardTransforms]);

  return (
    <div
      ref={scrollerRef}
      className={[
        "relative w-full h-full",
        useWindowScroll ? "overflow-visible" : "overflow-y-auto overflow-x-visible",
        className,
      ].join(" ")}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: useWindowScroll ? undefined : "touch",
      }}
    >
      <div className="scroll-stack-inner pt-[20vh] px-6 md:px-20 pb-[50rem] min-h-[200vh]">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
