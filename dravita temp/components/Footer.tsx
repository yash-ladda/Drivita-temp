
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-heart-pulse-fill text-white text-lg"></i>
              </div>
              <span className="font-[\'Pacifico\'] text-xl">Dravita AI</span>
            </div>
            <p className="text-gray-400">
              Revolutionary AI-powered insurance platform helping you find the perfect health coverage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                <i className="ri-facebook-fill text-gray-400"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                <i className="ri-twitter-fill text-gray-400"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                <i className="ri-linkedin-fill text-gray-400"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/assessment" className="text-gray-400 hover:text-white transition cursor-pointer">Risk Assessment</Link></li>
              <li><Link href="/plans" className="text-gray-400 hover:text-white transition cursor-pointer">Insurance Plans</Link></li>
              <li><Link href="/comparison" className="text-gray-400 hover:text-white transition cursor-pointer">Plan Comparison</Link></li>
              <li><Link href="/claims" className="text-gray-400 hover:text-white transition cursor-pointer">Claims Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition cursor-pointer">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition cursor-pointer">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition cursor-pointer">Blog</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition cursor-pointer">Press</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                support@insuriai.com
              </li>
              <li className="text-gray-400">
                <i className="ri-map-pin-line mr-2"></i>
                123 AI Street, Tech City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            2024 Dravita AI. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white transition cursor-pointer"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white transition cursor-pointer"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
