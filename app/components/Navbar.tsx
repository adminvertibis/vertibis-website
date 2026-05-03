'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#0066cc]">
            <span className="w-8 h-8 rounded-lg bg-[#0066cc] text-white flex items-center justify-center text-sm font-bold">V</span>
            Vertibis
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#0066cc] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://vertibis-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0066cc] hover:text-[#0052a3] transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://vertibis-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-[#0066cc] text-white px-4 py-2 rounded-lg hover:bg-[#0052a3] transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#0066cc] hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0066cc] hover:bg-gray-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-gray-100">
              <a
                href="https://vertibis-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium text-[#0066cc]"
              >
                Sign In
              </a>
              <a
                href="https://vertibis-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 text-center py-2 text-sm font-semibold bg-[#0066cc] text-white rounded-lg hover:bg-[#0052a3]"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
