"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const addressText = `Brand-X
Gråsparvsvägen 26B
724 70 Västerås`;

  const addressQuery = encodeURIComponent("Gråsparvsvägen 26B, 724 70 Västerås");
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Något gick fel.");
      }

      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "Kunde inte skicka meddelandet.");
    } finally {
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      {/* Bakgrundsglow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-[#5227FF]/25 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-[#F97316]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header / Intro */}
        <section className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#f97316] ring-1 ring-white/10">
            Kontakta oss
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Låt oss hjälpa dig lyfta ditt varumärke
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-neutral-300">
            Har du en idé, ett pågående projekt eller bara vill bolla tankar kring
            grafisk profil, tryck eller montering? Fyll i formuläret så återkommer vi
            så snart vi kan.
          </p>
        </section>

        {/* Layout: Info + Form */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
          {/* Vänster: Kontaktinfo / beskrivning */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-xl backdrop-blur">
              <h2 className="text-lg font-semibold text-white">Hur vi arbetar</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Varje projekt börjar med att vi lyssnar. Du berättar om ditt företag,
                din målgrupp och vad du vill uppnå – vi hjälper dig att hitta rätt
                uttryck i allt från logotyp och färgprofil till trycksaker och
                grafiska installationer.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Oavsett om det gäller en enkel dekal, en komplett fordonsdekor eller
                en hel butiksmiljö, ser vi till att lösningen känns genomtänkt,
                hållbar och visuellt stark.
              </p>
            </div>

            {/* Kontaktkort */}
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/2 to-white/0 p-6 md:p-7 shadow-lg backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
                Direktkontakt
              </h3>

              <div className="mt-4 space-y-3 text-sm text-neutral-200">
                <p>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    E-post
                  </span>
                  <a
                    href="mailto:mansour@brand-x.se"
                    className="text-[#7bd389] hover:underline"
                  >
                    mansour@brand-x.se
                  </a>
                </p>

                <p>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Telefon
                  </span>
                  <a
                    href="tel:+46763225853"
                    className="text-[#7bd389] hover:underline"
                  >
                    076-322 58 53
                  </a>
                </p>

                <p>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Besöksadress
                  </span>
                  Gråsparvsvägen 26B
                  <br />
                  724 70 Västerås
                </p>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Vi försöker alltid svara inom 1–2 arbetsdagar. För mer akuta ärenden –
                ring oss direkt.
              </p>
            </div>
          </div>

          {/* Höger: Formulär */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Skicka en förfrågan
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Berätta kort vad du behöver hjälp med, så återkommer vi med förslag
              eller uppföljande frågor.
            </p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              {/* Namn */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-100"
                >
                  Namn & efternamn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Skriv ditt fullständiga namn"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40"
                />
              </div>

              {/* E-post */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-100"
                >
                  E-postadress
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="namn@företag.se"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40"
                />
              </div>

              {/* Telefon */}
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-neutral-100"
                >
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="t.ex. 076-322 58 53"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40"
                />
              </div>

              {/* Meddelande */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-100"
                >
                  Skriv ett meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Berätta kort om ditt projekt, önskemål eller frågor..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40"
                />
              </div>

              {/* Status-meddelanden */}
              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Tack! Ditt meddelande har skickats. Vi hör av oss så snart vi kan.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  {errorMessage || "Något gick fel när meddelandet skulle skickas."}
                </p>
              )}

              {/* Skicka-knapp */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#f97316] via-[#fb923c] to-[#fde68a] px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-[0_12px_30px_rgba(0,0,0,0.55)] transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Skickar..." : "Skicka meddelande"}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500">
                Genom att skicka formuläret godkänner du att vi kontaktar dig via
                de uppgifter du lämnat.
              </p>
            </form>
          </div>
        </section>

        {/* Karta + adresssektion */}
        <section className="mt-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-2 md:px-0 md:grid-cols-2">
            {/* Text/Adress-kort */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Hitta oss
              </h2>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
                <p className="whitespace-pre-line text-[15px] leading-7 text-neutral-200">
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
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-100 ring-1 ring-inset ring-white/15 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40"
                  >
                    Vägbeskrivning
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm text-neutral-400">
                Parkering finns i närheten. Ring oss om du behöver hjälp att hitta.
              </p>
            </div>

            {/* Karta */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/10 bg-black">
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
      </div>
    </main>
  );
}
