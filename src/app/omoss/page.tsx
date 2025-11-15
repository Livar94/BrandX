"use client";

export default function Aboute() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* Bakgrund som täcker hela sidan */}
      <BackgroundFX />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-24 md:py-28">
        {/* Top-label */}
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
          Om oss
          <span className="h-1 w-1 rounded-full bg-[#f97316]" />
        </span>

        {/* Huvudrad: rubrik + intro + två kolumner */}
        <section className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          {/* Vänster: Rubrik + text */}
          <div>
            {/* Accent-linje */}
            <span className="inline-block h-1 w-20 rounded-full bg-linear-to-r from-[#f97316] via-[#fb923c] to-[#f97316]" />

            <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-linear-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                BrandX hjälper företag att synas med tydlig och genomtänkt visuell kommunikation.
              </span>
            </h1>

            <p className="mt-6 text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              Vi kombinerar grafisk design, tryck och fysisk exponering till en sammanhängande
              upplevelse för ditt varumärke. Från första skiss till färdig monterad skylt ser vi
              till att varje detalj känns genomarbetad, modern och trogen din identitet.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              Med BrandX får du en partner som förstår både formspråk och funktion – vi skapar
              lösningar som fungerar i verkligheten: på bilar, fasader, mässor, butiksmiljöer och
              all tryckt kommunikation däremellan.
            </p>

            {/* Punkter – vad vi gör */}
            <ul className="mt-6 grid gap-2 text-sm text-white/80 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                <span>Grafisk design, logotyper & visuella koncept för varumärken.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                <span>Tryck och produktion: banderoller, skyltar, fönsterdekor, rollups m.m.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                <span>Profilkläder, fordonsdekor och miljöer som ger ditt varumärke liv.</span>
              </li>
            </ul>

            {/* CTA-rad */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#f97316] to-[#fb923c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]"
              >
                Kontakta oss
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
              >
                Våra tjänster →
              </a>
            </div>
          </div>

          {/* Höger: “Fokus-kort” – våra styrkor */}
          <div className="space-y-4">
            {/* Glasigt huvudkort */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              {/* Gradientram */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent [background:linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))_padding-box,linear-gradient(135deg,rgba(255,255,255,0.6),rgba(249,115,22,0.6))_border-box] [border:1px_solid_transparent]" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Vår filosofi
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                  Design som håller – både visuellt och praktiskt.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Vi älskar rena linjer, tydlig typografi och färger som känns. Samtidigt ser vi alltid
                  till hur material, placering och ljus påverkar helheten i verkligheten.
                </p>
              </div>
            </div>

            {/* Tre minikort i grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-lg backdrop-blur">
                <h3 className="text-sm font-semibold text-white">Branding</h3>
                <p className="mt-2 text-xs text-white/75">
                  Visuell identitet, logotyp och en enhetlig linje genom all kommunikation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-lg backdrop-blur">
                <h3 className="text-sm font-semibold text-white">Tryck & exponering</h3>
                <p className="mt-2 text-xs text-white/75">
                  Skyltar, banderoller, flaggor, dekaler och rollups – skräddarsytt för dina behov.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-lg backdrop-blur">
                <h3 className="text-sm font-semibold text-white">Långsiktighet</h3>
                <p className="mt-2 text-xs text-white/75">
                  Vi bygger lösningar som tål vardag, väder och att ditt företag växer över tid.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ------------------ Bakgrundseffekter ------------------ */
function BackgroundFX() {
  return (
    <>
      {/* Ljus blob vänster upp */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(82,39,255,0.55),rgba(11,13,18,0)_70%)] blur-3xl" />
      {/* Ljus blob höger ned */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.4),rgba(11,13,18,0)_70%)] blur-3xl" />
      {/* Subtil noise-overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><g fill=%22%23ffffff%22 opacity=%220.4%22><circle cx=%222%22 cy=%222%22 r=%220.6%22/><circle cx=%2220%22 cy=%2212%22 r=%220.4%22/><circle cx=%229%22 cy=%2231%22 r=%220.5%22/><circle cx=%2232%22 cy=%2227%22 r=%220.6%22/></g></svg>')]" />
    </>
  );
}
