"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const logos = Array.from({ length: 17 }, (_, i) => `/logos/art${i + 1}.png`);

export default function LogoWallSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeLogo = activeIndex !== null ? logos[activeIndex] : null;

  const showNext = () => {
    setActiveIndex(prev =>
      prev === null ? 0 : (prev + 1) % logos.length
    );
  };

  const showPrev = () => {
    setActiveIndex(prev =>
      prev === null ? 0 : (prev - 1 + logos.length) % logos.length
    );
  };

  // ESC + piltangenter i lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      <section className="relative bg-neutral-950 py-24">
        {/* Bakgrundseffekter */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-10%] h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Titel */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-orange-300 ring-1 ring-white/10">
              Våra samarbeten
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              våra kunder talar för oss
            </h2>

            <p className="mt-5 mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
              Här är ett urval av logotyper från företag vi har haft förmånen att arbeta med.
            </p>
          </div>

          {/* Logovägg */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {logos.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="
                  group relative flex cursor-pointer items-center justify-center
                  overflow-hidden rounded-3xl border border-neutral-200 bg-white
                  p-7 sm:p-8 md:p-10
                  shadow-[0_22px_55px_rgba(0,0,0,0.35)]
                  transform-gpu
                  transition-all duration-300
                  hover:-translate-y-3 hover:scale-[1.03] hover:rotate-[0.8deg]
                  active:scale-95 active:animate-pulse
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                "
              >
                {/* Neon/glow-ram på hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.22),transparent_70%)]" />
                  <div className="absolute inset-0 rounded-3xl ring-2 ring-orange-400/80 shadow-[0_0_35px_rgba(249,115,22,0.6)]" />
                </div>

                <div className="relative h-32 w-full sm:h-36 md:h-40 lg:h-48">
                  <Image
                    src={src}
                    alt={`Kundlogotyp ${index + 1}`}
                    fill
                    className="
                      object-contain
                      grayscale opacity-85
                      transition-all duration-300
                      group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1
                    "
                  />
                </div>
              </button>
            ))}
          </div>

          {/* text under */}
          <p className="mt-12 text-center text-sm text-neutral-400 md:text-base">
            Vill du bli en av dem?{" "}
            <a
              href="/contact"
              className="text-orange-300 underline-offset-2 transition hover:text-orange-200 hover:underline"
            >
              Kontakta oss.
            </a>
          </p>
        </div>
      </section>

      {/* Lightbox (vit bakgrund & pilar) */}
      {activeLogo && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-white/95 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative z-10 w-[92vw] max-w-3xl rounded-3xl border border-neutral-300 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)] transform-gpu transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stäng-knapp */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="z-20 absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 shadow transition hover:bg-neutral-200"
              aria-label="Stäng"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Vänster pil */}
            <button
              type="button"
              onClick={showPrev}
              className="z-20 absolute left-5 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 shadow-md transition hover:bg-neutral-200"
              aria-label="Föregående"
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>

            {/* Höger pil */}
            <button
              type="button"
              onClick={showNext}
              className="z-20 absolute right-5 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 shadow-md transition hover:bg-neutral-200"
              aria-label="Nästa"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>

            {/* Bilden */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-inner">
              <Image
                src={activeLogo}
                alt="Förstorad logotyp"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-center text-sm text-neutral-700">
              Använd pilarna eller piltangenterna för att byta bild. Klicka utanför rutan eller på
              krysset för att stänga.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
