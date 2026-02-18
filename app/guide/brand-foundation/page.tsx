import Image from "next/image";
import Link from "next/link";
import { QuoteMark } from "../components/Quotemark";

export default function BrandFoundationPage() {
  return (
    <div className="bg-white">
      {/* Brand Foundation */}
      <section id="brand-foundation" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/soundhous-images/brand-foundation01.jpg"
            alt="Brand Foundation"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Brand Basics */}
      <section id="brand-basics" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">1.1</span>&nbsp;&nbsp;Brand Basics
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

      {/* Brand Philosophy */}
      <section id="brand-philosophy" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.2</span>&nbsp;&nbsp;Brand Philosophy
          </h2>
          <Image
            src="/alchemist.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      {/* The Alchemist-King */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
            Mindset
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black">
            The Alchemist-King
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500">
              <ul className="space-y-2 list-disc list-inside">
                <li>Creative</li>
                <li>Analytical</li>
                <li>Authoritative</li>
                <li>Cosmopolitan</li>
              </ul>
            </div>

            <div className="border-l-0 md:border-l border-gray-300 md:pl-6 lg:pl-8">
              <Image
                src="/archetype-combination.png"
                alt="Archetype Combination"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Archetype */}
      <section id="brand-archetype" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.2.1</span>&nbsp;&nbsp;Brand Archetype
          </h2>
          <Image
            src="/brand-archetype.png"
            alt="Brand Archetype"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      {/* Tone of Voice */}
      <section id="tone-of-voice" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.3</span>&nbsp;&nbsp;Tone of voice
          </h2>
          <Image
            src="/elegant-authority.png"
            alt="Tone of Voice"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6"><span className="font-light">1.4</span>&nbsp;&nbsp;Competitive Landscape</h2>
          <Image
            src="/shd-1.png"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6"><span className="font-light">1.5</span>&nbsp;&nbsp;Target Audience</h2>
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

      {/* Brand DNA */}
      <section id="brand-dna" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.7</span>&nbsp;&nbsp;Brand DNA
          </h2>
          <Image
            src="/soundhous-mix.png"
            alt="Brand DNA"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
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

      {/* Brand Tagline */}
      <section id="brand-tagline" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">1.8.</span> Brand Tagline
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              Our tagline is a powerful 
               tool that helps people
                recognise us. To keep it 
                 effective, follow these 
                  simple rules:
            </p>

            <div className="relative flex justify-center items-center py-8 md:py-0">
              <div className="relative inline-block">
                {/* LEFT QUOTE */}
                <QuoteMark className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-16 -top-8 sm:-top-10 md:-top-12 lg:-top-14 w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 text-gray-600 opacity-70" />

                {/* TEXT - Centered */}
                <div className="text-center px-4 sm:px-6">
                  <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                    MAKE GOOD
                  </p>
                  <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                    SOUND BETTER
                  </p>
                </div>

                {/* RIGHT QUOTE - Pushed right and down */}
                <QuoteMark className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 xl:-right-20 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] lg:bottom-[-30px] w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 text-gray-600 opacity-70 rotate-180" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <ul className="space-y-3 sm:space-y-4 text-gray-900 text-sm sm:text-base leading-relaxed">
              <li>• Only use the tagline when it really adds value. If it's everywhere, people will start to ignore it.</li>
              <li>• Do not change the words, the order, or the punctuation. It must stay exactly as it was designed.</li>
              <li>• Use CAPITAL LETTERS. No need to end it with a period (full stop).</li>
            </ul>
            <ul className="space-y-3 sm:space-y-4 text-gray-900 text-sm sm:text-base leading-relaxed">
              <li>• Ensure it fits naturally into the grammar of your sentence. Use only black and white. No other colours are allowed.</li>
              <li>• If the letter "M" in the tagline is shorter than 3mm, it is too small to read and shouldn't be used.</li>
            </ul>
            <ul className="space-y-3 sm:space-y-4 text-gray-900 text-sm sm:text-base leading-relaxed lg:mt-12">
              <li>• Always leave a "clear zone" around the tagline. This empty space should be at least as large as the tagline itself on all sides to make sure it stands out.</li>
            </ul>
          </div>

          {/* Horizontal Divider Section */}
          <div className="border-t border-gray-300 pt-8 sm:pt-10 md:pt-12 mt-8 sm:mt-10 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* LEFT - Image */}
              <div className="flex justify-start">
                <Image
                  src="/tagline-graphics.png"
                  alt="Tagline graphic representation"
                  width={200}
                  height={100}
                  className="w-32 sm:w-40 md:w-48 h-auto object-contain"
                />
              </div>

              {/* MIDDLE - Text */}
              <div className="text-gray-900 text-sm sm:text-sm space-y-2 leading-relaxed">
                We have a specialised version of our tagline designated for graphical representation, for example on printed materials.
              </div>

              {/* RIGHT - Link */}
              <div className="text-gray-900 text-sm sm:text-sm flex flex-col items-start space-y-1">
                <span className="text-gray-900">See section</span>
                <Link href="#logo-blueprint" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Logo Blueprint Rules/Co-Branding
                </Link>
                <span className="text-gray-900">for more information</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Messaging */}
      <section id="brand-messaging" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            <span className="font-light">1.9.</span> Brand Messaging
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-gray-800">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl font-light">
                Our name is <span className="font-semibold">Soundhous®</span>.
                Soundhous is a proper noun. Always capitalise the first letter;
                never write our brand name in lowercase.
              </p>

              <div>
                <h3 className="font-bold text-black mb-2 text-base sm:text-lg">House Rules</h3>
                <p className="text-sm sm:text-base">
                  To show that we are a supportive partner to our customers,
                  we use a friendly and personal style of writing.
                  All messaging should follow UK Grammar and Spelling.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:mt-20">
              <div>
                <h3 className="font-bold text-black mb-2 text-base sm:text-lg">The First Mention:</h3>
                <p className="text-sm sm:text-base">
                  The very first time you write our name in an official document
                  (like a press release or company profile), use this full title:
                </p>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  "Soundhous, a CED Africa business."
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  After you have used that full title once, you can use "Soundhous"
                  for the rest of the text.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-base sm:text-lg">Be a Team:</h3>
                <p className="text-sm sm:text-base">
                  After the first mention of the full name, use words like
                  "we," "our," and "us" when talking about the company and our people.
                  This makes us sound like a team of real people.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:mt-20">
              <div>
                <h3 className="font-bold text-black mb-2 text-base sm:text-lg">The Single Entity Exception:</h3>
                <p className="text-sm sm:text-base">
                  If you are talking about the company as a single official organisation,
                  use words like "it" or "its."
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-base sm:text-lg">Examples</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Personal (Plural):</p>
                    <p className="italic text-gray-700 text-sm sm:text-base">
                      "At Soundhous, we are excited to announce our latest product launch."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Official (Singular):</p>
                    <p className="italic text-gray-700 text-sm sm:text-base">
                      "Soundhous is a leader in its field."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy */}
      <section id="brand-strategy" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="font-light">1.10</span>&nbsp;&nbsp;Brand Strategy
          </h2>
          <Image
            src="/brand-strategy-2.png"
            alt="Brand Strategy"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      {/* Brand Strategy Summary */}
      <section id="brand-strategy-summary" className="w-full bg-black px-6 md:px-12 py-16 md:py-24 text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            Brand Strategy Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <p className="font-light text-lg">Our Framework is divided into <br />
              four primary quadrants:</p>
              <div>
                <p className="font-bold">Story (The "Why"):</p>
                <p className="font-light">
                  Focused on connecting and emoting with the audience
                  through a narrative anchored by the "Elegant Authority" tone.
                </p>
              </div>
              <div>
                <p className="font-bold">Audience (The "Who"):</p>
                <p className="font-light">
                  We target "Discerning Customers" seeking exceptional, immersive audio experiences
                  and "Premium Audio Retail Purveyors."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold">Product/Service (The "What"):</p>
                <p className="font-light">What differentiates us is made up of three distinct parts:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-light"><span className="font-semibold">Technology:</span> Off-the-shelf purchases.</li>
                  <li className="font-light"><span className="font-semibold">Experiences:</span> Experiential audio.</li>
                  <li className="font-light"><span className="font-semibold">Expertise:</span> Professional consultancy.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Personality (The "How"):</p>
                <p className="font-light">Defined by the overarching archetype of The Alchemist-King.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy at a Glance */}
      <section id="brand-strategy-glance" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Brand Strategy at a glance
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
    </div>
  );
}