import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Brand Guideline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/brand-guideline"
    },
    {
      title: "Logo Rules",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/logo-rules"
    },
    {
      title: "Colours",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/colours"
    },
    {
      title: "Typography",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/typography"
    },
    {
      title: "Sensory Guide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/sensory-guide"
    },
    {
      title: "Photography",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/photography"
    },
    {
      title: "Other Brand Assets",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/other-brand-assets"
    },
    {
      title: "Application Samples",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna",
      href: "/guide/application-samples"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden p-4 sm:p-8 md:p-12 lg:p-20 lg:pl-32">
        {/* Hero Background Image - Covering entire header */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.png"
            alt="Person listening with headphones"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Logo - Positioned at top left, aligned with hero content */}
        <div className="absolute top-0 left-4 sm:left-8 md:left-16 lg:left-36 z-20 pt-3 sm:pt-5 md:pt-8 lg:pt-10">
          <Image
            src="/soundhous-logo.png"
            alt="Soundhous Logo"
            width={140}
            height={140}
            className="h-auto w-20 sm:w-24 md:w-32 lg:w-[140px]"
            priority
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-4 py-8 sm:py-12 md:py-16 pt-20 sm:pt-24 md:pt-32">
          <div className="flex flex-col text-white max-w-2xl">
            {/* Welcome Text - Split into two lines */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 md:mb-8">
              <span className="block">Welcome to</span>
              <span className="block">Soundhous Portal</span>
            </h1>
            
            {/* Search Bar */}
            <div className="w-full max-w-sm mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg bg-[#d1d1d1] border border-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base md:text-lg"
              />
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-white font-normal">Quick Links:</span>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="/guide/brand-foundation" className="text-sm sm:text-base text-white underline font-normal hover:no-underline decoration-1">Brand Foundation</Link>
                <Link href="/guide/logo-rules" className="text-sm sm:text-base text-white underline font-normal hover:no-underline decoration-1">Logo Rules</Link>
                <Link href="/guide/colours" className="text-sm sm:text-base text-white underline font-normal hover:no-underline decoration-1">Colours</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="bg-white rounded-lg border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-4 sm:p-5 md:p-6 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-shadow cursor-pointer block"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Circular Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-400 flex-shrink-0"></div>
                
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    {card.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
