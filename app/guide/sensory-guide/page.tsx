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
            <span className="font-light">5.1</span>&nbsp;&nbsp;Design Philosophy
          </h2>

          <Image
            src="/visual.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />

          
        </div>

        <div className="max-w-full mx-auto">
        <section id="sensory-guide-style" className="scroll-mt-24">
          <div className="max-w-full mx-auto">
            <Image
              src="/soundhous-images/afromidi.jpg"
              alt="Sensory Guide"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>


        
      </section>

      {/* 5.2 Patterns */}
      <section
        id="patterns"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="font-light">5.2</span>&nbsp;&nbsp;Patterns
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

              <p className="text-sm sm:text-lg text-gray-700 font-light leading-relaxed max-w-md mb-4">
                Our signature patterns are created through the superposition of
                sound waves. When two or more waves meet, they create a new,
                intricate shape. We take the raw sine of a sound, its purest form, and stack it to
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

      {/* 5.3 Textures */}
      <section
        id="textures"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="font-light">5.3</span>&nbsp;&nbsp;Textures
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-sm sm:text-lg font-light text-gray-700 leading-relaxed mb-4">
                We've introduced a suite of brand textures that frame our assets
                with a sense of warmth and luxury.
              </p>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-12">
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

      {/* 5.4 Materials */}
      <section
        id="materials"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="font-light">5.4</span>&nbsp;&nbsp;Materials
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">

              <p className="text-sm sm:text-lg font-light text-gray-700 leading-relaxed mb-12">
                Our material palette is a conversation between two worlds. We
                pair the raw, sun-drenched spirit of African craftsmanship with
                the cool, functional elegance of Scandinavian design. 
              </p>

              <p className="text-sm sm:text-base text-black text-gray-700 leading-relaxed mb-12">
                This
                sensory approach creates an environment that feels both
                expansive and deeply intimate.
                These smooth finishes mirror the high-fidelity depth of the
                audio world, while their seamless integration with our visuals
                illustrates how Soundhous expertise transforms sound into a
                premium, worthwhile experience.
              </p>
            </div>

            <div>
              <Image
                src="/materials-2.png"
                alt="Soundhous brand materials"
                width={600}
                height={800}
                className="w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="design-philosophy"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">5.5</span>&nbsp;&nbsp;AFROMIDI Sensory Exploration
          </h2>

          <Image
            src="/sensory-application.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      <section
        id="design-philosophy"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            {/* Left Text */}
            <div>
              <p className="text-2xl sm:text-2xl md:text-2xl text-gray-900 leading-snug">
                AFROMIDI has 3 <br />
                core styles for:
              </p>
            </div>

            {/* Right Text + Small Image */}
            <div className="md:text-right">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Our Design Philosophy:
              </p>

              <Image
                src="/afromidi-logo.png"
                alt="Afromidi Logo"
                width={300}
                height={150}
                className="w-40 sm:w-48 md:w-56 h-auto md:ml-auto"
              />
            </div>
          </div>

          {/* Tall Image Below */}
          <div className="w-full">
            <Image
              src="/sensory-application-2.png"
              alt="AFROMIDI Design Styles"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

    <section
    id="airy-light"
    className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
  >
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          <span className="font-light">5.5.1</span>&nbsp;&nbsp;Airy Light
        </h2>

        <Image
          src="/afromidi-logo.png"
          alt="Afromidi Logo"
          width={160}
          height={60}
          className="h-auto w-28 sm:w-36 md:w-40"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {/* INTERIOR SPACES (Full width on mobile/tablet, spans 2 cols on desktop) */}
        <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
          <h3 className="tracking-[0.4em] text-center text-gray-900 text-base sm:text-lg font-medium mb-4">
            INTERIOR SPACES
          </h3>
        </div>

        {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
        <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
            <p className="text-sm leading-relaxed text-gray-900 mb-4">
              <strong>Notes:</strong> Sandalwood, Cedar, White Tea, Amber, and Musk.<br />
              <strong>Profile:</strong> Scandinavian Woody, Crisp Green, and Soft Musk.<br />
              <strong>Atmosphere:</strong> Light, Airy, Refined, and High-Tech.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">Sound</h3>
            <p className="text-sm text-gray-900 leading-relaxed">
              <strong>Style:</strong> Mid-tempo, fluid.
            </p>
          </div>

          <Image
            src="/airy-smell.png"
            alt="Smell and Sound reference"
            width={600}
            height={600}
            className="w-full h-auto mt-2 object-cover"
          />
        </div>

        {/* TOUCH */}
        <div className="bg-gray-200 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
          <p className="text-sm leading-relaxed text-gray-900 mb-6">
            <strong>Materials:</strong> Natural Wood, Matte Polymer, Glass, and Metal.<br />
            <strong>Textures:</strong> Sleek, Cool, Soft, and Upholstered.<br />
            <strong>Philosophy:</strong> Organic Warmth vs. Technological Precision.<br />
            <strong>Vibe:</strong> Grounded.
          </p>

          <Image
            src="/airy-touch.png"
            alt="Touch materials reference"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* APPEARANCE */}
        <div className="bg-gray-200 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
          <p className="text-sm leading-relaxed text-gray-900 mb-6">
            <strong>Colours:</strong> Honey Oak, Earth Tones.<br />
            <strong>Form:</strong> Rectilinear lines, architectural edges, organic curves.<br />
            <strong>Imagery:</strong> Minimalist, Immersive, High-tech, Tranquil.
          </p>

          <Image
            src="/airy-appearance.png"
            alt="Appearance reference"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>

      {/* Bottom Full-width Image */}
      <div className="mt-8 sm:mt-12">
        <Image
          src="/Airy-light.png"
          alt="Soundhous brand textures"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>

    </div>
  </section>

      <section
  id="industrial-nomad"
  className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-black">
        <span className="font-light">5.5.2</span>&nbsp;Industrial Nomad
      </h2>

      <Image
        src="/afromidi-logo.png"
        alt="Afromidi Logo"
        width={160}
        height={60}
        className="h-auto w-28 sm:w-36 md:w-40"
      />
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {/* OPEN SPACES (Full width on mobile/tablet, spans 2 cols on desktop) */}
      <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
        <h3 className="tracking-[0.4em] text-center text-gray-900 text-base sm:text-lg font-medium mb-4">
          OPEN SPACES
        </h3>
      </div>

      {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
      <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
          <p className="text-sm leading-relaxed text-gray-900 mb-4">
            <strong>Profile:</strong> Planed oak, dried grass, ozone, and faint spice.<br />
            <strong>Atmosphere:</strong> Inviting, professional atmosphere.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-gray-900">Sound</h3>
          <p className="text-sm leading-relaxed text-gray-900">
            <strong>Style:</strong> Up-tempo, energetic.
          </p>
        </div>

        <Image
          src="/nomad-smell.png"
          alt="Smell and Sound reference"
          width={600}
          height={600}
          className="w-full h-auto mt-2 object-cover"
        />
      </div>

      {/* TOUCH */}
      <div className="bg-gray-200 p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
        <p className="text-sm leading-relaxed text-gray-900 mb-6">
          <strong>Materials:</strong> Slatted light wood, metal frameworks, and woven textiles.<br />
          <strong>Textures:</strong> Coarse natural fibres, and sleek, cool matte metal.<br />
          <strong>Philosophy:</strong> Global connectivity and Professional collaboration.<br />
          <strong>Vibe:</strong> Energetic, productive, and culturally rich.
        </p>

        <Image
          src="/nomad-touch.png"
          alt="Touch materials reference"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* APPEARANCE */}
      <div className="bg-gray-200 p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
        <p className="text-sm leading-relaxed text-gray-900 mb-6">
          <strong>Colours:</strong> Sonic Amber, warm creams, deep blacks, and slate grey.<br />
          <strong>Form:</strong> Open-plan geometric layouts featuring vertical slats, and woven patterns.<br />
          <strong>Imagery:</strong> Rhythmic geometric patterns, grey scale.
        </p>

        <Image
          src="/nomad-appearance.png"
          alt="Appearance reference"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

    </div>

    {/* Bottom Full-width Image */}
    <div className="mt-8 sm:mt-12">
      <Image
        src="/industrial-nomad.png"
        alt="Soundhous brand textures"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>

  </div>
