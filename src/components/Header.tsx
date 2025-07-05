"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-manrope">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#7F00FF] font-manrope">Rezigco</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/features" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/features" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#7F00FF] transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 