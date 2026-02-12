import Image from 'next/image';

export default function PhotographyPage() {
  return (
    <div className="bg-white">
      {/* Photography Style Section */}
      <div className="max-w-full mx-auto">
        <section id="photography-style" className="scroll-mt-24">
          <div className="max-w-full mx-auto">
            <Image
              src="/photography-style.png"
              alt="Photography Style"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>

      <section
        id="overall-aesthetics"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10">
            7.1&nbsp;&nbsp;Overall Aesthetics
          </h2>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — TEXT */}
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                The overall aesthetic is{" "}
                <strong>"High-Contrast Cinematic."</strong> We use light to reveal
                form and shadow to create mystery.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                <strong>The Look:</strong> Moody, deep blacks (Deep Night Black),
                and sharp highlights.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                <strong>The Feel:</strong> Intimate and focused. The viewer should
                feel like they are in a private studio session.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed">
                <strong>The Palette:</strong> Lean heavily into monochromatic tones
                with warm skin tones to provide contrast.
              </p>
            </div>

            {/* RIGHT — IMAGE */}
            <div>
              <Image
                src="/cinematic-look.jpg"
                alt="High contrast cinematic visual style"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id='product-renders' className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-3xl font-bold mb-12">
            7.2&nbsp;&nbsp;Product Renders
          </h2>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* LEFT — TALL BORDERED TEXT */}
            <div className="border border-gray-300 flex items-center justify-center p-10">
              <p className="text-xl font-semibold leading-snug tracking-tight max-w-xs">
                Renders must emphasize the <br />
                <span className="font-bold">"Industrial Art"</span> <br />
                of the hardware.
              </p>
            </div>

            {/* MIDDLE — GUIDELINE CARDS */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-200 p-6 flex items-center min-h-[160px]">
                <p className="text-gray-800">
                  <strong>Macro Detail:</strong> Close-ups of textures
                  (brushed metal, leather grain, mesh).
                </p>
              </div>

              <div className="bg-gray-200 p-6 flex items-center min-h-[160px]">
                <p className="text-gray-800">
                  <strong>Exploded Views:</strong> Showing the internal
                  engineering (magnets, coils, and circuits) arranged
                  symmetrically.
                </p>
              </div>

              <div className="bg-gray-200 p-6 flex items-center min-h-[160px]">
                <p className="text-gray-800">
                  <strong>Lighting:</strong> Adequate lighting on a plain,
                  non-disruptive background.
                </p>
              </div>
            </div>

            {/* RIGHT — IMAGE STACK */}
            <div className="flex flex-col gap-6">
              <div className="min-h-[160px]">
                <Image
                  src="/macro-detail.png"
                  alt="Macro product detail"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-h-[160px]">
                <Image
                  src="/exploded-view.png"
                  alt="Exploded product view"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-h-[160px]">
                <Image
                  src="/lighting-render.png"
                  alt="Lighting render"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lifestyle-photography"
        className="px-6 md:px-12 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-3xl font-bold mb-4">
            7.3&nbsp;&nbsp;Lifestyle Photography
          </h2>

          {/* INTRO TEXT */}
          <p className="text-base text-gray-700 max-w-3xl mb-12">
            Lifestyle shots should showcase Soundhous in the
            <strong> "Creative Sanctuary"</strong>.
          </p>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IMAGE 1 */}
            <div>
              <div className="aspect-[4/3] mb-4">
                <Image
                  src="/lifestyle-in-session.jpg"
                  alt="Producer in session with Soundhous"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                <strong>The "In-Session" Shot:</strong> A producer mid-workflow,
                with high-end speakers visible in the background.
              </p>
            </div>

            {/* IMAGE 2 */}
            <div>
              <div className="aspect-[4/3] mb-4">
                <Image
                  src="/lifestyle-urban-transit.jpg"
                  alt="Urban transit lifestyle shot"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                <strong>The "Urban Transit" Shot:</strong> Using headphones in a
                high-end, minimalist architectural setting.
              </p>
            </div>

            {/* IMAGE 3 */}
            <div>
              <div className="aspect-[4/3] mb-4">
                <Image
                  src="/lifestyle-cultural-pulse.jpg"
                  alt="Cultural pulse lifestyle shot"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                <strong>The "Cultural Pulse" Shot:</strong> A musician or DJ in a
                low-light, high-energy environment where the product is the
                calm at the centre of the storm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="staff-photography"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 scroll-mt-24 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10">
            7.4&nbsp;&nbsp;Staff Photography
          </h2>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — TEXT */}
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                Staff are the <strong>"Curators of Sound."</strong> They should be
                photographed like artists.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                <strong>Portrait Style:</strong> Waist-up or head shots with a soft-focus
                background of the Soundhous store or studio.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                <strong>Attire:</strong> Brand-approved dark apparel.
              </p>

              <p className="text-sm sm:text-base text-white leading-relaxed">
                <strong>Pose:</strong> Approachable but authoritative. Arms crossed or
                hands-on-gear, looking directly at the camera or at a piece of equipment.
              </p>
            </div>

            {/* RIGHT — IMAGE */}
            <div>
              <Image
                src="/staff-curator.jpg"
                alt="High contrast cinematic visual style"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/staff-photography.png"
            alt="Staff photography example"
            width={1000}
            height={1000}
            className="w-full h-auto mb-6"
          />
        </div>
      </section>

      <section
        id="photography-dos-donts"
        className="px-6 md:px-12 py-20 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-3xl font-bold mb-10">
            7.5. Photography Don'ts
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — TEXT */}
            <div className="max-w-xl">
              <p className="text-base text-gray-800 font-semibold mb-4">
                Don't:
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <li>• Use cheap-looking plastic props.</li>
                <li>• Use generic, "corporate" office settings.</li>
                <li>• Overpower the image with bright colours.</li>
                <li>• Use models who look like they aren't listening.</li>
                <li>• Wear clothing that is not branded.</li>
              </ul>
            </div>

            {/* RIGHT — IMAGES */}
            <div className="flex flex-col gap-6 max-w-md ml-auto">
              <div className="aspect-[3/1]">
                <Image
                  src="/dont-example-1.jpg"
                  alt="Example of incorrect photography style"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-[3/1]">
                <Image
                  src="/dont-example-2.jpg"
                  alt="Another incorrect photography example"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}