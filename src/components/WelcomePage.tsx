"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WelcomePage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-white overflow-hidden pt-24">
      <motion.div
        className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 lg:gap-20"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* ---- VÄNSTER SIDA: TEXT ---- */}
        <div className="max-w-xl space-y-8">
          <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl lg:text-7xl leading-tight">
            <CubeTransparentIcon className="mr-3 inline-block h-[0.9em] w-[0.9em] text-[#f97316] align-[-0.15em]" />
            Välkommen till <span className="text-[#f97316]">BrandX</span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
            BrandX hjälper företag att sticka ut med modern design, tryck och exponering.  
            Vi levererar allt från fordondekor till banderoller, kläder och skyltar — med hög kvalitet
            och personlig service.
          </p>

          <a
            href="/gallery"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]"
          >
            Upptäck vår designvärld
          </a>
        </div>

        {/* ---- HÖGER SIDA: BILDER ---- */}
        <div className="relative grid grid-cols-2 items-center justify-center gap-6">
          <Image
            src="/wel02.png"
            alt="Dekorbild ett"
            width={400}
            height={400}
            className="w-[70%] justify-self-end self-end rounded-xl"
            priority
          />
          <Image
            src="/wel01.png"
            alt="Dekorbild två"
            width={650}
            height={650}
            className="w-full rounded-xl shadow-2xl"
            priority
          />
          <Image
            src="/wel04.png"
            alt="Dekorbild tre"
            width={650}
            height={650}
            className="w-[120%] justify-self-end rounded-xl shadow-2xl"
          />
          <Image
            src="/wel03.png"
            alt="Dekorbild fyra"
            width={500}
            height={500}
            className="w-[80%] self-start rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
