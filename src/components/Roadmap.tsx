"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Roadmap() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-r from-black via-zinc-900 to-zinc-900">
      <div className="relative w-full max-w-6xl px-6 py-24 text-center">
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.6 }}
          className="border-b pb-5 text-neutral-50"
        >
          <h2 className="text-6xl font-semibold">Tjänster</h2>
          <small className="font-semibold">
            Vad vi kan hjälpa dig med
          </small>
        </motion.div>

        <div className="steps flex flex-col gap-20 py-10 text-neutral-100">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 items-center gap-6 -skew-y-2 md:grid-cols-2"
          >
            <p className="h-24 w-24 rounded-full bg-neutral-50 text-4xl font-thin text-zinc-900 md:order-2 flex items-center justify-center">
              20%
            </p>
            <div className="min-h-[150px] rounded-3xl py-3 pl-1 pr-3 md:border-r-2">
              <h3 className="mb-2 text-3xl">#1 Trycktjänster</h3>
              <p className="text-lg leading-7 text-neutral-300">
                Visitkort, foldrar, affischer, banderoller och fordonsdekor – vi hjälper dig att välja rätt material, format och finish så att ditt budskap håller både visuellt och kvalitetsmässigt, oavsett om det sitter inomhus eller utomhus.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 items-center gap-6 skew-y-2 md:grid-cols-2"
          >
            <p className="h-24 w-24 rounded-full bg-neutral-50 text-4xl font-thin text-zinc-900 md:justify-self-end flex items-center justify-center">
              40%
            </p>
            <div className="min-h-[150px] rounded-3xl py-3 pl-3 pr-1 md:border-l-2">
              <h3 className="mb-2 text-3xl">#2 Grafisk installation</h3>
              <p className="text-lg leading-7 text-neutral-300">
                Vi monterar skyltar, fönsterdekor, vägggrafik och fordonsdekor på plats. Noggrant, säkert och med känsla för helheten – från en logga på dörren till kompletta butiksmiljöer och fasadlösningar.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 items-center gap-6 -skew-y-2 md:grid-cols-2"
          >
            <p className="h-24 w-24 rounded-full bg-neutral-50 text-4xl font-thin text-zinc-900 md:order-2 flex items-center justify-center">
              60%
            </p>
            <div className="min-h-[150px] rounded-3xl py-3 pl-1 pr-3 md:border-r-2">
              <h3 className="mb-2 text-3xl">#3 Grafisk design</h3>
              <p className="text-lg leading-7 text-neutral-300">
                Logotyper, grafiska riktlinjer, kampanjmaterial och visuella koncept. Vi skapar en röd tråd i allt ditt material så att ditt varumärke känns tydligt, modernt och konsekvent – oavsett kanal.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 items-center gap-6 skew-y-2 md:grid-cols-2"
          >
            <p className="h-24 w-24 rounded-full bg-neutral-50 text-4xl font-thin text-zinc-900 md:justify-self-end flex items-center justify-center">
              80%
            </p>
            <div className="min-h-[150px] rounded-3xl py-3 pl-3 pr-1 md:border-l-2">
              <h3 className="mb-2 text-3xl">#4 Webbplatser & e-handel</h3>
              <p className="text-lg leading-7 text-neutral-300">
                Vi bygger snabba, responsiva och varumärkesanpassade hemsidor och e-handelslösningar. Från enklare landningssidor till kompletta webbutiker med produktkatalog, checkout och integrationer.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 items-center gap-6 -skew-y-2 md:grid-cols-2"
          >
            <p className="h-24 w-24 rounded-full bg-neutral-50 text-4xl font-thin text-zinc-900 md:order-2 flex items-center justify-center">
              100%
            </p>
            <div className="min-h-[150px] rounded-3xl py-3 pl-1 pr-3 md:border-r-2">
              <h3 className="mb-2 text-3xl">#5 App- & systemutveckling</h3>
              <p className="text-lg leading-7 text-neutral-300">
                Skräddarsydda appar och system som förenklar din vardag. Vi hjälper dig att digitalisera processer, bygga interna verktyg och skapa kundnära lösningar som fungerar på både mobil, surfplatta och dator.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0  right-[-650] z-0 opacity-50">
            <Image src="/010.png" alt="Ape" width={820} height={820} priority className="rounded-full object-cover"/>
          </div>
         <div className="absolute inset-y-0 left-[-500px] z-0 animate-pulse">
            <Image src="/brandx-logo.png" alt="Planet" width={250} height={250} priority />
         </div>

        </div>
      </div>
    </section>
  );
}