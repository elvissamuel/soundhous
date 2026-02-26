import Image from "next/image";

export default function ApplicationSamplesPage() {
  return (
    <div className="bg-white">
      {/* HERO IMAGE */}
      <section id="application-samples" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/application-samples.png"
            alt="Application Samples"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section id="general-clothing-guide" className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              General Clothing Guide
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {`For a professional and unified appearance of all personnel representing Soundhous at events and exhibitions, the instructions in the Event and exhibition clothing guideline shall be followed.

It includes guidelines for different clothing categories (that the Project Manager for the event in question can choose from): Business formal, Business casual and Casual.`}
            </p>
          </div>

          {/* MIDDLE */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <Image
                src="/clothing-vertical.png"
                alt="General clothing example"
                width={500}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {/* Right Top Text */}
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Typography:</span> If any text is added
              (e.g., "STAFF" or "TECH SUPPORT"), use Rubik font.
            </p>

            {/* Right Images */}
            <div className="flex flex-col gap-6">
              <Image
                src="/staff-sketch.png"
                alt="staff sketch example"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />

              <Image
                src="/clothing-example.png"
                alt="Clothing typography example 2"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="corporate-polo" className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — TITLE + IMAGE */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Corporate Polo
            </h2>

            <Image
              src="/corporate-polo.png"
              alt="Corporate polo example"
              width={700}
              height={900}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col gap-8">
            {/* Logo Size */}
            <div className="mt-20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Soundhous logo size
              </h3>

              <Image
                src="/logo-size-guide.png"
                alt="Soundhous logo size guide"
                width={300}
                height={180}
                className="w-48 h-auto object-contain"
              />
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Logo Placement:</strong>
              </p>

              <p>
                <strong>Shirts/Polos:</strong><br />
                The Soundhous logo should be embroidered or printed on the left chest (over the heart).
              </p>

              <p>
                <strong>Style:</strong><br />
                Keep zippers and buttons matte (black or chrome) to match the "Brushed Steel" vibe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="corporate-shirt"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
            Corporate Shirt
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* LEFT — MAIN IMAGE */}
            <div>
              <Image
                src="/corporate-shirt-1.png"
                alt="Corporate shirt example"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* MIDDLE — CONTENT */}
            <div className="flex flex-col justify-between h-full space-y-12">
              {/* Logo Size */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">
                  Soundhous logo size
                </h3>

                <div className="w-40">
                  <Image
                    src="/logo-size-guide.png"
                    alt="Logo size reference"
                    width={200}
                    height={120}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Base Colours */}
              <div>
                <h3 className="font-semibold text-black mb-3">
                  Base Colours:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stick to Soundhous Black, Signal Grey, or White (for shirts).
                </p>
              </div>
            </div>

            {/* RIGHT — SUPPORTING IMAGE */}
            <div>
              <Image
                src="/corporate-shirt-2.png"
                alt="Corporate shirt"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section  id="signature-collection" className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — TITLE + IMAGE */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Signature Collection
            </h2>

            <Image
              src="/signature-collection.png"
              alt="Signature Collection example"
              width={700}
              height={900}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col gap-8">
            {/* Logo Size */}
            <div className="mt-20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Soundhous logo size
              </h3>

              <Image
                src="/logo-size-guide.png"
                alt="Soundhous logo size guide"
                width={300}
                height={180}
                className="w-48 h-auto object-contain"
              />
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Logo Placement:</strong>
              </p>

              <p>
                <strong>Coats/jackets:</strong><br />
                Use the logo on the left chest. For heavier outerwear, a discreet 
                wordmark on the sleeve or back of the neck is also premium.
              </p>

              <p>
                <strong>Style:</strong><br />
                Keep zippers and buttons matte (black or chrome) to match "Brushed Steel".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="celebratory-tshirt" className="relative scroll-mt-24 px-6 sm:px-10 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Celebratory T-shirt
            </h2>
  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
    
    {/* Left - T-shirt image */}
    <div className="w-full md:w-1/2">
      <Image
        src="/celebratory-t-shirt.png"
        alt="Celebratory T-shirt"
        width={700}
        height={600}
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right - Labels */}
    <div className="w-full md:w-1/2 flex flex-col gap-8">
      
      {/* A, B, C Labels */}
      {[
        { letter: "A", label: "Submark" },
        { letter: "B", label: "Attention logo" },
        { letter: "C", label: "S-Wave Pattern" },
      ].map((item) => (
        <div key={item.letter} className="flex items-center gap-4">
          {/* Broken circle badge */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* 4 broken arc segments */}
              <circle
                cx="20" cy="20" r="12"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeDasharray="20 5.1"
                strokeDashoffset="1"
              />
              {/* Letter in center */}
              <text
                x="20" y="25"
                textAnchor="middle"
                fontSize="10"
                fontWeight="500"
                fill="black"
                fontFamily="inherit"
              >
                {item.letter}
              </text>
            </svg>
          </div>
          <span className="text-sm md:text-sm text-black">{item.label}</span>
        </div>
      ))}

      {/* Description */}
      <p className="text-sm md:text-sm text-black mt-4 max-w-xs">
        This T-shirt should be used in celebratory occasions.
      </p>
    </div>
  </div>
</section>

      {/* CELEBRATORY SHIRT IMAGE */}
      <section className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/celebratory-shirt.png"
            alt="Celebratory shirt example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* SIGNAGE */}
      <section
        id="signage"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Signage
          </h2>
          <Image
            src="/signage.png"
            alt="Signage example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <Image
            src="/signage-2.png"
            alt="Signage example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section
        id="business-card"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
            Business Card
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT — TEXT */}
            <div className="space-y-8 text-gray-800 leading-relaxed max-w-xl">
              <p>
                The business card is a primary bearer of the Soundhous identity. 
                It represents our commitment to precision and quality. The design 
                is kept clean and functional, ensuring that the focus remains on 
                the information and our brand authority.
              </p>

              <div>
                <h3 className="font-semibold text-black mb-3">
                  Typography & Layout
                </h3>
                <ul className="space-y-2">
                  <li><strong>Typeface:</strong> All text must be in Rubik.</li>
                  <li><strong>Alignment:</strong> Text should be left-aligned to ensure a structured, engineered look.</li>
                  <li><strong>Hierarchy:</strong> The name should be the most prominent element, followed by the job title and contact details.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-3">
                  Colour Palette
                </h3>
                <ul className="space-y-2">
                  <li><strong>Background (Front):</strong> White (for maximum legibility).</li>
                  <li><strong>Background (Back):</strong> Soundhous Black (to provide a premium tactile feel).</li>
                  <li><strong>Text:</strong> Soundhous Black for names; "Signal" Grey for contact details.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT — IMAGES */}
            <div className="flex flex-col gap-8">
              <div className="aspect-[3/1]">
                <Image
                  src="/business-card-front.png"
                  alt="Soundhous business card front"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-[3/1]">
                <Image
                  src="/business-card-back.jpg"
                  alt="Soundhous business card back"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  id="letterhead" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/letterhead.png"
            alt="Letterhead example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section id="envelope" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/envelope.jpg"
            alt="Envelope example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="staff-ids" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/id-card.png"
            alt="ID card example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="social-media" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/socials.png"
            alt="Social media examples"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="delivery-truck" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/delivery-truck.png"
            alt="Delivery truck example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="mug" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/mug.png"
            alt="Mug example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="bag" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/bag-1.png"
            alt="Bag example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="coffee-cup" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/coffee-cup.png"
            alt="Coffee cup example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section  id="receipt" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/receipt.png"
            alt="Receipt example"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}