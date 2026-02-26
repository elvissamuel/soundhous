import Image from "next/image";

export default function SymphonyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto">
        <section id="symphony" className="scroll-mt-24">
          <div className="max-w-full mx-auto">
            <Image
              src="/soundhous-images/symphony.jpg"
              alt="Symphony"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section
          id="brand-visual"
          className="relative scroll-mt-24"
        >
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-14">
              <span className="font-light">3.1</span>&nbsp;&nbsp;Brand Visual Language & Identity System
            </h2>

             <div
              className="relative bg-black flex flex-col justify-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
              style={{
                backgroundImage: "url('/section-bg-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            
              <p className="text-base sm:text-4xl md:text-5xl lg:text-[38px] font-black text-white font-semibold leading-tight ml-0 sm:ml-20 md:ml-16 w-fit">
                We build with intention. Our identity 
                system provides the framework that
                turns our abstract philosophy into a 
                tangible, recognisable reality.
              </p>
            
            </div>
          
        </section>

        <section
          id="brand-assets"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="font-light">3.1.1</span>&nbsp;&nbsp;Brand Assets
            </h2>

            <Image
              src="/brand-assets.png"
              alt="Brand Assets"
              width={1000}
              height={1000}
              className="w-full h-auto mb-6"
            />
          </div>
        </section>

        <section id="illustration-style" className="w-full bg-black px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              <span className="font-light">3.1.2.</span> Illustration Style
            </h2>

            {/* 2 Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <Image
                  src="/illustration-style-1.png"
                  alt="Wireframe illustration style example left"
                  width={500}
                  height={500}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center">
                <Image
                  src="/illustration-style-2.png"
                  alt="Wireframe illustration style example right"
                  width={500}
                  height={500}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="text-center text-gray-400 text-sm mt-8">
              White wireframe-style drawings on a black background.
            </p>
          </div>
        </section>

        <section className="w-full bg-gray-100 px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Grid of 4 Images (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              {/* IMAGE 1 */}
              <div className="flex justify-center">
                <Image
                  src="/thehous.png"
                  alt="Illustration example 1"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="flex justify-center">
                <Image
                  src="/wavyline.png"
                  alt="Illustration example 2"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>

              {/* IMAGE 3 */}
              <div className="flex justify-center">
                <Image
                  src="/s-wave.png"
                  alt="Illustration example 3"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>

              {/* IMAGE 4 */}
              <div className="flex justify-center">
                <Image
                  src="/wavyline-2.png"
                  alt="Illustration example 4"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="color-system"
          className="relative scroll-mt-24"
        >
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-6 sm:px-10 md:px-16 py-14">
              <span className="font-light">3.2</span>&nbsp;&nbsp;Color System
            </h2>
           <div
              className="relative bg-black flex flex-col justify-center px-6 sm:px-10 md:px-16 min-h-[200px] sm:min-h-[380px] md:min-h-[470px]"
              style={{
                backgroundImage: "url('/section-bg-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            
              <p className="text-base sm:text-4xl md:text-5xl lg:text-[38px] font-black text-white font-semibold leading-tight ml-0 sm:ml-20 md:ml-16 w-fit">
               Colours are used to bridge the gap
                between what you are and how you want
                to be felt. They act as a navigational guide, 
                telling the human eye where to look, what
                to trust, and when to take action.
              </p>
            
            </div>
            
          
        </section>

        <section id="primary-colours" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              <span className="font-light">3.2.1</span>&nbsp;&nbsp;Primary Colours
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
                {/* Left Text */}
                <div className="max-w-xl space-y-3">
                  <p className=" text-base sm:text-lg text-black">
                    <span className="text-black font-semibold">Soundhous Black (#0A0A0A):</span> A "deep-space" black. Use this for backgrounds to create a sense of depth, raw emotion and acoustic resonance.</p>
                  
                </div>
                
                {/* Right Swatch + Values */}
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
                {/* Left Text */}
                <div className="max-w-xl space-y-3">
                  <p className="text-black text-base sm:text-lg">
                    <span className="text-black font-semibold">Soundhous White (#F5F5F5):</span> An "off-white" or "paper" white. It feels more premium and architectural than a piercing digital white.</p>
                  
                </div>
                
                {/* Right Swatch + Values */}
                <div className="flex flex-col items-center space-y-2 shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gray-300" style={{ backgroundColor: "#F5F5F5" }}></div>
                  <div className="text-gray-600 text-xs sm:text-sm text-center space-y-1">
                    <p><span className="font-bold text-gray-900">HEX:</span> #F5F5F5</p>
                    <p><span className="font-bold text-gray-900">CMYK:</span> 3, 2, 2, 0</p>
                    <p><span className="font-bold text-gray-900">RGB:</span>  245, 245, 245</p>
                  </div>
                </div>
              </div>
              
              <hr className="border-gray-300" />
              
              {/* Signal Grey */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
                {/* Left Text */}
                <div className="max-w-xl space-y-3">
                  <p className="text-black text-base sm:text-lg">
                    <span className="text-black font-semibold">Signal Grey (#808080):</span> Used for soft contrast and sparingly for secondary information (metadata, labels, or grid lines).</p>
                  
                </div>
                
                {/* Right Swatch + Values */}
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

        <section id="secondary-extended-palette" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              <span className="font-light">3.2.2</span>&nbsp;&nbsp;Secondary & Extended Palette
            </h2>

            {/* Grid of 9 Colours (3x3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {/* Scandi Beige */}
              <div className="flex items-center justify-between">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black"
                  style={{ backgroundColor: "#E0C389" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black"
                  style={{ backgroundColor: "#F2C233" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300"
                  style={{ backgroundColor: "#E8E7E4" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300"
                  style={{ backgroundColor: "#F2E5D2" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white"
                  style={{ backgroundColor: "#784005" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white"
                  style={{ backgroundColor: "#032349" }}
                >
                  Midnight Blue
                </div>
                <div className="text-gray-600 text-sm space-y-1 ml-4">
                  <p><span className="font-semibold text-gray-800">HEX:</span> #032349</p>
                  <p><span className="font-semibold text-gray-800">CMYK:</span> 100, 87, 40, 41</p>
                  <p><span className="font-semibold text-gray-800 ">RGB:</span> 3, 35, 73</p>
                </div>
              </div>

              {/* White Blush */}
              <div className="flex items-center justify-between">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-black border border-gray-300"
                  style={{ backgroundColor: "#FAFBED" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white"
                  style={{ backgroundColor: "#978777" }}
                >
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
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-semibold text-white"
                  style={{ backgroundColor: "#272D39" }}
                >
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

        <section id="brand-architecture" className="w-full bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              <span className="font-light">3.3</span>&nbsp;&nbsp;Brand Architecture
            </h2>

            {/* 2 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* LEFT SIDE TEXT */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg text-black font-light">
                  Brand architecture is the structural system that organises a company's brands,
                  sub-brands, products, and services to show how they relate to one another.
                </p>
              </div>

              {/* RIGHT SIDE TEXT */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-black">Branded House:</strong> In this case, a single "Master Brand" is applied to everything. 
                  This creates maximum consistency and builds equity in one name.
                </p>
              </div>
            </div>

            {/* Large Image Beneath Both Columns */}
            <div className="flex justify-center mt-12">
              <Image
                src="/brand-architecture.png"
                alt="Soundhaus brand architecture diagram"
                width={900}
                height={600}
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}