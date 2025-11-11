import Ballpit from "../../components/Ballpit";


export default function ServicesPage() {
  return (
    <>
   <main className="relative isolate overflow-hidden bg-white">
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
      {/* HERO */}
      <section className="relative isolate overflow-hidden mt-26">
        {/* mjuka glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-22vw] h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[#f97316]/10 blur-[28vw]" />
          <div className="absolute left-1/2 bottom-[-22vw] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full bg-orange-200/50 blur-[26vw]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-[clamp(3rem,8vw,6rem)] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-[#a64d0b]">
            Våra tjänster
          </span>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Grafisk Design • Tryck • Montering
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-neutral-600">
            Vi hjälper dig att bygga ett starkt visuellt uttryck – från idé och identitet till färdig
            produktion och montering. Snabbt, lyhört och alltid med premiumkänsla.
          </p>
        </div>
      </section>

      {/* TRE KORT */}
      <section className="relative isolate overflow-hidden py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {/* Kort – Grafisk Design */}
          <article className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-100">
              {/* penna-ikon */}
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#f97316]">
                <path fill="currentColor" d="M3 17.25V21h3.75l11.06-11.06l-3.75-3.75L3 17.25Zm17.71-10.46a1.004 1.004 0 0 0 0-1.42l-2.08-2.08a1.004 1.004 0 0 0-1.42 0l-1.83 1.83l3.75 3.75l1.58-1.58Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Grafisk design</h3>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Visuell identitet, koncept och layout som förmedlar rätt känslor. Vi är ditt bollplank
              från idé till produktion.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
              <li>• Logotyper & varumärkesmanual</li>
              <li>• Kampanj- & eventmaterial</li>
              <li>• Förpackning & profil</li>
            </ul>
          </article>

          {/* Kort – Tryck */}
          <article className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-100">
              {/* skrivare-ikon */}
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#f97316]">
                <path fill="currentColor" d="M6 9V3h12v6h2a2 2 0 0 1 2 2v6h-4v4H6v-4H2v-6a2 2 0 0 1 2-2h2Zm2-4v4h8V5H8Zm8 10H8v4h8v-4Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Tryck</h3>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Kvalitetsprint för att synas – från beachflaggor och affischer till fordonsdekor.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
              <li>• Storformat & skyltar</li>
              <li>• Bildekaler & folier</li>
              <li>• Event & display</li>
            </ul>
          </article>

          {/* Kort – Montering */}
          <article className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-100">
              {/* verktyg-ikon */}
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#f97316]">
                <path fill="currentColor" d="M22.7 19.3l-6.6-6.6c.6-1.4.3-3.1-.9-4.2c-1.2-1.2-2.9-1.5-4.3-.9l3 3l-2.1 2.1l-3-3c-.6 1.4-.3 3.1.9 4.3c1.1 1.1 2.8 1.4 4.2.9l6.6 6.6c.4.4 1 .4 1.4 0l.8-.8c.4-.4.4-1 0-1.4Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Montering</h3>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Allt från en logga på kontorsdörren till kompletta skyltprogram – snabbt och smidigt.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
              <li>• Inomhus & utomhus</li>
              <li>• Fönster- & väggfoliering</li>
              <li>• Fordon & fasad</li>
            </ul>
          </article>
        </div>
      </section>

      {/* TEXTBLOCK – fördjupning (valfritt) */}
      <section className="relative isolate overflow-hidden pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <h4 className="text-lg font-semibold text-neutral-900">Grafisk design</h4>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Grafisk design handlar om att med visuella medel förmedla ett budskap och skapa en
              sammanhängande identitet. Vi hjälper dig från strategi till färdigt original.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <h4 className="text-lg font-semibold text-neutral-900">Tryck</h4>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Print som konverterar – vi tar fram rätt material, finish och format för just ditt
              ändamål, oavsett om det är kampanj, event eller permanent exponering.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <h4 className="text-lg font-semibold text-neutral-900">Montering</h4>
            <p className="mt-2 text-[15px] leading-7 text-neutral-600">
              Professionell montering med fokus på detaljer och hållbarhet. Vi är lyhörda, snabba och
              flexibla – från små uppdrag till större installationer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-orange-200/60 bg-linear-to-r from-[#f97316] to-orange-400 p-6 shadow-2xl md:p-10">
            <div className="absolute inset-0 opacity-30 [background:radial-gradient(80%_60%_at_20%_0%,white,transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center text-white">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Redo att skapa något starkt?</h3>
              <p className="max-w-2xl text-[15px] leading-7 text-white/90">
                Hör av dig så tar vi fram en lösning som gör skillnad – från idé till färdig montering.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#a64d0b] shadow transition hover:opacity-95"
                >
                  Kontakta oss
                </a>
                <a
                  href="/kundcase"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/15"
                >
                  Se kundcase
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


    </>
  );
}
