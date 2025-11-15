// src/app/page.tsx
"use client";

import LiquidEther from "../components/LiquidEther"; 
// import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
// import Ballpit from "../components/Ballpit";
// import Link from "next/link";
import Roadmap from "../components/Roadmap";
import WelcomePage from "../components/WelcomePage"
import WhatIsBrandX from "../components/WhatIsBrandX"
import LogoWallSection from "../components/LogoWallSection"










export default function Home() {

//   const TextTypeClient = dynamic(() => import("../components/TextType"), {
//   ssr: false,
// });

    const prefersReduced = useReducedMotion();

  // gemensam easing-kurva (mjuk ease-out)
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };



  const addressText = "Gråsparvsvägen 26B\n724 70 Västerås";
  const addressQuery = encodeURIComponent("Gråsparvsvägen 26B, 724 70 Västerås");
  const mapsEmbedSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;


  const items = [
  {
    image: "/mix/01.jpg",
    title: "Case 01",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg,#f97316,#000)",
  },
  {
    image: "/mix/02.jpg",
    title: "Case 02",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#fb7185",
    gradient: "linear-gradient(145deg,#fb7185,#000)",
  },
  {
    image: "/mix/03.jpg",
    title: "Case 03",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg,#22c55e,#000)",
  },
  {
    image: "/mix/04.jpg", // viktigt med stora bokstäver om filen heter så
    title: "Case 04",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(145deg,#38bdf8,#000)",
  },
  {
    image: "/mix/05.jpg",
    title: "Case 05",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#a855f7",
    gradient: "linear-gradient(145deg,#a855f7,#000)",
  },
  {
    image: "/mix/06.jpg",
    title: "Case 06",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#eab308",
    gradient: "linear-gradient(145deg,#eab308,#000)",
  },
  {
    image: "/mix/07.jpg",
    title: "Case 07",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#ec4899",
    gradient: "linear-gradient(145deg,#ec4899,#000)",
  },
  {
    image: "/mix/08.png",
    title: "Case 08",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(145deg,#22d3ee,#000)",
  },
  {
    image: "/mix/09.jpg",
    title: "Case 09",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#4ade80",
    gradient: "linear-gradient(145deg,#4ade80,#000)",
  },
  {
    image: "/mix/010.jpg",
    title: "Case 10",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#facc15",
    gradient: "linear-gradient(145deg,#facc15,#000)",
  }
];


  return (
    <>

     <section>
        <WelcomePage />
     </section>
 
 <section className="relative bg-[#060010] py-24">
    <div className="absolute inset-0 z-0">
    <LiquidEther
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      mouseForce={30}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
  </div>
      {/* subtil bakgrundsglow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* rubrik om du vill ha den */}
        <div className="mb-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Utvalda arbeten
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-300">
            Ett mixat galleri av projekt och kreativa lösningar från BrandX.
          </p>
        </div>

        {/* GRID – 4 per rad på desktop */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <a
              key={item.image}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundImage: item.gradient,
                borderColor: item.borderColor,
              }}
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width:1024px) 220px,(min-width:768px) 200px, 160px"
                />
              </div>

              <div className="relative px-3 pb-4 pt-3 bg-black/40 backdrop-blur-sm">
                <p className="text-xs font-medium text-orange-300">
                  {item.subtitle}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300">{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>


    <section className="relative py-24 bg-linear-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
  {/* Dekorativ bakgrundsglow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl" />
    <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl" />
  </div>

  {/* Innehållsgrid */}
  <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Text till vänster */}
    <div className="text-center md:text-left text-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
        Kreativitet som syns – <span className="text-orange-500">BrandX</span>
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        På <span className="font-semibold text-black">BrandX</span> förenar vi design, innovation och precision för att
        skapa visuella uttryck som väcker uppmärksamhet och bygger förtroende. Från grafisk design och tryck till
        montering och helhetslösningar – vi hjälper företag att synas med stil och kommunicera sitt varumärke på ett
        modernt och minnesvärt sätt.
      </p>

      <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
        Vi tror på kraften i detaljer och på att varje projekt berättar en historia. Vårt mål är att kombinera estetik
        med funktionalitet – där varje färg, form och yta bidrar till helheten. Oavsett om det handlar om en fasadskylt,
        fordonsdekor eller en helt ny visuell profil, levererar vi resultat som sticker ut och håller över tid.
      </p>

      <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
        <span className="h-1 w-10 rounded-full bg-linear-to-r from-orange-400 to-pink-500" />
        <span className="uppercase text-xs md:text-sm tracking-[0.25em] text-gray-500 font-medium">
          Design · Tryck · Montering
        </span>
        <span className="h-1 w-10 rounded-full bg-linear-to-r from-pink-500 to-orange-400" />
      </div>
    </div>

    {/* Bild till höger */}
    <div className="flex justify-center md:justify-end">
      <Image
        src="/girl01.png"
        alt="BrandX logotypmontering"
        width={500}
        height={500}
        className="rounded-2xl  max-w-full md:max-w-[90%] lg:max-w-[80%]"
        priority
      />
    </div>
  </div>