</section>

     <section
  id="luxury-black"
  className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-black">
        <span className="font-light">5.5.3</span>&nbsp;&nbsp;Luxury Black
      </h2>

      <Image
        src="/afromidi-logo.png"
        alt="Afromidi Logo"
        width={160}
        height={60}
        className="h-auto w-28 sm:w-36 md:w-40"
      />
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {/* HOME THEATRE (Full width on mobile/tablet, spans 2 cols on desktop) */}
      <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
        <h3 className="tracking-[0.4em] text-center text-base sm:text-lg text-gray-900 font-medium mb-4">
          HOME THEATRE
        </h3>
      </div>

      {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
      <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
          <p className="text-sm leading-relaxed text-gray-900 mb-4">
            <strong>Profile:</strong> Expensive leather, midnight rose, smoky oud, and mahogany.<br />
            <strong>Atmosphere:</strong> Aroma of a private members' club or sanctuary.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-gray-900">Sound</h3>
          <p className="text-sm leading-relaxed text-gray-900">
            <strong>Style:</strong> Intense and cinematic.
          </p>
        </div>

        <Image
          src="/luxury-smell.png"
          alt="Smell and Sound reference"
          width={600}
          height={600}
          className="w-full h-auto mt-2 object-cover"
        />
      </div>

      {/* TOUCH */}
      <div className="bg-gray-200 p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
        <p className="text-sm leading-relaxed text-gray-900 mb-6">
          <strong>Materials:</strong> Rich walnut, quilted leather, heavy velvet, and polished wood panelling.<br />
          <strong>Textures:</strong> Deeply tufted leather, plush velvet pile, and polished, reflective surfaces.<br />
          <strong>Philosophy:</strong> Ultimate privacy and cinematic immersion.<br />
          <strong>Vibe:</strong> Mysterious, powerful, and exclusive.
        </p>

        <Image
          src="/luxury-touch.png"
          alt="Touch materials reference"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* APPEARANCE */}
      <div className="bg-gray-200 p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
        <p className="text-sm leading-relaxed text-gray-900 mb-6">
          <strong>Colours:</strong> Monochromatic blacks, charcoal greys, silver accents, and rich walnut browns.<br />
          <strong>Form:</strong> Bold, sleek silhouettes with sharp edges and heavy, deep-seated furniture.<br />
          <strong>Imagery:</strong> Private home theatres.
        </p>

        <Image
          src="/luxury-appearance.png"
          alt="Appearance reference"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

    </div>

    {/* Bottom Full-width Image */}
    <div className="mt-8 sm:mt-12">
      <Image
        src="/luxury-black.png"
        alt="Soundhous brand textures"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>

  </div>
</section>

    </div>
  );
}