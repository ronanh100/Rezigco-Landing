import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16 pb-24 border-t border-gray-100 font-manrope">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#7F00FF]">Finsho</span>
            </Link>
            <p className="mt-2 text-gray-600 max-w-md">
              Your AI agent driving real estate deals forward.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/login" className="text-gray-600 hover:text-[#7F00FF]">Login</Link></li>
                <li><a href="mailto:info@finsho.com" className="text-gray-600 hover:text-[#7F00FF]">info@finsho.com</a></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-[#7F00FF]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-[#7F00FF]">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Finsho Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 