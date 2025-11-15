"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const items = [
  { src: "/mix/04.jpg",  title: "banderoll",     desc: "Storformat banderoll för event & kampanj.", href: "/gallery/banderoll" },
  { src: "/mix/08.png",  title: "bil-dekor",     desc: "Fordonsdekor – trailer/lastbil.",           href: "/gallery/bil-dekor" },
  { src: "/mix/05.jpg",  title: "dekal",         desc: "Dekaler/klistermärken & expo-dekor.",       href: "/gallery/dekal" },
  { src: "/mix/06.jpg",  title: "flagga",        desc: "Beachflaggor för entré & trottoar.",        href: "/gallery/flagga" },
  { src: "/mix/07.jpg",  title: "fonsterdekor",  desc: "Fönsterdekor med öppettider/frostat.",      href: "/gallery/fonsterdekor" },
  { src: "/mix/03.jpg",  title: "gatupratare",   desc: "Gatupratare / trottoar-exponering.",        href: "/gallery/gatupratare" },
  { src: "/mix/09.jpg",  title: "kladertryck",   desc: "Profilkläder – T-shirttryck.",              href: "/gallery/kladertryck" },
  { src: "/mix/010.jpg", title: "Menyer",        desc: "Flyers/menyer & printmaterial.",            href: "/gallery/Menyer" },
  { src: "/mix/01.jpg",  title: "rollup",        desc: "Rollup med QR & öppettider.",               href: "/gallery/rollup" },
  { src: "/mix/02.jpg",  title: "skyltar",       desc: "Skyltar/väggdekor för lokal.",              href: "/gallery/skyltar" },
];

