"use client";

import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-[#06091a] flex items-center justify-center px-4">
        <section className="w-full max-w-5xl  rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-12 py-20 px-6 md:px-16 relative">
          {/* Left: Heading & Form */}
          <div className="flex-1 w-full">
            <h2 className="text-white text-lg font-semibold mb-2">Contact Us</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Get in touch with us.<br />We&apos;re here to assist you.
            </h1>
            <form className="space-y-8" id="contact-form-section">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-gray-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-white py-2 outline-none transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-white py-2 outline-none transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 mb-2">Phone Number (optional)</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-white py-2 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-white py-2 outline-none transition-colors min-h-[100px]" />
              </div>
              <button type="submit" className="mt-2 px-8 py-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-blue-500 hover:text-white transition-colors">
                Leave us a Message
              </button>
            </form>
          </div>
          {/* Right: Social Icons */}
          <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full p-3 hover:bg-blue-600 hover:border-blue-600 transition-colors">
              <FiFacebook className="text-white text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full p-3 hover:bg-pink-500 hover:border-pink-500 transition-colors">
              <FiInstagram className="text-white text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full p-3 hover:bg-blue-400 hover:border-blue-400 transition-colors">
              <FiTwitter className="text-white text-2xl" />
            </a>
          </div>
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="w-full bg-[#06091a] flex justify-center items-center py-16 px-10">
          <div className="w-full max-w-7xl bg-gradient-to-br from-[#232c3b]/50 to-[#101624]/50 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative overflow-hidden">
            {/* Glowing lights left and right */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex-1 min-w-[250px] text-left pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
              <p className="text-gray-300 text-base md:text-lg max-w-lg">Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.</p>
            </div>
            <form className="relative z-10 flex-1 flex items-center justify-end w-full md:w-auto">
            <div className="flex w-full md:w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl rounded-r-none bg-gradient-to-r from-[#23263a] to-[#181c2a] text-white placeholder-gray-400 px-5 py-4 outline-none border-none focus:ring-2 focus:ring-blue-600 text-base"
                style={{minWidth: 0}}
              />
              <button type="submit" className="rounded-r-xl rounded-l-none bg-white text-black font-semibold px-8 py-4 transition hover:bg-blue-100 focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
          </div>
      </section>
    </>
  );
}
