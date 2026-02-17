import Image from "next/image";

export default function BrandFoundationPage() {
  return (
    <div className="bg-white">

      {/* Brand Foundation */}
      <section id="brand-foundation" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/brand-foundation.png"
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
            <span className="font-normal mr-2">1.1.</span> Brand Basics
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
            1.2&nbsp;&nbsp;Brand Philosophy
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
      <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-2xl font-bold text-black">
            Mindset
          </h2>
          <h2 className="text-2xl md:text-5xl font-bold text-black">
            The Alchemist-King
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700">
              <ul className="list-none space-y-2">
                <li className="font-semibold">Creative</li>
                <li className="font-semibold">Analytical</li>
                <li className="font-semibold">Authoritative</li>
                <li className="font-semibold">Cosmopolitan</li>
              </ul>
            </div>

            <div className="border-l border-gray-300 pl-8">
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
            1.2.1&nbsp;&nbsp;Brand Archetype
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
            1.3&nbsp;&nbsp;Tone of voice
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
      <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-2xl font-bold text-black">
                Inspired by our<br />Core Brand<br />Principles
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-black">
                The Alchemist-King speaks with<br />Elegant Authority
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-gray-700">
            <div className="space-y-2">
              <p className="font-semibold text-black">We are...</p>
              <ul className="list-none space-y-1">
                <li>Confident</li>
                <li>Knowledgeable</li>
                <li>Guiding</li>
                <li>Inspiring</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-black">We avoid being...</p>
              <ul className="list-none space-y-1">
                <li>Arrogant</li>
                <li>Pedantic</li>
                <li>Matter-of-fact</li>
                <li>Eccentric</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-black">What makes us different...</p>
              <ul className="list-none space-y-1">
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
              <p>
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">The Alchemist-King</h3>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6">1.4&nbsp;&nbsp;Competitive Landscape</h2>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6">1.5&nbsp;&nbsp;Target Audience</h2>
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
      <section id="brand-positioning" className="w-full bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-normal mr-2">1.6.&nbsp;&nbsp;</span> Brand Positioning Statement
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We are premium audio retail purveyors for the discerning who desire immersive experiences
            because they want to transform how they hear, feel and connect with sounds. Unlike other
            premium audio retail purveyors, we use the <span className="font-semibold text-black">Soundhous Mix™</span>.
          </p>
        </div>
      </section>

      {/* Brand DNA */}
      <section id="brand-dna" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            1.7&nbsp;&nbsp;Brand DNA
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
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 sm:left-8 md:left-64 text-gray-600 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none">
              &ldquo;
            </div>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extrabold text-gray-900 leading-none tracking-tight">
              TEE
            </h1>
            <div className="absolute right-0 sm:right-8 md:right-64 text-gray-400 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none opacity-40">
              &rdquo;
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-xl text-gray-700 text-center">
            TEE IS THE SOUNDHOUS MIX
          </p>

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

          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              SOUNDHOUS BRAND DNA = <span className="underline decoration-2">T</span>ECHNOLOGY + <span className="underline decoration-2">E</span>XPERIENCE + <span className="underline decoration-2">E</span>XPERTISE
            </p>
          </div>
        </div>
      </section>

      {/* Brand Tagline */}
      <section id="brand-tagline" className="w-full bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-normal mr-2">1.8.</span> Brand Tagline
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-gray-700 leading-relaxed max-w-md">
              Our tagline is a powerful tool that helps people recognise us.
              To keep it effective, follow these simple rules:
            </p>

            <div className="relative flex justify-start lg:justify-end">
              <div className="relative">
                <span className="absolute -left-6 md:-left-10 -top-6 text-gray-400 text-6xl md:text-8xl font-bold">
                  &ldquo;
                </span>
                <div className="text-left lg:text-right">
                  <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
                    MAKE GOOD
                  </p>
                  <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
                    SOUND BETTER
                  </p>
                </div>
                <span className="absolute -right-6 md:-right-10 bottom-0 text-gray-400 text-6xl md:text-8xl font-bold">
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>• Only use the tagline when it really adds value. If it's everywhere, people will start to ignore it.</li>
              <li>• Do not change the words, the order, or the punctuation. It must stay exactly as it was designed.</li>
              <li>• Use CAPITAL LETTERS. No need to end it with a period (full stop).</li>
            </ul>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>• Ensure it fits naturally into the grammar of your sentence. Use only black and white. No other colours are allowed.</li>
              <li>• If the letter "M" in the tagline is shorter than 3mm, it is too small to read and shouldn't be used.</li>
            </ul>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>• Always leave a "clear zone" around the tagline. This empty space should be at least as large as the tagline itself on all sides to make sure it stands out.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Messaging */}
      <section id="brand-messaging" className="px-6 md:px-12 py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            <span className="font-normal mr-2">1.9.</span> Brand Messaging
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
            <div className="space-y-6">
              <p>
                Our name is <span className="font-semibold">Soundhous®</span>.
                Soundhous is a proper noun. Always capitalise the first letter;
                never write our brand name in lowercase.
              </p>
              <div>
                <h3 className="font-bold text-black mb-2">The First Mention</h3>
                <p>
                  The very first time you write our name in an official document
                  (like a press release or company profile), use this full title:
                </p>
                <p className="italic text-gray-700 mt-2">
                  "Soundhous, a CED Africa business."
                </p>
                <p className="mt-2">
                  After you have used that full title once, you can use "Soundhous"
                  for the rest of the text.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">House Rules</h3>
                <p>
                  To show that we are a supportive partner to our customers,
                  we use a friendly and personal style of writing.
                  All messaging should follow UK Grammar and Spelling.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Be a Team</h3>
                <p>
                  After the first mention of the full name, use words like
                  "we," "our," and "us" when talking about the company and our people.
                  This makes us sound like a team of real people.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">The Single Entity Exception</h3>
                <p>
                  If you are talking about the company as a single official organisation,
                  use words like "it" or "its."
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Examples</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Personal (Plural):</p>
                    <p className="italic text-gray-700">
                      "At Soundhous, we are excited to announce our latest product launch."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Official (Singular):</p>
                    <p className="italic text-gray-700">
                      "Soundhous is a leader in its field."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12"></div>
        </div>
      </section>

      {/* Brand Strategy */}
      <section id="brand-strategy" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            1.10&nbsp;&nbsp;Brand Strategy
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
              <p className="font-semibold">Our Framework is divided into four primary quadrants:</p>
              <div>
                <p className="font-bold">Story (The "Why"):</p>
                <p>
                  Focused on connecting and emoting with the audience
                  through a narrative anchored by the "Elegant Authority" tone.
                </p>
              </div>
              <div>
                <p className="font-bold">Audience (The "Who"):</p>
                <p>
                  We target "Discerning Customers" seeking exceptional, immersive audio experiences
                  and "Premium Audio Retail Purveyors."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold">Product/Service (The "What"):</p>
                <p>What differentiates us is made up of three distinct parts:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><span className="font-semibold">Technology:</span> Off-the-shelf purchases.</li>
                  <li><span className="font-semibold">Experiences:</span> Experiential audio.</li>
                  <li><span className="font-semibold">Expertise:</span> Professional consultancy.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Personality (The "How"):</p>
                <p>Defined by the overarching archetype of The Alchemist-King.</p>
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
            src="/brandsss.png"
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