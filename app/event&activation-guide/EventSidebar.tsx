"use client";

import { useState } from "react";
import Link from "next/link";
import EventHeader from "./EventHeader";

export default function EventSidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { id: "about-soundhous", label: "About Soundhous" },
    { id: "brand-basics", label: "Brand Basics" },
    { id: "logo-variation", label: "Logo Variation" },
    { id: "minimum-size-format", label: "Minimum size and format" },
    { id: "logo-misuse", label: "Logo Misuse" },
    { id: "primary-colours", label: "Primary Colours" },
    { id: "secondary-extended", label: "Secondary and Extended Pallete" },
    { id: "primary-typeface", label: "Primary Typeface" },
    { id: "alternate-typeface", label: "Alternate Typeface" },
    { id: "design-philosophy", label: "Design Philosophy"},
    { id: "general-clothing-guide", label: "General Clothing Guide"}
  ];

  return (
    <>
      <EventHeader
        onMenuToggle={() => setOpen(!open)}
        isOpen={open}
      />

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-6 space-y-3 text-sm mt-20">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-16 left-0 w-60 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 bg-white">
        <nav className="p-6 space-y-3 text-sm">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="block text-gray-600 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}