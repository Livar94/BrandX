"use client";

import { useState } from "react";
import Image from "next/image";

export default function FonsterdekorPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 🔸 Ändra bildvägarna efter dina riktiga filer i public/fonsterdekor/
  const images = [
    "/fonsterdekor/001.jpg",
    "/fonsterdekor/002.jpg",
    "/fonsterdekor/003.jpg",
    "/fonsterdekor/004.jpg",
    "/fonsterdekor/005.jpg",
    "/fonsterdekor/006.jpg",
    "/fonsterdekor/007.jpg",
    "/fonsterdekor/008.jpg",
    "/fonsterdekor/009.png",
    "/fonsterdekor/0010.png",
    "/fonsterdekor/0011.png",
    "/fonsterdekor/0012.png",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* Bakgrundseffekt */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300/90 ring-1 ring-white/10">
            Galleri · Fönsterdekor
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Fönsterdekor som fångar ögat
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-sm md:text-base">
            Vi designar och monterar fönsterdekor som skapar intryck både ute
            och inne – allt från frostad dekor till stora profiltryck.
          </p>
        </div>

        {/* Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Fönsterdekor ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                  Fönsterdekor #{index + 1}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / Förstoring */}
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
                alt="Förstorad fönsterdekor"
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
