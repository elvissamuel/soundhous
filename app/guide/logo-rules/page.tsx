import Image from "next/image";

export default function LogoRulesPage() {
  return (
    <div className="bg-white">
      <section id="brand-personality" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/soundhouse-2.0.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="layout-grid" className="relative py-8 sm:py-12 md:py-16 md:pt-32 scroll-mt-24 bg-black min-h-screen flex flex-col">
        <div className="max-w-3xl mx-auto flex-1 flex flex-col relative">
          {/* Sound Wave Icon - Top Right */}
          

          {/* Title - Top Left */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-sans mb-8">
            Sonic Energy
          </h2>

          {/* Main Paragraph */}
          <div className="mb-4">
            <p className="text-base sm:text-lg md:text-2xl text-white font-sans leading-relaxed">
              At the core of the Soundhous identity lies the wave.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed">
              It is more than just a graphic element; it is a literal representation of our medium and a metaphorical expression of our mission.
            </p>
          </div>

          {/* Sub-section 1: Vibration */}
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans">
              Vibration:
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed">
              Every beat, note, and word begins as a physical movement.
            </p>
          </div>

          {/* Sub-section 2: Oscillation */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans">
              Oscillation:
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed">
              The rhythmic rise and fall of our visual patterns mirrors the way sound reaches the human ear.
            </p>
          </div>

        </div>
      </section>

      <section id="brand-personality" className=" bg-black min-h-screen relative py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-3xl mx-auto mt-16">
          <p className="text-white text-lg sm:text-lg md:text-[25px] leading-relaxed mb-4">Waves are a universal constant. From the invisible frequencies of a radio signal to the visible crests of the ocean, the wave represents flow, energy, and momentum.</p>
          <p>For Soundhous, this symbolises our ability to adapt to any genre, technology,
          or environment. We aren’t static; we are in constant motion.</p>

        </div>
        <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-48 w-[480px] h-auto">
            <Image
              src="/sh-round.png"
              alt="Person with sound waves overlay"
              width={1000}
              height={1000}
              className="object-contain mx-auto"
            />
            {/* <p>This is an image</p> */}
          </div>
      </section>

      <section id="the-soundhous-logo" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Title - Top Left */}
          <h1 className="text-4xl sm:text-5xl font-bold text-black font-sans mb-8">
            The Soundhous Logo
          </h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12">
            {/* Left Column - Two Paragraphs */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl text-black font-sans leading-relaxed">
                Our logo is our brand's calling card. It must be used correctly and consistently in all communication materials to ensure customers recognise it and to protect our trademark.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-black font-sans leading-relaxed">
                Our corporate brand mark is inspired by the design of a wave. It speaks of the audio industry and carries the message of balance, symphony, rhythm, and grace.
              </p>
            </div>

            {/* Right Column - Two Sections */}
            {/* Introduction Section */}
            <div className="flex flex-col justify-end">
              <h2 className="text-xl font-bold text-black font-sans">
                Introduction
              </h2>
              <p className="text-sm text-black font-sans leading-relaxed">
                Consistent presentation of the Soundhous identity is the key to brand recognition, building trust and confidence over time. In this section, we define the key elements of the brand identity system, from the brand mark (logo) to the brand architecture. These elements will help us build the brand through various applications, outlining how it is to be used within creative expression.
              </p>
            </div>
            
            {/* Caution Section */}
            <div className="flex flex-col justify-end mt-32">
                <h2 className="text-xl font-bold text-black font-sans">
                  Caution
                </h2>
                <p className="text-sm text-black font-sans leading-relaxed">
                  The Soundhous Logo should always be represented in Black or White colour. The Attention logo is landscape-locked. Portrait orientations are prohibited. All other logo usage rules are detailed in the following pages in this section. All items that show the Soundhous Logo must get the clearance from Strategic Communications Department before production. This is to ensure that the designs produced are aligned to our Corporate Identity (CI).
                </p>
              </div>
          </div>
        </div>
      </section>


      <section id="brand-personality" className="bg-black min-h-screen py-8 sm:py-12 md:py-16 scroll-mt-24 flex items-center justify-center">
        <div className="max-w-full mx-auto">
          <Image src="/sd-new-2.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="logo-variations" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24 bg-white">
        <div className="max-w-4xl mx-auto relative min-h-[800px]">

          <div className="flex items-center justify-between">

            <div className="flex flex-col">
          {/* Section Title - Top Left */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-sans">
              2.1. Logo Variations
            </h2>
          </div>

          {/* Introductory Text - Top Left, below title */}
          <div className="mb-8 sm:mb-12 max-w-md">
            <p className="text-sm sm:text-base md:text-2xl text-black font-sans leading-relaxed">
              At the heart of our identity is our wordmark. It is designed to be as bold as it is welcoming.
            </p>
          </div>

          </div>

          {/* Horizontal Lockup - Top Right */}
          <div className="flex justify-end">
            <div className="w-full">
              {/* House Icon Placeholder */}
              <Image src="/small-logo1.png" width={360} height={180}  alt="House Icon" className="w-[350px] h-auto object-cover" />
              {/* Wordmark Placeholder */}
            <p className="text-center text-xs sm:text-base text-black font-sans">Horizontal Lockup</p>

            </div>
          </div>

          

          </div>

          {/* Large Wordmark - Center */}
          <div className="my-16">
          <Image src="/big-logo.png" width={1000} height={500}  alt="House Icon" className="w-[1000px] h-auto object-cover" />
            
            <p className="text-xs sm:text-base text-center font-semibold text-black font-sans">Wordmark</p>
          </div>
          
          <div className="flex items-end justify-between">
          {/* Descriptive Text - Bottom Left */}
          <div className="max-w-sm">
            <p className="text-sm text-black font-sans leading-relaxed">
              The "soft-geometric" nature of the font avoids the coldness of traditional tech branding, instead offering a friendly and inclusive aesthetic. The sturdy architecture of the characters represents our strength, while the rounded edges reflect the vibrant, pulsing energy of the audio world.
            </p>
          </div>

          {/* Icons/Symbols - Bottom Center */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-2">
              
             
              {/* Third Icon Placeholder */}
              <div className="">
                <Image src="/small-logo-2.png" width={150} height={70}  alt="House Icon" className="w-[150px] h-auto object-cover" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-black font-sans">Icons/symbols</p>
          </div>

          {/* Vertical Lockup - Bottom Right */}
          <div className="">
            <div className="flex flex-col">
              {/* House Icon Placeholder */}
              <Image src="/small-logo-3.png" width={260} height={70}  alt="House Icon" className="w-[260px] h-auto object-cover" />
              
            </div>
            <p className="text-xs sm:text-sm text-center text-black font-sans">Vertical Lockup</p>
          </div>

          </div>
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-22.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-23.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-24.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-25.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-26.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-27.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="brand-personality" className=" py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image src="/sd-28.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
        </div>
      </section>

      <section id="minimum-size" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section id="brand-architecture" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section id="co-branding" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section id="logo-misuse" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Logo misuse</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </div>
  );
}

