"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import Image from "next/image";

export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Sign Up",
      link: "/signup",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];

  const logo = (
    <Link href="/" className="flex items-center gap-1">
      <Image 
        src="/rezigco_logo.png" 
        alt="Rezigco Logo" 
        width={36} 
        height={36} 
        className="object-contain"
      />
      <span className="text-2xl font-bold text-[#7F00FF] font-manrope">Rezigco</span>
    </Link>
  );

  return (
    <FloatingNav 
      navItems={navItems} 
      logo={logo}
    />
  );
} 