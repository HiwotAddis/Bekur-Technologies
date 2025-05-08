'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#020617] ${
      isScrolled ? 'bg-[#0c1222]/80 backdrop-blur-sm shadow-lg' : ''
    }`}>
      <div className="max-w-[1300px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm ${
                  pathname === link.path ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <button
  className="hidden md:block bg-white text-black px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-all"
  onClick={() => {
  router.push("/contact");
}}
>
  Contact Us
</button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-[#0c1222] border-t border-gray-800 px-4 py-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMobileMenu}
                className={`block text-base py-2 px-4 rounded-lg ${
                  pathname === link.path 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                } transition-all`}
              >
                {link.label}
              </Link>
            ))}
            <button
  onClick={() => {
  closeMobileMenu();
  router.push("/contact");
}}
  className="block text-center bg-white text-black py-3 px-6 rounded-lg hover:bg-blue-400 hover:text-white transition-all"
>
  Contact Us
</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
