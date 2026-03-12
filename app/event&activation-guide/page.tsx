import Image from "next/image";
import Link from "next/link";
import EventSidebar from "./EventSidebar";
import { QuoteMark } from "../guide/components/Quotemark";

export default function CommunicationsPage() {
  return (
    
      <div className="bg-white">
        <EventSidebar />
        <main className="lg:ml-60 pt-16">
            {/* Our Story Section */}
            <section id="Event and Activation" className="scroll-mt-24">
                    <div className="max-w-full mx-auto">
                      <Image
                        src="/event&activation-guide/event&activation.png"
                        alt="Brand Guideline"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      />
                    </div>
                  </section>

                 <section
  id="events-activation-intro"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24"
>
  <div className="max-w-5xl mx-auto space-y-6">

    {/* Main Intro Text */}
    <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 leading-relaxed">
      This is the Events & Activation Brand <br />
       Guide, to be used by Event Organisers, <br />
        Planners, Retail Store Franchises.
    </p>

    {/* Secondary Smaller Text */}
    <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-3xl">
      For anything outside of this document, please refer to the full Brand
      Guideline or contact the strategic communications department.
    </p>

  </div>
</section>
      
            
           <section id="about-soundhous" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
      
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-light">1.1</span>&nbsp;&nbsp;About Soundhous
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
      

      {/* Brand Basics */}
      <section id="brand-basics" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            <span className="font-light">1.2.</span>&nbsp;&nbsp;Brand Basics
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

 
      
      <section
              id="logo-variation"
              className="px-6 md:px-12 py-16 md:py-24 bg-white scroll-mt-24"
            >
              <div className="max-w-6xl mx-auto space-y-16">
      
                {/* TOP ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
                  {/* LEFT TEXT */}
                  <div className="space-y-6 max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      <span className="font-light">1.3.</span>&nbsp;&nbsp;Logo Variations
                    </h2>
                    <p className="text-base md:text-lg font-light text-black leading-relaxed">
                      At the heart of our identity is our wordmark. It is designed to be as
                      bold as it is welcoming.
                    </p>
                  </div>
      
                  {/* RIGHT HORIZONTAL LOCKUP */}
                  <div className="text-center lg:text-right">
                    <Image
                      src="/small-logo1.png"
                      width={360}
                      height={180}
                      alt="Horizontal Lockup"
                      className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto mx-auto lg:ml-auto"
                    />
                    <p className="mt-2 text-xs sm:text-sm text-black">
                      Horizontal Lockup
                    </p>
                  </div>
      
                </div>
      
                {/* CENTER WORDMARK */}
                <div className="text-center space-y-3">
                  <Image
                    src="/big-logo.png"
                    width={1000}
                    height={500}
                    alt="Wordmark"
                    className="w-full max-w-3xl mx-auto h-auto"
                  />
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Wordmark
                  </p>
                </div>
      
                {/* BOTTOM ROW */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
      
                  {/* LEFT DESCRIPTION */}
                  <div className="text-left max-w-sm">
                    <p className="text-sm text-black leading-relaxed">
                      The "soft-geometric" nature of the font avoids the coldness of
                      traditional tech branding, instead offering a friendly and inclusive
                      aesthetic. The sturdy architecture of the characters represents our
                      strength, while the rounded edges reflect the vibrant, pulsing energy
                      of the audio world.
                    </p>
                  </div>
      
                  {/* CENTER ICON */}
                  <div className="text-center">
                    <Image
                      src="/small-logo-2.png"
                      width={150}
                      height={70}
                      alt="Icon symbol"
                      className="w-24 sm:w-28 md:w-32 h-auto mx-auto"
                    />
                    <p className="mt-2 text-xs sm:text-sm text-black">
                      Icons / symbols
                    </p>
                  </div>
      
                  {/* RIGHT VERTICAL LOCKUP */}
                  <div className="text-center md:text-right">
                    <Image
                      src="/small-logo-3.png"
                      width={260}
                      height={70}
                      alt="Vertical Lockup"
                      className="w-40 sm:w-44 md:w-52 h-auto mx-auto md:ml-auto"
                    />
                    <p className="mt-2 text-xs sm:text-sm text-black">
                      Vertical Lockup
                    </p>
                  </div>
      
                </div>
              </div>
            </section>

            {/* Five Logo Variations */}
            <section className="bg-black text-white px-6 md:px-12 py-20">
              <div className="max-w-7xl mx-auto">
      
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                  Five (5) Logo Variations
                </h2>
      
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      
                  {/* LEFT + MIDDLE (Logos Section) */}
                  <div className="lg:col-span-2 space-y-10">
        {[
          { label: "I. SIGNATURE LOGO", img: "/logo1.png", imgClass: "w-24" },
          { label: "II. SECONDARY LOGO", img: "/logo2.png", imgClass: "w-24" },
          { label: "III. ATTENTION LOGO", img: "/logo3.png", imgClass: "w-24" },
          { label: "IV. SUBMARK", img: "/logo4.png", imgClass: "w-12" },
          { label: "V. FAVICON", img: "/logo5.png", imgClass: "w-12" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="w-64 text-gray-300 tracking-wide">
              {item.label}
            </div>
            <div className="flex-1 h-px bg-gray-600 relative">
              <div className="absolute right-0 top-0 h-4 w-px bg-gray-600 translate-y-[-8px]" />
            </div>
            <Image
              src={item.img}
              alt={item.label}
              width={120}
              height={60}
              className={`h-auto ${item.imgClass} object-contain`}
            />
          </div>
        ))}
      </div>
      
                  {/* RIGHT SIDE TEXT */}
                  <div className="border-l border-gray-700 pl-10 text-gray-300 text-lg leading-relaxed">
                    The five (5) logo variants are not reflecting five (5) companies,
                    but <span className="text-white font-semibold">ONE</span> company with
                    a dynamic identity system geared for all touchpoints.
                  </div>
      
                </div>
              </div>
            </section>

      {/* 2.3.3 Minimum Size and Format */}
            <section
              id="minimum-size-format"
              className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
            >
              <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
      
                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  <span className="font-light">1.4.</span>&nbsp;&nbsp;Minimum Size and Format
                </h2>
      
                {/* 2 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
      
                  {/* LEFT SIDE */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light">
                      Our logo must be legible in all uses.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      Minimum sizes are established to prevent illegibility due to small reproduction.
                    </p>
      
                    {/* Logo Image */}
                    <div className="flex justify-start">
                      <Image
                        src="/soundhous-logo-h.png"
                        alt="Soundhaus logo minimum size"
                        width={300}
                        height={100}
                        className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs h-auto object-contain"
                      />
                    </div>
      
                    {/* Minimum Size Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-300 text-xs sm:text-sm">
                        <thead className="bg-gray-100 text-black">
                          <tr>
                            <th className="border px-2 sm:px-3 md:px-4 py-2 text-left">Application</th>
                            <th className="border px-2 sm:px-3 md:px-4 py-2 text-left">Minimum Size</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">Print Materials</td>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">0.5 inches wide</td>
                          </tr>
                          <tr>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">Digital/Screen (Web)</td>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">60 pixels wide</td>
                          </tr>
                          <tr>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">Digital/Screen (Mobile)</td>
                            <td className="border px-2 sm:px-3 md:px-4 py-2">40 pixels wide</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
      
                  {/* RIGHT SIDE */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-xs sm:text-sm lg:text-base text-black">
                      To ensure the visual integrity of our brand across all media, it is
                      critical to use the appropriate file formats. Using the wrong format
                      can result in pixelation, slow load times, or poor print quality.
                      Please refer to the matrix below when selecting assets for production.
                    </p>
      
                    {/* File Format Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-300 text-[10px] sm:text-xs">
                        <thead className="bg-gray-100 text-black">
                          <tr>
                            <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Format</th>
                            <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Type</th>
                            <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Application</th>
                            <th className="border px-1 sm:px-2 py-1.5 sm:py-2 text-left">Special Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">ai, eps</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Vector File</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Professional print, promo items</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Infinitely scalable</td>
                          </tr>
                          <tr>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">jpg</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel File</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Photos, print docs, presentations</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Small size, quality loss if scaled</td>
                          </tr>
                          <tr>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">png</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel File</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Web apps, presentations</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Transparency, better quality than jpg</td>
                          </tr>
                          <tr>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">pdf</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Pixel + Vector</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">Print docs, promo items, presentations</td>
                            <td className="border px-1 sm:px-2 py-1.5 sm:py-2">High quality, optimal for sending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
      
                </div>
              </div>
            </section>

                  <section id="logo-misuse" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
                    <div className="max-w-6xl mx-auto space-y-12">
            
                      {/* Title */}
                      <h2 className="text-2xl md:text-4xl font-bold text-black">
                        <span className="font-light">1.5.</span>&nbsp;&nbsp;Logo Misuse
                      </h2>
            
                      {/* 2 Column Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
                        {/* LEFT SIDE TEXT */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                          <p className="text-xl text-gray-600 font-light">
                            To maintain the integrity of the Soundhous brand, the logo must never
                            be used in the following ways:
                          </p>
                          <p><strong className="text-black">Do Not:</strong> Place the logo vertically.</p>
                          <p><strong className="text-black">Do Not:</strong> Change the logo's colours or apply drop shadows, outlines, or other graphical effects.</p>
                          <p><strong className="text-black">Do Not:</strong> Place the logo on a background that reduces legibility or contrast.</p>
                          <p><strong className="text-black">Do Not:</strong> Create a new mark by combining the logo or any of its elements with another logo, text, or graphic.</p>
                          <p><strong className="text-black">Do Not:</strong> Write out the logo in another typeface.</p>
                          <p><strong className="text-black">Do Not:</strong> Stretch, distort, rotate, or alter the logo's proportions.</p>
                        </div>
            
                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                          <Image
                            src="/logo-misuse.png"
                            alt="Examples of incorrect logo usage"
                            width={600}
                            height={400}
                            className="w-full max-w-lg h-auto object-contain"
                          />
                        </div>
            
                      </div>
                    </div>
                  </section>

                  {/* 1.6 Primary Colours */}
    <section id="primary-colours" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          <span className="font-light">1.6</span>&nbsp;&nbsp;Primary Colours
        </h2>
        
        {/* Intro Paragraph */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-sm text-gray-900 md:text-lg">
          Soundhous operates in the space between light and shadow. Our strict Black &amp;
          White palette emphasises the raw materials of our brand: structural integrity and
          sonic energy. By stripping away colour, we lean into high-contrast visuals and tactile
          textures that define the Soundhous aesthetic: bold, timeless, and unapologetic.
        </p>
        
        {/* Colour Blocks */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Soundhous Black */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
            <div className="max-w-xl space-y-3">
              <p className="text-base sm:text-lg text-black">
                <span className="text-black font-semibold">Soundhous Black (#0A0A0A):</span> A &quot;deep-space&quot; black. Use this for backgrounds to create a sense of depth, raw emotion and acoustic resonance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" style={{ backgroundColor: "#0A0A0A" }}></div>
              <div className="text-gray-600 text-xs sm:text-sm text-center space-y-1">
                <p><span className="font-bold text-gray-900">HEX:</span> #0A0A0A</p>
                <p><span className="font-bold text-gray-900">CMYK:</span> 74, 67, 66, 86</p>
                <p><span className="font-bold text-gray-900">RGB:</span> 10, 11, 11</p>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-300" />
          
          {/* Soundhous White */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
            <div className="max-w-xl space-y-3">
              <p className="text-black text-base sm:text-lg">
                <span className="text-black font-semibold">Soundhous White (#F5F5F5):</span> An &quot;off-white&quot; or &quot;paper&quot; white. It feels more premium and architectural than a piercing digital white.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gray-300" style={{ backgroundColor: "#F5F5F5" }}></div>
              <div className="text-gray-600 text-xs sm:text-sm text-center space-y-1">
                <p><span className="font-bold text-gray-900">HEX:</span> #F5F5F5</p>
                <p><span className="font-bold text-gray-900">CMYK:</span> 3, 2, 2, 0</p>
                <p><span className="font-bold text-gray-900">RGB:</span> 245, 245, 245</p>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-300" />
          
          {/* Signal Grey */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
            <div className="max-w-xl space-y-3">
              <p className="text-black text-base sm:text-lg">
                <span className="text-black font-semibold">Signal Grey (#808080):</span> Used for soft contrast and sparingly for secondary information (metadata, labels, or grid lines).
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" style={{ backgroundColor: "#808080" }}></div>
              <div className="text-gray-600 text-xs sm:text-sm text-center space-y-1">
                <p><span className="font-bold text-gray-900">HEX:</span> #808080</p>
                <p><span className="font-bold text-gray-900">CMYK:</span> 52, 43, 43, 8</p>
                <p><span className="font-bold text-gray-900">RGB:</span> 128, 128, 128</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 1.7 Secondary & Extended Palette */}
    <section id="secondary-extended-palette" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          <span className="font-light">1.7</span>&nbsp;&nbsp;Secondary &amp; Extended Palette
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-sm text-gray-900 md:text-lg">
          Soundhous operates in the space between light and shadow. Our strict Black &amp;
          White palette emphasises the raw materials of our brand: structural integrity and
          sonic energy. By stripping away colour, we lean into high-contrast visuals and tactile
          textures that define the Soundhous aesthetic: bold, timeless, and unapologetic.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Scandi Beige */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black" style={{ backgroundColor: "#E0C389" }}>
              Scandi Beige
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #E0C389</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 17, 24, 53, 0</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 122, 195, 137</p>
            </div>
          </div>

          {/* Sonic Amber */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black" style={{ backgroundColor: "#F2C233" }}>
              Sonic Amber
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #F2C233</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 6, 23, 89, 0</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 242, 194, 51</p>
            </div>
          </div>

          {/* Light Grey */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300" style={{ backgroundColor: "#E8E7E4" }}>
              Light Grey
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #E8E7E4</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 8, 6, 8, 0</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 232, 231, 228</p>
            </div>
          </div>

          {/* Champagne */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300" style={{ backgroundColor: "#F2E5D2" }}>
              Champagne
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #F2E5D2</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 4, 8, 17, 0</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 242, 229, 210</p>
            </div>
          </div>

          {/* Deep Bronze */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white" style={{ backgroundColor: "#784005" }}>
              Deep Bronze
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #784005</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 33, 69, 100, 39</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 120, 64, 5</p>
            </div>
          </div>

          {/* Midnight Blue */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white" style={{ backgroundColor: "#032349" }}>
              Midnight Blue
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #032349</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 100, 87, 40, 41</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 3, 35, 73</p>
            </div>
          </div>

          {/* White Blush */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300" style={{ backgroundColor: "#FAFBED" }}>
              White Blush
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #FAFBED</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 4, 8, 17, 0</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 250, 251, 237</p>
            </div>
          </div>

          {/* Warm Taupe */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white" style={{ backgroundColor: "#978777" }}>
              Warm Taupe
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #978777</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 41, 40, 48, 5</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 151, 135, 119</p>
            </div>
          </div>

          {/* Dark Charcoal */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white" style={{ backgroundColor: "#272D39" }}>
              Dark Charcoal
            </div>
            <div className="text-gray-600 text-sm space-y-1 ml-4">
              <p><span className="font-semibold text-gray-800">HEX:</span> #272D39</p>
              <p><span className="font-semibold text-gray-800">CMYK:</span> 81, 71, 55, 57</p>
              <p><span className="font-semibold text-gray-800">RGB:</span> 39, 45, 57</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 1.8 Primary Typeface */}
    <section id="primary-typeface" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          <span className="font-light">1.8</span>&nbsp;&nbsp;Primary Typeface
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
            <p className="text-2xl sm:text-6xl font-bold text-black">Rubik</p>
            <p className="text-sm sm:text-base">
              Our brand typeface is Rubik.  
              It is purposeful, authoritative,  
              and effective at small and  
              large scales.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <p className="font-light text-black text-sm sm:text-base md:text-lg break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Light</p>
              </div>
              <p className="text-xs sm:text-sm text-black shrink-0">Caption 15pt</p>
            </div>
            <hr className="border-gray-300" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <p className="font-normal text-black text-sm sm:text-base md:text-lg break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Regular</p>
              </div>
              <p className="text-sm sm:text-base text-black shrink-0">Body 24pt</p>
            </div>
            <hr className="border-gray-300" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <p className="font-medium text-black text-sm sm:text-base md:text-lg break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
                <p className="text-gray-500 text-xs font-medium sm:text-sm mt-1">Medium</p>
              </div>
              <p className="text-base sm:text-lg text-black shrink-0">Subheadings 36pt</p>
            </div>
            <hr className="border-gray-300" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <p className="font-bold text-black text-sm sm:text-base md:text-lg break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
                <p className="text-gray-500 font-bold text-xs sm:text-sm mt-1">Bold</p>
              </div>
              <p className="text-lg sm:text-xl text-black font-bold shrink-0">Headings 48pt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* 1.9 Alternate Typeface */}
    <section id="alternate-typeface" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          <span className="font-light">1.9</span>&nbsp;&nbsp;Alternate Typeface
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg">
              <strong className="text-black">System Default Sans-Serif:</strong><br/>
              If Rubik fails to load (due to a technical issue or restriction on a platform), 
              fallback to either &apos;Helvetica Neue&apos; or &apos;Arial&apos;.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 text-left">
            <div className="space-y-2">
              <p className="text-black text-sm sm:text-base md:text-lg break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Helvetica Neue</p>
            </div>
            <hr className="border-gray-300" />

            <div className="space-y-2">
              <p className="text-black text-sm sm:text-base md:text-lg break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Arial</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 1.10 Design Philosophy */}
        <section
          id="design-philosophy"
          className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              <span className="font-light">1.10.</span>&nbsp;&nbsp;Our Design Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <p className="text-2xl sm:text-2xl md:text-2xl text-gray-900 leading-snug">
                  AFROMIDI has 3 <br />
                  core styles for:
                </p>
              </div>
              <div className="md:text-right">
                <Image
                  src="/afromidi-logo.png"
                  alt="Afromidi Logo"
                  width={300}
                  height={150}
                  className="w-40 sm:w-48 md:w-56 h-auto md:ml-auto"
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/sensory-application-2.png"
                alt="AFROMIDI Design Styles"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section
            id="airy-light"
            className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
          >
            <div className="max-w-7xl mx-auto">
        
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                  <span className="font-light">1.10.1.</span>&nbsp;&nbsp;Airy Light
                </h2>
        
                <Image
                  src="/afromidi-logo.png"
                  alt="Afromidi Logo"
                  width={160}
                  height={60}
                  className="h-auto w-28 sm:w-36 md:w-40 mt-1"
                />
              </div>
        
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
                {/* INTERIOR SPACES (Full width on mobile/tablet, spans 2 cols on desktop) */}
                <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
                  <h3 className="tracking-[0.4em] text-center text-gray-900 text-base sm:text-lg font-medium mb-4">
                    INTERIOR SPACES
                  </h3>
                </div>
        
                {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
                <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
                    <p className="text-sm leading-relaxed text-gray-900 mb-4">
                      <strong>Notes:</strong> Sandalwood, Cedar, White Tea, Amber, and Musk.<br />
                      <strong>Profile:</strong> Scandinavian Woody, Crisp Green, and Soft Musk.<br />
                      <strong>Atmosphere:</strong> Light, Airy, Refined, and High-Tech.
                    </p>
        
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">Sound</h3>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      <strong>Style:</strong> Mid-tempo, fluid.
                    </p>
                  </div>
        
                  <Image
                    src="/airy-smell.png"
                    alt="Smell and Sound reference"
                    width={600}
                    height={600}
                    className="w-full h-auto mt-2 object-cover"
                  />
                </div>
        
                {/* TOUCH */}
                <div className="bg-gray-200 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
                  <p className="text-sm leading-relaxed text-gray-900 mb-6">
                    <strong>Materials:</strong> Natural Wood, Matte Polymer, Glass, and Metal.<br />
                    <strong>Textures:</strong> Sleek, Cool, Soft, and Upholstered.<br />
                    <strong>Philosophy:</strong> Organic Warmth vs. Technological Precision.<br />
                    <strong>Vibe:</strong> Grounded.
                  </p>
        
                  <Image
                    src="/airy-touch.png"
                    alt="Touch materials reference"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
        
                {/* APPEARANCE */}
                <div className="bg-gray-200 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
                  <p className="text-sm leading-relaxed text-gray-900 mb-6">
                    <strong>Colours:</strong> Honey Oak, Earth Tones.<br />
                    <strong>Form:</strong> Rectilinear lines, architectural edges, organic curves.<br />
                    <strong>Imagery:</strong> Minimalist, Immersive, High-tech, Tranquil.
                  </p>
        
                  <Image
                    src="/airy-appearance.png"
                    alt="Appearance reference"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
        
              </div>
        
              {/* Bottom Full-width Image */}
              <div className="mt-8 sm:mt-12">
                <Image
                  src="/Airy-light.png"
                  alt="Soundhous brand textures"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
        
            </div>
          </section>
        
              <section
          id="industrial-nomad"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
        >
          <div className="max-w-7xl mx-auto">
        
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                <span className="font-light">1.10.2.</span>&nbsp;Industrial Nomad
              </h2>
        
              <Image
                src="/afromidi-logo.png"
                alt="Afromidi Logo"
                width={160}
                height={60}
                className="h-auto w-28 sm:w-36 md:w-40 mt-1"
              />
            </div>
        
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
              {/* OPEN SPACES (Full width on mobile/tablet, spans 2 cols on desktop) */}
              <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
                <h3 className="tracking-[0.4em] text-center text-gray-900 text-base sm:text-lg font-medium mb-4">
                  OPEN SPACES
                </h3>
              </div>
        
              {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
              <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
                  <p className="text-sm leading-relaxed text-gray-900 mb-4">
                    <strong>Profile:</strong> Planed oak, dried grass, ozone, and faint spice.<br />
                    <strong>Atmosphere:</strong> Inviting, professional atmosphere.
                  </p>
        
                  <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-gray-900">Sound</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    <strong>Style:</strong> Up-tempo, energetic.
                  </p>
                </div>
        
                <Image
                  src="/nomad-smell.png"
                  alt="Smell and Sound reference"
                  width={600}
                  height={600}
                  className="w-full h-auto mt-2 object-cover"
                />
              </div>
        
              {/* TOUCH */}
              <div className="bg-gray-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
                <p className="text-sm leading-relaxed text-gray-900 mb-6">
                  <strong>Materials:</strong> Slatted light wood, metal frameworks, and woven textiles.<br />
                  <strong>Textures:</strong> Coarse natural fibres, and sleek, cool matte metal.<br />
                  <strong>Philosophy:</strong> Global connectivity and Professional collaboration.<br />
                  <strong>Vibe:</strong> Energetic, productive, and culturally rich.
                </p>
        
                <Image
                  src="/nomad-touch.png"
                  alt="Touch materials reference"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
        
              {/* APPEARANCE */}
              <div className="bg-gray-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
                <p className="text-sm leading-relaxed text-gray-900 mb-6">
                  <strong>Colours:</strong> Sonic Amber, warm creams, deep blacks, and slate grey.<br />
                  <strong>Form:</strong> Open-plan geometric layouts featuring vertical slats, and woven patterns.<br />
                  <strong>Imagery:</strong> Rhythmic geometric patterns, grey scale.
                </p>
        
                <Image
                  src="/nomad-appearance.png"
                  alt="Appearance reference"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
        
            </div>
        
            {/* Bottom Full-width Image */}
            <div className="mt-8 sm:mt-12">
              <Image
                src="/industrial-nomad.png"
                alt="Soundhous brand textures"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
        
          </div>
        </section>
        
             <section
          id="luxury-black"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 scroll-mt-24 bg-white"
        >
          <div className="max-w-7xl mx-auto">
        
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                <span className="font-light">1.10.3.</span>&nbsp;&nbsp;Luxury Black
              </h2>
        
              <Image
                src="/afromidi-logo.png"
                alt="Afromidi Logo"
                width={160}
                height={60}
                className="h-auto w-28 sm:w-36 md:w-40 mt-1"
              />
            </div>
        
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
              {/* HOME THEATRE (Full width on mobile/tablet, spans 2 cols on desktop) */}
              <div className="bg-gray-200 p-6 sm:p-8 col-span-1 md:col-span-2">
                <h3 className="tracking-[0.4em] text-center text-base sm:text-lg text-gray-900 font-medium mb-4">
                  HOME THEATRE
                </h3>
              </div>
        
              {/* SMELL + SOUND (Right Tall Box — full width on mobile, right col on desktop) */}
              <div className="bg-gray-200 p-6 sm:p-8 md:row-span-2 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Smell</h3>
                  <p className="text-sm leading-relaxed text-gray-900 mb-4">
                    <strong>Profile:</strong> Expensive leather, midnight rose, smoky oud, and mahogany.<br />
                    <strong>Atmosphere:</strong> Aroma of a private members' club or sanctuary.
                  </p>
        
                  <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-gray-900">Sound</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    <strong>Style:</strong> Intense and cinematic.
                  </p>
                </div>
        
                <Image
                  src="/luxury-smell.png"
                  alt="Smell and Sound reference"
                  width={600}
                  height={600}
                  className="w-full h-auto mt-2 object-cover"
                />
              </div>
        
              {/* TOUCH */}
              <div className="bg-gray-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Touch</h3>
                <p className="text-sm leading-relaxed text-gray-900 mb-6">
                  <strong>Materials:</strong> Rich walnut, quilted leather, heavy velvet, and polished wood panelling.<br />
                  <strong>Textures:</strong> Deeply tufted leather, plush velvet pile, and polished, reflective surfaces.<br />
                  <strong>Philosophy:</strong> Ultimate privacy and cinematic immersion.<br />
                  <strong>Vibe:</strong> Mysterious, powerful, and exclusive.
                </p>
        
                <Image
                  src="/luxury-touch.png"
                  alt="Touch materials reference"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
        
              {/* APPEARANCE */}
              <div className="bg-gray-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Appearance</h3>
                <p className="text-sm leading-relaxed text-gray-900 mb-6">
                  <strong>Colours:</strong> Monochromatic blacks, charcoal greys, silver accents, and rich walnut browns.<br />
                  <strong>Form:</strong> Bold, sleek silhouettes with sharp edges and heavy, deep-seated furniture.<br />
                  <strong>Imagery:</strong> Private home theatres.
                </p>
        
                <Image
                  src="/luxury-appearance.png"
                  alt="Appearance reference"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
        
            </div>
        
            {/* Bottom Full-width Image */}
            <div className="mt-8 sm:mt-12">
              <Image
                src="/luxury-black.png"
                alt="Soundhous brand textures"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
        
          </div>
        </section>

        <section
  id="curating-experience"
  className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <div className="mb-10 md:mb-14">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
                <span className="font-light">1.11.</span>&nbsp;&nbsp;Curating the Soundhous Experience
      </h2>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
        Welcome.
      </h3>
    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      {/* LEFT CONTENT */}
      <div className="space-y-6 text-base font-light sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-xl">
        <p>
          These guidelines are here to support you in creating the ultimate
          Soundhous experience in your local market.
        </p>

        <p>
          The purpose of this section is to harmonise the representation of our
          premium brand across all Soundhous physical touchpoints.
        </p>

        <p>
          This is a living, breathing document that will be constantly updated.
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-6 max-w-md">

        <p className="text-base sm:text-lg  md:text-xl font-light text-black/80 leading-relaxed">
          In curating, kindly remember to reference the Core Elements in
          sections:
        </p>

        <ul className="space-y-3 text-base sm:text-lg md:text-xl text-black">
          <li>
            <span className="mr-4 text-black/70">1.0</span>
            <span className="font-semibold">Brand Foundation</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">2.0</span>
            <span className="font-semibold">Brand Blueprint</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">3.0</span>
            <span className="font-semibold">Symphony</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">4.0</span>
            <span className="font-semibold">Typography</span>
          </li>

          <li>
            <span className="mr-4 text-black/70">5.0</span>
            <span className="font-semibold">Sensory Guide</span>
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>

<section id="tee" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
              <div className="max-w-5xl mx-auto">
                <Image
                  src="/set.png"
                  alt="SET"
                  width={1000}
                  height={1000}
                  className="w-full h-auto mb-6"
                />
              </div>
            </section>

      <section
  id="set-touchpoints"
  className="bg-white px-6 md:px-12 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-4">
      Soundhous Experience Touchpoints (SET)
    </h2>

    {/* SUBTITLE */}
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-12">
      <span className="font-light">SET</span> = Retail + Display + Activation
    </p>

    {/* IMAGE */}
    <div className="flex justify-center">
      <Image
        src="/soundhous-images/set-touchpoints.png"
        alt="Soundhous Experience Touchpoints"
        width={600}
        height={1200}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>


 <section
  id="retail-store-places"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  {/* TITLE */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 md:mb-14">
    Retail Store Spaces
  </h2>

  {/* IMAGE */}
  <div className="flex justify-center">
    <Image
      src="/retail-store-places.png"
      alt="Retail store places"
      width={900}
      height={900}
      className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
      priority
    />
  </div>
</section>

      <section
  id="cafe-area"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

    {/* LEFT CONTENT */}
    <div className="space-y-10 max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Cafe Area
      </h2>

      {/* TEXT BLOCKS */}
      <div className="space-y-8 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">The Culinary & Social Experience:</span><br />
          Designed as a multi-purpose transition zone, this open-plan area
          bridges the gap between high-end listening and high-end living.
        </p>

        <p>
          <span className="font-bold">The Bar:</span>{" "}
          A fully integrated service station dedicated to artisan coffee,
          craft cocktails, and gourmet pastries, ensuring the experience
          appeals to the palate as much as the ears.
        </p>

        <p>
          <span className="font-bold">The Atmosphere:</span>{" "}
          An open social lounge configuration designed for decompression,
          allowing guests to relax in fluid seating clusters that foster
          natural conversation and community.
        </p>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/cafe-area.png"
        alt="Cafe Area illustration"
        width={1000}
        height={1200}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

      <section
  id="outdoor-listening-area"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Outdoor Listening Area
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Facade:</span>{" "}
          A pergola and feature wall displaying the Soundhous logo and
          professional audio installation. It offers a relaxed, premium
          environment for experiencing sound in open air.
        </p>

        <p>
          <span className="font-bold">The “Sonic Threshold”:</span>{" "}
          Specialized outdoor speakers play a crystal-clear,
          5-second AFROMIDI melodic loop.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/outdoor-listening-area.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Wall:</strong> Plain large surface wall for logo and speaker placement.</p>

        <p><strong>B. Timber Slatted Pergola/Ceiling:</strong> Wooden battens installed with a suitable gap.</p>

        <p><strong>C. Flooring:</strong> Durable outdoor flooring.</p>

        <p><strong>D. Brand Logo:</strong> Attention logo finished in “white.” Mounted at an eye-level height of 1.6m.</p>

        <p><strong>E. Audio System:</strong> Professional-grade speakers (black finish) suspended from the pergola structure. Integrated vertical array speakers (3 per side) flanking the logo, recessed or surface-mounted with concealed cabling.</p>

        <p><strong>F. Seating:</strong> Lounge seating with modular low-profile outdoor sofa, armchairs with ergonomic high backs and slimline metal legs, circular aluminium low tables.</p>

        <p><strong>G. Greenery:</strong> Integrated planter boxes with drainage containing tropical plants.</p>

      </div>

    </div>

  </div>
</section>

      <section
  id="indoor-listening-areas"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Indoor Listening Areas
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Open Listening Areas:</span><br />
          High-end audio equipment is elegantly displayed around a
          comfortable lounge setting.
        </p>

        <p>
          <span className="font-bold">The “Hous” Pods:</span>{" "}
          Private or semi-private “Pods”, where customers experience the
          hardware. Acoustically treated booths lined with sound-absorbing
          charcoal foam.
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/indoor-listening-areas.png"
        alt="Indoor Listening Areas"
        width={1200}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

<section
  id="home-theatre"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Home Theatre
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">The Visual Aesthetic:</span>{" "}
          Soundhous-signature luxury black, utilising light-absorbing
          materials and matte-finished acoustic panels to ensure zero
          light reflection.
        </p>

        <p>
          <span className="font-bold">Acoustic Engineering:</span>{" "}
          Secondary sound absorption, ensuring the only thing you hear
          is the intended audio track. See Soundhous Franchise Store
          General Specifications and Partner Acoustic Setup Guide for
          more information.
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/home-theatre.png"
        alt="Soundhous Home Theatre"
        width={1200}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl h-auto object-contain"
        priority
      />
    </div>

  </div>
</section>

<section
  id="store-front"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Storefront
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          <span className="font-bold">Facade:</span>{" "}
          Modern, minimalist design
          featuring a textured charcoal-black
          feature wall with a white minimalist
          backlit attention logo on the wall.
        </p>

        <p>
          <span className="font-bold">The “Sonic Threshold”:</span>{" "}
          A specialized
          directional speaker (sound shower) above
          the entrance that plays a crystal-clear,
          5-second AFROMIDI melodic loop only
          audible to the person standing exactly in
          the doorway.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/store-front.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Main Logo (“Soundhous”):</strong> 3D Halo-lit attention logo, matte finish.</p>

        <p><strong>B. Sub-text (“Experience Store”):</strong> Flat-cut acrylic letters, pin-mounted with a suitable standoff.</p>

        <p><strong>C. Main Wall :</strong> Exterior textured sand-finish render in Soundhous Black.</p>

        <p><strong>D. Wall Sconces:</strong> Minimalist up/down rectangular LED luminaires.</p>

        

      </div>

    </div>

  </div>
</section>


      <section
  id="feature-wall"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-xl">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
        Feature Wall
      </h2>

      {/* BOTTOM TEXT */}
      <div className="mt-10 lg:mt-0 space-y-6 text-base sm:text-base md:text-base text-black/90 leading-relaxed">

        <p>
          This is the visual centrepiece of the
          store, located behind the main service
          counter or in the centre gallery.

          The Soundhous logo should be featured
          prominently on this wall.
        </p>

        <p>
          <span className="font-bold">Lighting:</span>{" "}
            RGB LEDs shift colours based
            on the frequency of the music currently
            playing in the store.
        </p>

      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col items-center lg:items-end">

      {/* IMAGE */}
      <Image
        src="/feature-wall.png"
        alt="Outdoor Listening Area layout"
        width={1000}
        height={900}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        priority
      />

      {/* IMAGE NOTES */}
      <div className="mt-6 text-xs sm:text-sm text-black/80 leading-relaxed max-w-xl space-y-2">

        <p><strong>A. Panel:</strong> Scandinavian wooden panel.</p>

        <p><strong>B. Display:</strong> Screen module(centre-aligned.)</p>

        <p><strong>C. Brand Logo:</strong> Attention logo finished in “white.” Mounted above display screen.</p>

        <p><strong>D. Plain Wall</strong></p>

        

      </div>

    </div>

  </div>
</section>

      <section
  id="franchise-specifications"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-8">
      Soundhous Franchise Store General Specifications
    </h2>

    {/* INTRO PARAGRAPH */}
    <p className="max-w-4xl text-base md:text-lg text-black/80 leading-relaxed mb-20">
      The Soundhous store should be an experiential destination for the
      successful executive, business man and discerning family who affiliate
      themselves with immersive, experiential and tailored sound. Each
      Soundhous store from a layout standpoint should have the following
      areas:
    </p>

    {/* STAIRCASE GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

      {/* 1. CAFE AREA */}
      <div className="lg:self-end">
        <h3 className="font-bold text-lg text-black mb-3">
          1. Soundhous Cafe Area
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• Coffee, cocktail and pastries Bar</li>
          <li>• Open social lounge area (informal seating/circles)</li>
        </ul>
      </div>

      {/* 2. PREMIUM AUDIO */}
      <div className="lg:mt-16">
        <h3 className="font-bold text-lg text-black mb-3">
          2. Soundhous Premium Audio Area (Sonos)
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• Premium Audio display wall</li>
          <li className="ml-4 italic">• On the Go</li>
          <li className="ml-4 italic">• AIO system</li>
          <li className="ml-4 italic">• Home theatre</li>
          <li className="ml-4 italic">• Architectural</li>

          <li className="mt-3">• Private Demo listening Room (Sonos)</li>
          <li className="ml-4 italic">• Sonos Premium 5.2 Home theatre</li>
          <li className="ml-4 italic">• Sonos In-wall 4.1 Home theatre</li>
        </ul>
      </div>

      {/* 3. HIGH-END AUDIO */}
      <div className="lg:mt-0">
        <h3 className="font-bold text-lg text-black mb-3">
          3. Soundhous High-End Audio Area (Focal powered by Naim)
        </h3>

        <ul className="space-y-1 text-black/90">
          <li>• High-end Audio Display area</li>
          <li className="ml-4 italic">• On the Go</li>
          <li className="ml-4 italic">• AIO system</li>
          <li className="ml-4 italic">• Home theatre</li>
          <li className="ml-4 italic">• HiFi Audio System</li>
          <li className="ml-4 italic">• Outdoor Audio System</li>

          <li className="mt-3">• Private Demo listening Room (Focal/Naim)</li>
          <li className="ml-4 italic">• Focal Kanta</li>
          <li className="ml-4 italic">• Focal Sopra</li>
          <li className="ml-4 italic">• Focal Grand Utopia</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section
  id="display"
  className="w-full scroll-mt-24 py-16 md:py-24"
>
  <div className="max-w-4xl mx-auto px-6">
    <Image
      src="/display-2.png"
      alt="Display"
      width={1000}
      height={1200}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>

      <section
  id="experience-display"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Experience Display
    </h2>

    {/* IMAGE */}
    <div className="flex justify-center">
      <Image
        src="/experience-display.png"
        alt="Experience Display Layout"
        width={2400}
        height={1200}
        className="w-full max-w-6xl h-auto object-contain"
        priority
      />
    </div>

    {/* DESCRIPTION */}
    <div className="mt-12 max-w-xl text-black/90 leading-relaxed">
      <p>
        <span className="font-bold">A.</span> Brand Logo
      </p>
      <p>
        <span className="font-bold">B.</span> Audio Equipment (as detailed in 6.4.2)
      </p>
    </div>

  </div>
</section>

<section
  id="product-display-shelve"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Product Display Shelve
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

      {/* LEFT TEXT (BOTTOM LEFT) */}
      <div className="flex flex-col justify-end max-w-md text-black/90 leading-relaxed">

        <p className="mb-6">
          This category is for small, often permanent installations within a
          retail store (e.g. End caps, in-line shelving).
        </p>

        <ul className="space-y-4">
          <li>
            <span className="font-bold">• Size/Footprint:</span> Maximize vertical use.
            Shelf depth should accommodate a listening station
          </li>

          <li>
            <span className="font-bold">• Materials:</span> Heavy, Solid Construction.
            Use the AFROMIDI materials. Avoid flimsy plastic.
          </li>
        </ul>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/product-display-shelves.png"
          alt="Product Display Shelve"
          width={1400}
          height={1000}
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

<section
  id="product-display-views"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-20 scroll-mt-24"
>
  <div className="max-w-6xl mx-auto flex justify-center">
    <Image
      src="/product-shelf.png"
      alt="Product Display Views"
      width={2000}
      height={1200}
      className="w-full max-w-5xl h-auto object-contain"
      priority
    />
  </div>
</section>

<section
  id="gondola-display"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-12">
      Gondola Display
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/gondola-display.png"
          alt="Gondola Display"
          width={1400}
          height={1000}
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="max-w-lg text-black/90 leading-relaxed space-y-1">

        <p>
          <span className="font-bold">1. Top Centre:</span><br />
          3D Standoff Signage Branding Assembly
          <br />
          <span className="text-xs">Precision-cut “Soundhous” block lettering mounted on a dual-rail standoff system.</span>
        </p>

        <p>
          <span className="font-bold text-base">2. Left & Right Extremities:</span><br />
          Side Panels
        </p>

        <p>
          <span className="font-bold text-base">3. Centre Horizontal:</span><br />
          High-Load Modular Shelving
        </p>

        <p>
          <span className="font-bold text-base">4. Underneath Shelves:</span><br />
          Concealed Downlighting
        </p>

        <p>
          <span className="font-bold text-base">5. Background Layer:</span><br />
          Contrast Back Panel
        </p>

        <p>
          <span className="font-bold text-base">6. Bottom Section:</span><br />
          Base Deck & Kick Plate (Foundation)
          <br />
          <span className="text-xs">Extended depth base shelf for bulk storage. Includes a recessed,
          scuff-resistant metallic kick plate to protect the joinery from
          floor maintenance.</span>
        </p>

      </div>

    </div>
  </div>
</section>

<section
  id="Exhibition-guidelines"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-1">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between max-w-sm">

      <p className="text-lg md:text-xl leading-relaxed text-black font-medium">
        The purpose of the exhibition guidelines is to harmonise the
        representation of our premium brand across all Soundhous
        exhibitions and events.
      </p>

      <div className="mt-8 text-sm text-black/80 leading-relaxed">
        <p className="mb-3">There are three types of Activations:</p>
        <p>A. Single Wall Activation (Pop-up)</p>
        <p>B. Double Wall Activation (Corner Wall)</p>
        <p>C. Booths (Full Experience)</p>
      </div>

    </div>

    {/* IMAGE */}
    <div className="lg:col-span-2">
      <Image
        src="/activation-display.png"
        alt="Activation Display"
        width={1400}
        height={900}
        className="w-full h-auto object-contain"
      />
    </div>

    {/* TEXT AREA (middle + right) */}
<div className="lg:col-span-2 lg:col-start-2 -mt-1 lg:-mt-16">
  <p className="text-sm text-black/90 leading-relaxed lg:columns-2 lg:gap-10">
    We’re the reliable partner, combining premium quality and
    attention to detail with a warm and inviting atmosphere.
    This is also reflected in our behaviour. We are confident,
    yet humble. We’re not here to push sales, but we take time to
    understand our customers’ needs and daily pains, guiding
    them to what they genuinely need. We are trusted experts
    that prioritise their best interests and never oversell.
  </p>
</div>
  </div>
</section>

<section
  id="popups"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-16 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">

    {/* OUTER: Left side (title + grid) and Right column side by side */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

      {/* LEFT 2/3 — Title + inner 2-col grid */}
      <div className="lg:col-span-2 flex flex-col gap-6">

        {/* SECTION TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Pop-ups
        </h2>

        {/* INNER GRID: Left text + Middle image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-32">
            <h3 className="text-lg font-light text-black">
              Single-Wall Exhibition
            </h3>
            <div className="space-y-2">
              <p className="text-base text-black leading-relaxed">
                Pop-up exhibitions are similar to our single-wall
                displays. They can also be specially fabricated e.g
                mobile kiosks
              </p>
              <p className="text-xs text-black/70 leading-relaxed mt-4">
                Single-wall displays are shown in Display Guidelines /
                Experience Display
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/single-wall-display.png"
              alt="Single Wall Exhibition"
              width={1200}
              height={800}
              className="w-full max-w-xs h-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN — aligns to top with the heading */}
      <div className="flex flex-col space-y-1">
        <h3 className="text-sm font-bold text-black mb-1">
          Mobile Kiosks
        </h3>
        <p className="text-sm text-black/90 leading-relaxed mb-2">
          The Mobile Kiosk is a dedicated, self-contained interaction
          point designed to be moved within the Large Exhibition
          Space or temporarily placed in high-traffic common areas
          adjacent to the booth.
        </p>
        <Image
          src="/mobile-kiosk.png"
          alt="Mobile kiosk display"
          width={600}
          height={400}
          className="w-full max-w-xs h-auto object-contain my-1"
        />
        <div className="text-sm text-black/90 leading-snug space-y-1">
          <p><span className="font-bold">Structure & Aesthetics:</span></p>
          <p>
            <span className="font-bold">Footprint:</span> Small, narrow, and easily manoeuvrable
            (approx. 1.5m width).
          </p>
          <p>
            <span className="font-bold">Materials:</span> Matte Black powder-coated steel frame with a
            solid, dark wood counter top (Walnut). Must include
            locking caster wheels.
          </p>
          <p>
            <span className="font-bold">Internal Storage:</span> Lockable cabinet space for charging
            accessories, cleaning supplies, and promotional
            materials.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section
  id="corner-walls"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

    {/* LEFT COLUMN */}
    <div className="flex flex-col">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black">
        Corner Walls
      </h2>

      {/* Sub-title */}
      <h3 className="text-lg md:text-xl font-semibold text-black mt-2">
        Double-wall exhibition
      </h3>

      {/* Description */}
      <p className="mt-8 text-sm text-black/90 leading-relaxed max-w-sm">
        Corner Wall Exhibitions / Activations are made up of
        two walls: Our brand wall and our partner wall.
      </p>

      {/* Small reference text */}
      <p className="mt-6 text-xs text-black/70 leading-relaxed max-w-sm">
        Our brand wall is a single-wall display.
        Single-wall displays are shown in Display
        Guidelines / Experience Display.
      </p>

    </div>


    {/* MIDDLE COLUMN */}
    <div className="flex flex-col items-center">

      <Image
        src="/corner-wall-display.png"
        alt="Corner wall exhibition"
        width={1200}
        height={800}
        className="w-full max-w-md h-auto object-contain"
      />

      <div className="mt-6 text-sm text-black/90 leading-relaxed space-y-2">
        <p>
          1. The brand wall colour is Soundhous Black
          or ‘Signal’ Grey.
        </p>

        <p>
          2. The partner wall is used to showcase
          partner products.
        </p>
      </div>

    </div>


    {/* RIGHT COLUMN */}
    <div className="flex justify-center lg:justify-end">

      <Image
        src="/corner-wall-example.png"
        alt="Corner wall exhibition example"
        width={1200}
        height={800}
        className="w-full max-w-md h-auto object-contain"
      />

    </div>

  </div>
</section>

<section
  id="full-branding-experience"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto space-y-6">

    {/* TITLE — full width above grid */}
    <h2 className="text-2xl md:text-3xl font-bold text-black">
      Full Branding Experience
    </h2>

    {/* 3-COL GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4">

        <h3 className="text-lg font-light text-black leading-snug">
          Trade Show Booths<br />
          – 9x9m and larger<br />
          (Small/Medium/ Large)
        </h3>

        <div className="space-y-3 text-sm text-black leading-relaxed">
          <p>
            This category is designed to fully replicate the Soundhous
            Showroom experience, maximizing immersion and product depth.
          </p>

          <p>
            <span className="font-bold">Zoning (The 3 Zones)</span><br />
            The space must be intentionally divided.
          </p>

          <p>
            <span className="font-bold">The Craftsmanship Wall (Aesthetics):</span><br />
            A large, visually stunning wall displaying exploded product views,
            premium materials, and technical schematics. Use directional
            spotlights here.
          </p>
        </div>

      </div>

      {/* MIDDLE COLUMN */}
      <div className="flex flex-col gap-4 text-sm text-black leading-relaxed">

        <p>
          <span className="font-bold">The Silent Studio (Experience):</span><br />
          A partially enclosed (3-walled) soundproofed area featuring
          comfortable seating, a controlled sound environment, and a
          high-end, dedicated listening setup (e.g., A home theatre
          system or audiophile headphone rig). This is for deep
          product demos.
        </p>

        <p>
          <span className="font-bold">The Interaction Bar (Engagement):</span><br />
          A central, large counter (Matte Black with a copper kick-plate)
          staffed by experts. This is where multiple lower-tier products
          are available for quick, hands-on, non-acoustic interaction
          (weight, feel, cable quality). Serve premium coffee or water here.
        </p>

      </div>

      {/* RIGHT COLUMN — TWO STACKED IMAGES */}
      <div className="flex flex-col gap-3 items-start">

        <Image
          src="/trade-show-booth-1.png"
          alt="Trade show booth floor plan"
          width={900}
          height={600}
          className="w-full max-w-xs h-auto object-contain border border-gray-200"
        />

        <Image
          src="/trade-show-booth-2.png"
          alt="Trade show booth 3D render"
          width={900}
          height={600}
          className="w-full max-w-xs h-auto object-contain"
        />

      </div>

    </div>
  </div>
</section>

<section
  id="exhibition-example"
  className="bg-white py-16 md:py-24"
>
  <Image
    src="/exhibition-example.png"
    alt="Soundhous exhibition example"
    width={2000}
    height={1200}
    className="w-full h-auto object-contain"
    priority
  />
</section>

<section
  id="branding-principles"
  className="bg-white px-6 sm:px-10 md:px-16 py-12 md:py-16"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 items-start">

    {/* LEFT COLUMN — pushed down with margin-top to align mid-page */}
    <div className="lg:mt-48 text-sm text-black leading-relaxed space-y-4">
      <p className="text-2xl font-light text-black leading-snug">
        Below is an overview of the basic principles for branding of the stand.
      </p>
      <ol className="list-decimal list-outside ml-4 space-y-3 text-sm">
        <li>
          Message in short visible text should be written with the Rubik Heading typeface.
        </li>
        <li>
          Soundhous brand assets should be used for branding of the stand (Soundhous brand assets should be placed on a wall inside the stand).
        </li>
        <li>
          Plants can be used both on walls and in pots on the floor to add more structure and a natural (living) warmth to a space.
        </li>
      </ol>
    </div>

    {/* MIDDLE COLUMN — also pushed down to align with left */}
    <div className="lg:mt-70 text-sm text-black leading-relaxed">
      <ol className="list-decimal list-outside ml-4 space-y-3" start={4}>
        <li>
          Use Soundhous brand assets that are visible from aisles at a good height. This branding should be visible from outside the stand.
        </li>
        <li>
          For text, use Soundhous wordmark hanging high up in any available truss, visible from both front and sides in the main aisles. This branding should be visible from outside the stand.
        </li>
        <li>
          Use neutral dark colours, e.g. Soundhous Dark Grey, on carpet to keep the focus on the products.
        </li>
      </ol>
    </div>

    {/* RIGHT COLUMN — Don'ts, starts at top */}
    <div className="text-sm text-black leading-relaxed space-y-2">
      <p className="font-bold mb-3">Don'ts</p>
      <ol className="list-decimal list-outside ml-4 space-y-3">
        <li>Don't use other colours than the Exhibition base colours.</li>
        <li>Don't use pictures other than the ones following the Soundhous image style.</li>
        <li>Don't put the Soundhous in the corner of big pictures. The visibility is way too poor.</li>
        <li>Don't place the Soundhous branding material too low. It will be hidden behind vehicles and crowd.</li>
        <li>Don't put the Soundhous logotype or symbol on an image that doesn't highlight it. The logotype must contrast with the background.</li>
        <li>Don't use any other font than Rubik.</li>
        <li>Don't put any of the Soundhous logotypes on the floor.</li>
        <li>Don't use any garish colour on the floor. Keep it neutral.</li>
        <li>Don't forget to brand the stand from the aisles and entrances.</li>
      </ol>
    </div>

  </div>
</section>

<section
  id="design-specifications"
  className="bg-white px-4 sm:px-10 md:px-16 py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <p className="text-base sm:text-lg md:text-xl text-black font-light mb-8 leading-snug">
      The spaces must feel premium, acoustically intentional, and invite tactile interaction.
    </p>

    {/* Table */}
    <div className="w-full">
      <table className="w-full border border-black text-black text-[11px] sm:text-xs md:text-sm leading-snug">

        {/* Table Head */}
        <thead className="bg-black/5">
          <tr>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[22%]">
              Element
            </th>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[44%]">
              Specification
            </th>
            <th className="border border-black px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-[34%]">
              Rationale
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>

          {/* Row 1 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Colour Palette
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Primary: Soundhous Black (#0A0A0A): A “deep-space” black.
              The “Signal” Grey (#808080): Used sparingly for secondary
              information (metadata, labels, or grid lines).
              A subtle copper or brushed aluminium
              (for hardware/trim).
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Conveys sophistication, neutrality (for sound focus),
              and a premium feel. Copper/Aluminium hints at
              quality internal components.
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Typography
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              A clean, modern sans-serif (e.g., Montserrat,
              Lato) for body text and a slightly more
              geometric or capitalized font for headers/titles.
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Ensures readability and a contemporary,
              technical aesthetic.
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Acoustic Treatment
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Incorporate high-density foam panels or felt
              acoustic panelling into all vertical surfaces
              and ceilings (where possible).
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Essential for a sound brand. Reduces ambient
              noise and allows guests to truly hear the
              product quality.
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="border border-black px-2 py-2 md:px-4 md:py-4 font-medium">
              Lighting
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Warm, directional, and focused LED lighting.
              Highlight products, not the entire structure.
              Avoid harsh fluorescents.
            </td>

            <td className="border border-black px-2 py-2 md:px-4 md:py-4">
              Creates a premium, intimate atmosphere,
              similar to a high-end audio listening room.
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>

<section
  id="exhibition-materials"
  className="bg-white px-6 sm:px-10 md:px-16 py-10 md:py-14"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-16 md:mb-24">
      Exhibition Materials
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6">

        {/* Text */}
        <p className="text-xs sm:text-sm text-black leading-relaxed max-w-xs">
          The exhibition material palette is based on the overarching
          Soundhous material palette and is used to guide the choice
          of material used in the exhibition stand.
        </p>

        {/* Material swatches image — constrained small like in reference */}
        <div>
          <Image
            src="/exhibition-materials.png"
            alt="Exhibition material swatches"
            width={900}
            height={600}
            className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-contain"
          />
        </div>

      </div>

      {/* RIGHT COLUMN — exhibition sketch */}
      <div className="w-full">
        <Image
          src="/exhibition-materials-wide.png"
          alt="Exhibition stand sketch"
          width={1600}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

<section
  id="text-on-walls"
  className="bg-white px-6 sm:px-10 md:px-16 py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
      Text on Walls
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-10">

      {/* IMAGE (TOP RIGHT) */}
      <div className="order-1 lg:order-none lg:col-start-3">
        <Image
          src="/text-on-walls.png"
          alt="Example of text applied to exhibition walls"
          width={900}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* LEFT TEXT */}
      <div className="order-2 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          When applying text to large walls, brevity is essential.
          Visitors are there to experience our products, not to
          read lengthy passages.
        </p>

        <p>
          <span className="font-medium">Keep it Brief:</span>
          Ensure messaging is short and impactful.
        </p>

      </div>

      {/* MIDDLE TEXT */}
      <div className="order-3 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          <span className="font-medium">Visual Harmony:</span>
          Align text vertically where possible to create a more
          balanced, harmonious layout.
        </p>

        <p>
          <span className="font-medium">Typography:</span>
          Use Rubik Bold for all headlines.
        </p>

      </div>

      {/* RIGHT TEXT */}
      <div className="order-4 lg:order-none text-sm md:text-base text-black/90 leading-relaxed space-y-4">

        <p>
          <span className="font-medium">Sizing & Structure:</span>
          Limit headlines to 1–3 lines and ensure the font
          size is large enough for easy legibility.
        </p>

        <p>
          <span className="font-medium">Colour Palette:</span>
          Use only our approved colours.
        </p>

      </div>

    </div>

  </div>
</section>
<section id="general-clothing-guide" className="px-6 md:px-12 py-16 bg-white">
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
                {/* LEFT — TEXT */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="font-light">1.13.</span>&nbsp;&nbsp;General clothing guide
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
            



</main>

    </div>
  );
}