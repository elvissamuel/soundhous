import Image from "next/image";

export default function SpacesPage() {
  return (
    <div className="bg-white">

      {/* Brand Blueprint */}
      <section id="spaces-and-places" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/spaces&places.png"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section
  id="curating-experience"
  className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <div className="mb-10 md:mb-14">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
        Curating the Soundhous Experience
      </h2>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
        Welcome.
      </h3>
    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      {/* LEFT CONTENT */}
      <div className="space-y-6 text-base font-light sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-xl">
        <p>
          These guidelines are here to support you in creating the ultimate
          Soundhous experience in your local market.
        </p>

        <p>
          The purpose of this section is to harmonise the representation of our
          premium brand across all Soundhous physical touchpoints.
        </p>

        <p>
          This is a living, breathing document that will be constantly updated.
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-6 max-w-md">

        <p className="text-base sm:text-lg  md:text-xl font-light text-black/80 leading-relaxed">
          In curating, kindly remember to reference the Core Elements in
          sections:
        </p>

        <ul className="space-y-3 text-base sm:text-lg md:text-xl text-black">
          <li>
            <span className="mr-4 text-black/70">1.0</span>
            <span className="font-semibold">Brand Foundation</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">2.0</span>
            <span className="font-semibold">Brand Blueprint</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">3.0</span>
            <span className="font-semibold">Symphony</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">4.0</span>
            <span className="font-semibold">Typography</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">5.0</span>
            <span className="font-semibold">Sensory Guide</span>
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>

      <section id="tee" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
              <div className="max-w-5xl mx-auto">
                <Image
                  src="/set.png"
                  alt="SET"
                  width={1000}
                  height={1000}
                  className="w-full h-auto mb-6"
                />
              </div>
            </section>

      <section
  id="set-touchpoints"
  className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-4">
      Soundhous Experience Touchpoints (SET)
    </h2>

    {/* SUBTITLE */}
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-12">
      <span className="font-light">SET</span> = Retail + Display + Activation
    </p>

    {/* IMAGE */}
    <div className="flex justify-center">
      <Image
        src="/soundhous-images/set-touchpoints.png"
        alt="Soundhous Experience Touchpoints"
        width={600}
        height={1200}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

      <section id="retail-guidelines" className="relative scroll-mt-24">
  {/* Heading on white */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-6">
    <span className="font-light">6.1.</span>&nbsp;&nbsp;Retail Guidelines
  </h2>

  {/* Black bg image portion */}
  <div
    className="relative bg-black flex items-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
    style={{
      backgroundImage: "url('/section-bg-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black font-semibold text-white leading-tight">
     The digital pulse of our brand meets the <br />
warmth of human connection, creating <br />
an immersive environment that invites <br />
our community to step directly into the <br />
story we tell.
    </p>
  </div>
</section>


      <section className="scroll-mt-24 py-12 md:py-16">
  <div className="flex justify-center">
    <Image
      src="/retail.png"
      alt="Soundhous Experience Touchpoints"
      width={600}
      height={1200}
      className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
      priority
    />
  </div>
</section>

     <section
  id="retail-environment"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-3xl space-y-6">

    {/* SECTION TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
      <span className="font-light">6.1.1.</span>&nbsp;&nbsp;Retail Environment
    </h2>

    {/* TEXT */}
    <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-semibold leading-relaxed">
      Our retail environments are <br />
       immersive spaces designed <br />
      to offer a curated brand <br />
      experience. They serve as a <br />
      physical embodiment of our <br />
      commitment to excellence <br />
       for the discerning individual.
    </p>

  </div>
</section>

      <section
  id="retail-store-places"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  {/* TITLE */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 md:mb-14">
    Retail Store Spaces
  </h2>

  {/* IMAGE */}
  <div className="flex justify-center">
    <Image
      src="/retail-store-places.png"
      alt="Retail store places"
      width={900}
      height={900}
      className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
      priority
    />
  </div>
</section>

      <section
  id="cafe-area"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

    {/* LEFT CONTENT */}
    <div className="space-y-10 max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Cafe Area
      </h2>

      {/* TEXT BLOCKS */}
      <div className="space-y-8 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">The Culinary & Social Experience:</span><br />
          Designed as a multi-purpose transition zone, this open-plan area
          bridges the gap between high-end listening and high-end living.
        </p>

        <p>
          <span className="font-bold">The Bar:</span>{" "}
          A fully integrated service station dedicated to artisan coffee,
          craft cocktails, and gourmet pastries, ensuring the experience
          appeals to the palate as much as the ears.
        </p>

        <p>
          <span className="font-bold">The Atmosphere:</span>{" "}
          An open social lounge configuration designed for decompression,
          allowing guests to relax in fluid seating clusters that foster
          natural conversation and community.
        </p>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/cafe-area.png"
        alt="Cafe Area illustration"
        width={1000}
        height={1200}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

      <section
  id="outdoor-listening-area"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Outdoor Listening Area
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Facade:</span>{" "}
          A pergola and feature wall displaying the Soundhous logo and
          professional audio installation. It offers a relaxed, premium
          environment for experiencing sound in open air.
        </p>

        <p>
          <span className="font-bold">The “Sonic Threshold”:</span>{" "}
          Specialized outdoor speakers play a crystal-clear,
          5-second AFROMIDI melodic loop.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/outdoor-listening-area.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Wall:</strong> Plain large surface wall for logo and speaker placement.</p>

        <p><strong>B. Timber Slatted Pergola/Ceiling:</strong> Wooden battens installed with a suitable gap.</p>

        <p><strong>C. Flooring:</strong> Durable outdoor flooring.</p>

        <p><strong>D. Brand Logo:</strong> Attention logo finished in “white.” Mounted at an eye-level height of 1.6m.</p>

        <p><strong>E. Audio System:</strong> Professional-grade speakers (black finish) suspended from the pergola structure. Integrated vertical array speakers (3 per side) flanking the logo, recessed or surface-mounted with concealed cabling.</p>

        <p><strong>F. Seating:</strong> Lounge seating with modular low-profile outdoor sofa, armchairs with ergonomic high backs and slimline metal legs, circular aluminium low tables.</p>

        <p><strong>G. Greenery:</strong> Integrated planter boxes with drainage containing tropical plants.</p>

      </div>

    </div>

  </div>
</section>

      <section
  id="indoor-listening-areas"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Indoor Listening Areas
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Open Listening Areas:</span><br />
          High-end audio equipment is elegantly displayed around a
          comfortable lounge setting.
        </p>

        <p>
          <span className="font-bold">The “Hous” Pods:</span>{" "}
          Private or semi-private “Pods”, where customers experience the
          hardware. Acoustically treated booths lined with sound-absorbing
          charcoal foam.
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/indoor-listening-areas.png"
        alt="Indoor Listening Areas"
        width={1200}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

      <section
  id="home-theatre"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Home Theatre
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">The Visual Aesthetic:</span>{" "}
          Soundhous-signature luxury black, utilising light-absorbing
          materials and matte-finished acoustic panels to ensure zero
          light reflection.
        </p>

        <p>
          <span className="font-bold">Acoustic Engineering:</span>{" "}
          Secondary sound absorption, ensuring the only thing you hear
          is the intended audio track. See Soundhous Franchise Store
          General Specifications and Partner Acoustic Setup Guide for
          more information.
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/home-theatre.png"
        alt="Soundhous Home Theatre"
        width={1200}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

      <section
  id="retail-environment"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-3xl space-y-6">

    {/* SECTION TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
      <span className="font-light">6.1.2.</span>&nbsp;&nbsp;Retail Features
    </h2>

    {/* TEXT */}
    <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-semibold leading-relaxed">
      Integrated within our retail <br />
      environments, these bespoke <br />
      features serve as strategic <br />
      reinforcements of our brand <br />
      narrative. By bridging the gap <br />
      between aesthetic design <br />
      and functional utility, they <br />
      enhance the spatial flow and <br />
      deepen customer engagement
    </p>

  </div>
</section>

     <section
  id="store-front"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Storefront
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Facade:</span>{" "}
          Modern, minimalist design
          featuring a textured charcoal-black
          feature wall with a white minimalist
          backlit attention logo on the wall.
        </p>

        <p>
          <span className="font-bold">The “Sonic Threshold”:</span>{" "}
          A specialized
          directional speaker (sound shower) above
          the entrance that plays a crystal-clear,
          5-second AFROMIDI melodic loop only
          audible to the person standing exactly in
          the doorway.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/store-front.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Main Logo (“Soundhous”):</strong> 3D Halo-lit attention logo, matte finish.</p>

        <p><strong>B. Sub-text (“Experience Store”):</strong> Flat-cut acrylic letters, pin-mounted with a suitable standoff.</p>

        <p><strong>C. Main Wall :</strong> Exterior textured sand-finish render in Soundhous Black.</p>

        <p><strong>D. Wall Sconces:</strong> Minimalist up/down rectangular LED luminaires.</p>

        

      </div>

    </div>

  </div>
</section>


      <section
  id="feature-wall"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Feature Wall
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          This is the visual centrepiece of the
          store, located behind the main service
          counter or in the centre gallery.

          The Soundhous logo should be featured
          prominently on this wall.
        </p>

        <p>
          <span className="font-bold">Lighting:</span>{" "}
            RGB LEDs shift colours based
            on the frequency of the music currently
            playing in the store.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/feature-wall.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Panel:</strong> Scandinavian wooden panel.</p>

        <p><strong>B. Display:</strong> Screen module(centre-aligned.)</p>

        <p><strong>C. Brand Logo:</strong> Attention logo finished in “white.” Mounted above display screen.</p>

        <p><strong>D. Plain Wall</strong></p>

        

      </div>

    </div>

  </div>
</section>

      <section
  id="franchise-specifications"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-8">
      Soundhous Franchise Store General Specifications
    </h2>

    {/* INTRO PARAGRAPH */}
    <p className="max-w-4xl text-base md:text-lg text-black/80 leading-relaxed mb-20">
      The Soundhous store should be an experiential destination for the
      successful executive, business man and discerning family who affiliate
      themselves with immersive, experiential and tailored sound. Each
      Soundhous store from a layout standpoint should have the following
      areas:
    </p>

    {/* STAIRCASE GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

      {/* 1. CAFE AREA */}
      <div className="lg:self-end">
        <h3 className="font-bold text-lg text-black mb-3">
          1. Soundhous Cafe Area
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• Coffee, cocktail and pastries Bar</li>
          <li>• Open social lounge area (informal seating/circles)</li>
        </ul>
      </div>

      {/* 2. PREMIUM AUDIO */}
      <div className="lg:mt-16">
        <h3 className="font-bold text-lg text-black mb-3">
          2. Soundhous Premium Audio Area (Sonos)
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• Premium Audio display wall</li>
          <li className="ml-4 italic">• On the Go</li>
          <li className="ml-4 italic">• AIO system</li>
          <li className="ml-4 italic">• Home theatre</li>
          <li className="ml-4 italic">• Architectural</li>

          <li className="mt-3">• Private Demo listening Room (Sonos)</li>
          <li className="ml-4 italic">• Sonos Premium 5.2 Home theatre</li>
          <li className="ml-4 italic">• Sonos In-wall 4.1 Home theatre</li>
        </ul>
      </div>

      {/* 3. HIGH-END AUDIO */}
      <div className="lg:mt-0">
        <h3 className="font-bold text-lg text-black mb-3">
          3. Soundhous High-End Audio Area (Focal powered by Naim)
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• High-end Audio Display area</li>
          <li className="ml-4 italic">• On the Go</li>
          <li className="ml-4 italic">• AIO system</li>
          <li className="ml-4 italic">• Home theatre</li>
          <li className="ml-4 italic">• HiFi Audio System</li>
          <li className="ml-4 italic">• Outdoor Audio System</li>

          <li className="mt-3">• Private Demo listening Room (Focal/Naim)</li>
          <li className="ml-4 italic">• Focal Kanta</li>
          <li className="ml-4 italic">• Focal Sopra</li>
          <li className="ml-4 italic">• Focal Grand Utopia</li>
        </ul>
      </div>

    </div>
  </div>
</section>

     <section id="display-guidelines" className="relative scroll-mt-24">
  {/* Heading on white */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-6">
    <span className="font-light">6.2.</span>&nbsp;&nbsp;Display Guidelines
  </h2>

  {/* Black bg image portion */}
  <div
    className="relative bg-black flex items-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
    style={{
      backgroundImage: "url('/section-bg-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black font-semibold text-white leading-tight">
     The architecture of our displays reflects <br />
     the heartbeat of our brand. Clean, <br />
     deliberate, and endlessly engaging.
    </p>
  </div>
</section>

      <section
  id="display"
  className="w-full scroll-mt-24 py-16 md:py-24"
>
  <div className="max-w-4xl mx-auto px-6">
    <Image
      src="/display-2.png"
      alt="Display"
      width={1000}
      height={1200}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>

      <section
  id="experience-display"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Experience Display
    </h2>

    {/* IMAGE */}
    <div className="flex justify-center">
      <Image
        src="/experience-display.png"
        alt="Experience Display Layout"
        width={2400}
        height={1200}
        className="w-full max-w-6xl h-auto object-contain"
        priority
      />
    </div>

    {/* DESCRIPTION */}
    <div className="mt-12 max-w-xl text-black/90 leading-relaxed">
      <p>
        <span className="font-bold">A.</span> Brand Logo
      </p>
      <p>
        <span className="font-bold">B.</span> Audio Equipment (as detailed in 6.4.2)
      </p>
    </div>

  </div>
</section>

     <section
  id="product-display-shelve"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Product Display Shelve
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

      {/* LEFT TEXT (BOTTOM LEFT) */}
      <div className="flex flex-col justify-end max-w-md text-black/90 leading-relaxed">

        <p className="mb-6">
          This category is for small, often permanent installations within a
          retail store (e.g. End caps, in-line shelving).
        </p>

        <ul className="space-y-4">
          <li>
            <span className="font-bold">• Size/Footprint:</span> Maximize vertical use.
            Shelf depth should accommodate a listening station
          </li>

          <li>
            <span className="font-bold">• Materials:</span> Heavy, Solid Construction.
            Use the AFROMIDI materials. Avoid flimsy plastic.
          </li>
        </ul>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/product-display-shelves.png"
          alt="Product Display Shelve"
          width={1400}
          height={1000}
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

<section
  id="product-display-views"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-20 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto flex justify-center">
    <Image
      src="/product-shelf.png"
      alt="Product Display Views"
      width={2000}
      height={1200}
      className="w-full max-w-5xl h-auto object-contain"
      priority
    />
  </div>
</section>

<section
  id="gondola-display"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Gondola Display
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/gondola-display.png"
          alt="Gondola Display"
          width={1400}
          height={1000}
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="max-w-lg text-black/90 leading-relaxed space-y-1">

        <p>
          <span className="font-bold">1. Top Centre:</span><br />
          3D Standoff Signage Branding Assembly
          <br />
          <span className="text-xs">Precision-cut “Soundhous” block lettering mounted on a dual-rail standoff system.</span>
        </p>

        <p>
          <span className="font-bold text-base">2. Left & Right Extremities:</span><br />
          Side Panels
        </p>

        <p>
          <span className="font-bold text-base">3. Centre Horizontal:</span><br />
          High-Load Modular Shelving
        </p>

        <p>
          <span className="font-bold text-base">4. Underneath Shelves:</span><br />
          Concealed Downlighting
        </p>

        <p>
          <span className="font-bold text-base">5. Background Layer:</span><br />
          Contrast Back Panel
        </p>

        <p>
          <span className="font-bold text-base">6. Bottom Section:</span><br />
          Base Deck & Kick Plate (Foundation)
          <br />
          <span className="text-xs">Extended depth base shelf for bulk storage. Includes a recessed,
          scuff-resistant metallic kick plate to protect the joinery from
          floor maintenance.</span>
        </p>

      </div>

    </div>
  </div>
</section>

<section id="retail-guideline" className="relative scroll-mt-24">
  {/* Heading on white */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-6">
    <span className="font-light">6.3.</span>&nbsp;&nbsp;Activation / Exhibition Stand Guidelines
  </h2>

  {/* Black bg image portion */}
  <div
    className="relative bg-black flex items-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
    style={{
      backgroundImage: "url('/section-bg-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black font-semibold text-white leading-tight">
     From large-scale installations to <br />
intimate curated corners, we turn <br />
every space into a landmark of brand <br />
storytelling.
    </p>
  </div>
</section>


<section
  id="Exhibition-guidelines"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-1">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-sm">

      <p className="text-lg md:text-xl leading-relaxed text-black font-medium">
        The purpose of the exhibition guidelines is to harmonise the
        representation of our premium brand across all Soundhous
        exhibitions and events.
      </p>

      <div className="mt-8 text-sm text-black/80 leading-relaxed">
        <p className="mb-3">There are three types of Activations:</p>
        <p>A. Single Wall Activation (Pop-up)</p>
        <p>B. Double Wall Activation (Corner Wall)</p>
        <p>C. Booths (Full Experience)</p>
      </div>

    </div>

    {/* IMAGE */}
    <div className="lg:col-span-2">
      <Image
        src="/activation-display.png"
        alt="Activation Display"
        width={1400}
        height={900}
        className="w-full h-auto object-contain"
      />
    </div>

    {/* TEXT AREA (middle + right) */}
<div className="lg:col-span-2 lg:col-start-2 -mt-1 lg:-mt-16">
  <p className="text-sm text-black/90 leading-relaxed lg:columns-2 lg:gap-10">
    We’re the reliable partner, combining premium quality and
    attention to detail with a warm and inviting atmosphere.
    This is also reflected in our behaviour. We are confident,
    yet humble. We’re not here to push sales, but we take time to
    understand our customers’ needs and daily pains, guiding
    them to what they genuinely need. We are trusted experts
    that prioritise their best interests and never oversell.
  </p>
</div>
  </div>
</section>

<section
  id="popups"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-16 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* OUTER: Left side (title + grid) and Right column side by side */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

      {/* LEFT 2/3 — Title + inner 2-col grid */}
      <div className="lg:col-span-2 flex flex-col gap-6">

        {/* SECTION TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Pop-ups
        </h2>

        {/* INNER GRID: Left text + Middle image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-32">
            <h3 className="text-lg font-light text-black">
              Single-Wall Exhibition
            </h3>
            <div className="space-y-2">
              <p className="text-base text-black leading-relaxed">
                Pop-up exhibitions are similar to our single-wall
                displays. They can also be specially fabricated e.g
                mobile kiosks
              </p>
              <p className="text-xs text-black/70 leading-relaxed mt-4">
                Single-wall displays are shown in Display Guidelines /
                Experience Display
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/single-wall-display.png"
              alt="Single Wall Exhibition"
              width={1200}
              height={800}
              className="w-full max-w-xs h-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN — aligns to top with the heading */}
      <div className="flex flex-col space-y-1">
        <h3 className="text-sm font-bold text-black mb-1">
          Mobile Kiosks
        </h3>
        <p className="text-sm text-black/90 leading-relaxed mb-2">
          The Mobile Kiosk is a dedicated, self-contained interaction
          point designed to be moved within the Large Exhibition
          Space or temporarily placed in high-traffic common areas
          adjacent to the booth.
        </p>
        <Image
          src="/mobile-kiosk.png"
          alt="Mobile kiosk display"
          width={600}
          height={400}
          className="w-full max-w-xs h-auto object-contain my-1"
        />
        <div className="text-sm text-black/90 leading-snug space-y-1">
          <p><span className="font-bold">Structure & Aesthetics:</span></p>
          <p>
            <span className="font-bold">Footprint:</span> Small, narrow, and easily manoeuvrable
            (approx. 1.5m width).
          </p>
          <p>
            <span className="font-bold">Materials:</span> Matte Black powder-coated steel frame with a
            solid, dark wood counter top (Walnut). Must include
            locking caster wheels.
          </p>
          <p>
            <span className="font-bold">Internal Storage:</span> Lockable cabinet space for charging
            accessories, cleaning supplies, and promotional
            materials.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section
  id="corner-walls"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

    {/* LEFT COLUMN */}
    <div className="flex flex-col">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black">
        Corner Walls
      </h2>

      {/* Sub-title */}
      <h3 className="text-lg md:text-xl font-semibold text-black mt-2">
        Double-wall exhibition
      </h3>

      {/* Description */}
      <p className="mt-8 text-sm text-black/90 leading-relaxed max-w-sm">
        Corner Wall Exhibitions / Activations are made up of
        two walls: Our brand wall and our partner wall.
      </p>

      {/* Small reference text */}
      <p className="mt-6 text-xs text-black/70 leading-relaxed max-w-sm">
        Our brand wall is a single-wall display.
        Single-wall displays are shown in Display
        Guidelines / Experience Display.
      </p>

    </div>


    {/* MIDDLE COLUMN */}
    <div className="flex flex-col items-center">

      <Image
        src="/corner-wall-display.png"
        alt="Corner wall exhibition"
        width={1200}
        height={800}
        className="w-full max-w-md h-auto object-contain"
      />

      <div className="mt-6 text-sm text-black/90 leading-relaxed space-y-2">
        <p>
          1. The brand wall colour is Soundhous Black
          or ‘Signal’ Grey.
        </p>

        <p>
          2. The partner wall is used to showcase
          partner products.
        </p>
      </div>

    </div>


    {/* RIGHT COLUMN */}
    <div className="flex justify-center lg:justify-end">

      <Image
        src="/corner-wall-example.png"
        alt="Corner wall exhibition example"
        width={1200}
        height={800}
        className="w-full max-w-md h-auto object-contain"
      />

    </div>

  </div>
</section>

<section
  id="full-branding-experience"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto space-y-6">

    {/* TITLE — full width above grid */}
    <h2 className="text-2xl md:text-3xl font-bold text-black">
      Full Branding Experience
    </h2>

    {/* 3-COL GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4">

        <h3 className="text-lg font-light text-black leading-snug">
          Trade Show Booths<br />
          – 9x9m and larger<br />
          (Small/Medium/ Large)
        </h3>

        <div className="space-y-3 text-sm text-black leading-relaxed">
          <p>
            This category is designed to fully replicate the Soundhous
            Showroom experience, maximizing immersion and product depth.
          </p>

          <p>
            <span className="font-bold">Zoning (The 3 Zones)</span><br />
            The space must be intentionally divided.
          </p>

          <p>
            <span className="font-bold">The Craftsmanship Wall (Aesthetics):</span><br />
            A large, visually stunning wall displaying exploded product views,
            premium materials, and technical schematics. Use directional
            spotlights here.
          </p>
        </div>

      </div>

      {/* MIDDLE COLUMN */}
      <div className="flex flex-col gap-4 text-sm text-black leading-relaxed">

        <p>
          <span className="font-bold">The Silent Studio (Experience):</span><br />
          A partially enclosed (3-walled) soundproofed area featuring
          comfortable seating, a controlled sound environment, and a
          high-end, dedicated listening setup (e.g., A home theatre
          system or audiophile headphone rig). This is for deep
          product demos.
        </p>

        <p>
          <span className="font-bold">The Interaction Bar (Engagement):</span><br />
          A central, large counter (Matte Black with a copper kick-plate)
          staffed by experts. This is where multiple lower-tier products
          are available for quick, hands-on, non-acoustic interaction
          (weight, feel, cable quality). Serve premium coffee or water here.
        </p>

      </div>

      {/* RIGHT COLUMN — TWO STACKED IMAGES */}
      <div className="flex flex-col gap-3 items-start">

        <Image
          src="/trade-show-booth-1.png"
          alt="Trade show booth floor plan"
          width={900}
          height={600}
          className="w-full max-w-xs h-auto object-contain border border-gray-200"
        />

        <Image
          src="/trade-show-booth-2.png"
          alt="Trade show booth 3D render"
          width={900}
          height={600}
          className="w-full max-w-xs h-auto object-contain"
        />

      </div>

    </div>
  </div>
</section>

<section
  id="exhibition-example"
  className="bg-white py-16 md:py-24"
>
  <Image
    src="/exhibition-example.png"
    alt="Soundhous exhibition example"
    width={2000}
    height={1200}
    className="w-full h-auto object-contain"
    priority
  />
</section>

<section id="Branding-and-Materials" className="relative scroll-mt-24">
  {/* Heading on white */}
  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-6">
    <span className="font-light">6.4.</span>&nbsp;&nbsp;Branding & Materials
  </h2>

  {/* Black bg image portion */}
  <div
    className="relative bg-black flex items-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
    style={{
      backgroundImage: "url('/section-bg-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <p className="text-sm sm:text-2xl md:text-3xl lg:text-3xl font-black font-semibold text-white leading-tight">
     The soul of our brand is articulated through a 
curated palette of materials that balance strength 
with soul. This is where visual identity becomes a 
physical experience, utilising premium textures to 
reinforce our brand.
    </p>
  </div>
</section>

<section
  id="branding-principles"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-16"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 items-start">

    {/* LEFT COLUMN — pushed down with margin-top to align mid-page */}
    <div className="lg:mt-48 text-sm text-black leading-relaxed space-y-4">
      <p className="text-2xl font-light text-black leading-snug">
        Below is an overview of the basic principles for branding of the stand.
      </p>
      <ol className="list-decimal list-outside ml-4 space-y-3 text-sm">
        <li>
          Message in short visible text should be written with the Rubik Heading typeface.
        </li>
        <li>
          Soundhous brand assets should be used for branding of the stand (Soundhous brand assets should be placed on a wall inside the stand).
        </li>
        <li>
          Plants can be used both on walls and in pots on the floor to add more structure and a natural (living) warmth to a space.
        </li>
      </ol>
    </div>

    {/* MIDDLE COLUMN — also pushed down to align with left */}
    <div className="lg:mt-70 text-sm text-black leading-relaxed">
      <ol className="list-decimal list-outside ml-4 space-y-3" start={4}>
        <li>
          Use Soundhous brand assets that are visible from aisles at a good height. This branding should be visible from outside the stand.
        </li>
        <li>
          For text, use Soundhous wordmark hanging high up in any available truss, visible from both front and sides in the main aisles. This branding should be visible from outside the stand.
        </li>
        <li>
          Use neutral dark colours, e.g. Soundhous Dark Grey, on carpet to keep the focus on the products.
        </li>
      </ol>
    </div>

    {/* RIGHT COLUMN — Don'ts, starts at top */}
    <div className="text-sm text-black leading-relaxed space-y-2">
      <p className="font-bold mb-3">Don'ts</p>
      <ol className="list-decimal list-outside ml-4 space-y-3">
        <li>Don't use other colours than the Exhibition base colours.</li>
        <li>Don't use pictures other than the ones following the Soundhous image style.</li>
        <li>Don't put the Soundhous in the corner of big pictures. The visibility is way too poor.</li>
        <li>Don't place the Soundhous branding material too low. It will be hidden behind vehicles and crowd.</li>
        <li>Don't put the Soundhous logotype or symbol on an image that doesn't highlight it. The logotype must contrast with the background.</li>
        <li>Don't use any other font than Rubik.</li>
        <li>Don't put any of the Soundhous logotypes on the floor.</li>
        <li>Don't use any garish colour on the floor. Keep it neutral.</li>
        <li>Don't forget to brand the stand from the aisles and entrances.</li>
      </ol>
    </div>

  </div>
</section>

<section
  id="design-specifications"
  className="bg-white px-4 sm:px-10 md:px-16 py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <p className="text-base sm:text-lg md:text-xl text-black font-light mb-8 leading-snug">
      The spaces must feel premium, acoustically intentional, and invite tactile interaction.
    </p>

    {/* Table */}
    <div className="w-full">
      <table className="w-full border border-black text-black text-[11px] sm:text-xs md:text-sm leading-snug">

        {/* Table Head */}
        <thead className="bg-black/5">
          <tr>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[22%]">
              Element
            </th>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[44%]">
              Specification
            </th>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[34%]">
              Rationale
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>

          {/* Row 1 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Colour Palette
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Primary: Soundhous Black (#0A0A0A): A “deep-space” black.
              The “Signal” Grey (#808080): Used sparingly for secondary
              information (metadata, labels, or grid lines).
              A subtle copper or brushed aluminium
              (for hardware/trim).
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Conveys sophistication, neutrality (for sound focus),
              and a premium feel. Copper/Aluminium hints at
              quality internal components.
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Typography
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              A clean, modern sans-serif (e.g., Montserrat,
              Lato) for body text and a slightly more
              geometric or capitalized font for headers/titles.
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Ensures readability and a contemporary,
              technical aesthetic.
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Acoustic Treatment
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Incorporate high-density foam panels or felt
              acoustic panelling into all vertical surfaces
              and ceilings (where possible).
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Essential for a sound brand. Reduces ambient
              noise and allows guests to truly hear the
              product quality.
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Lighting
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Warm, directional, and focused LED lighting.
              Highlight products, not the entire structure.
              Avoid harsh fluorescents.
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Creates a premium, intimate atmosphere,
              similar to a high-end audio listening room.
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>

<section
  id="exhibition-materials"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-16 md:mb-24">
      Exhibition Materials
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6">

        {/* Text */}
        <p className="text-xs sm:text-sm text-black leading-relaxed max-w-xs">
          The exhibition material palette is based on the overarching
          Soundhous material palette and is used to guide the choice
          of material used in the exhibition stand.
        </p>

        {/* Material swatches image — constrained small like in reference */}
        <div>
          <Image
            src="/exhibition-materials.png"
            alt="Exhibition material swatches"
            width={900}
            height={600}
            className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-contain"
          />
        </div>

      </div>

      {/* RIGHT COLUMN — exhibition sketch */}
      <div className="w-full">
        <Image
          src="/exhibition-materials-wide.png"
          alt="Exhibition stand sketch"
          width={1600}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

<section
  id="text-on-walls"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
      Text on Walls
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-10">

      {/* IMAGE (TOP RIGHT) */}
      <div className="order-1 lg:order-none lg:col-start-3">
        <Image
          src="/text-on-walls.png"
          alt="Example of text applied to exhibition walls"
          width={900}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* LEFT TEXT */}
      <div className="order-2 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          When applying text to large walls, brevity is essential.
          Visitors are there to experience our products, not to
          read lengthy passages.
        </p>

        <p>
          <span className="font-medium">Keep it Brief:</span>
          Ensure messaging is short and impactful.
        </p>

      </div>

      {/* MIDDLE TEXT */}
      <div className="order-3 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          <span className="font-medium">Visual Harmony:</span>
          Align text vertically where possible to create a more
          balanced, harmonious layout.
        </p>

        <p>
          <span className="font-medium">Typography:</span>
          Use Rubik Bold for all headlines.
        </p>

      </div>

      {/* RIGHT TEXT */}
      <div className="order-4 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          <span className="font-medium">Sizing & Structure:</span>
          Limit headlines to 1–3 lines and ensure the font
          size is large enough for easy legibility.
        </p>

        <p>
          <span className="font-medium">Colour Palette:</span>
          Use only our approved colours.
        </p>

      </div>

    </div>

  </div>
</section>

<section
  id="sample-retail-store"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-8 md:mb-10">
      Sample Retail Store Specifications
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

      {/* LEFT TEXT */}
      <div className="order-2 lg:order-1 text-black leading-relaxed max-w-sm">

        <p className="text-base sm:text-lg font-light mb-5 leading-snug">
          Here is a Soundhous store from a layout standpoint
          featuring a combination of:
        </p>

        <ol className="space-y-1 list-decimal list-outside ml-5 text-sm sm:text-base">
          <li><span className="font-bold">Customer/Staff Parking</span></li>
          <li><span className="font-bold">Outdoor Listening Area</span></li>
          <li><span className="font-bold">Storefront</span></li>
          <li><span className="font-bold">Customer Entrance</span></li>
          <li><span className="font-bold">Welcome Area</span></li>
          <li><span className="font-bold">Product Display Shelves</span></li>
          <li><span className="font-bold">Product Demo Areas</span></li>
          <li><span className="font-bold">Listening Areas &amp; Rooms</span></li>
          <li><span className="font-bold">Feature Wall</span></li>
          <li><span className="font-bold">Lights &amp; Digital Display</span></li>
        </ol>

      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 lg:order-2 border border-gray-300">
        <Image
          src="/retail-store-layout.png"
          alt="Soundhous retail store layout"
          width={1800}
          height={1100}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>

  </div>
</section>

<section
  id="sample-retail-store"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-8 md:mb-10">
      Sample Retail Store Specifications
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

      {/* LEFT TEXT */}
      <div className="order-2 lg:order-1 text-black leading-relaxed max-w-sm">

        <p className="text-base sm:text-lg font-light mb-5 leading-snug">
          Here is a Soundhous store from a layout standpoint
          featuring a combination of:
        </p>

        <ol className="space-y-1 list-decimal list-outside ml-5 text-sm sm:text-base">
          <li><span className="font-bold">Customer/Staff Parking</span></li>
          <li><span className="font-bold">Outdoor Listening Area</span></li>
          <li><span className="font-bold">Storefront</span></li>
          <li><span className="font-bold">Customer Entrance</span></li>
          <li><span className="font-bold">Welcome Area</span></li>
          <li><span className="font-bold">Product Display Shelves</span></li>
          <li><span className="font-bold">Product Demo Areas</span></li>
          <li><span className="font-bold">Listening Areas &amp; Rooms</span></li>
          <li><span className="font-bold">Feature Wall</span></li>
          <li><span className="font-bold">Lights &amp; Digital Display</span></li>
        </ol>

      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 lg:order-2 border border-gray-300">
        <Image
          src="/retail-store-layout.png"
          alt="Soundhous retail store layout"
          width={1800}
          height={1100}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>

  </div>
</section>
    </div>
  );
}