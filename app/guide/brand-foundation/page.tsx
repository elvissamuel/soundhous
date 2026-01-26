import Image from 'next/image';
import PersonalityHero from '../components/PersonalityHero';

export default function BrandStrategyPage() {
  return (
    <div className="bg-white">
      {/* Our Story Section */}
      <section id="our-story" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h1>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          {/* Large image */}
          <div className="relative w-full mb-8 aspect-[4/2]">
            <Image
              src="/img-1.png"
              alt="Person with sound waves overlay"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Mission Section */}
      <section id="mission" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Mission</h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative w-full lg:w-[500px] lg:flex-shrink-0 aspect-[6/3]">
              <Image
                src="/img-2.png"
                alt="Person with headphones"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Vision Section */}
      <section id="vision" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Vision</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Values Section */}
      <section id="values" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Two images at top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/img-3.png"
                alt="Futuristic Earth with audio equipment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/img-4.png"
                alt="Hand adjusting audio mixing console"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Values</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Personality Section */}
      <section id="brand-personality" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        {/* <PersonalityHero title="Brand Personality" /> */}
        <div className="max-w-5xl mx-auto">
          {/* Mindset Header */}
          <div className="mb-4 sm:mb-6">
          <span className="text-sm block sm:text-base md:text-lg font-bold text-gray-800">Brand Personality</span>
            
            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Mindset</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12">The Alchemist-King</h2>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8 sm:mb-12 justify-between">
            {/* Left Section - Bulleted List */}
            <div className="">
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className='w-3 h-3 bg-gray-600 rounded-full mr-2 mt-4'/>
                  <span className="text-lg sm:text-xl md:text-5xl text-gray-600">Creative</span>
                </li>
                <li className="flex items-start">
                  <div className='w-3 h-3 bg-gray-600 rounded-full mr-2 mt-4'/>
                  <span className="text-lg sm:text-xl md:text-5xl text-gray-600">Analytical</span>
                </li>
                <li className="flex items-start">
                  <div className='w-3 h-3 bg-gray-600 rounded-full mr-2 mt-4'/>
                  <span className="text-lg sm:text-xl md:text-5xl text-gray-600">Authoritative</span>
                </li>
                <li className="flex items-start">
                  <div className='w-3 h-3 bg-gray-600 rounded-full mr-2 mt-4'/>
                  <span className="text-lg sm:text-xl md:text-5xl text-gray-600">Cosmopolitan</span>
                </li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-gray-900"></div>

            {/* Right Section - Archetype Combination */}
            <div className=" lg:max-w-xs">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Archetype Combination</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-base sm:text-lg md:text-xl text-gray-900">
                  Primary &lt;&gt; <span className="font-semibold">SAGE</span>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-900">
                  Secondary &lt;&gt; <span className="font-semibold">Creator</span>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-900">
                  Tertiary &lt;&gt; <span className="font-semibold">Magician</span>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-900 mt-4 sm:mt-6">
                  Hint: <span className="font-semibold">Hero, Rebel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Pattern */}
          <div className="relative w-full h-16 sm:h-20 md:h-24 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
                fill="#f3f4f6"
                className="opacity-50"
              />
              <path
                d="M0,60 Q200,30 400,60 T800,60 T1200,60 L1200,100 L0,100 Z"
                fill="#e5e7eb"
                className="opacity-40"
              />
              <path
                d="M0,70 Q400,40 800,70 T1200,70 L1200,100 L0,100 Z"
                fill="#d1d5db"
                className="opacity-30"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Target Audience Section */}
      <section id="brand-personality" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Brand Archetype</h2>
          <Image src="/brand-architype.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

            {/* Target Audience Section */}
      <section id="tone-of-voice" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-16">Tone of Voice</h2>
          <Image src="/tone-voice1.png" alt="Tone of Voice" width={1000} height={1000} className="w-full h-auto" />
        </div>

        <div className="max-w-5xl mx-auto mt-8 sm:mt-12">
          {/* Main Title - Top Left, Three Lines */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">Inspired by our</span>
              <span className="block">Core Brand</span>
              <span className="block">Principles</span>
            </h2>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Column 1 - We are... */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                We are...
              </h3>
              <ul className="font-semibold">
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Confident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Knowledgeable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Guiding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Inspiring</span>
                </li>
              </ul>
            </div>

            {/* Column 2 - We avoid being... */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                We avoid being...
              </h3>
              <ul className="font-semibold">
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Arrogant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Pedantic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Matter-of-fact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Eccentric</span>
                </li>
              </ul>
            </div>

            {/* Column 3 - What makes us different... */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                What makes us different...
              </h3>
              <ul className="font-semibold">
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Creative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Boldness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-base sm:text-lg text-gray-900">Empathy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Wave Pattern */}
          <div className="relative w-full h-16 sm:h-20 md:h-24 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
                fill="#f3f4f6"
                className="opacity-60"
              />
              <path
                d="M0,60 Q200,30 400,60 T800,60 T1200,60 L1200,100 L0,100 Z"
                fill="#e5e7eb"
                className="opacity-50"
              />
              <path
                d="M0,70 Q400,40 800,70 T1200,70 L1200,100 L0,100 Z"
                fill="#d1d5db"
                className="opacity-40"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div> 

      {/* Elegant Authority */}
      <section id="tone-of-voice" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">

          {/* Main Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
            Elegant Authority
          </h2>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Column 1 - Brand Description */}
            <div>
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                A creatively cosmopolitan brand that embodies strength and elegance, combining rational authority with subtle sophistication; serious, elite, and fiercely perceptive, with minimalist boldness.
              </p>
            </div>

            {/* Column 2 - Speak with "Quiet Confidence" */}
            <div className="space-y-4 sm:space-y-6">
              {/* 1. Speak with "Quiet Confidence" */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  1. Speak with &quot;Quiet Confidence&quot;
                </h3>
                <p className="text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
                  We don&apos;t use exclamation marks to create excitement. Our authority comes from the fact that we know exactly what we are doing.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <span className="text-sm sm:text-base text-gray-900 font-semibold">Avoid:</span>
                    <p className="text-sm sm:text-base text-gray-900 font-bold uppercase mt-1">
                      WE MAKE THE LOUDEST SOUNDS EVER!!!!
                    </p>
                  </div>
                  <div>
                    <span className="text-sm sm:text-base text-gray-900 font-semibold">Use:</span>
                    <p className="text-sm sm:text-base text-gray-900 font-bold mt-1">
                      Precision in every decibel. Clarity in every crest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div>
                <p className="text-sm sm:text-base text-gray-900 font-semibold mb-2">Keywords:</p>
                <p className="text-sm sm:text-base text-gray-900 font-bold">
                  Resonance, Fidelity, Architecture, Nuance, Pulse, Spectrum, Composition.
                </p>
              </div>

              {/* Example */}
              <div>
                <p className="text-sm sm:text-base text-gray-900 font-semibold mb-2">Example:</p>
                <p className="text-sm sm:text-base text-gray-900 font-bold">
                  We don&apos;t just capture audio; we curate the spectrum to ensure every frequency finds its rightful home.
                </p>
              </div>
            </div>

            {/* Column 3 - Technical Poetry and Curator Perspective */}
            <div className="space-y-4 sm:space-y-6">
              {/* 2. Use Technical Poetry */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  2. Use Technical Poetry
                </h3>
                <p className="text-sm sm:text-base text-gray-900">
                  Combine scientific terminology (Authority) with evocative, sophisticated imagery (Elegance).
                </p>
              </div>

              {/* 3. The "Curator" Perspective */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  3. The &quot;Curator&quot; Perspective
                </h3>
                <p className="text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
                  Address the audience as someone who appreciates the finer details. We are the expert guides leading them through a premium experience.
                </p>
                <div>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold">Style:</span>
                  <p className="text-sm sm:text-base text-gray-900 font-bold mt-1">
                    Measured, intentional, and polished.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer with Wave Pattern */}
          <div className="relative w-full mt-12 sm:mt-16">
            {/* Wavy Line Graphic */}
            <div className="relative w-full h-12 sm:h-16 overflow-hidden mb-4">
              <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
                <path
                  d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z"
                  fill="#f3f4f6"
                  className="opacity-50"
                />
                <path
                  d="M0,35 Q200,15 400,35 T800,35 T1200,35 L1200,60 L0,60 Z"
                  fill="#e5e7eb"
                  className="opacity-40"
                />
                <path
                  d="M0,40 Q400,20 800,40 T1200,40 L1200,60 L0,60 Z"
                  fill="#d1d5db"
                  className="opacity-30"
                />
              </svg>
            </div>

            {/* Footer Text */}
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
              <span>January 2026</span>
              <span>14</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Personality at a Glance Section */}
      <section id="tone-of-voice" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
            Brand Personality at a Glance
          </h2>
          
          {/* Subtitle */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">The Alchemist-King</h3>
            <p className="text-base sm:text-lg text-gray-600 mt-1">Elegant Authority</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
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
                {/* Row 1: Core Archetypes / FEEL */}
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">
                    Core Archetypes
                  </td>
                  <td className="border border-gray-300 bg-blue-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Creator (design-led innovation)*
                  </td>
                  <td className="border border-gray-300 bg-green-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Sage (expert knowledge)
                  </td>
                  <td className="border border-gray-300 bg-yellow-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Magician (transformational sonic experiences)
                  </td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">
                    FEEL
                  </td>
                </tr>

                {/* Row 2: Secondary Influences / DO */}
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">
                    Secondary Influences
                  </td>
                  <td className="border border-gray-300 bg-purple-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Rebel (audacious disruption)
                  </td>
                  <td className="border border-gray-300 bg-orange-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Hero (performance excellence)
                  </td>
                  <td className="border border-gray-300 bg-blue-100 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Explorer (discovery)
                  </td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">
                    DO
                  </td>
                </tr>

                {/* Row 3: Slight Hint / THINK */}
                <tr>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top">
                    Slight Hint
                  </td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Lover (intimate emotional connection)
                  </td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Innocent (purity of sound)
                  </td>
                  <td className="border border-gray-300 bg-gray-200 p-3 sm:p-4 text-sm sm:text-base text-gray-900 align-top">
                    Ruler (premium authority)
                  </td>
                  <td className="border border-gray-300 bg-gray-50 p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 align-top text-center">
                    THINK
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="competitive-landscape" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className='text-2xl font-bold text-gray-800 mb-4 sm:mb-6'>Competitive Landscape</h2>
          <Image src="/shd-1.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className='text-2xl font-bold text-gray-800 mb-4 sm:mb-6'>1.7 Target Audience</h2>
          <Image src="/target-audience.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      <section id="brand-positioning-statement" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Number and Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            1.7. Brand Positioning Statement
          </h2>

          {/* Paragraph Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
            We are premium audio retail purveyors for the discerning who desire immersive experiences because they want to transform how they hear, feel and connect with sounds, unlike other premium audio retail purveyors, we use the Soundhous mix™.
          </p>

          {/* Bottom Wave Pattern */}
          <div className="relative w-full h-12 sm:h-16 md:h-20 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
              <path
                d="M0,40 Q200,20 400,40 T800,40 T1200,40 L1200,80 L0,80 Z"
                fill="#f3f4f6"
                className="opacity-40"
              />
              <path
                d="M0,45 Q150,25 300,45 T600,45 T900,45 T1200,45 L1200,80 L0,80 Z"
                fill="#e5e7eb"
                className="opacity-30"
              />
              <path
                d="M0,50 Q250,30 500,50 T1000,50 T1200,50 L1200,80 L0,80 Z"
                fill="#d1d5db"
                className="opacity-20"
              />
              <path
                d="M0,55 Q300,35 600,55 T1200,55 L1200,80 L0,80 Z"
                fill="#9ca3af"
                className="opacity-15"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-16">1.9 Brand DNA</h2>
          <Image src="/sd-mix.png" alt="Tone of Voice" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Tone Section */}
      <section id="brand-dna" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Number and Title - Top Left */}
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-12 sm:mb-16">
            1.8. Brand DNA
          </h2>

          {/* Large TEE with Quotation Marks - Centered */}
          <div className="relative flex items-center justify-center">
            {/* Opening Quotation Mark - Left, Dark Gray */}
            <div className="absolute left-0 sm:left-8 md:left-64 text-gray-600 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none">
              &ldquo;
            </div>
            
            {/* TEE Text - Large, Bold, Black, Centered */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extrabold text-gray-900 leading-none tracking-tight">
              TEE
            </h1>

            {/* Closing Quotation Mark - Right, Lighter/Faded */}
            <div className="absolute right- sm:right-8 md:right-64 text-gray-400 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none opacity-40">
              &rdquo;
            </div>
          </div>

          {/* Tagline - Below TEE, Dark Gray, Smaller */}
          <p className="text-sm sm:text-base md:text-xl text-gray-700 text-center">
            TEE IS THE SOUNDHOUS MIX
          </p>

          {/* Three Descriptive Lines - Dark Gray, Left Aligned */}
          <div className="mb-6 text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              It is our own unique proprietary in-house system that differentiates us.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              It is our proprietary business model. Our way of doing things.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              It is our secret source. Our DNA. All new joiners must be made aware
            </p>
          </div>

          {/* Formula at Bottom Center - Dark Gray */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              SOUNDHOUS BRAND DNA = <span className="underline decoration-2">T</span>ECHNOLOGY + <span className="underline decoration-2">E</span>XPERIENCE + <span className="underline decoration-2">E</span>XPERTISE
            </p>
          </div>

        </div>
      </section>

      {/* Make good sound section */}
      <section id="brand-tagline" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
      <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-12 sm:mb-16">
            1.10. Brand Tagline
          </h2>
        <div className="max-w-5xl mx-auto">
          {/* Introduction Paragraph - Top Left */}
          <p className="text-sm sm:text-base text-gray-700 mb-10 sm:mb-14 leading-relaxed max-w-2xl">
            Our tagline is a powerful tool that helps people recognize us. To keep it effective, follow these simple rules:
          </p>

          {/* Main Tagline Display - Center with Quotation Marks */}
          <div className="relative mb-12 sm:mb-16">
            <div className="flex items-center justify-center">
              {/* Opening Quotation Mark - Left, Dark Gray */}
              <div className="text-gray-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none mr-4 sm:mr-6">
                &ldquo;
              </div>
              
              {/* Tagline Text - Large, Bold, Black, Two Lines with Indentation */}
              <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  <span className="block">Make good</span>
                  <span className="block ml-6 sm:ml-8 md:ml-12 lg:ml-16">sound better</span>
                </h1>
              </div>

              {/* Closing Quotation Mark - Right, Dark Gray */}
              <div className="text-gray-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none ml-4 sm:ml-6">
                &rdquo;
              </div>
            </div>
          </div>

          {/* Two Column Layout for Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Left Column Rules - Below Introduction */}
            <div>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Only use the tagline when it really adds value. If it&apos;s everywhere, people will start to ignore it.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Do not change the words, the order, or the punctuation. It must stay exactly as it was designed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Use Sentence case (Capitalize only the first letter and any proper nouns). Always end it with a period (full stop).
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column Rules - Below Tagline */}
            <div>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Ensure it fits naturally into the grammar of your sentence. Use only black and white. No other colours are allowed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    If the letter &quot;M&quot; in the tagline is shorter than 3mm, it is too small to read and shouldn&apos;t be used.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 mt-1 text-sm">•</span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Always leave a &quot;clear zone&quot; around the tagline. This empty space should be at least as large as the tagline itself on all sides to make sure it stands out.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Messaging Section */}
      <section id="brand-messaging" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Title - Top Left, Large Bold */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8 sm:mb-12">
            1.11. Brand Messaging
          </h2>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {/* Column 1: Brand Name Usage */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6 leading-relaxed">
                  Our name is Soundhous®. To keep our brand consistent, follow these steps:
                </p>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  The First Mention:
                </h3>
                <p className="text-sm sm:text-base text-gray-900 mb-3 leading-relaxed">
                  <span className="font-semibold">Rule:</span> The very first time you write our name in an official document (like a press release or company profile), use this full title:
                </p>
                <p className="text-sm sm:text-base text-gray-900 mb-3 leading-relaxed italic">
                  &quot;Soundhous, a business of CED Africa.&quot;
                </p>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  After you have used that full title once, you can just use &quot;Soundhous&quot; for the rest of the text.
                </p>
              </div>
            </div>

            {/* Column 2: Writing Style and Tone */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Tailored just for you:
                </h3>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  <span className="font-semibold">Guideline:</span> To show that we are a supportive partner to our customers, we use a friendly and personal style of writing.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Be a Team:
                </h3>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  <span className="font-semibold">Guideline:</span> After the first mention of the full name, use words like &quot;we,&quot; &quot;our,&quot; and &quot;us&quot; when talking about the company and our people. This makes us sound like a team of real people.
                </p>
              </div>
            </div>

            {/* Column 3: Entity Pronoun Usage and Examples */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  The Single Entity Exception:
                </h3>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  <span className="font-semibold">Rule:</span> If you are talking about the company as a single official organization, use words like &quot;it&quot; or &quot;its.&quot;
                </p>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Examples:
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm sm:text-base text-gray-900 font-semibold mb-2">
                      Personal (Plural):
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 italic leading-relaxed">
                      &quot;At Soundhous, we are excited to announce our latest product launch.&quot;
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                      (This example demonstrates the use of &quot;we&quot; when referring to the company and its people.)
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base text-gray-900 font-semibold mb-2">
                      Official (Singular):
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 italic leading-relaxed">
                      &quot;Soundhous is a leader in its field.&quot;
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                      (This example demonstrates the use of &quot;its&quot; when referring to the company as a single entity.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wavy Line Pattern - Faint, Light Gray */}
          <div className="relative w-full h-16 sm:h-20 md:h-24 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              {/* Faint wavy lines curving from bottom corners, meeting in center */}
              <path
                d="M0,100 Q200,60 400,80 T800,80 T1200,80 L1200,100 L0,100 Z"
                fill="#e5e7eb"
                className="opacity-20"
              />
              <path
                d="M0,100 Q300,50 600,70 T1200,70 L1200,100 L0,100 Z"
                fill="#d1d5db"
                className="opacity-15"
              />
              <path
                d="M0,100 Q150,70 300,85 T600,85 T900,85 T1200,85 L1200,100 L0,100 Z"
                fill="#9ca3af"
                className="opacity-10"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Brand strategy section */}
      <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-16">1.12. Brand Strategy</h2>
          <Image src="/brand-strategy.png" alt="Tone of Voice" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      {/* Brand Strategy Summary Section */}
      <section id="brand-strategy-summary" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Title - Top Left, Large Bold White */}
          <h2 className="text-2xl font-bold text-white mb-8 sm:mb-12">
            Brand Strategy Summary
          </h2>

          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12 leading-relaxed">
            Our Framework is divided into four primary quadrants:
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 mb-12 sm:mb-16">
            {/* Left Column */}
            <div className="space-y-8 sm:space-y-10">
              {/* Story (The "Why") */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Story (The &quot;Why&quot;):
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Focused on connecting and emoting with the audience through a narrative anchored by the &quot;Elegant Authority&quot; tone.
                </p>
              </div>

              {/* Audience (The "Who") */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Audience (The &quot;Who&quot;):
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  We target &quot;Discerning Customers&quot; seeking exceptional, immersive audio experiences and &quot;Premium Audio Retail Purveyors.&quot;
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 sm:space-y-10">
              {/* Product/Service (The "What") */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Product/Service (The &quot;What&quot;):
                </h3>
                <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed">
                  Made up of three distinct parts:
                </p>
                <ul className="space-y-1">
                  <li>
                    <span className="text-sm sm:text-base text-white font-bold">Technology:</span>
                    <span className="text-sm sm:text-base text-white ml-2">Off-the-shelf purchases.</span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base text-white font-bold">Experiences:</span>
                    <span className="text-sm sm:text-base text-white ml-2">Experiential audio.</span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base text-white font-bold">Expertise:</span>
                    <span className="text-sm sm:text-base text-white ml-2">Professional consultancy.</span>
                  </li>
                </ul>
              </div>

              {/* Personality (The "How") */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Personality (The &quot;How&quot;):
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Defined by the overarching archetype of The Alchemist-King, supported by secondary traits: Sage, Magician, and Ruler.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wave Pattern - Subtle, Light Gray/White */}
          <div className="relative w-full h-20 sm:h-24 md:h-32 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              {/* Abstract wave pattern with thin parallel lines */}
              <path
                d="M0,120 Q150,80 300,100 T600,100 T900,100 T1200,100 L1200,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.1)"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="0.5"
              />
              <path
                d="M0,120 Q200,70 400,90 T800,90 T1200,90 L1200,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.08)"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="0.5"
              />
              <path
                d="M0,120 Q100,90 200,105 T400,105 T600,105 T800,105 T1000,105 T1200,105 L1200,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.06)"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
              />
              <path
                d="M0,120 Q250,60 500,85 T1000,85 T1200,85 L1200,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
      </section>

       {/* Brand strategy section */}
       <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-16">Brand Strategy at a Glance</h2>
          <Image src="/b-strat.png" alt="Tone of Voice" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

       {/* Brand strategy section */}
       <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-16">Brand Strategy at a Glance</h2> */}
          <Image src="/brand-chart.png" alt="Tone of Voice" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

    </div>
  );
}
