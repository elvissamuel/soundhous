'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Brand Foundation',
    href: '/guide/brand-foundation',
    children: [
      { title: 'Our Story', href: '/guide/brand-foundation#our-story' },
      { title: 'Mission', href: '/guide/brand-foundation#mission' },
      { title: 'Vision', href: '/guide/brand-foundation#vision' },
      { title: 'Values', href: '/guide/brand-foundation#values' },
      { title: 'Brand Personality', href: '/guide/brand-foundation#brand-personality' },
      { title: 'Tone of Voice', href: '/guide/brand-foundation#tone-of-voice' },
      { title: 'Competetive Lanscape', href: '/guide/brand-foundation#competitive-landscape' },
      { title: 'Target Audience', href: '/guide/brand-foundation#target-audience' },
      { title: 'Brand Positioning Statement', href: '/guide/brand-foundation#brand-positioning-statement' },
      { title: 'Brand DNA', href: '/guide/brand-foundation#brand-dna' },
      { title: 'Brand Tagline', href: '/guide/brand-foundation#brand-tagline' },
      { title: 'Brand Messaging', href: '/guide/brand-foundation#brand-messaging' },
      { title: 'Brand Strategy', href: '/guide/brand-foundation#brand-strategy' },
    ],
  },
  {
    title: 'Logo Rules',
    href: '/guide/logo-rules',
    children: [
      { title: 'Logo Variations', href: '/guide/logo-rules#logo-variations' },
      { title: 'Logo Clear Space', href: '/guide/logo-rules#logo-clear-space' },
      { title: 'Logo in bounding shapes', href: '/guide/logo-rules#logo-bounding-shapes' },
      { title: 'Layout grid/composition', href: '/guide/logo-rules#layout-grid' },
      { title: 'Minimum Size', href: '/guide/logo-rules#minimum-size' },
      { title: 'Brand Architecture', href: '/guide/logo-rules#brand-architecture' },
      { title: 'Co-Branding', href: '/guide/logo-rules#co-branding' },
      { title: 'Logo misuse', href: '/guide/logo-rules#logo-misuse' },
    ],
  },
  {
    title: 'Colours',
    href: '/guide/colours',
    children: [
      { title: 'Primary Colours', href: '/guide/colours#primary-colours' },
      { title: 'Secondary Colours', href: '/guide/colours#secondary-colours' },
      { title: 'Extended colour palette', href: '/guide/colours#extended-palette' },
      { title: 'Logo colours', href: '/guide/colours#logo-colours' },
      { title: 'Sub-brand Colours', href: '/guide/colours#sub-brand-colours' },
      { title: 'Colours contrast checker', href: '/guide/colours#contrast-checker' },
      { title: 'Colour Misuse', href: '/guide/colours#colour-misuse' },
    ],
  },
  {
    title: 'Typography',
    href: '/guide/typography',
    children: [
      { title: 'Headings', href: '/guide/typography#headings' },
      { title: 'Subheadings/body', href: '/guide/typography#subheadings' },
      { title: 'Type hierarchy', href: '/guide/typography#type-hierarchy' },
      { title: 'Alternate typeface', href: '/guide/typography#alternate-typeface' },
      { title: 'Tracking/leading', href: '/guide/typography#tracking-leading' },
      { title: 'Alignment/Casing', href: '/guide/typography#alignment-casing' },
      { title: 'Typography Misuse', href: '/guide/typography#typography-misuse' },
    ],
  },
  {
    title: 'Sensory Guide',
    href: '/guide/sensory-guide',
    children: [
      { title: 'Sensory Guide Style', href: '/guide/sensory-guide#sensory-guide-style' },
      { title: 'Storefront Applications', href: '/guide/sensory-guide#storefront-applications' },
      { title: 'Feature Wall', href: '/guide/sensory-guide#feature-wall' },
      { title: 'Listening Areas', href: '/guide/sensory-guide#listening-areas' },
    ],
  },
  {
    title: 'Photography',
    href: '/guide/photography',
    children: [
      { title: 'Photography Style', href: '/guide/photography#photography-style' },
      { title: 'Product Renders', href: '/guide/photography#product-renders' },
      { title: 'Model Photography Checklist', href: '/guide/photography#model-photography' },
      { title: 'Lifestyle Photography', href: '/guide/photography#lifestyle-photography' },
      { title: 'Lifestyle Photography Checklist', href: '/guide/photography#lifestyle-checklist' },
      { title: 'Staff Photography', href: '/guide/photography#staff-photography' },
      { title: 'Photography Dos and Don\'ts', href: '/guide/photography#photography-dos-donts' },
    ],
  },
  {
    title: 'Other Brand Asset',
    href: '/guide/other-brand-assets',
    children: [
      { title: 'Patterns', href: '/guide/other-brand-assets#patterns' },
      { title: 'Illustrated Art/ Iconography', href: '/guide/other-brand-assets#illustrated-art' },
    ],
  },
  {
    title: 'Application Samples',
    href: '/guide/application-samples',
    children: [
      { title: 'Building Exterior', href: '/guide/application-samples#building-exterior' },
      { title: 'Building Interior', href: '/guide/application-samples#building-interior' },
      { title: 'Uniforms', href: '/guide/application-samples#uniforms' },
      { title: 'Letterhead Sample', href: '/guide/application-samples#letterhead' },
      { title: 'Printed Material', href: '/guide/application-samples#printed-material' },
      { title: 'Social Media Post sample', href: '/guide/application-samples#social-media' },
      { title: 'Delivery Vehicle', href: '/guide/application-samples#delivery-vehicle' },
      { title: 'Mug Sample', href: '/guide/application-samples#mug-sample' },
      { title: 'Way Finders', href: '/guide/application-samples#way-finders' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('');

  // Expand only the current section, collapse all others
  useEffect(() => {
    const currentSection = menuItems.find(
      (item) => pathname === item.href || pathname.startsWith(item.href + '/')
    );
    if (currentSection) {
      // Only expand the current section, collapse all others
      setExpandedSections(new Set([currentSection.title]));
    } else {
      // If no match, collapse all
      setExpandedSections(new Set());
    }
  }, [pathname]);

  // Scroll highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        // Check if section is in viewport (with offset for header)
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = element.id;
        }
      });

      setActiveSection(current);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [pathname]);

  const toggleSection = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const isSectionExpanded = (title: string) => expandedSections.has(title);
  const isParentActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };
  const isChildActive = (href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      return pathname === path && activeSection === hash;
    }
    return false;
  };

  // Handle hash navigation after route change
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [pathname]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-[#2d2d2d] text-white p-2 rounded-md"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 bg-white border-r border-gray-200 overflow-y-auto z-30 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
      <div className="p-4 sm:p-6">
        {menuItems.map((item) => {
          const isExpanded = isSectionExpanded(item.title);
          const isActive = isParentActive(item.href);
          
          return (
            <div key={item.title} className="mb-1">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex-1 text-left py-2 px-3 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                </Link>
                {item.children && item.children.length > 0 && (
                  <button
                    onClick={(e) => toggleSection(item.title, e)}
                    className="ml-2 px-2 py-1 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? '−' : '+'}
                  </button>
                )}
              </div>
              {item.children && isExpanded && (
                <div className="ml-4 mt-1 pl-4">
                  {item.children.map((child) => {
                    const childIsActive = isChildActive(child.href);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-2 px-3 text-sm rounded transition-colors ${
                          childIsActive
                            ? 'text-gray-900 font-medium bg-gray-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {child.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
    </>
  );
}

