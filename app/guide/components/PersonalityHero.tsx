interface PersonalityHeroProps {
  title: string;
}

export default function PersonalityHero({ title }: PersonalityHeroProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-black overflow-hidden">
      {/* Title Text - Left Side, Vertically Centered */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-6 sm:pl-8 md:pl-12 lg:pl-16 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight whitespace-nowrap">
          {title}
        </h1>
      </div>

      {/* Abstract Graphic - Right Side, Overlapping Text */}
      <div className="absolute right-0 top-0 bottom-0 w-[65%] sm:w-[60%] md:w-[55%] z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thick dark gray curved lines forming interlocking U-shapes/arches */}
          <path
            d="M0,0 Q120,250 0,500 T0,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M60,0 Q180,250 60,500 T60,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M120,0 Q240,250 120,500 T120,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M180,0 Q300,250 180,500 T180,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M240,0 Q360,250 240,500 T240,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          {/* Reverse/interlocking arches */}
          <path
            d="M0,250 Q120,500 0,750 T0,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M60,250 Q180,500 60,750 T60,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M120,250 Q240,500 120,750 T120,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M180,250 Q300,500 180,750 T180,1000"
            stroke="#374151"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

