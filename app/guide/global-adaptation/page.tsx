import Image from "next/image";

export default function GlobalApplicationPage() {
  return (
    <div className="bg-white">
      {/* HERO IMAGE */}
      <section id="global-adaptation" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/global-adaptation.png"
            alt="Global Adaptation"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* AFRICA SECTION */}
      <section
        id="africa"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
            8.1&nbsp;&nbsp;Africa
          </h2>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* LEFT — FLAG + SKETCH */}
            <div className="space-y-8">
              <div>
                <Image
                  src="/south-africa-flag.png"
                  alt="South Africa flag"
                  width={240}
                  height={160}
                  className="w-20 h-auto mb-2"
                />
                <p className="text-sm text-gray-800">
                  <span className="block">Example:</span>
                  <strong>South Africa</strong>
                </p>
              </div>

              <div>
                <Image
                  src="/soundhous-sketch.png"
                  alt="Soundhous sketch illustration"
                  width={900}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* RIGHT — TEXT */}
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
                Adapting a brand for Africa, particularly the Francophone
                (French-speaking) regions, requires a shift from{" "}
                <strong>"global standardisation"</strong> to{" "}
                <strong>"regional resonance."</strong>
              </p>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                While English-speaking giants like Nigeria and Kenya often dominate
                headlines, the Francophone bloc (West and Central Africa)
                represents some of the world's fastest-growing economies —
                including Côte d'Ivoire, Senegal, and the DRC.
              </p>
            </div>
          </div>

          {/* BOTTOM — LOCKUPS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-end">
            {[
              { src: "/soundhous-swahili.png", label: "Swahili" },
              { src: "/soundhous-afrikaans.png", label: "Afrikaans" },
              { src: "/soundhous-english.png", label: "English" },
            ].map(({ src, label }) => (
              <div key={label} className="text-center">
                <div className="h-20 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Soundhous ${label} lockup`}
                    width={420}
                    height={120}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 mt-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="america"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
            8.2&nbsp;&nbsp;America
          </h2>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT — FLAG + STACKED SKETCHES */}
            <div className="space-y-8">
              {/* Flag */}
              <div>
                <Image
                  src="/canada-flag.jpg"
                  alt="Canada flag"
                  width={240}
                  height={160}
                  className="w-20 h-auto mb-2"
                />
                <p className="text-sm text-gray-800">
                  <span className="block">Example:</span>
                  <strong>Canada</strong>
                </p>
              </div>

              {/* Sketch 1 */}
              <div>
                <Image
                  src="/soundhous-sketch.png"
                  alt="Soundhous America sketch one"
                  width={900}
                  height={420}
                  className="w-full h-auto"
                />
              </div>

              {/* Sketch 2 */}
              <div>
                <Image
                  src="/soundhous-sketch-america-2.png"
                  alt="Soundhous America sketch two"
                  width={900}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* RIGHT — TEXT */}
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
                In the Americas, regional brand adaptation is not an aesthetic choice.
                It is a strategic necessity driven by legal requirements, cultural 
                identity, and market growth.
              </p>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                While English dominates much of the continent, French is a primary 
                driver of commerce and culture, particularly in Canada and parts of 
                the Caribbean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="arabia"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
            8.3&nbsp;&nbsp;Arabia
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT — FLAG + TWO SKETCHES */}
            <div className="space-y-8">
              {/* Flag */}
              <div>
                <Image
                  src="/uae-flag.png"
                  alt="United Arab Emirates flag"
                  width={240}
                  height={160}
                  className="w-20 h-auto mb-2"
                />
                <p className="text-sm text-gray-800">
                  <span className="block">Example:</span>
                  <strong>United Arab Emirates</strong>
                </p>
              </div>

              {/* Sketch 1 */}
              <Image
                src="/soundhous-sketch.png"
                alt="Soundhous Arabia sketch one"
                width={900}
                height={420}
                className="w-full h-auto"
              />

              {/* Sketch 2 */}
              <Image
                src="/soundhous-arabia-sketch.png"
                alt="Soundhous Arabia sketch two"
                width={900}
                height={420}
                className="w-full h-auto"
              />
            </div>

            {/* RIGHT — TEXT + IMAGE */}
            <div className="max-w-xl space-y-8 mt-20">
              {/* Text */}
              <div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
                  When adapting a brand for the Middle East and North Africa
                  (MENA) region, the goal isn't just translation; it is{" "}
                  <strong>transcreation.</strong>
                </p>

                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  Creating an Arabic version of a logo (often referred to as
                  Arabisation) is an important exercise in balancing brand
                  consistency with cultural resonance.
                </p>
              </div>

              {/* Image under text */}
              <Image
                src="/soundhous-arabic-lockup.png"
                alt="Arabic adapted Soundhous logo"
                width={900}
                height={420}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}