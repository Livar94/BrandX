"use client";

import { useState } from "react";
import Image from "next/image";

export default function SkyltarPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 🔸 Uppdatera dessa om dina filer heter något annat
  const images = [
    "/skyltar/01.jpg",
    "/skyltar/02.jpg",
    "/skyltar/03.jpg",
    "/skyltar/04.jpg",
    "/skyltar/05.jpg",
    "/skyltar/06.jpg",
    "/skyltar/07.jpg",
    "/skyltar/08.jpg",
    "/skyltar/09.jpg",
    "/skyltar/010.jpg",
    "/skyltar/011.jpg",
    "/skyltar/012.jpg",
    "/skyltar/013.jpg",
    "/skyltar/014.jpg",
    "/skyltar/015.jpg",
    "/skyltar/016.jpg",
    "/skyltar/017.jpg",
    "/skyltar/018.jpg",
    "/skyltar/019.png",
    "/skyltar/020.png",
    "/skyltar/021.png",
    "/skyltar/022.png",
    "/skyltar/023.png",
    "/skyltar/024.png",
    "/skyltar/025.png",
    "/skyltar/026.png",
    "/skyltar/027.png",
    "/skyltar/028.png",
    "/skyltar/029.png",
    "/skyltar/030.png",
    "/skyltar/031.png",
    "/skyltar/032.png",
    "/skyltar/033.jpg",
    "/skyltar/034.jpg",
    "/skyltar/035.jpg",
    "/skyltar/036.jpg",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* Bakgrundsglow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-200/90 ring-1 ring-white/10">
            Galleri · Skyltar
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Skyltar som guidar, informerar och säljer
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-sm md:text-base">
            Fasadsignaler, invändiga skyltar, hänvisningar och profilskyltar – här ser
            du exempel på hur vi hjälper företag att synas i sin miljö.
          </p>
        </div>

        {/* Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Skylt ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                  Skylt #{index + 1}
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
                alt="Förstorad skylt"
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
