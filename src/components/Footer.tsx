import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16 border-t border-gray-100 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-1">
              <Image 
                src="/rezigco_logo.png" 
                alt="Rezigco Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[#922ea4]">Rezigco</span>
            </Link>
            <p className="mt-2 text-gray-600 max-w-md">
              Your AI agent to streamline the real estate workflow.
            </p>
          </div>
          
          <div className="hidden md:flex justify-center items-center mb-6 md:mb-0">
            <Image
              src="/ziggy_new.png"
              alt="Ziggy"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/chat-engager" className="text-gray-600 hover:text-[#922ea4]">Chat Engager</Link></li>
                <li><span className="text-gray-600">Inbound Automator</span></li>
                <li><span className="text-gray-600">Data Organizer</span></li>
                <li><span className="text-gray-600">Insights</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/login" className="text-gray-600 hover:text-[#922ea4]">Login</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-[#922ea4]">Pricing</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-[#922ea4]">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-[#922ea4]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-[#922ea4]">Terms of Service</Link></li>
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