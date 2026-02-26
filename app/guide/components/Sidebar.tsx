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
      { title: 'Brand Basics', href: '/guide/brand-foundation#brand-basics' },
      { title: 'Brand Personality', href: '/guide/brand-foundation#brand-personality' },
      { title: 'Tone of Voice', href: '/guide/brand-foundation#tone-of-voice' },
      { title: 'Competitive landscape', href: '/guide/brand-foundation#competitive-landscape' },
      { title: 'Target audience', href: '/guide/brand-foundation#target-audience' },

      { title: 'Brand positioning statement', href: '/guide/brand-foundation#brand-positioning' },
      { title: 'Brand DNA', href: '/guide/brand-foundation#brand-dna' },
      { title: 'Brand tagline', href: '/guide/brand-foundation#brand-tagline' },
      { title: 'Brand messaging', href: '/guide/brand-foundation#brand-messaging' },
      { title: 'Brand strategy', href: '/guide/brand-foundation#brand-strategy' },

  ]
      
    
  },
  {
    title: 'Brand Blueprint',
    href: '/guide/brand-blueprint',
    children: [
      { title: 'Logo Concept', href: '/guide/brand-blueprint#logo-concept' },
      { title: 'Logo Variation', href: '/guide/brand-blueprint#logo-variation' },
      { title: 'Logo Rules', href: '/guide/brand-blueprint#logo-rules' },
      { title: 'Co-branding', href: '/guide/brand-blueprint#co-branding' },

    ],
  },

  {
    title: 'Symphony',
    href: '/guide/symphony',
    children: [
      { title: 'Brand Visual Language', href: '/guide/symphony#brand-visual' },
      { title: 'Color System', href: '/guide/symphony#color-system' },
      { title: 'Brand Architecture', href: '/guide/symphony#brand-architecture' },
      
      
    ],
  },
  
  {
    title: 'Typography',
    href: '/guide/typography',
    children: [
      
      { title: 'Primary Typeface', href: '/guide/typography#primary-typeface' },
      { title: 'Alternate Typeface', href: '/guide/typography#alternate-typeface' },
      
    ],
  },
  {
    title: 'Sensory Guide',
    href: '/guide/sensory-guide',
    children: [
      { title: 'Design Philosophy', href: '/guide/sensory-guide#design-philosophy' },
      { title: 'Patterns', href: '/guide/sensory-guide#patterns' },
      { title: 'Textures', href: '/guide/sensory-guide#textures' },
      { title: 'Materials', href: '/guide/sensory-guide#materials' },
      { title: 'AFROMIDI Sensory Exploration', href: '/guide/sensory-guide#sensory-exploration' },
     
    ],
  },
  {
    title: 'Photography',
    href: '/guide/photography',
    children: [
      { title: 'Overall aesthetics', href: '/guide/photography#overall-aesthetics' },
      { title: 'Product renders', href: '/guide/photography#product-renders' },
      { title: 'Lifestyle Photography', href: '/guide/photography#lifestyle-photography' },
      { title: 'Staff photography', href: '/guide/photography#staff-photography' },
      { title: 'Photography Dos and Don\'ts', href: '/guide/photography#photography-dos-donts' },
    ],
  },
  {
    title: 'Global Adaptation',
    href: '/guide/global-adaptation',
    children: [
      { title: 'Africa', href: '/guide/global-adaptation#africa' }, 
      { title: 'America', href: '/guide/global-adaptation#america' },
      { title: 'Arabia', href: '/guide/global-adaptation#arabia' },

    ]
  },
  {
    title: 'Application Samples',
    href: '/guide/application-samples',
    children: [
      
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

