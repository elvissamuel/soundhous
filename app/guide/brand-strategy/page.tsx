import Image from 'next/image';

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

      {/* Brand Archetype Section */}
      <section id="brand-archetype" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Brand Archetypes</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          {/* Bottom image */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/img-5.png"
              alt="Stylized ear with sound wave"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Target Audience Section */}
      <section id="target-audience" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Target Audience</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Tone Section */}
      <section id="brand-tone" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Brand Tone</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

      {/* Brand Tagline Section */}
      <section id="brand-tagline" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Brand Tagline</h2>
          
          <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 items-start mb-6 sm:mb-8'>
            {/* FIDYA Logo Graphic */}
            <div>
              <Image
                src="/img-6.png"
                alt="FIDYA Brand Tagline"
                width={400}
                height={200}
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg"
              />
            </div>

            {/* FIDYA Logo Graphic */}
            <div>
              <Image
                src="/img-7.png"
                alt="FIDYA Brand Tagline"
                width={400}
                height={200}
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg"
              />
            </div>
          </div>

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

      {/* Messaging Style Section */}
      <section id="messaging-style" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Messaging Style</h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,t ut labore et dolore magnaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative w-full lg:w-[450px] lg:flex-shrink-0 aspect-[6/5]">
              <Image
                src="/img-8.png"
                alt="Messaging style illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
