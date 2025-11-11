import Image from "next/image";

export default function BanderollPage() {
  // Om dina filer heter annorlunda, uppdatera listan nedan
  const images = [
    "/banderoll/banderoll-1.jpg",
    "/banderoll/banderoll-2.jpg",
    "/banderoll/banderoll-3.jpg",
    "/banderoll/banderoll-4.jpg",
    "/banderoll/banderoll-5.jpg",
    "/banderoll/banderoll-6.jpg",
    "/banderoll/banderoll-7.jpg",
    "/banderoll/banderoll-8.jpg",
    "/banderoll/banderoll-9.jpg",
    "/banderoll/banderoll-10.jpg",
    "/banderoll/banderoll-11.jpg",
    "/banderoll/banderoll-12.jpg",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Titel */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Banderoller
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-400">
            Några av våra banderoll-projekt – designade för att synas och
            hålla hög kvalitet, både inne och ute.
          </p>
        </div>

        {/* Bildgalleri */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-4/5">
                <Image
                  src={src}
                  alt={`Banderoll ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  Banderoll {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
