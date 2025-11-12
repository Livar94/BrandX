"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lås body-scroll när mobilmenyn är öppen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Stäng meny vid resize upp till desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isGalleryActive = pathname?.startsWith("/gallery");
  const isHome = pathname === "/";
  const isServices = pathname?.startsWith("/services");
  const isContact = pathname?.startsWith("/contact");

  const baseItemClasses = `
    group relative block rounded-lg px-5 py-3 text-lg font-semibold no-underline
    transition-all duration-300 ease-out
    md:px-6 md:py-3 md:text-xl
  `;

  return (
    <header className="relative inset-x-0 top-0 py-4">
      <div className="mx-auto flex h-full max-w-[1300px] items-center justify-between gap-6 px-[clamp(12px,2.4vw,24px)]">
        {/* Logo – större */}
        <Link href="/" aria-label="Brand-X – hem" className="inline-flex h-full items-center pl-1">
          <Image
            src="/brandx-logo.png"
            alt="Brand-X"
            width={260}
            height={260}
            priority
            className="h-20 w-auto drop-shadow md:h-24 lg:h-40"
          />
        </Link>

        {/* Hamburger (mobil) */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="inline-flex h-[46px] w-[46px] flex-col items-center justify-center gap-1.5 rounded-lg bg-transparent md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-black transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-black transition-opacity duration-150 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-black transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Navigation */}
        <nav className="relative" aria-label="Huvudmeny">
          <ul
            id="primary-navigation"
            className={`
              fixed inset-0 flex flex-col items-center justify-center gap-4
              bg-white
              transition-all duration-200 ease-out
              ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }
              md:static md:flex md:flex-row md:items-center md:gap-2 md:bg-transparent md:opacity-100 md:pointer-events-auto
            `}
          >
            {/* Hem */}
            <li>
              <Link
                href="/"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`${baseItemClasses} ${
                  isHome
                    ? "bg-[#f97316] text-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                    : "text-black hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                }`}
              >
                Hem
              </Link>
            </li>

            {/* Tjänster */}
            <li>
              <Link
                href="/services"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`${baseItemClasses} ${
                  isServices
                    ? "bg-[#f97316] text-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                    : "text-black hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                }`}
              >
                Tjänster
              </Link>
            </li>

            {/* Galleri */}
            <li>
              <Link
                href="/gallery"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`${baseItemClasses} ${
                  isGalleryActive
                    ? "bg-[#f97316] text-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                    : "text-black hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                }`}
              >
                Galleri
              </Link>
            </li>

            {/* Kontakt */}
            <li>
              <Link
                href="/contact"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`${baseItemClasses} ${
                  isContact
                    ? "bg-[#f97316] text-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                    : "text-black hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                }`}
              >
                Kontakta Oss
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
