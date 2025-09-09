'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="#home" 
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">
                SIDDARTH&apos;S
            </span>
            <span className="text-gray-400 ml-2">
                DEVELOPMENT PAGE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Purple luminescent line at bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
    </header>
  );
} 