import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Quick Reference Guide",
      description:
        "FOR GRAPHIC DESIGNERS, PRINT VENDORS OR MERCHANDISE VENDORS.",
      href: "/quick-reference",
      image: "/soundhous-pattern.png"
    },
    {
      title: "New Joiners Guide",
      description:
        "FOR STAFF INDUCTIONS, COMPANY ORIENTATIONS, NEW JOINERS",
      href: "/new-joiner",
      image: "/soundhous-pattern.png"
    },
    {
      title: "Communications & Marketing Guide",
      description:
        "FOR MARKETING AGENCIES, SOCIAL MEDIA ACCOUNT MANAGERS AND COMMUNITY MANAGERS",
      href: "/communications&marketing-guide",
      image: "/soundhous-pattern.png"
    },
    {
      title: "Event & Activation Guide",
      description:
        "FOR EVENT ORGANISERS, PLANNERS, RETAIL STORE FRANCHISES",
      href: "/event&activation-guide",
      image: "/soundhous-pattern.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="relative min-h-[330px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden bg-black">

  {/* GIF — centered */}
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src="/Soundhous_LogoReveal.gif"
      alt="Soundhous logo reveal"
      width={600}
      height={400}
      className="object-contain w-[60%] sm:w-[50%] md:w-[45%] h-auto opacity-90"
      priority
    />
  </div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-4 py-8 sm:py-12 md:py-16 flex items-center justify-center h-full">
    <div className="flex flex-col text-white max-w-2xl mt-16 sm:mt-20 md:mt-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-[1.1] transform translate-y-40 sm:translate-y-65 md:translate-y-80">
        Welcome to the Soundhous Brand Portal
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
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 sm:p-8 min-h-[220px] transition-colors duration-300 hover:bg-black"
            >

              {/* Hover Image */}
              <div className="absolute inset-0 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom object-right scale-90 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div className="relative z-10 max-w-md">
                <h2 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">
                  {card.title}
                </h2>

                <p className="text-sm text-black group-hover:text-white transition-colors leading-relaxed">
                  {card.description}
                </p>
              </div>

            </Link>
          ))}
        </div>

        {/* CTA — View Full Guideline */}
        <div className="flex flex-col items-center gap-4 mt-12 mb-4">
          <p className="text-sm text-gray-500 tracking-wide uppercase">
            Looking for the complete brand guidelines?
          </p>
          <Link
            href="/guide"
            className="group inline-flex items-center gap-2 border border-black text-black text-sm font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            Click here to see the full guideline
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
