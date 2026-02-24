'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const pageTitles: Record<string, string> = {
  '/guide/brand-strategy': 'Brand Strategy',
  '/guide/brand-foundation': 'Brand Foundation',
  '/guide/brand-blueprint': 'Brand Blueprint',
  '/guide/typography': 'Typography',
  '/guide/sensory-guide': 'Sensory Guide',
  '/guide/photography': 'Photography',
  '/guide/other-brand-assets': 'Other Brand Asset',
  '/guide/application-samples': 'Application Samples',
};

export default function Header() {
  const pathname = usePathname();
  
  // Find matching title, checking for exact match or path prefix
  const title = Object.entries(pageTitles).find(([path]) => 
    pathname === path || pathname.startsWith(path + '/')
  )?.[1] || 'Brand Strategy';

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#2d2d2d] z-40 flex items-center px-4 sm:px-6 md:px-8">
      <Link href="/" className="flex items-center flex-shrink-0">
        <Image
          src="/soundhous-logo.png"
          alt="Soundhous Logo"
          width={100}
          height={100}
          className="h-auto w-16 sm:w-20 md:w-24 lg:w-auto"
        />
      </Link>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="text-white text-sm sm:text-base md:text-lg font-normal truncate lg:ml-4">
          {title}
        </div>
      </div>
      {/* Spacer for mobile menu button on the right */}
      <div className="w-10 lg:hidden"></div>
    </header>
  );
}

