import Image from "next/image";
import Link from "next/link";
import NewJoinerSidebar from "./NewJoinerSidebar";

export default function NewJoinerPage() {
  return (
    
      <div className="bg-white">
        <NewJoinerSidebar />
        <main className="lg:ml-60 pt-16">
            {/* Our Story Section */}
            <section id="new-joiner" className="scroll-mt-24">
                    <div className="max-w-full mx-auto">
                      <Image
                        src="/new-joiner/new-joiner-guide.png"
                        alt="Brand Guideline"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      />
                    </div>
                  </section>
      
            
           <section id="about-soundhous" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
      
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">1.1.</span>&nbsp;&nbsp;About Soundhous
          </h2>
      
          {/* 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start text-left">
      
            {/* LEFT COLUMN - Pushed down with margin-top */}
            <div className="space-y-2 text-gray-700 md:mt-[180px] lg:mt-[175px]">
              <p className="text-black text-sm sm:text-base">1.) Our brand is</p>
              <ul className="list-none font-bold space-y-1 text-sm sm:text-base">
                <li>Creative</li>
                <li>Audacious</li>
                <li>Customer-centric</li>
                <li>Premium</li>
                <li>Purist</li>
              </ul>
            </div>
      
            {/* MIDDLE COLUMN */}
            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div className="space-y-2">
                <p className="text-black text-sm sm:text-base">2.) Our spaces are</p>
                <ul className="list-none font-bold space-y-1 text-sm sm:text-base">
                  <li>Zen-Minimalist</li>
                  <li>Magical</li>
                  <li>Distinctive</li>
                  <li>Light &amp; Airy</li>
                </ul>
              </div>
      
              <div className="space-y-2">
                <p className="text-black text-sm sm:text-base">3.) Our people are</p>
                <ul className="list-none font-bold space-y-1 text-sm sm:text-base">
                  <li>Knowledgeable</li>
                  <li>Experts</li>
                  <li>Professional</li>
                  <li>Friendly</li>
                </ul>
              </div>
            </div>
      
            {/* RIGHT COLUMN */}
            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div className="space-y-2">
                <p className="text-black text-sm sm:text-base">4.) Our products are</p>
                <ul className="list-none font-bold space-y-1 text-sm sm:text-base">
                  <li>Exceptional Quality</li>
                  <li>Innovative</li>
                  <li>Excellent</li>
                  <li>Experiential/sonic</li>
                </ul>
              </div>
      
              <div className="space-y-2">
                <p className="text-black text-sm sm:text-base">5.) We are NOT</p>
                <ul className="list-none font-bold space-y-1 text-sm sm:text-base">
                  <li>Bright</li>
                  <li>Witty</li>
                  <li>Playful</li>
                  <li>Mass Appeal</li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      

      {/* Brand Basics */}
      <section id="brand-basics" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">1.2.</span>&nbsp;&nbsp;Brand Basics
          </h2>

          <div className="space-y-4">
            <p className="text-black">Our Story</p>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-300">
              S
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-black">Mission</p>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-300">
                M
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-black">Vision</p>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-300">
                V
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-black">Values</p>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-300">
                V
              </div>
            </div>
          </div>
        </div>
      </section>



      

      {/* Inspired by Core Brand Principles */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <div className="text-center md:text-right">
            <p className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-500">
              The Alchemist-King speaks with<br />
              <span className="font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl">E l e g a n t A u t h o r i t y</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-black">
                Inspired by our<br />Core Brand<br />Principles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-left text-gray-700">
            <div className="space-y-2">
              <p className="font-light text-black text-base sm:text-lg md:text-xl">We are...</p>
              <ul className="list-none text-base sm:text-lg md:text-xl font-bold text-black space-y-1">
                <li>Confident</li>
                <li>Knowledgeable</li>
                <li>Guiding</li>
                <li>Inspiring</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-light text-black text-base sm:text-lg md:text-xl">We avoid being...</p>
              <ul className="list-none text-base sm:text-lg md:text-xl font-bold text-black space-y-1">
                <li>Arrogant</li>
                <li>Pedantic</li>
                <li>Matter-of-fact</li>
                <li>Eccentric</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-light text-black text-base sm:text-lg md:text-xl">What makes us different...</p>
              <ul className="list-none text-base sm:text-lg md:text-xl font-bold text-black space-y-1">
                <li>Creativity</li>
                <li>Boldness</li>
                <li>Expertise</li>
                <li>Empathy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Authority */}
      <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="w-full">
            <Image
              src="/elegant.png"
              alt="Elegant Authority Architecture"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left">
            <div className="space-y-4 text-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Elegant Authority
              </h2>
              <p className="text-lg font-light text-gray-700">
                A creatively cosmopolitan brand that embodies strength and elegance,
                combining rational authority with subtle sophistication; serious, elite,
                and fiercely perceptive, with minimalist boldness.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-semibold text-black">1. Speak with "Quiet Confidence"</p>
                <p>We don't use exclamation marks to create excitement. Our authority comes from the fact that we know exactly what we are doing.</p>
              </div>
              <div>
                <p className="font-semibold text-black">2. Use Technical Poetry</p>
                <p>Combine scientific terminology (Authority) with evocative, sophisticated imagery (Elegance).</p>
              </div>
              <div>
                <p className="font-semibold text-black">3. The "Curator" Perspective</p>
                <p>Address the audience as someone who appreciates the finer details. We are the expert guides leading them through a premium experience.</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p><strong className="text-black">Style:</strong> Measured, intentional, and polished.</p>
              <p><strong className="text-black">Keywords:</strong> Resonance, Fidelity, Architecture, Nuance, Pulse, Spectrum, Composition.</p>
              <p><strong className="text-black">Example:</strong> "We don't just capture audio; we curate the spectrum to ensure every frequency finds its rightful home."</p>
              <p><strong className="text-black">Avoid:</strong> "WE MAKE THE LOUDEST SOUNDS EVER!!!!"</p>
              <p><strong className="text-black">Use:</strong> "Precision in every decibel. Clarity in every crest."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Personality at a Glance */}
      <section id="brand-personality" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
            Brand Personality at a Glance
          </h2>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-6xl font-light text-gray-500">The Alchemist-King</h3>
            <p className="text-base sm:text-lg text-gray-600 mt-1">Elegant Authority</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-gray-900"></th>
                  <th className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-center text-sm sm:text-base font-bold text-gray-900">BRAND CORE</th>
                  <th className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-center text-sm sm:text-base font-bold text-gray-900">STAFF ACTION</th>
                  <th className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-center text-sm sm:text-base font-bold text-gray-900">CUSTOMER PERCEPTION</th>
                  <th className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-center text-sm sm:text-base font-bold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">Core Archetypes</td>
                  <td className="border border-gray-300 bg-blue-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Creator (design-led innovation)*</td>
                  <td className="border border-gray-300 bg-green-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Sage (expert knowledge)</td>
                  <td className="border border-gray-300 bg-yellow-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Magician (transformational sonic experiences)</td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">FEEL</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">Secondary Influences</td>
                  <td className="border border-gray-300 bg-purple-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Rebel (audacious disruption)</td>
                  <td className="border border-gray-300 bg-orange-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Hero (performance excellence)</td>
                  <td className="border border-gray-300 bg-blue-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Explorer (discovery)</td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">DO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">Slight Hint</td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Lover (intimate emotional connection)</td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Innocent (purity of sound)</td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">Ruler (premium authority)</td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">THINK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

       {/* Competitive Landscape */}
      <section id="competitive-landscape" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6"><span className="font-light">1.3.</span>&nbsp;&nbsp;Competitive Landscape</h2>
          <Image
            src="/competitive-illustration.png"
            alt="Competitive Landscape"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

       {/* Target Audience */}
      <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6"><span className="font-light">1.5.</span>&nbsp;&nbsp;Target Audience</h2>
          <Image
            src="/target-audience-2.png"
            alt="Target Audience"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Brand Positioning Statement */}
      <section id="brand-positioning" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">1.6.&nbsp;&nbsp;</span> Brand Positioning Statement
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            We are premium audio retail purveyors{" "}
            for the discerning who desire immersive{" "}
            experiences because they want to transform{" "}
            how they hear, feel and connect with{" "}
            sounds. Unlike other premium audio retail{" "}
            purveyors, we use the <span className="font-semibold text-black">Soundhous Mix™</span>.
          </p>
        </div>
      </section>

      {/* TEE Section */}
            <section id="tee" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
              <div className="max-w-5xl mx-auto">
                <Image
                  src="/TEE-soundhous.png"
                  alt="TEE"
                  width={1000}
                  height={1000}
                  className="w-full h-auto mb-6"
                />
              </div>
            </section>


            {/* Brand Strategy at a Glance */}
                  <section id="brand-strategy-glance" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
                    <div className="max-w-5xl mx-auto">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.7.&nbsp;&nbsp;</span> Brand Strategy at a glance
                      </h2>
                      <Image
                        src="/glance.png"
                        alt="Brand Strategy at a Glance"
                        width={1000}
                        height={1000}
                        className="w-full h-auto mb-6"
                      />
                      <Image
                        src="/soundhous-images/brands.jpg"
                        alt="Brand Strategy"
                        width={1000}
                        height={1000}
                        className="w-full h-auto mb-6"
                      />
                    </div>
                  </section>


                  {/* 2.3.4 Logo Misuse */}
                        <section id="logo-misuse" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
                          <div className="max-w-6xl mx-auto space-y-12">
                  
                            {/* Title */}
                            <h2 className="text-2xl md:text-4xl font-bold text-black">
                              <span className="font-light">1.8.</span>&nbsp;&nbsp;Logo Misuse
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
                      <span className="font-light">1.9.</span>&nbsp;&nbsp;Logo Variations
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
                    <p className="mt-2 text-xs sm:text-sm text-center text-black">
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
                    <p className="mt-2 text-xs sm:text-sm text-center text-black">
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
                { label: "I. SIGNATURE LOGO", img: "/logo1.png", imgClass: "w-24" },
                { label: "II. SECONDARY LOGO", img: "/logo2.png", imgClass: "w-24" },
                { label: "III. ATTENTION LOGO", img: "/logo3.png", imgClass: "w-24" },
                { label: "IV. SUBMARK", img: "/logo4.png", imgClass: "w-12" },
                { label: "V. FAVICON", img: "/logo5.png", imgClass: "w-12" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-64 text-gray-300 tracking-wide">
                    {item.label}
                  </div>
                  <div className="flex-1 h-px bg-gray-600 relative">
                    <div className="absolute right-0 top-0 h-4 w-px bg-gray-600 translate-y-[-8px]" />
                  </div>
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={120}
                    height={60}
                    className={`h-auto ${item.imgClass} object-contain`}
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
            
      

{/* 2.3.3 Minimum Size and Format */}
      <section
        id="minimum-size-format"
        className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">1.10.</span>&nbsp;&nbsp;Minimum Size and Format
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

      
      <section id="general-clothing-guide" className="px-6 md:px-12 py-16 bg-white">
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
                {/* LEFT — TEXT */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="font-light">1.11.</span>&nbsp;&nbsp;General clothing guide
                  </h2>
      
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {`For a professional and unified appearance of all personnel representing Soundhous at events and exhibitions, the instructions in the Event and exhibition clothing guideline shall be followed.
      
      It includes guidelines for different clothing categories (that the Project Manager for the event in question can choose from): Business formal, Business casual and Casual.`}
                  </p>
                </div>
      
                {/* MIDDLE */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    <Image
                      src="/clothing-vertical.png"
                      alt="General clothing example"
                      width={500}
                      height={800}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
      
                {/* RIGHT */}
                <div className="flex flex-col gap-6">
                  {/* Right Top Text */}
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Typography:</span> If any text is added
                    (e.g., "STAFF" or "TECH SUPPORT"), use Rubik font.
                  </p>
      
                  {/* Right Images */}
                  <div className="flex flex-col gap-6">
                    <Image
                      src="/staff-sketch.png"
                      alt="staff sketch example"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover rounded-lg"
                    />
      
                    <Image
                      src="/clothing-example.png"
                      alt="Clothing typography example 2"
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

             <section id="new-joiner" className="scroll-mt-24">
                    <div className="max-w-full mx-auto">
                      <Image
                        src="/new-joiner/new-joiner-last-slide.png"
                        alt="Brand Guideline"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      />
                    </div>
                  </section>
                  </main>

    </div>
  );
}