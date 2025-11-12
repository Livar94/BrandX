"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

/** Bilder + metadata + LÄNKAR */
const items = [
  { src: "/mix/04.jpg",  title: "banderoll",     desc: "Storformat banderoll för event & kampanj.", href: "/gallery/banderoll" },
  { src: "/mix/08.png",  title: "bil-dekor",     desc: "Fordonsdekor – trailer/lastbil.",           href: "/gallery/bil-dekor" },
  { src: "/mix/05.jpg",  title: "dekal",         desc: "Dekaler/klistermärken & expo-dekor.",       href: "/gallery/dekal" },
  { src: "/mix/06.jpg",  title: "flagga",        desc: "Beachflaggor för entré & trottoar.",        href: "/gallery/flagga" },
  { src: "/mix/07.jpg",  title: "fonsterdekor",  desc: "Fönsterdekor med öppettider/frostat.",      href: "/gallery/fonsterdekor" },
  { src: "/mix/03.jpg",  title: "gatupratare",   desc: "Gatupratare / trottoar-exponering.",        href: "/gallery/gatupratare" },
  { src: "/mix/09.jpg",  title: "kladertryck",   desc: "Profilkläder – T-shirttryck.",              href: "/gallery/kladertryck" },
  { src: "/mix/010.jpg", title: "Menyer",        desc: "Flyers/menyer & printmaterial.",            href: "/gallery/Menyer" },      // OBS: versal M
  { src: "/mix/01.jpg",  title: "rollup",        desc: "Rollup med QR & öppettider.",               href: "/gallery/rollup" },
  { src: "/mix/02.jpg",  title: "skyltar",       desc: "Skyltar/väggdekor för lokal.",              href: "/gallery/skyltar" },
];

export default function FerrisWheelSection() {
  const [active, setActive] = useState(0);

  // storlekar (px)
  const size = 520;     // total diameter på hjulet
  const radius = 220;   // avstånd centrum -> bild
  const imgSize = 110;  // diameter på varje bild

  const positioned = useMemo(() => {
    const step = (2 * Math.PI) / items.length;
    return items.map((it, i) => {
      const angle = i * step - Math.PI / 2; // start högst upp
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { ...it, x, y };
    });
  }, [radius]);

  const current = items[active];

  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] bg-linear-to-r from-black via-zinc-900 to-black">
      {/* Vänster: Ferrishjul – lite vänster/uppåt så det hamnar bredvid texten */}
      <div className="mx-auto w-[min(90vw,520px)] md:ml-auto md:mr-0 md:-translate-x-14 md:-translate-y-10">
        {/* Isolerad behållare (absolut innehåll trycker inte layouten) */}
        <div className="relative mx-auto overflow-visible" style={{ width: size, height: size }}>
          {/* Snurrande lager */}
          <motion.div
            className="absolute inset-0 will-change-transform"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Absolut positionering för varje bild */}
            <div className="relative w-full h-full">
              {positioned.map((it, i) => (
                <div
                  key={it.src}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: size / 2 + it.x, top: size / 2 + it.y }}
                >
                  <Link
                    href={it.href}
                    prefetch
                    aria-label={`Öppna: ${it.title}`}
                    className={`block rounded-full transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b8cff]/60 ${
                      active === i ? "shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" : ""
                    }`}
                    onMouseEnter={() => setActive(i)}
                  >
                    <div
                      className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                      style={{ width: imgSize, height: imgSize }}
                      title={it.title}
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
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dekorativ ring */}
          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
        </div>
      </div>

      {/* Höger: Textpanel */}
      <aside className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-950/90 p-6 text-[#e9edf4]/95 shadow-lg backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Galleri</h2>
        <p className="mt-2 text-sm text-white/60">
          Bilderna roterar som ett pariserhjul. Hovra eller klicka på en bild för att se detaljer – klick tar dig till respektive sida.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-zinc-900 p-5">
          <h3 className="text-xl font-medium text-white">{current.title}</h3>
          <p className="mt-2 text-white/80">{current.desc}</p>
          {/* Direktlänk till aktiv post */}
          <Link
            href={current.href}
            prefetch
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
          >
            Öppna sida →
          </Link>
        </div>

        {/* Snabblista – länkar istället för knappar */}
        <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/70 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.src}>
              <Link
                href={it.href}
                prefetch
                onMouseEnter={() => setActive(i)}
                className={`block rounded-lg px-2 py-1 transition hover:bg-white/10 ${
                  active === i ? "bg-white/10 text-white" : ""
                }`}
              >
                {it.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
