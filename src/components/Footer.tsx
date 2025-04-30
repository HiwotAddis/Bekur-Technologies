import React from 'react';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-16">
      <div className="container mx-auto py-12 pl-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-48 h-48 relative">
                {/* Glowing light effect behind logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-48 h-20 bg-blue-400/30 blur-2xl rounded-full z-0 pointer-events-none" style={{filter:'blur(36px)'}}/>
                <Image
                  src="/logo.png"
                  alt="Bekur Tech Solutions"
                  fill
                  className="object-contain z-10"
                  priority
                />
              </div>
            </Link>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                <FiMail className="mr-2 text-white" />
                  <span>bekurtechsolution@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FiPhone className="mr-2 text-white" />
                  <span>+251-912345678</span>
                </li> 
                <li className="flex items-center">
                  <FiMapPin className="mr-2 text-white" />
                  <span>Sebara Babur, Addis Abeba, Ethiopia</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl text-blue-200  mb-4">Product</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className='text-gray-500'>Autocapture</span>
              </li>
              <li className="flex items-center">
                <span className='text-gray-500'>Data Governance</span>
              </li>
              <li className="flex items-center">
                <span className='text-gray-500'>Virtual Event</span>
              </li>
              <li className="flex items-center">
                <span className='text-gray-500'>Virtual Users</span>
              </li>
              <li className="flex items-center">
                <span className='text-gray-500'>Behavioral Analytics</span>
              </li>
              <li className="flex items-center">
                <span className='text-gray-500'>Connect</span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xl text-blue-200  mb-4">Explore</h4>
            <ul className="space-y-2">
            <li>
                <a href="/" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Documents
                </a>
              </li>
            </ul>
          </div>
          

          {/* Quick Links */}
          <div>
            <h4 className="text-xl text-blue-200  mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
              <a href="/" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 text-gray-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 text-gray-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright and social icons */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} All Right Reserved. Designed By Bekur Technologies</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-colors">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-colors">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition-colors">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 transition-colors">
              <FaYoutube className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
