"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false); // bara för mobil
  const pathname = usePathname();

  // Lås body-scroll när mobilmenyn är öppen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Stäng menyer vid resize upp till desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setGalleryOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const galleryItems = [
    { href: "/gallery/banderoll", label: "Banderoll" },
    { href: "/gallery/bil-dekor", label: "Bil-dekor" },
    { href: "/gallery/dekal", label: "Dekal" },
    { href: "/gallery/flagga", label: "Flagga" },
    { href: "/gallery/fonsterdekor", label: "Fönsterdekor" },
    { href: "/gallery/gatupratare", label: "Gatupratare" },
    { href: "/gallery/kladertryck", label: "Kladertryck" },
    { href: "/gallery/logos", label: "Logos" },
    { href: "/gallery/Menyer", label: "Menyer" },
    { href: "/gallery/rollup", label: "Roll-up" },
    { href: "/gallery/skyltar", label: "Skyltar" },
  ];

  const isGalleryActive = pathname?.startsWith("/gallery");
  const isHome = pathname === "/";
  const isKundcase = pathname?.startsWith("/kundcase");
  const isServices = pathname?.startsWith("/services");
  const isContact = pathname?.startsWith("/contact");

  const baseItemClasses = `
    group relative block rounded-xl px-3 py-3 font-medium no-underline
    md:px-3 md:py-2
    outline-none transition
    focus-visible:ring-2 focus-visible:ring-[#5b8cff]/40
  `;

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[1000] h-28
        border-b border-white/10
        bg-[rgba(9,11,17,0.55)] backdrop-blur-md
        supports-[backdrop-filter]:bg-[rgba(9,11,17,0.35)]
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
        after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px
        after:bg-gradient-to-r after:from-[#5227FF]/60 after:via-white/20 after:to-[#F01E9C]/60
      `}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-[clamp(12px,2.4vw,24px)]">
        {/* Logo */}
        <Link href="/" aria-label="Brand-X – hem" className="inline-flex h-full items-center pl-1">
          <Image
            src="/brandx-logo.png"
            alt="Brand-X"
            width={150}
            height={150}
            priority
            className="h-10 w-auto drop-shadow md:h-12"
          />
        </Link>

        {/* Hamburger (mobil) */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className={`
            inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px]
            rounded-xl border border-white/10 bg-[#121622]/90
            ring-0 transition
            hover:bg-[#121622]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b8cff]/50
            md:hidden
          `}
        >
          <span
            className={`block h-0.5 w-5 rounded bg-[#e9edf4] transition-transform duration-200 ease-out ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[#e9edf4] transition-opacity duration-150 ease-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[#e9edf4] transition-transform duration-200 ease-out ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Nav + meny */}
        <nav className="relative" aria-label="Huvudmeny">
          <ul
            id="primary-navigation"
            className={`
              fixed left-0 right-0 bottom-0 top-28
              flex flex-col gap-1
              border-t border-white/10
              bg-[#0b0d12]/95 backdrop-blur
              p-4
              transition-all duration-200 ease-out
              ${menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}
              md:static md:inset-auto md:flex md:translate-y-0 md:flex-row md:items-center md:gap-1
              md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto
            `}
          >
            {/* Hem */}
            <li className="list-none">
              <Link
                href="/"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`
                  ${baseItemClasses}
                  ${isHome ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isHome
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isHome ? "text-white" : ""}`}>Hem</span>
                <span
                  className={`
                    pointer-events-none absolute left-3 right-3 -bottom-1 block h-[2px]
                    origin-left scale-x-0 opacity-0 transition
                    bg-gradient-to-r from-[#5227FF] via-[#B19EEF] to-[#F01E9C]
                    ${isHome ? "scale-x-100 opacity-100" : "group-hover:scale-x-100 group-hover:opacity-100"}
                  `}
                />
              </Link>
            </li>

            {/* Kundcase */}
            <li className="list-none">
              <Link
                href="/kundcase"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`
                  ${baseItemClasses}
                  ${isKundcase ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isKundcase
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isKundcase ? "text-white" : ""}`}>Kundcase</span>
                <span
                  className={`
                    pointer-events-none absolute left-3 right-3 -bottom-1 block h-[2px]
                    origin-left scale-x-0 opacity-0 transition
                    bg-gradient-to-r from-[#5227FF] via-[#B19EEF] to-[#F01E9C]
                    ${isKundcase ? "scale-x-100 opacity-100" : "group-hover:scale-x-100 group-hover:opacity-100"}
                  `}
                />
              </Link>
            </li>

            {/* Tjänster */}
            <li className="list-none">
              <Link
                href="/services"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`
                  ${baseItemClasses}
                  ${isServices ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isServices
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isServices ? "text-white" : ""}`}>Tjänster</span>
                <span
                  className={`
                    pointer-events-none absolute left-3 right-3 -bottom-1 block h-[2px]
                    origin-left scale-x-0 opacity-0 transition
                    bg-gradient-to-r from-[#5227FF] via-[#B19EEF] to-[#F01E9C]
                    ${isServices ? "scale-x-100 opacity-100" : "group-hover:scale-x-100 group-hover:opacity-100"}
                  `}
                />
              </Link>
            </li>

            {/* GALLERI – DESKTOP DROPDOWN */}
            <li className="relative hidden list-none md:block group">
              <button
                type="button"
                className={`
                  ${baseItemClasses}
                  flex items-center gap-2
                  ${isGalleryActive ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isGalleryActive
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isGalleryActive ? "text-white" : ""}`}>
                  Galleri
                </span>
                <span
                  className={`
                    relative inline-block h-3 w-3 text-[10px] text-[#e9edf4]/70
                    transition-transform duration-200
                    group-hover:rotate-180
                  `}
                >
                  ▼
                </span>
              </button>

              <ul
                  className={`
                    absolute left-0 top-full mt-2 w-56 rounded-2xl border border-white/10
                    bg-[#0b0d12]/95 p-2 text-[0.9rem] text-[#e9edf4]/90 shadow-xl
                    opacity-0 translate-y-1
                    transition duration-150 ease-out
                    group-hover:opacity-100 group-hover:translate-y-0
                    z-20
                  `}
              >
                {galleryItems.map(item => {
                  const activeChild = pathname?.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch
                        className={`
                          block rounded-xl px-3 py-2 no-underline transition
                          ${activeChild ? "bg-white/10 text-white" : "hover:bg-white/10 hover:text-white"}
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* GALLERI – MOBIL ACCORDION */}
            <li className="list-none md:hidden">
              <button
                type="button"
                onClick={() => setGalleryOpen(o => !o)}
                className={`
                  ${baseItemClasses}
                  flex items-center justify-between gap-2
                  ${isGalleryActive ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isGalleryActive
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isGalleryActive ? "text-white" : ""}`}>
                  Galleri
                </span>
                <span
                  className={`
                    relative inline-block h-3 w-3 text-[10px] text-[#e9edf4]/70
                    transition-transform duration-200
                    ${galleryOpen ? "rotate-180" : "rotate-0"}
                  `}
                >
                  ▼
                </span>
              </button>

              {galleryOpen && (
                <ul className="mt-1 space-y-1 pl-4 text-sm text-[#e9edf4]/90">
                  {galleryItems.map(item => {
                    const activeChild = pathname?.startsWith(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          prefetch
                          onClick={() => {
                            setMenuOpen(false);
                            setGalleryOpen(false);
                          }}
                          className={`
                            block rounded-xl px-3 py-2 no-underline transition
                            ${activeChild ? "bg-white/10 text-white" : "hover:bg-white/10 hover:text-white"}
                          `}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Kontakt */}
            <li className="list-none">
              <Link
                href="/contact"
                prefetch
                onClick={() => setMenuOpen(false)}
                className={`
                  ${baseItemClasses}
                  ${isContact ? "text-white" : "text-[#e9edf4]/90 hover:text-white"}
                `}
              >
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-xl
                    transition
                    ${
                      isContact
                        ? "bg-white/10 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.5)]"
                        : "bg-white/0 group-hover:bg-white/10"
                    }
                  `}
                />
                <span className={`relative bg-clip-text ${isContact ? "text-white" : ""}`}>
                  Kontakta Oss
                </span>
                <span
                  className={`
                    pointer-events-none absolute left-3 right-3 -bottom-1 block h-[2px]
                    origin-left scale-x-0 opacity-0 transition
                    bg-gradient-to-r from-[#5227FF] via-[#B19EEF] to-[#F01E9C]
                    ${isContact ? "scale-x-100 opacity-100" : "group-hover:scale-x-100 group-hover:opacity-100"}
                  `}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
