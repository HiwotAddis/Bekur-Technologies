'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Hero() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-30 items-center">
            {/* Left Content */}
            <div className="space-y-6 font-poppins">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Transform Your <br />
                <span className="text-blue-500">Business</span> With Digital <br />
                Innovation.
              </h1>
              <p className="text-gray-200 text-lg max-w-xl">
                we create cutting-edge digital solutions that drive growth and success.
              </p>
              <div>
                <button
                  className="bg-white text-black px-8 py-3 rounded-md hover:bg-blue-400 hover:text-white transition-all"
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Logo Circle */}
            <div className="relative overflow-hidden translate-x-20">
              <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {/* Inner Orbit Lines */}
                <div className="absolute inset-[100px] w-[300px] h-[300px]">
                  {/* Torch Lights on Orbits */}
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full" 
                    style={{ 
                      top: '30%', 
                      right: '10%', 
                      animation: 'torch-glow 2s ease-in-out infinite',
                      boxShadow: '0 0 20px 8px rgba(147, 197, 253, 0.8)'
                    }} 
                  />
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full" 
                    style={{ 
                      bottom: '25%', 
                      left: '10%', 
                      animation: 'torch-glow 2s ease-in-out infinite 0.7s',
                      boxShadow: '0 0 20px 8px rgba(147, 197, 253, 0.8)'
                    }} 
                  />
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-[1.5px] border-blue-400/50 rounded-full"
                      style={{
                        transform: `scale(${0.4 + i * 0.08})`,
                        opacity: i < 14 ? 0.5 : 0,
                        display: i < 14 ? 'block' : 'none'
                      }}
                    />
                  ))}
                </div>

                {/* Outer Orbit Lines */}
                <div className="absolute inset-0 w-[500px] h-[500px]">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={`outer-${i}`}
                      className="absolute inset-0 border-[2.5px] border-blue-400/40 rounded-full"
                      style={{
                        transform: `scale(${1.05 + i * 0.15})`,
                        opacity: 0.45
                      }}
                    />
                  ))}
                </div>

                {/* Rotating Outer Circle with Rectangles */}
                <div className="absolute inset-0" style={{ animation: 'slow-spin 30s linear infinite' }}>
                  {/* Torch Lights on Rectangles */}
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full" 
                    style={{ 
                      top: '5%', 
                      right: '30%', 
                      animation: 'torch-glow 2s ease-in-out infinite 0.3s',
                      boxShadow: '0 0 20px 8px rgba(147, 197, 253, 0.8)'
                    }} 
                  />
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full" 
                    style={{ 
                      bottom: '15%', 
                      right: '35%', 
                      animation: 'torch-glow 2s ease-in-out infinite 1.1s',
                      boxShadow: '0 0 20px 8px rgba(147, 197, 253, 0.8)'
                    }} 
                  />
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full" 
                    style={{ 
                      top: '45%', 
                      left: '30%', 
                      animation: 'torch-glow 2s ease-in-out infinite 1.5s',
                      boxShadow: '0 0 20px 8px rgba(147, 197, 253, 0.8)'
                    }} 
                  />
                  {/* First Arc of Rectangles (Top Right) */}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`arc1-${i}`}
                      className="absolute left-1/2 top-1/2"
                    >
                      <div 
                        className="w-4 h-10 bg-blue-500/30 rounded-full"
                        style={{
                          transform: `rotate(${-30 + i * 12}deg) translate(236px, -4px)`,
                          transformOrigin: '0 4px',
                          filter: 'blur(0.5px)'
                        }}
                      />
                    </div>
                  ))}

                  {/* Second Arc of Rectangles (Bottom Left) */}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`arc2-${i}`}
                      className="absolute left-1/2 top-1/2"
                    >
                      <div 
                        className="w-4 h-10 bg-blue-500/30 rounded-full"
                        style={{
                          transform: `rotate(${150 + i * 12}deg) translate(236px, -4px)`,
                          transformOrigin: '0 4px',
                          filter: 'blur(0.5px)'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Glowing Elements */}
                <div className="absolute inset-0">
                  {[
                    { position: 'top-5 right-20', size: 'w-3 h-3', color: 'blue-400' },
                    { position: 'bottom-10 right-16', size: 'w-4 h-4', color: 'purple-400' },
                    { position: 'bottom-20 left-10', size: 'w-3 h-3', color: 'blue-300' },
                    { position: 'top-16 left-20', size: 'w-4 h-4', color: 'blue-500' }
                  ].map((light, i) => (
                    <div
                      key={i}
                      className={`absolute ${light.position} ${light.size} bg-${light.color} rounded-full animate-pulse-glow`}
                      style={{
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>

                {/* Center Logo Container */}
                <div className="relative w-72 h-72">
                  {/* Inner Orbital Lines */}
                  {/* <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border border-blue-400/5 rounded-full"
                        style={{
                          transform: `scale(${0.7 + i * 0.02})`
                        }}
                      />
                    ))}
                  </div> */}

                  {/* Logo Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative  flex items-center justify-center">
                      {/* Glow Effect */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent rounded-full animate-pulse"></div> */}
                      
                      {/* Logo */}
                      <Image
                        src="/b.png"
                        alt="Bekur Tech"
                        width={300}
                        height={300}
                        className="relative z-10 filter brightness-200"
                      />

                      {/* Small Rectangles around Logo */}
                      {/* {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1.5 h-3 bg-blue-400/30"
                          style={{
                            transform: `rotate(${i * 30}deg) translateY(-120px)`,
                            transformOrigin: '50% 120px'
                          }}
                        />
                      ))} */}

                      {/* Floating Particles */}
                      {/* <div className="absolute -right-8 top-0 w-24 h-40">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-float"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 3}s`,
                              opacity: Math.random() * 0.5 + 0.3,
                              transform: `scale(${Math.random() * 0.5 + 0.5})`
                            }}
                          />
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/90 backdrop-blur-sm py-4">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-infinite-scroll">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center mx-8 shrink-0">
                <span className="text-white uppercase tracking-widest">Your</span>
                <span className="text-white uppercase tracking-widest ml-2">Text</span>
                <span className="text-white uppercase tracking-widest ml-2">Here</span>
                <span className="text-white uppercase tracking-widest ml-4">•</span>
              </div>
            ))}
          </div>
          
          {/* Clone for seamless loop */}
          <div className="flex animate-infinite-scroll" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center mx-8 shrink-0">
                <span className="text-white uppercase tracking-widest">Your</span>
                <span className="text-white uppercase tracking-widest ml-2">Text</span>
                <span className="text-white uppercase tracking-widest ml-2">Here</span>
                <span className="text-white uppercase tracking-widest ml-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
