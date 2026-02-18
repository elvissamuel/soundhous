import Image from 'next/image';
import PersonalityHero from '../components/PersonalityHero';

export default function BrandStrategyPage() {
  return (
    <div className="bg-white">
      {/* Our Story Section */}
      <section id="brand-guideline" className="scroll-mt-24">
              <div className="max-w-full mx-auto">
                <Image
                  src="/soundhous-images/brand-guideline.jpg"
                  alt="Brand Guideline"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </section>

      <section id="brand-guideline" className="scroll-mt-24">
              <div className="max-w-full mx-auto">
                <Image
                  src="/sound.png"
                  alt="Brand Guideline"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </section>

     <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
  <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
      About Soundhous
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

      

      

      
      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200"></div>

    </div>
  );
}
