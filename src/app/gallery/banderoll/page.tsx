"use client";

import { useState } from "react";
import Image from "next/image";

export default function BanderollPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Om dina filer heter annorlunda, uppdatera listan nedan
  const images = [
    "/banderoll/banderoll-1.jpg",
    "/banderoll/banderoll-2.jpg",
    "/banderoll/banderoll-3.jpg",
    "/banderoll/banderoll-4.jpg",
    "/banderoll/banderoll-5.jpg",
    "/banderoll/banderoll-6.jpg",
    "/banderoll/banderoll-7.jpg",
    "/banderoll/banderoll-8.jpg",
    "/banderoll/banderoll-9.jpg",
    "/banderoll/banderoll-10.jpg",
    "/banderoll/banderoll-11.jpg",
    "/banderoll/banderoll-12.jpg",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Banderoller
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-400">
            Några av våra banderoll-projekt – designade för att synas och
            hålla hög kvalitet, både inne och ute.
          </p>
        </div>

        {/* Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
            >
              <div className="relative aspect-4/5">
                <Image
                  src={src}
                  alt={`Banderoll ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  Banderoll {index + 1}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / fullscreen-bild */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-2000 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()} // så att inte klick på bilden stänger
          >
            {/* Stäng-knapp */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white shadow-lg shadow-black/40 backdrop-blur hover:bg-white/20"
            >
              Stäng ✕
            </button>

            <div className="relative aspect-16/10 md:aspect-video lg:aspect-3/2 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src={selectedImage}
                alt="Förstorad banderoll"
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
