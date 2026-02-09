import Image from 'next/image';

export default function SensoryGuidePage() {
  return (
    <div className="bg-white">
      <section id="sensory-guide-style" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">5.0      Sensory Guide Style</h1>
         <section id="sensory-guide" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-24 scroll-mt-24">
                 <div className="max-w-5xl mx-auto">
                   <h2 className='text-2xl font-bold text-gray-800 mb-4 sm:mb-6'></h2>
                   <Image src="/sensory-guide.png" alt="Brand Architype" width={1000} height={1000} className="w-full h-auto" />
                 </div>
               </section>
         
        </div>
      </section>

      <section id="storefront-applications" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">5.1     Design Philosophy</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section id="feature-wall" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Feature Wall</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section id="listening-areas" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Listening Areas</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </div>
  );
}
