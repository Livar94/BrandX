"use client";

import { useState } from "react";
import Image from "next/image";

export default function BilPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/bildkor/20180224_084833.jpg",
    "/bildkor/20180224_084851.jpg",
    "/bildkor/20180224_084911.jpg",
    "/bildkor/20180328_134651.jpg",
    "/bildkor/20180328_134701.jpg",
    "/bildkor/20180412_085304.jpg",
    "/bildkor/20180412_085305.jpg",
    "/bildkor/20180412_085319.jpg",
    "/bildkor/20180412_085321.jpg",
    "/bildkor/20180412_085338.jpg",
    "/bildkor/20180412_085340.jpg",
    "/bildkor/20180414_114445.jpg",
    "/bildkor/20180414_114449.jpg",
    "/bildkor/20180414_114503.jpg",
    "/bildkor/20180414_114505.jpg",
    "/bildkor/20180414_114518.jpg",
    "/bildkor/20180414_114519.jpg",
    "/bildkor/20180414_114534.jpg",
    "/bildkor/20180414_114535.jpg",
    "/bildkor/20180414_114549.jpg",
    "/bildkor/20180414_114550.jpg",
    "/bildkor/20180414_114602.jpg",
    "/bildkor/20180414_114603.jpg",
    "/bildkor/20180529_192740.jpg",
    "/bildkor/20180529_192744.jpg",
    "/bildkor/20180529_192805.jpg",
    "/bildkor/20180529_192821.jpg",
    "/bildkor/20180529_192822.jpg",
    "/bildkor/20180529_192835.jpg",
    "/bildkor/20180529_192836.jpg",
    "/bildkor/20180529_192949.jpg",
    "/bildkor/20180529_193003.jpg",
    "/bildkor/20190513_142220.jpg",
    "/bildkor/20190513_142239.jpg",
    "/bildkor/20190527_101712.jpg",
    "/bildkor/IMG-20251021-WA0013.jpg",
    "/bildkor/IMG-20251021-WA0022.jpg",
    "/bildkor/IMG-20251021-WA0023.jpg",
    "/bildkor/IMG-20251021-WA0024.jpg",
    "/bildkor/media01.jpg",
    "/bildkor/media02.jpg",
    "/bildkor/media03.jpg",
    "/bildkor/p014.jpg",
    "/bildkor/p015.jpg",
    "/bildkor/p016.jpg",
    "/bildkor/p017.jpg",
    "/bildkor/photo-album-1_0004_Layer-21.png",
    "/bildkor/photo-album-1_0005_Layer-20.png",
    "/bildkor/photo-album-1_0008_Layer-17.png",
    "/bildkor/photo-album-1_0009_Layer-16.png",
    "/bildkor/photo-album-1_0010_Layer-15.png",
    "/bildkor/photo-album-1_0011_Layer-14.png",
    "/bildkor/photo-album-1_0012_Layer-13.png",
    "/bildkor/photo-album-1_0013_Layer-12.png",
    "/bildkor/photo-album-1_0014_Layer-11.png",
    "/bildkor/photo-album-1_0015_Layer-10.png",
    "/bildkor/photo-album-1_0016_Layer-8.png",
    "/bildkor/photo-album-1_0017_Layer-7.png",
    "/bildkor/photo-album-1_0018_Layer-6.png",
    "/bildkor/photo-album-1_0019_Layer-5.png",
    "/bildkor/photo-album-3_0003_Layer-69.png",
    "/bildkor/photo-album-3_0004_Layer-68.png",
    "/bildkor/photo-album-3_0012_Layer-60.png",
    "/bildkor/photo-album-3_0013_Layer-59.png",
    "/bildkor/photo-album-3_0020_Layer-52.png",
    "/bildkor/photo-album-3_0021_Layer-51.png",
    "/bildkor/photo-album-3_0025_Layer-47.png",
    "/bildkor/photo-album-3_0030_Layer-42.png",
    "/bildkor/photo-album-3_0031_Layer-41.png",
    "/bildkor/photo-album-3_0039_Layer-33.png",
    "/bildkor/photo-album-3_0040_Layer-32.png",
    "/bildkor/SM-J510FN351.JPG",
    "/bildkor/SM-J510FN352.JPG",
    "/bildkor/SM-J510FN353.JPG",
    "/bildkor/SM-J510FN355.JPG",
    "/bildkor/SM-J510FN1319.JPG",
    "/bildkor/SM-J510FN1321.JPG",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* Subtil bakgrundsglow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-orange-300/90 ring-1 ring-white/10">
            Galleri · Bil dekor
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Bil&nbsp;dekor som syns på vägarna
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-300 text-sm md:text-base">
            Foliering, logotyper och helfolierade bilar – vi tar fram
            lösningar som gör ditt varumärke tydligt på allt från servicebilar
            till lastbilar.
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
                  alt={`Bil dekor ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-200">
                  Bil dekor #{index + 1}
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
                alt="Förstorad bil dekor"
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
