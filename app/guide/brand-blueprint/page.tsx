import Image from "next/image";

export default function LogoRulesPage() {
  return (
    <div className="bg-white">

      {/* Brand Blueprint */}
      <section id="brand-personality" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/brand-blueprint.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Logo Concept */}
      <section id="logo-concept" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/logo-concept.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Sonic Energy */}
      <section
        id="sonic-energy"
        className="relative bg-black text-white px-6 md:px-12 py-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative">

          {/* TITLE ROW */}
          <div className="flex items-start justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Sonic Energy
            </h2>

            {/* SMALL WAVE ICON (decorative) */}
            <Image
              src="/sonic-energy-icon.png"
              alt=""
              width={120}
              height={80}
              className="hidden sm:block w-16 md:w-20 lg:w-24 h-auto opacity-80"
              priority
            />
          </div>

          {/* INTRO */}
          <div className="space-y-3 mb-10 text-lg md:text-xl leading-relaxed text-white/90">
            <p>
              At the core of the Soundhous identity lies the wave.
            </p>
            <p>
              It is more than just a graphic element; it is a literal representation
              of our medium and a metaphorical expression of our mission.
            </p>
          </div>

          {/* VIBRATION */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              <span className="font-semibold text-white">Vibration:</span>{" "}
              Every beat, note, and word begins as a physical movement.
            </p>
          </div>

          {/* OSCILLATION */}
          <div>
            <p className="text-xl md:text-2xl leading-relaxed">
              <span className="font-semibold text-white">Oscillation:</span>{" "}
              The rhythmic rise and fall of our visual patterns mirrors the way sound
              reaches the human ear.
            </p>
          </div>

        </div>

        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/sonic-energy.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Wave Concept */}
      <section
        id="wave-concept"
        className="relative bg-black text-white px-6 md:px-12 py-20 md:py-28 scroll-mt-24 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">

          {/* TEXT BLOCK */}
          <div className="space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90">
            <p>
              Waves are a universal constant. From the invisible frequencies of a radio
              signal to the visible crests of the ocean, the wave represents flow,
              energy, and momentum.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              For Soundhous, this symbolises our ability to adapt to any genre,
              technology, or environment. We aren't static; we are in constant motion.
            </p>
          </div>

          {/* IMAGE */}
          <div className="mt-14 md:mt-20 flex justify-center">
            <Image
              src="/soundhous-images/sh-round.png"
              alt="Soundhous wave concept graphic"
              width={700}
              height={700}
              className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* The Soundhous Logo */}
      <section
        id="the-soundhous-logo"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          {/* Main Title - Top Left */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-12">
            The Soundhous Logo
          </h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">

            {/* Left Column - Two Paragraphs */}
            <div className="space-y-6">
              <p className="text-sm sm:text-xl font-light text-gray-800 leading-relaxed">
                Our logo is our brand's calling card. It must be used correctly and consistently
                in all communication materials to ensure customers recognise it and to protect
                our trademark.
              </p>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our corporate brand mark is inspired by the design of a wave. It speaks of the
                audio industry and carries the message of balance, symphony, rhythm, and grace.
              </p>
            </div>

            {/* Right Side - Image at top, then Introduction and Caution */}
            <div className="lg:col-span-2 space-y-8">

              {/* Single Image at Top */}
              <div className="w-full">
                <Image
                  src="/soundhous.png"
                  alt="Logo introduction visual"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Introduction and Caution in two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Introduction Section */}
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold text-black">
                    Introduction
                  </h2>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    Consistent presentation of the Soundhous identity is the key to brand
                    recognition, building trust and confidence over time. In this section,
                    we define the key elements of the brand identity system, from the brand
                    mark (logo) to the brand architecture. These elements will help us build
                    the brand through various applications, outlining how it is to be used
                    within creative expression.
                  </p>
                </div>

                {/* Caution Section */}
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold text-black">
                    Caution
                  </h2>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    The Soundhous Logo should always be represented in Black or White colour.
                    The Attention logo is landscape-locked. Portrait orientations are prohibited.
                    All other logo usage rules are detailed in the following pages in this section.
                    All items that show the Soundhous Logo must get the clearance from Strategic
                    Communications Department before production. This is to ensure that the designs
                    produced are aligned to our Corporate Identity (CI).
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soundhous Logo Image */}
      <section className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/soundhous-logo.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Soundhous Stacked */}
      <section className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/soundhous-stacked.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* 2.2 Logo Variations */}
      <section
        id="logo-variation"
        className="px-6 md:px-12 py-16 md:py-24 bg-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto space-y-16">

          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT TEXT */}
            <div className="space-y-6 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                <span className="font-light">2.2</span>&nbsp;&nbsp;Logo Variations
              </h2>
              <p className="text-base md:text-lg font-light text-black leading-relaxed">
                At the heart of our identity is our wordmark. It is designed to be as
                bold as it is welcoming.
              </p>
            </div>

            {/* RIGHT HORIZONTAL LOCKUP */}
            <div className="text-center lg:text-right">
              <Image
                src="/small-logo1.png"
                width={360}
                height={180}
                alt="Horizontal Lockup"
                className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto mx-auto lg:ml-auto"
              />
              <p className="mt-2 text-xs sm:text-sm text-black">
                Horizontal Lockup
              </p>
            </div>

          </div>

          {/* CENTER WORDMARK */}
          <div className="text-center space-y-3">
            <Image
              src="/big-logo.png"
              width={1000}
              height={500}
              alt="Wordmark"
              className="w-full max-w-3xl mx-auto h-auto"
            />
            <p className="text-xs sm:text-sm font-semibold text-black">
              Wordmark
            </p>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">

            {/* LEFT DESCRIPTION */}
            <div className="text-left max-w-sm">
              <p className="text-sm text-black leading-relaxed">
                The "soft-geometric" nature of the font avoids the coldness of
                traditional tech branding, instead offering a friendly and inclusive
                aesthetic. The sturdy architecture of the characters represents our
                strength, while the rounded edges reflect the vibrant, pulsing energy
                of the audio world.
              </p>
            </div>

            {/* CENTER ICON */}
            <div className="text-center">
              <Image
                src="/small-logo-2.png"
                width={150}
                height={70}
                alt="Icon symbol"
                className="w-24 sm:w-28 md:w-32 h-auto mx-auto"
              />
              <p className="mt-2 text-xs sm:text-sm text-black">
                Icons / symbols
              </p>
            </div>

            {/* RIGHT VERTICAL LOCKUP */}
            <div className="text-center md:text-right">
              <Image
                src="/small-logo-3.png"
                width={260}
                height={70}
                alt="Vertical Lockup"
                className="w-40 sm:w-44 md:w-52 h-auto mx-auto md:ml-auto"
              />
              <p className="mt-2 text-xs sm:text-sm text-black">
                Vertical Lockup
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Five Logo Variations */}
      <section className="bg-black text-white px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Five (5) Logo Variations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* LEFT + MIDDLE (Logos Section) */}
            <div className="lg:col-span-2 space-y-10">
              {[
                { label: "I. SIGNATURE LOGO", img: "/logo1.png" },
                { label: "II. SECONDARY LOGO", img: "/logo2.png" },
                { label: "III. ATTENTION LOGO", img: "/logo3.png" },
                { label: "IV. SUBMARK", img: "/logo4.png" },
                { label: "V. FAVICON", img: "/logo5.png" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">

                  {/* Text */}
                  <div className="w-64 text-gray-300 tracking-wide">
                    {item.label}
                  </div>

                  {/* Line */}
                  <div className="flex-1 h-px bg-gray-600 relative">
                    <div className="absolute right-0 top-0 h-4 w-px bg-gray-600 translate-y-[-8px]" />
                  </div>

                  {/* Logo Image */}
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={120}
                    height={60}
                    className="h-auto w-24 object-contain"
                  />

                </div>
              ))}
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="border-l border-gray-700 pl-10 text-gray-300 text-lg leading-relaxed">
              The five (5) logo variants are not reflecting five (5) companies,
              but <span className="text-white font-semibold">ONE</span> company with
              a dynamic identity system geared for all touchpoints.
            </div>

          </div>
        </div>
      </section>

      {/* 2.2.1 Logo Lockups */}
      <section id="logo-lockups" className="bg-white px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">
            <span className="font-light">2.2.1</span>&nbsp;&nbsp;Logo Lockups
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg text-gray-700 max-w-4xl mb-16 leading-relaxed">
            To ensure the Soundhous brand remains versatile and legible across all environments,
            we have developed two primary logo lockups. Whether applied to a small mobile screen
            or a large-scale physical installation, these configurations maintain the integrity
            of our visual identity.
          </p>

          {/* Logos Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT - Signature */}
            <div>
              <Image
                src="/signature-logo.png"
                alt="Signature Logo"
                width={800}
                height={300}
                className="w-full h-auto object-contain mb-6"
              />
              <h3 className="font-semibold text-lg text-black mb-3">
                I. The Signature Logo (Horizontal Lockup)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The horizontal lockup is our preferred configuration. It is designed
                for maximum efficiency in wide-format environments, such as website
                navigation bars, letterheads, and horizontal signage.
              </p>
              <p className="text-gray-900 font-semibold">When to use:</p>
              <p className="text-gray-700">
                Digital headers, email signatures, and wide-format marketing materials.
              </p>
            </div>

            {/* RIGHT - Secondary */}
            <div>
              <Image
                src="/secondary-logo.png"
                alt="Secondary Logo"
                width={800}
                height={100}
                className="w-full h-auto object-contain mb-6"
              />
              <h3 className="font-semibold text-lg text-black mb-3">
                II. The Secondary Logo (Vertical Lockup)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The vertical (stacked) lockup is our centred, symmetrical alternative.
                This configuration emphasizes the Soundhous symbol, placing it in a
                position of prominence above the typeface.
              </p>
              <p className="text-gray-900 font-semibold">When to use:</p>
              <p className="text-gray-700">
                Social media avatars, product packaging, apparel, and centred layouts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2.2.2 Logo Symbols */}
      <section id="logo-symbols" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-12">
            <span className="font-light">2.2.2</span>&nbsp;&nbsp;Logo Symbols
          </h2>

          {/* Centered Top Image */}
          <div className="flex justify-center mb-16">
            <Image
              src="/submark-favicon.png"
              alt="Submark and Favicon"
              width={400}
              height={200}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT — Submark */}
            <div className="space-y-8">

              {/* Intro Statement */}
              <p className="text-lg md:text-xl text-black leading-relaxed">
                A Submark and Favicon are essential
                for maintaining a premium experience
                across all touchpoints.
              </p>

              {/* IV. Submark */}
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-black">
                  IV. Submark
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Submark is a simplified version of our logo. Our submark is
                  derived from the waves formed from two letter 's' with the lines
                  which make up the 'hous'.
                </p>
                <Image
                  src="/patterns-mark.png"
                  alt="Submark Development"
                  width={500}
                  height={200}
                  className="w-full h-auto object-contain pt-6"
                />
              </div>

            </div>

            {/* RIGHT — Favicon */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                V. Favicon
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Favicon is the 16×16 pixel icon seen in browser tabs. In the
                digital space, this is often the first interaction a "Discerning
                Customer" has with our brand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Clarity in Small Scales:</span>{" "}
                The primary Soundhous logo may be too complex for a tiny browser
                tab. A favicon distils our brand down to its most "heroic" element.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">The "Always-On" Presence:</span>{" "}
                It serves as a constant, subtle "pulse" in the Discerning
                Customer's digital UX journey, maintaining our brand's story.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2.2.3 The Attention Logo (III) */}
      <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.2.3.</span>&nbsp;&nbsp;The Attention Logo (III)
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-800 leading-relaxed max-w-5xl">
            As we launch Soundhous, we are focusing exclusively on the Attention Logo
            across all current touchpoints to build immediate brand recognition. To
            maintain a disciplined visual identity, use the Attention Logo. Our other
            brand marks will be introduced gradually. By introducing them sparingly,
            we allow our Attention Logo reinforce brand recognition. As our brand
            evolves, other brand marks should be integrated selectively.
          </p>

          {/* Wordmark + Divider + Logo */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-8 items-center">

            {/* Left Text */}
            <div>
              <p className="text-gray-500 leading-relaxed">
                The wordmark is our preferred configuration. It is designed to
                immediately capture consumer interest and distinguish our brand
                from our competitors.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-32 bg-gray-400"></div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/attention-logo.png"
                alt="The Attention Logo"
                width={800}
                height={250}
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>

          </div>

          {/* When to Use */}
          <p className="text-black">
            <span className="font-semibold">When to use:</span>{" "}
            At brand launch, in co-branding with other brands and in places where
            the lockups will be difficult to use.
          </p>

        </div>
      </section>

      {/* 2.3 Logo Rules */}
      <section id="logo-rules" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.3</span>&nbsp;&nbsp;Logo Rules
          </h2>

          {/* Paragraph */}
          <p className="text-gray-800 leading-relaxed max-w-5xl">
            This outlines the required standards for using the Soundhous logo and name,
            particularly in co-branded materials, partnerships, and brand associations
            (e.g. "Soundhous with Sonos"). Adhering to these guidelines ensures brand
            consistency, legibility, and protection of the Soundhous visual identity.
          </p>

          {/* Stacked Images */}
          <div className="space-y-16">
            <Image
              src="/logo-rules-1.png"
              alt="Logo Rules Grid System"
              width={1200}
              height={500}
              className="w-full h-auto object-contain"
            />
            <Image
              src="/logo-rules-2.png"
              alt="Logo Construction Details"
              width={800}
              height={500}
              className="w-xl h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* 2.3.1 Logo Clear Space */}
      <section id="logo-clear-space" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.3.1</span>&nbsp;&nbsp;Logo Clear Space
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Text */}
            <div className="space-y-6 max-w-md">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                The 'S' Height
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                To protect the integrity and visibility of the Soundhous
                logo, a minimum clear space, or exclusion zone, must be
                maintained around it at all times. This space must be free
                of all other graphic elements, text, imagery, or the edge
                of a page/screen.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/logo-clear-space.png"
                alt="Logo Clear Space Diagram"
                width={700}
                height={500}
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2.3.2 Layout Grid/Composition */}
      <section id="layout-grid" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.3.2</span>&nbsp;&nbsp;Layout Grid/Composition
          </h2>

          {/* 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            {/* LEFT TEXT */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 font-light">
                A consistent grid ensures that whether you are designing a mobile app or a
                vinyl record sleeve, our brand feels "anchored."
              </p>
              <p>
                <strong className="text-black">The 12-Column Grid:</strong> Use a standard
                12-column grid for web and print. This offers the most flexibility,
                allowing for layouts in halves, thirds, and quarters.
              </p>
              <p>
                <strong className="text-black">The "Bassline" (Baseline Grid):</strong>{" "}
                Since Soundhous is rooted in audio, use a strict baseline grid
                (typically 4px or 8px). This ensures that all text and elements have
                a vertical "rhythm," much like a musical tempo.
              </p>
            </div>

            {/* MIDDLE IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/grid-12-column.png"
                alt="12 column grid example"
                width={500}
                height={700}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>

            {/* RIGHT IMAGE + TEXT */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <Image
                  src="/grid-modular.png"
                  alt="Modular grid example"
                  width={700}
                  height={450}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-black">Modular Approach:</strong> Use square
                modules in your grid to mirror the "House" aspect—creating "rooms"
                of content that are neatly contained.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2.3.3 Minimum Size and Format */}
      <section
        id="minimum-size-format"
        className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">2.3.3</span>&nbsp;&nbsp;Minimum Size and Format
          </h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light">
                Our logo must be legible in all uses.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Minimum sizes are established to prevent illegibility due to small reproduction.
              </p>

              {/* Logo Image */}
              <div className="flex justify-start">
                <Image
                  src="/soundhous-logo-h.png"
                  alt="Soundhaus logo minimum size"
                  width={300}
                  height={100}
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs h-auto object-contain"
                />
              </div>

              {/* Minimum Size Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-xs sm:text-sm">
                  <thead className="bg-gray-100 text-black">
                    <tr>
                      <th className="border px-2 sm:px-3 md:px-4 py-2 text-left">Application</th>
                      <th className="border px-2 sm:px-3 md:px-4 py-2 text-left">Minimum Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">Print Materials</td>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">0.5 inches wide</td>
                    </tr>
                    <tr>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">Digital/Screen (Web)</td>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">60 pixels wide</td>
                    </tr>
                    <tr>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">Digital/Screen (Mobile)</td>
                      <td className="border px-2 sm:px-3 md:px-4 py-2">40 pixels wide</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xs sm:text-sm lg:text-base text-black">
                To ensure the visual integrity of our brand across all media, it is
                critical to use the appropriate file formats. Using the wrong format
                can result in pixelation, slow load times, or poor print quality.
                Please refer to the matrix below when selecting assets for production.
              </p>

              {/* File Format Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-[10px] sm:text-xs">
                  <thead className="bg-gray-100 text-black">
                    <tr>
                      <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Format</th>
                      <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Type</th>
                      <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Application</th>
                      <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Special Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">ai, eps</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Vector File</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Professional print, promo items</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Infinitely scalable</td>
                    </tr>
                    <tr>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">jpg</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel File</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Photos, print docs, presentations</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Small size, quality loss if scaled</td>
                    </tr>
                    <tr>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">png</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel File</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Web apps, presentations</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Transparency, better quality than jpg</td>
                    </tr>
                    <tr>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">pdf</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel + Vector</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Print docs, promo items, presentations</td>
                      <td className="border px-1 sm:px-2 py-1.5 sm:py-2">High quality, optimal for sending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.3.4 Logo Misuse */}
      <section id="logo-misuse" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.3.4</span>&nbsp;&nbsp;Logo Misuse
          </h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE TEXT */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 font-light">
                To maintain the integrity of the Soundhous brand, the logo must never
                be used in the following ways:
              </p>
              <p><strong className="text-black">Do Not:</strong> Place the logo vertically.</p>
              <p><strong className="text-black">Do Not:</strong> Change the logo's colours or apply drop shadows, outlines, or other graphical effects.</p>
              <p><strong className="text-black">Do Not:</strong> Place the logo on a background that reduces legibility or contrast.</p>
              <p><strong className="text-black">Do Not:</strong> Create a new mark by combining the logo or any of its elements with another logo, text, or graphic.</p>
              <p><strong className="text-black">Do Not:</strong> Write out the logo in another typeface.</p>
              <p><strong className="text-black">Do Not:</strong> Stretch, distort, rotate, or alter the logo's proportions.</p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/logo-misuse.png"
                alt="Examples of incorrect logo usage"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2.4 Co-branding */}
      <section id="co-branding" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">2.4</span>&nbsp;&nbsp;Co-branding
          </h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE TEXT */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-xl font-light text-gray-800">
                Brand associations (co-branding) must be executed in a way that clearly
                distinguishes the Soundhous brand from the partner brand (e.g. Sonos) while
                maintaining visual harmony.
              </p>
              <p>
                <strong className="text-black">Equal Prominence:</strong> Both the Soundhous logo
                and the Partner logo must be displayed with comparable size and visual weight.
                Neither logo should dominate the other.
              </p>
              <p>
                <strong className="text-black">Separation Element:</strong> When space allows, use
                a thin vertical line (a "rule") or a clear gap of 2X to visually separate the
                Soundhous logo from the associated brand or text.
              </p>
              <p>
                <strong className="text-black">Approval:</strong> All co-branded materials must be
                submitted to the Soundhous brand team for final approval before public use.
              </p>
            </div>

            {/* RIGHT SIDE TEXT + IMAGES */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg text-black font-bold">
                For all co-branding purposes, use the Attention Logo.
              </p>

              {/* Attention Logo Example */}
              <div className="flex justify-center">
                <Image
                  src="/attention-logo-example.png"
                  alt="Attention logo example"
                  width={500}
                  height={200}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              <p>
                <strong className="text-black">Placement:</strong> In horizontal layouts, the
                Soundhous logo should typically be placed on the left, followed by the partner brand.
                (E.g. Soundhous | Partner Name or Soundhous [2X gap] Partner Logo).
              </p>
              <p>
                In vertical layouts, the Soundhous logo should typically be placed at the bottom
                left of the graphic.
              </p>

              {/* Placement Example */}
              <div className="flex justify-center">
                <Image
                  src="/co-branding-placement.png"
                  alt="Co-branding placement example"
                  width={600}
                  height={300}
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Co-branding Assets */}
      <section id="brand-personality" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/co-branding-assets.png"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Creative Assets */}
      <section id="brand-personality" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/attention-logo.jpg"
            alt="Brand Architype"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

    </div>
  );
}