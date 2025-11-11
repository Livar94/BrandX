"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LiquidEther from "@/components/LiquidEther"; // justera importvägen om den skiljer sig

export default function Footer() {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Hem", match: (p: string) => p === "/" },
    { href: "/services", label: "Tjänster", match: (p: string) => p.startsWith("/services") },
    { href: "/contact", label: "Kontakta Oss", match: (p: string) => p.startsWith("/contact") },
  ];

  return (
    <footer className="relative bg-[#060010] overflow-hidden text-[#e8eaf0] border-t border-white/10 px-6 py-12 md:py-14">
      {/* Bakgrund */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
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

      {/* Innehåll */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] text-center md:text-left">
        {/* Logo & tagline */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-[#5b8cff] no-underline font-bold text-[1.2rem]">
            Brand-X
          </Link>
          <p className="text-[#a6adbb] text-[0.95rem]">
            Bygger framtidens webblösningar 🚀
          </p>
        </div>

        {/* Navigering */}
        <div>
          <ul className="m-0 list-none p-0">
            {nav.map((item) => {
              const active = item.match(pathname ?? "/");
              return (
                <li key={item.href} className="mb-2">
                  <Link
                    href={item.href}
                    className={`block no-underline transition-colors ${
                      active
                        ? "text-[#5b8cff] font-semibold"
                        : "text-[#e8eaf0] hover:text-[#5b8cff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-white mb-3 text-[1.05rem]">Kontakta Oss</h4>
          <p className="m-[0.3rem_0] text-[#d0d4e1]">
            Email:{" "}
            <a
              href="mailto:mansour@brand-x.se"
              className="text-[#7bd389] no-underline hover:underline"
            >
              mansour@brand-x.se
            </a>
          </p>
          <p className="m-[0.3rem_0] text-[#d0d4e1]">
            Telefon:{" "}
            <a
              href="tel:+46763225853"
              className="text-[#7bd389] no-underline hover:underline"
            >
              076-322 58 53
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mx-auto mt-8 border-t border-white/5 pt-6 text-center text-[#a6adbb] text-[0.9rem]">
        <p>© {new Date().getFullYear()} Brand-X. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
