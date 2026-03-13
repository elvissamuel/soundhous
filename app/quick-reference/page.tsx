import Image from "next/image";
import Link from "next/link";
import { QuoteMark } from "../guide/components/Quotemark";
import QuickReferenceSidebar from "./QuickReferenceSidebar";


export default function QuickReferencePage() {
  return (
    <div className="bg-white">

      {/* Sidebar */}
      <QuickReferenceSidebar />
      <main className="lg:ml-60 pt-16">
        {/* Our Story Section */}
        <section id="brand-guideline" className="scroll-mt-24">
          <div className="max-w-full mx-auto">
            <Image
              src="/quick-reference/quick-ref.png"
              alt="Brand Guideline"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section id="about-soundhous" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              <span className="font-light">1.1.</span>&nbsp;&nbsp;About Soundhous
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

        {/* TEE Section */}
        <section id="tee" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <Image
              src="/TEE-soundhous.png"
              alt="TEE"
              width={1000}
              height={1000}
              className="w-full h-auto mb-6"
            />
          </div>
        </section>

        {/* Brand Strategy at a Glance */}
        <section id="brand-strategy-glance" className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <Image
              src="/soundhous-images/brands.jpg"
              alt="Brand Strategy"
              width={1000}
              height={1000}
              className="w-full h-auto mb-6"
            />
          </div>
        </section>

        {/* 1.3 Logo Variations */}
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
                <p className="mt-2 text-xs sm:text-sm text-center text-black">
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
                  The &quot;soft-geometric&quot; nature of the font avoids the coldness of
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
                <p className="mt-2 text-xs sm:text-sm text-center text-black">
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

        {/* 1.4 Minimum Size and Format */}
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

        {/* 1.5 Logo Misuse */}
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
                <p><strong className="text-black">Do Not:</strong> Change the logo&apos;s colours or apply drop shadows, outlines, or other graphical effects.</p>
                <p><strong className="text-black">Do Not:</strong> Place the logo on a background that reduces legibility or contrast.</p>
                <p><strong className="text-black">Do Not:</strong> Create a new mark by combining the logo or any of its elements with another logo, text, or graphic.</p>
                <p><strong className="text-black">Do Not:</strong> Write out the logo in another typeface.</p>
                <p><strong className="text-black">Do Not:</strong> Stretch, distort, rotate, or alter the logo&apos;s proportions.</p>
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
              <span className="font-light">1.6.</span>&nbsp;&nbsp;Primary Colours
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
              <span className="font-light">1.7.</span>&nbsp;&nbsp;Secondary &amp; Extended Palette
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
              <span className="font-light">1.8.</span>&nbsp;&nbsp;Primary Typeface
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
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
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
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
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
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
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
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
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
              <span className="font-light">1.9.</span>&nbsp;&nbsp;Alternate Typeface
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg">
                  <strong className="text-black">System Default Sans-Serif:</strong><br />
                  If Rubik fails to load (due to a technical issue or restriction on a platform),
                  fallback to either &apos;Helvetica Neue&apos; or &apos;Arial&apos;.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8 text-left">
                <div className="space-y-2">
                  <p className="text-black text-sm sm:text-base md:text-lg break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                    abcdefghijklmnopqrstuvwxyz<br />
                    0123456789
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">Helvetica Neue</p>
                </div>
                <hr className="border-gray-300" />

                <div className="space-y-2">
                  <p className="text-black text-sm sm:text-base md:text-lg break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                    abcdefghijklmnopqrstuvwxyz<br />
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
                src="/sensory-application-clear.png"
                alt="AFROMIDI Design Styles"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* 1.11 Business Card */}
        <section
          id="business-card"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12">
              <span className="font-light">1.11.</span>&nbsp;&nbsp;Business card
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-8 text-gray-800 leading-relaxed max-w-xl">
                <p>
                  The business card is a primary bearer of the Soundhous identity.
                  It represents our commitment to precision and quality. The design
                  is kept clean and functional, ensuring that the focus remains on
                  the information and our brand authority.
                </p>

                <div>
                  <h3 className="font-semibold text-black mb-3">Typography &amp; Layout</h3>
                  <ul className="space-y-2">
                    <li><strong>Typeface:</strong> All text must be in Rubik.</li>
                    <li><strong>Alignment:</strong> Text should be left-aligned to ensure a structured, engineered look.</li>
                    <li><strong>Hierarchy:</strong> The name should be the most prominent element, followed by the job title and contact details.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-3">Colour Palette</h3>
                  <ul className="space-y-2">
                    <li><strong>Background (Front):</strong> White (for maximum legibility).</li>
                    <li><strong>Background (Back):</strong> Soundhous Black (to provide a premium tactile feel).</li>
                    <li><strong>Text:</strong> Soundhous Black for names; &quot;Signal&quot; Grey for contact details.</li>
                  </ul>
                </div>
              </div>

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

        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 max-w-7xl">

            {/* BUSINESS CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-black items-start">

              {/* FRONT text */}
              <div className="order-1 text-sm leading-relaxed">
                <h3 className="font-semibold tracking-wide text-black mb-3">FRONT</h3>
                <p className="text-black"><span className="font-medium">Name:</span> Rubik Bold, 12pt</p>
                <p className="text-black"><span className="font-medium">Title:</span> Rubik Regular, 8pt</p>
                <p className="text-black"><span className="font-medium">Contact:</span> Rubik Regular, 6pt</p>
                <p className="mt-2 text-black">
                  <span className="font-medium">Email/social media details:</span><br />
                  Rubik Regular, 6pt
                </p>
              </div>

              {/* FRONT image — stacks under FRONT text on mobile */}
              <div className="order-2">
                <Image
                  src="/quick-reference/front-business-card.png"
                  alt="Soundhous business card front"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>

              {/* BACK text */}
              <div className="order-3 text-sm leading-relaxed">
                <h3 className="font-semibold tracking-wide mb-3">BACK</h3>
                <p><span className="font-medium">Central Focal Point:</span> Solid Black Background.</p>
                <p className="mt-2">
                  <span className="font-medium">Centre:</span> Soundhous Logo
                  <br />(Reversed out in White).
                </p>
              </div>

              {/* BACK image — stacks under BACK text on mobile */}
              <div className="order-4">
                <Image
                  src="/quick-reference/back-business-card.png"
                  alt="Soundhous business card back"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>

            </div>

            {/* LETTERHEAD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              {/* Letterhead header text */}
              <div className="order-1 text-sm text-black leading-relaxed space-y-6">
                <p>
                  <span className="font-medium">Header</span><br />
                  Top left: Signature Logo
                </p>
                <p>
                  Top Right: Contact Block, Location, Social, Phone
                  <br />(Rubik Regular 7.5pt)
                </p>
                <p><span className="font-medium">Footer:</span> Signature Pattern</p>
              </div>

              {/* Letterhead image — stacks under header text on mobile */}
              <div className="order-2 border p-4 bg-neutral-50">
                <Image
                  src="/quick-reference/letterhead.png"
                  alt="Soundhous letterhead"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                />
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>

  );
}