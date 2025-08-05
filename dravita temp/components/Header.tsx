
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-heart-pulse-fill text-white text-lg"></i>
            </div>
            <span className="font-[\'Pacifico\'] text-xl text-gray-900">Dravita AI</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/assessment" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              Risk Assessment
            </Link>
            <Link href="/plans" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              Insurance Plans
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition cursor-pointer whitespace-nowrap">
              Login
            </Link>
            <Link href="/assessment" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer whitespace-nowrap">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
