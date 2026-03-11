import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
  {
    title: "Quick Reference Guide",
    description:
      "FOR GRAPHIC DESIGNERS, PRINT VENDORS OR MERCHANDISE VENDORS.",
    href: "/quick-reference",
    image: "/hovered-effect.png"
  },
  {
    title: "New Joiners guide",
    description:
      "For internal team members and new joiners. Covers brand foundation, sensory guide, photography and application standards.",
    href: "/new-joiner",
    image: "/hovered-effect.png"
  },
  {
    title: "Communications & Marketing guide",
    description:
      "For event planners and retail partners. Guidelines for creating Soundhous physical and experiential spaces.",
    href: "/communications&marketing-guide",
    image: "/hovered-effect.png"
  },
  {
    title: "Event & Activation guide",
    description:
      "For marketing teams, agencies and community managers. Covers messaging, tone and communication structure.",
    href: "/portal/house-style",
    image: "/hovered-effect.png"
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative min-h-[330px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden p-4 sm:p-8 md:p-12 lg:p-20 lg:pl-32">
        {/* Hero Background Image - Covering entire header */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Soundhous_LogoReveal.gif"
            alt="Person listening with headphones"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-4 py-8 sm:py-12 md:py-16 flex items-center justify-center h-full">          
          <div className="flex flex-col text-white max-w-2xl mt-16 sm:mt-20 md:mt-24">            {/* Welcome Text - Split into two lines */}
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.1] transform translate-y-40 sm:translate-y-60 md:translate-y-70">
             Welcome to Soundhous portal
           </h1>
            
          
            
          
          </div>
          </div>
        
        
        
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {cards.map((card, index) => (
    <Link
      key={index}
      href={card.href}
      className="group relative overflow-hidden rounded-xl bg-black border border-gray-200/40 p-8 min-h-[220px] flex items-end"
    >
      
      {/* Hover Background Image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Overlay (keeps text readable) */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-md">
        <h2 className="text-xl font-bold text-white mb-3">
          {card.title}
        </h2>

        <p className="text-sm text-white/90 leading-relaxed">
          {card.description}
        </p>
      </div>

    </Link>
  ))}
</div>
      </main>
    </div>
  );
}
