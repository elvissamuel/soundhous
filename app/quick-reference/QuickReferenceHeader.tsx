"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
  onMenuToggle: () => void;
  isOpen: boolean;
};

export default function QuickReferenceHeader({ onMenuToggle, isOpen }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#2d2d2d] z-50 flex items-center px-4 sm:px-6 md:px-8">

      {/* Logo */}
      <Link href="/" className="flex items-center flex-shrink-0">
        <Image
          src="/soundhous-logo.png"
          alt="Soundhous Logo"
          width={100}
          height={100}
          className="h-auto w-16 sm:w-20 md:w-24"
        />
      </Link>

      {/* Title */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <h1 className="text-white text-sm sm:text-base md:text-lg font-normal">
          Quick Reference Guide
        </h1>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden ml-2 w-10 h-10 flex items-center justify-center text-white"
      >
        {isOpen ? "✕" : "☰"}
      </button>

    </header>
  );
}