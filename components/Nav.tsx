import React from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className="bg-slate-900 flex justify-between items-center sticky top-0 z-40 w-full">
      <div className="lg:px-24 py-2 pl-6">
        <Image
          src="/logo_prospera.png"
          alt="Prospera Logo"
          width={128}
          height={64}
          layout="fixed" // Ensure Image component doesn't interfere with sticky behavior
        />
      </div>
      <div className="lg:px-24 lg:py-2 pr-6">
        <button className="flex items-center bg-white rounded-full px-3 py-2">
          <AiOutlineHome className="h-5 w-5 text-slate-900" />
          <span className="ml-2 text-slate-900 text-sm">Home</span>
        </button>
      </div>
    </nav>
  );
}
