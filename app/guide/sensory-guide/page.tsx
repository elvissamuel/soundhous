import Image from "next/image";

export default function SensoryGuidePage() {
  return (
    <div className="bg-white">
      {/* 5.0 Sensory Guide Style */}
      
        <div className="max-w-full mx-auto">
          

          <section id="sensory-guide-style" className="scroll-mt-24">
            <div className="max-w-full mx-auto">
              <Image
                src="/sensory-guide.png"
                alt="Sensory Guide"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </section>
        </div>
      

      {/* 5.1 Design Philosophy */}
      <section
        id="design-philosophy"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            5.1&nbsp;&nbsp;Design Philosophy
          </h2>

          <Image
            src="/visual.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <Image
            src="/afromidi.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      {/* 5.1 Sensory Exploration */}
      <section
        id="sensory-exploration"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            5.2&nbsp;&nbsp;Sensory Exploration
          </h2>

          <Image
            src="/visual.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      <section
        id="afromidi"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            Our design Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12">
            AFROMIDI
          </h2>

          {/* Styles */}
          <p className="text-sm sm:text-base text-gray-700 mb-8">
            We have three core styles:
          </p>

          <ol className="space-y-4">
            <li className="text-xl sm:text-2xl font-semibold text-gray-900">
              1.&nbsp;Airy Light <span className="font-normal">(Interiors)</span>
            </li>

            <li className="text-xl sm:text-2xl font-semibold text-gray-900">
              2.&nbsp;Industrial Nomad <span className="font-normal">(Open Spaces)</span>
            </li>

            <li className="text-xl sm:text-2xl font-semibold text-gray-900">
              3.&nbsp;Luxury Black <span className="font-normal">(Home Theatre)</span>
            </li>
          </ol>
        </div>
      </section>

      <section
        id="sensory-breakdown"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            5.2.1&nbsp;&nbsp;Sensory Breakdown
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              {/* Touch */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Touch
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  <span className="font-semibold">Materials</span>: Natural Wood, Matte Polymer, Glass, and Metal.
                  {"\n"}<span className="font-semibold">Textures</span>: Sleek, Cool, Soft, and Upholstered.
                  {"\n"}<span className="font-semibold">Philosophy</span>: Organic Warmth vs. Technological Precision.
                  {"\n"}<span className="font-semibold">Vibe</span>: Grounded, Polished, and High-Performance.
                </p>
              </div>

              {/* Smell */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Smell
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  <span className="font-semibold">Notes</span>: Sandalwood, Cedar, White Tea, Amber, and Musk.
                  {"\n"}<span className="font-semibold">Profile</span>: Deep Woody, Crisp Green, and Soft Musk.
                  {"\n"}<span className="font-semibold">Atmosphere</span>: Airy, Refined, and High-Tech.
                  {"\n"}<span className="font-semibold">Vibe</span>: Sophisticated, Fresh, and Luxuriously Warm.
                </p>
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="space-y-10">
              {/* Appearance */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Appearance
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  <span className="font-semibold">Colours</span>: Honey Oak, Earth Tones, Midnight Navy, Charcoal.
                  {"\n"}<span className="font-semibold">Form</span>: Rectilinear lines, architectural edges, organic curves.
                  {"\n"}<span className="font-semibold">Imagery</span>: Minimalist, Immersive, High-tech, Tranquil.
                </p>
              </div>

              {/* Sound */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Sound
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  <span className="font-semibold">Loudness</span>: Moderate, Immersive, Resonant.
                  {"\n"}<span className="font-semibold">Timbre</span>: Warm, Rich, Velvety.
                  {"\n"}<span className="font-semibold">Cadence</span>: Mid-tempo, Syncopated, Fluid.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN — IMAGE */}
            <div className="w-full">
              <Image
                src="/sensory-image.png"
                alt="Sensory experience visual"
                width={1200}
                height={1400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Patterns */}
      <section
        id="patterns"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            5.3&nbsp;&nbsp;Patterns
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT SIDE */}
            <div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-xl">
                If the "wave" is our inspiration, then our patterns are the
                architecture we build with it. We don't just use waves as a
                single line; we repeat, intersect, and layer them to create a
                complex visual language.
              </p>

              <Image
                src="/patterns-mark.png"
                alt="Soundhous pattern construction"
                width={1200}
                height={800}
                className="w-full h-auto mb-6"
              />

              <Image
                src="/patterns-repeat.png"
                alt="Soundhous repeating pattern"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* RIGHT SIDE */}
            <div>
              <Image
                src="/patterns-circle.png"
                alt="Wave inspired circular pattern"
                width={200}
                height={200}
                className="w-20 h-auto mb-6"
              />

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mb-4">
                Our signature patterns are created through the superposition of
                sound waves. When two or more waves meet, they create a new,
                intricate shape.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mb-4">
                We take the raw sine of a sound, its purest form, and stack it to
                create textures that feel both organic and engineered.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
                <strong>Interference:</strong> Where waves flow, we find our
                boldest graphic moments.
                <br />
                <strong>Echoes:</strong> The repetition of lines mimics the way
                sound interacts with a physical space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Textures */}
      <section
        id="textures"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            5.4&nbsp;&nbsp;Textures
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We've introduced a suite of brand textures that frame our assets
                with a sense of warmth and luxury.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-12">
                These smooth finishes mirror the high-fidelity depth of the
                audio world, while their seamless integration with our visuals
                illustrates how Soundhous expertise transforms sound into a
                premium experience.
              </p>
            </div>

            <div>
              <Image
                src="/texture.png"
                alt="Soundhous brand textures"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accent Image */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/accent-chair.png"
            alt="Accent chair"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      {/* 5.5 Materials */}
      <section
        id="materials"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            5.5&nbsp;&nbsp;Materials
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We've introduced a suite of brand textures designed to frame our
                assets with a sense of quiet luxury and human warmth.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-12">
                Our material palette is a conversation between two worlds. We
                pair the raw, sun-drenched spirit of African craftsmanship with
                the cool, functional elegance of Scandinavian design. This
                sensory approach creates an environment that feels both
                expansive and deeply intimate.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-12">
                These smooth finishes mirror the high-fidelity depth of the
                audio world, while their seamless integration with our visuals
                illustrates how Soundhous expertise transforms sound into a
                premium, worthwhile experience.
              </p>
            </div>

            <div>
              <Image
                src="/materials.png"
                alt="Soundhous brand materials"
                width={600}
                height={800}
                className="w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}