</section>


  

    <section>
      <Roadmap />
    </section>


    <section>
      <WhatIsBrandX />
    </section>

    <section>
      <LogoWallSection />
    </section>

    









    <section className="relative bg-white py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#f97316]/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-[#f97316]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight text-neutral-900">Vårt team</h2>
        <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-linear-to-r from-[#f97316] via-orange-400 to-[#f97316]" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          <motion.figure variants={fadeLeft} className="group text-center">
            <div className="mx-auto relative size-44 md:size-56 overflow-hidden rounded-full shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
              <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,.4)]" />
              <span className="pointer-events-none absolute -inset-px rounded-full bg-[conic-gradient(from_160deg_at_50%_50%,#f97316_0deg,transparent_220deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-30 mix-blend-overlay" />
              <Image src="/brandx-logo.png" alt="Alex – Art Director" fill sizes="(min-width: 768px) 18rem, 11rem" className="object-cover" priority />
            </div>
            <figcaption className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900">Alex</h3>
              <p className="text-sm text-neutral-600">Art Director</p>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeUp} className="group text-center">
            <div className="mx-auto relative size-44 md:size-56 overflow-hidden rounded-full shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
              <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,.4)]" />
              <span className="pointer-events-none absolute -inset-px rounded-full bg-[conic-gradient(from_160deg_at_50%_50%,#f97316_0deg,transparent_220deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-30 mix-blend-overlay" />
              <Image src="/brandx-logo.png" alt="Sam – Designer" fill sizes="(min-width: 768px) 18rem, 11rem" className="object-cover" />
            </div>
            <figcaption className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900">Sam</h3>
              <p className="text-sm text-neutral-600">Designer</p>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeRight} className="group text-center">
            <div className="mx-auto relative size-44 md:size-56 overflow-hidden rounded-full shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
              <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,.4)]" />
              <span className="pointer-events-none absolute -inset-px rounded-full bg-[conic-gradient(from_160deg_at_50%_50%,#f97316_0deg,transparent_220deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-30 mix-blend-overlay" />
              <Image src="/brandx-logo.png" alt="Jamie – Utvecklare" fill sizes="(min-width: 768px) 18rem, 11rem" className="object-cover" />
            </div>
            <figcaption className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900">Jamie</h3>
              <p className="text-sm text-neutral-600">Utvecklare</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
    



    <section className="relative isolate overflow-hidden bg-white py-16">
      {/* Subtila bakgrundsglows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#f97316]/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Text/Adress-kort */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Hitta oss</h2>
          <div className="mt-4 rounded-2xl border border-black/5 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
            <p className="whitespace-pre-line text-[15px] leading-7 text-neutral-700">
              {addressText}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-orange-300/60 bg-linear-to-r from-[#f97316] to-orange-400 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50"
              >
                Öppna i Google Maps
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 ring-1 ring-inset ring-black/10 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40"
              >
                Vägbeskrivning
              </a>
            </div>
          </div>

          {/* Liten info-rad */}
          <p className="mt-3 text-sm text-neutral-500">
            Parkering finns i närheten. Ring oss om du behöver hjälp att hitta.
          </p>
        </div>

        {/* Karta */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-black/5 shadow-2xl ring-1 ring-black/5">
            {/* Dekorativ toppaccent */}
            <span className="pointer-events-none absolute left-4 top-4 inline-block h-1 w-16 rounded-full bg-linear-to-r from-[#f97316] to-orange-300" />
            <iframe
              title="Karta – Gråsparvsvägen 26B, 724 70 Västerås"
              aria-label="Google Maps över Brand-X adress"
              src={mapsEmbedSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>





    </>
  );
}
