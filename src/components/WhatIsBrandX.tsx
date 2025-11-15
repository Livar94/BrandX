"use client";

import Image from "next/image";
import Link from "next/link";
import { BeakerIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function WhatIsBrandX() {
  return (
    <section
      id="whatisbrandx"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        
        {/* Vänster: cirkulära, roterande bilder */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-80 w-80 sm:h-96 sm:w-96">
            {/* Bild 1 */}
            <div className="absolute left-0 top-0 h-40 w-40 -translate-x-4 -translate-y-4 sm:h-60 sm:w-60">
              <div className="relative h-full w-full overflow-hidden rounded-full animate-[spin_20s_linear_infinite]">
                <Image
                  src="/brandx-logo.png"
                  alt="BrandX produkt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bild 2 */}
            <div className="absolute inset-1 left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-60 sm:w-60">
              <div className="relative h-full w-full overflow-hidden rounded-full animate-[spin_24s_linear_infinite]">
                <Image
                  src="/brandx-logo.png"
                  alt="BrandX produkt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bild 3 */}
            <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-4 translate-y-4 sm:h-60 sm:w-60">
              <div className="relative h-full w-full overflow-hidden rounded-full animate-[spin_18s_linear_infinite]">
                <Image
                  src="/brandx-logo.png"
                  alt="BrandX produkt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Höger: text + ikoner + knapp */}
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
            Vad är BrandX?
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-base text-gray-800 md:text-lg">
            <div className="flex items-start gap-3">
              <Squares2X2Icon className="mt-1 h-9 w-9 text-[#f97316]" />
              <p>
                BrandX hjälper företag att sticka ut genom högkvalitativ design, tryck, fordonsdekor
                och visuell marknadsföring – allt anpassat efter din verksamhet.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <BeakerIcon className="mt-1 h-9 w-9 text-[#f97316]" />
              <p>
                Vi kombinerar kreativitet och modern teknik för att skapa lösningar som ökar
                synlighet, förstärker varumärkesidentitet och engagerar kunder.
              </p>
            </div>
          </div>

          <p className="mt-6 text-base font-medium text-gray-900 md:text-lg">
            Att välja BrandX innebär att ta del av en passionerad kreativ studio som brinner för
            kvalitet, innovation och långsiktiga samarbeten.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-linear-to-r from-[#f97316] to-[#fb923c] px-7 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_18px_rgba(249,115,22,0.6)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </section>
  );
}
