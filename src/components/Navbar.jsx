import React from 'react';
import { Utensils, Rocket, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 text-white">
              <Utensils size={18} />
            </span>
            <span className="tracking-tight">Flames AI • Restaurants</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition">Use cases</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:border-gray-300">
              <Mail size={16} />
              Contact sales
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
              <Rocket size={16} />
              Book a demo
            </a>
          </div>

          <a href="#contact" className="md:hidden inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800">
            <Rocket size={16} />
            Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
