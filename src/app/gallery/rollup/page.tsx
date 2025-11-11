"use client";

import { useState } from "react";
import Image from "next/image";

export default function RollupPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 🔸 Lägg dina roll-up bilder i public/rollup/
  const images = [
    "/rollup/01.jpg",
    "/rollup/02.jpg",
    "/rollup/03.jpg",
    "/rollup/04.jpg",
    "/rollup/05.jpg",
    "/rollup/06.jpg",
    "/rollup/07.jpg",
    "/rollup/08.png",
    "/rollup/09.png",
    "/rollup/010.png",
    "/rollup/011.png",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* ✨ Subtil bakgrundsglow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* 🧭 Titel */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-indigo-300/90 ring-1 ring-white/10">
            Galleri · Roll-up
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Roll-ups som lyfter ditt varumärke
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-sm md:text-base">
            Roll-ups är det perfekta sättet att synas på mässor, event och i butik. 
            Vi designar och producerar roll-ups med hög kvalitet och stilren grafik.
          </p>
        </div>

        {/* 🖼️ Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Roll-up ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                  Roll-up #{index + 1}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 🔍 Lightbox / förstoring */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stäng-knapp */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white shadow-lg shadow-black/40 backdrop-blur hover:bg-white/20"
            >
              Stäng ✕
            </button>

            <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src={selectedImage}
                alt="Förstorad roll-up"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
