"use client";

import { useState } from "react";
import Image from "next/image";

export default function GatupratarePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ⬇️ Uppdatera dessa paths så de matchar dina riktiga filer i public/gatupratare/
  const images = [
    "/gatupratare/01.jpg",
    "/gatupratare/02.jpg",
    "/gatupratare/03.jpg",
    "/gatupratare/04.jpg",
    "/gatupratare/05.png",
    "/gatupratare/06.png",
    "/gatupratare/07.png",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* Bakgrundsglow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-300/90 ring-1 ring-white/10">
            Galleri · Gatupratare
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Gatupratare som stoppar folk i steget
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-sm md:text-base">
            Säljbudskap, kampanjer och varumärkesprofil – gatupratare är ett
            effektivt sätt att fånga förbipasserandes uppmärksamhet utanför butik
            eller vid entréer.
          </p>
        </div>

        {/* Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Gatupratare ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                  Gatupratare #{index + 1}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / förstoring */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
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
                alt="Förstorad gatupratare"
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
