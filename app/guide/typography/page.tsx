import Image from "next/image";

export default function TypographyPage() {
  return (
    <div className="bg-white">
      <section id="typography" className="scroll-mt-24">
        <div className="max-w-full mx-auto">
          <Image
            src="/typography.png"
            alt="Typography"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section id="primary-typeface" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-normal mr-2">4.1.</span> Primary Typeface
          </h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
              <p className="text-xl sm:text-2xl font-bold text-black">Rubik</p>
              <p className="text-sm sm:text-base">
                Our brand typeface is Rubik.  
                It is purposeful, authoritative,  
                and effective at small and  
                large scales.
              </p>
            </div>

            {/* RIGHT COLUMN with aligned rows */}
            <div className="space-y-4 sm:space-y-6 text-left">
              {/* Light → Caption */}
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

              {/* Regular → Body */}
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

              {/* Medium → Subheadings */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <p className="font-medium text-black text-sm sm:text-base md:text-lg break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Medium</p>
                </div>
                <p className="text-base sm:text-lg text-black shrink-0">Subheadings 36pt</p>
              </div>
              <hr className="border-gray-300" />

              {/* Bold → Headings */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <p className="font-bold text-black text-sm sm:text-base md:text-lg break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Bold</p>
                </div>
                <p className="text-lg sm:text-xl text-black font-bold shrink-0">Headings 48pt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  id="alternate-typeface" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <span className="font-normal mr-2">4.2.</span> Alternate Typeface
          </h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg">
                <strong className="text-black">System Default Sans-Serif:</strong><br/>
                If Rubik fails to load (due to a technical issue or restriction on a platform), 
                fallback to either 'Helvetica Neue' or 'Arial'.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 sm:space-y-8 text-left">
              {/* Helvetica Neue */}
              <div className="space-y-2">
                <p className="text-black text-sm sm:text-base md:text-lg break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                  abcdefghijklmnopqrstuvwxyz<br/>
                  0123456789
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Helvetica Neue</p>
              </div>
              <hr className="border-gray-300" />

              {/* Arial */}
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
    </div>
  );
}