/* ---------------------------------------------------------
   PAGE
--------------------------------------------------------- */
export default function GalleriPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0d12] text-white">
      {/* Bakgrund täcker HELA sidan */}
      <BackgroundFX />

      <main className="relative z-10 w-full">
        {/* Hero + Ferrishjul */}
        <section className="relative flex w-full justify-center px-6 pt-24 md:pt-28">
          <div className="w-full max-w-7xl">
            <header className="mb-12 md:mb-16">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                <span className="bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Vårt Galleri
                </span>
              </h1>
              <p className="mt-3 max-w-3xl text-white/70 md:text-lg">
                Utforska våra senaste projekt — från fordonsdekor och banderoller till skyltar,
                flaggor och mer.
              </p>
            </header>

            <FerrisWheelSection />
          </div>
        </section>

        {/* Kategori-grid */}
        <section className="relative flex w-full justify-center px-6 pb-16 pt-10">
          <div className="w-full max-w-7xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">
              Kategorier
            </h2>
            <p className="mt-2 text-white/60">
              Klicka för att se fler exempel i respektive kategori.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  prefetch
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/0 via-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-white/10">
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold capitalize">{it.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-white/70">{it.desc}</p>
                    </div>
                    <span className="rounded-lg bg-white/10 px-2 py-1 text-xs text-white/90">
                      Visa
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-[#f97316]/60" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA-band */}
        <section className="relative mb-24 flex w-full justify-center px-6">
          <div className="w-full max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-[#f97316] to-[#fb923c] p-8 shadow-2xl">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold md:text-3xl">Redo att ta nästa steg?</h3>
                <p className="mt-2 text-white/90">
                  Kontakta oss så tar vi fram ett förslag anpassat för dina behov — snabbt, snyggt
                  och effektivt.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl bg-white/15 px-5 py-3 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25"
                  >
                    Kontakta oss
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-xl bg-black/20 px-5 py-3 font-semibold text-white ring-1 ring-black/20 backdrop-blur transition hover:bg-black/30"
                  >
                    Våra tjänster
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   FerrisWheelSection – karusell med paus på hover
--------------------------------------------------------- */
function FerrisWheelSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const size = 560;
  const radius = 235;
  const imgSize = 120;

  const positioned = useMemo(() => {
    const step = (2 * Math.PI) / items.length;
    return items.map((it, i) => {
      const angle = i * step - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { ...it, x, y };
    });
  }, [radius]);

  const current = items[active];

  return (
    <div className="relative grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
      {/* Vänster: Ferrishjul */}
      <div className="mx-auto w-[min(92vw,560px)] md:ml-auto md:mr-0 md:-translate-x-10 md:-translate-y-8">
        <div className="relative mx-auto" style={{ width: size, height: size }}>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.18),rgba(0,0,0,0))]" />

          <motion.div
            className="absolute inset-0 will-change-transform"
            animate={{ rotate: isPaused ? 0 : 360 }}
            transition={{
              repeat: isPaused ? 0 : Infinity,
              duration: 28,
              ease: "linear",
            }}
          >
            <div className="relative h-full w-full">
              {positioned.map((it, i) => (
                <div
                  key={it.src}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: size / 2 + it.x, top: size / 2 + it.y }}
                >
                  <motion.div
                    animate={{ rotate: isPaused ? 0 : -360 }}
                    transition={{
                      repeat: isPaused ? 0 : Infinity,
                      duration: 28,
                      ease: "linear",
                    }}
                    onMouseEnter={() => {
                      setActive(i);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <Link
                      href={it.href}
                      prefetch
                      aria-label={`Öppna: ${it.title}`}
                      className={`block rounded-full transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/60 ${
                        active === i ? "shadow-[0_0_0_5px_rgba(255,255,255,0.08)]" : ""
                      }`}
                    >
                      <div
                        className="relative overflow-hidden rounded-full border border-white/10 bg-black/30 shadow-2xl ring-1 ring-white/10 backdrop-blur"
                        style={{ width: imgSize, height: imgSize }}
                      >
                        <Image
                          src={it.src}
                          alt={it.title}
                          fill
                          sizes={`${imgSize}px`}
                          className="object-cover"
                          priority={i < 4}
                        />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/15 shadow-[0_0_60px_rgba(249,115,22,0.25)]" />
        </div>
      </div>

      {/* Höger: Info-panel */}
      <aside className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent [background:linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))_padding-box,linear-gradient(135deg,rgba(255,255,255,0.5),rgba(249,115,22,0.5))_border-box] [border:1px_solid_transparent]" />
        <h2 className="text-3xl font-semibold tracking-tight">Galleri</h2>
        <p className="mt-2 text-white/70">
          Bilderna roterar som ett pariserhjul. Hovra eller klicka för att pausa och se detaljer –
          klick tar dig till respektive sida.
        </p>

        <div className="mt-6 grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border:white/10 bg-white/10 p-4 shadow-inner">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image src={current.src} alt={current.title} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-medium capitalize">{current.title}</h3>
            <p className="mt-1 text-white/75">{current.desc}</p>
            <Link
              href={current.href}
              prefetch
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f97316] to-[#fb923c] px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              Öppna sida →
            </Link>
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/80 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.src}>
              <Link
                href={it.href}
                prefetch
                className={`block rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                  active === i ? "bg-white/10 text:white" : ""
                }`}
                onMouseEnter={() => {
                  setActive(i);
                  setIsPaused(true);
                }}
                onMouseLeave={() => setIsPaused(false)}
              >
                {it.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

/* ---------------------------------------------------------
   Bakgrund – fullbredds
--------------------------------------------------------- */
function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none fixed -left-40 top-0 h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.25),rgba(0,0,0,0)_60%)] blur-2xl" />
      <div className="pointer-events-none fixed -right-24 top-24 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),rgba(0,0,0,0)_60%)] blur-3xl" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><g fill=%22%23ffffff%22 opacity=%220.4%22><circle cx=%222%22 cy=%222%22 r=%220.6%22/><circle cx=%2220%22 cy=%2212%22 r=%220.4%22/><circle cx=%229%22 cy=%2231%22 r=%220.5%22/><circle cx=%2232%22 cy=%2227%22 r=%220.6%22/></g></svg>')]" />
    </>
  );
}
