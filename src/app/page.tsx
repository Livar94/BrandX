// src/app/page.tsx
"use client";

import LiquidEther from "../components/LiquidEther"; 
import dynamic from "next/dynamic";
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Ballpit from "../components/Ballpit";
import Link from "next/link";





export default function Home() {

  const TextTypeClient = dynamic(() => import("../components/TextType"), {
  ssr: false,
});

  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeLeft  = { hidden: { opacity: 0, x: prefersReduced ? 0 : -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeUp    = { hidden: { opacity: 0, y: prefersReduced ? 0 : -40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: prefersReduced ? 0 :  40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };


  const addressText = "Gråsparvsvägen 26B\n724 70 Västerås";
  const addressQuery = encodeURIComponent("Gråsparvsvägen 26B, 724 70 Västerås");
  const mapsEmbedSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;


  const items = [
  {
    image: "/mix/01.JPG",
    title: "Case 01",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg,#f97316,#000)",
  },
  {
    image: "/mix/02.JPG",
    title: "Case 02",
    subtitle: "BrandX Produktion",
    handle: "@brandx",
    borderColor: "#fb7185",
    gradient: "linear-gradient(145deg,#fb7185,#000)",
  },
  {
    image: "/mix/03.JPG",
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
    image: "/mix/05.JPG",
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
<section className="relative w-full h-screen overflow-hidden bg-[#060010]">
  {/* --- Bakgrundseffekt --- */}
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

  {/* --- Innehåll ovanpå --- */}
  <div
    id="home"
    suppressHydrationWarning
    className="z-10 flex min-h-[1000px] w-full items-center justify-center px-6 py-20"
  >
    {/* Flex-layout: vänster (TextType) + höger (beskrivning) */}
    <div className="flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
      {/* Vänster: Texttypning */}
      <div className="flex-1 flex items-center justify-center md:justify-start">
        <h1
          className="
            font-bold leading-tight tracking-tight
            text-transparent bg-clip-text
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            max-w-[20ch] text-center md:text-left
          "
        >
          <TextTypeClient
            className="
              inline-block align-top 
              [text-shadow:0_2px_18px_rgba(255,255,255,0.15)]
            "
            text={[
              'Välkommen till BrandX',
              'där idéer blir upplevelser och detaljer gör skillnad',
              'Grafisk design, Trycktjänster, Grafisk installation',
            ]}
            typingSpeed={150}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            textColors={['white', 'white', 'white']}
          />
        </h1>
      </div>

      {/* Höger: Företagsbeskrivning */}
      <div className="flex-1 mx-auto max-w-xl text-center md:text-left text-white">
        {/* Bakgrundsglow för stil */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-orange-500/10 via-white/5 to-transparent blur-3xl" />

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
          Kreativitet som syns – <span className="text-orange-400">BrandX</span>
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-neutral-200">
          På <span className="font-semibold text-white">BrandX</span> förenar vi design, innovation och precision
          för att skapa visuella uttryck som väcker uppmärksamhet och bygger förtroende.
          Från grafisk design och tryck till montering och helhetslösningar – vi hjälper företag att synas med stil
          och kommunicera sitt varumärke på ett modernt och minnesvärt sätt.
        </p>

        <p className="mt-6 text-sm md:text-base text-neutral-300 leading-relaxed">
          Vi tror på kraften i detaljer och på att varje projekt berättar en historia.
          Vårt mål är att kombinera estetik med funktionalitet – där varje färg, form och yta bidrar till helheten.
          Oavsett om det handlar om en fasadskylt, fordonsdekor eller en helt ny visuell profil,
          levererar vi resultat som sticker ut och håller över tid.
        </p>

        <div className="mt-8 inline-flex items-center justify-center md:justify-start gap-3">
          <span className="h-1 w-10 rounded-full bg-linear-to-r from-orange-400 to-pink-500" />
          <span className="uppercase text-xs md:text-sm tracking-[0.2em] text-neutral-400">
            Design · Tryck · Montering
          </span>
          <span className="h-1 w-10 rounded-full bg-linear-to-r from-pink-500 to-orange-400" />
        </div>
      </div>
    </div>
  </div>
</section>

    <section
      id="services"
      className="relative isolate mx-auto my-[clamp(24px,6vw,48px)] h-[90vh] max-w-[1100px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-[clamp(12px,2vw,20px)] py-10 shadow-2xl shadow-black/40"
    >
      {/* Subtil bakgrundsglow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#5227FF]/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#F01E9C]/20 blur-3xl" />
      </div>

      <div className="mb-6 text-center">
        <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#B19EEF] ring-1 ring-white/10">
          Vad vi kan hjälpa dig med
        </span>
        <h1 className="mt-4 font-extrabold leading-tight text-[clamp(2rem,4.2vw,2.7rem)] tracking-tight">
          <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent drop-shadow">
            Tjänster
          </span>
        </h1>
      </div>

      <ScrollStack
        useWindowScroll={false}
        itemDistance={0}
        itemStackDistance={24}
        baseScale={0.9}
        itemScale={0.04}
        stackPosition="25%"
        scaleEndPosition="10%"
        className="h-full px-1 sm:px-3"
      >
        {/* 1 – Trycktjänster */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#5227FF_0%,#3b1ee8_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            Print & profil
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            Trycktjänster
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Visitkort, foldrar, affischer, banderoller och fordonsdekor – vi hjälper dig
            att välja rätt material, format och finish så att ditt budskap håller både
            visuellt och kvalitetsmässigt, oavsett om det sitter inomhus eller utomhus.
          </p>
        </ScrollStackItem>

        {/* 2 – Grafisk installation */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#F01E9C_0%,#a90de2_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            På plats
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            Grafisk installation
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Vi monterar skyltar, fönsterdekor, vägggrafik och fordonsdekor på plats.
            Noggrant, säkert och med känsla för helheten – från en logga på dörren till
            kompletta butiksmiljöer och fasadlösningar.
          </p>
        </ScrollStackItem>

        {/* 3 – Grafisk design */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#5227FF_0%,#3b1ee8_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            Identitet & koncept
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            Grafisk design
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Logotyper, grafiska riktlinjer, kampanjmaterial och visuella koncept. Vi
            skapar en röd tråd i allt ditt material så att ditt varumärke känns tydligt,
            modernt och konsekvent – oavsett kanal.
          </p>
        </ScrollStackItem>

        {/* 4 – Webbplatser & e-handel */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#F01E9C_0%,#a90de2_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            Digital närvaro
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            Webbplatser & e-handel
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Vi bygger snabba, responsiva och varumärkesanpassade hemsidor och
            e-handelslösningar. Från enklare landningssidor till kompletta webbutiker med
            produktkatalog, checkout och integrationer.
          </p>
        </ScrollStackItem>

        {/* 5 – App- & systemutveckling */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#5227FF_0%,#3b1ee8_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            Mjukvara
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            App- & systemutveckling
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Skräddarsydda appar och system som förenklar din vardag. Vi hjälper dig att
            digitalisera processer, bygga interna verktyg och skapa kundnära lösningar
            som fungerar på både mobil, surfplatta och dator.
          </p>
        </ScrollStackItem>

        {/* 6 – Digitala lösningar & integrationer */}
        <ScrollStackItem className="relative rounded-2xl border border-white/15 p-8 md:p-10 text-white shadow-xl shadow-black/40 backdrop-blur-sm [background:linear-gradient(135deg,#F01E9C_0%,#a90de2_100%)]">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            Integration & automation
          </span>
          <h2 className="mt-4 mb-3 text-2xl md:text-[1.6rem] font-semibold tracking-tight">
            Digitala lösningar & integrationer
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            API-kopplingar, automationer och integrationer mellan dina befintliga system.
            Vi knyter ihop verktyg, plattformar och data så att allt jobbar tillsammans –
            och du slipper dubbelarbete och manuella rutiner.
          </p>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-medium text-white shadow hover:bg-white/25 transition"
            >
              Utforska digitala lösningar
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>

    


 <section className="relative bg-[#060010] py-24">
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
       




      <section className="relative isolate overflow-hidden bg-neutral-950 py-24 sm:py-28">
      {/* Subtil gradientbakgrund */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#5227FF]/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#FF9FFC]/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Glas/blur-kort */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
          {/* Accent-linje */}
          <span className="inline-block h-1 w-16 rounded-full bg-linear-to-r from-[#5227FF] to-[#B19EEF]" />
          <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
              Brand-X är experter på branding i grafisk design & trycktjänster
            </span>
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Brand-X refererar vanligtvis till ett hypotetiskt eller generiskt varumärke som används i
            diskussioner om marknadsföring och varumärkesbyggande. I samband med grafisk design och
            trycktjänster kan det representera ett företags identitet, marknadsföringsstrategier eller
            designmetoder utan att specificera en viss verksamhet. I praktisk mening, om du frågar om ett
            företag som heter Brand-X som erbjuder grafisk design och utskriftstjänster, skulle det
            sannolikt tillhandahålla tjänster som.
          </p>

          {/* CTA-rad (valfritt) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 hover:shadow-lg hover:shadow-white/10"
            >
              Kontakta oss
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
            >
              Våra tjänster →
            </a>
          </div>
        </div>
      </div>
    </section>
         <section className="relative overflow-hidden bg-linear-to-b from-white to-neutral-50 min-h-[500px] max-h-[1000px] h-screen w-full">
          {/* Ballpit-lager */}
          <div className="absolute inset-0">
            <Ballpit
              count={200}
              gravity={0.7}
              friction={0.8}
              wallBounce={0.95}
              followCursor={true}
              colors={["#f97316", "#bcbdbf", "#000000", "#ffffff"]}
            />
          </div>

          {/* Mjuk vignette för djup */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_60%,rgba(0,0,0,0.08)_100%)]" />

          {/* Text-overlay (valfritt) */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
                Kreativitet i rörelse
              </h2>
              <p className="mt-2 text-neutral-600 text-lg">
                Design, tryck och montering med stil – hos Brand-X.
              </p>
            </div>
          </div>
        </section>

           <section className="relative bg-neutral-950 py-24">
              {/* Subtil bakgrundsglow */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-32 left-[-10%] h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-[#5227FF]/20 blur-3xl" />
              </div>

              <div className="mx-auto max-w-7xl px-6">
                {/* Titel + intro */}
                <div className="text-center mb-16">
                  <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.18em] text-orange-300 ring-1 ring-white/10">
                    Våra samarbeten
                  </span>

                  <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                    Våra kunder pratar om oss
                  </h2>

                  <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-neutral-300 leading-relaxed">
                    Vi har haft förmånen att skapa grafiska lösningar, logotyper och visuella uttryck
                    åt en rad olika varumärken. Här är ett urval av logotyper vi fått arbeta med.
                  </p>
                </div>

                {/* Logovägg */}
                <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {Array.from({ length: 17 }, (_, i) => `/logos/art${i + 1}.png`).map((src, index) => (
                    <div
                      key={src}
                      className="
                        group relative flex items-center justify-center
                        rounded-2xl border border-white/10 bg-white/80
                        p-6 sm:p-8
                        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                        backdrop-blur-sm
                        transition
                        hover:-translate-y-1 hover:border-orange-300/60 hover:bg-white/10
                      "
                    >
                      {/* highlight-ring */}
                      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
                        <Image
                          src={src}
                          alt={`Kundlogotyp ${index + 1}`}
                          fill
                          className="object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 140px"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* liten text under */}
                <p className="mt-12 text-center text-sm md:text-base text-neutral-400">
                  Vill du bli en av dem? &nbsp;
                  <a
                    href="/contact"
                    className="text-orange-300 hover:text-orange-200 underline-offset-2 hover:underline transition"
                  >
                    Hör av dig så pratar vi vidare.
                  </a>
                </p>
              </div>
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
                className="inline-flex items-center justify-center rounded-xl border border-orange-300/60 bg-gradient-to-r from-[#f97316] to-orange-400 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50"
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
