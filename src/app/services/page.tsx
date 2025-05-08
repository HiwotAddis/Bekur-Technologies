'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import Services from '../../components/Services';
import RecentWork from '../../components/RecentWork';
import MarketingSlider from '../../components/MarketingSlider';
import ContactCta from '../../components/ContactCta';

// Starfield component
const Starfield = ({ count = 80 }) => (
  <div className="absolute inset-0 pointer-events-none z-10 ">
    {Array.from({ length: count }).map((_, i) => {
      // Horizontal padding: stars appear from 10% to 90% width
      const left = Math.random() * 80 + 10; // 10% to 90%
      // Vertical: only above the header (top 2% to 18%)
      const top = Math.random() * 16 + 2; // 2% to 18%
      return (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${top}%`,
            left: `${left}%`,
            filter: 'blur(0.5px)'
          }}
        />
      );
    })}
  </div>
);

export default function ServicesPage() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.services-header', {
        opacity: 0,
        y: 30
      });

      gsap.set('.service-card', {
        opacity: 0,
        y: 60
      });

      // Header animation
      gsap.to('.services-header', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      });

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  // Custom services for the services page only
  const pageServices = [
    {
      title: 'App Development',
      img: '/images/app-dev.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/app-development'
    },
    {
      title: 'Web Development',
      img: '/images/web-dev.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/web-development'
    },
    {
      title: 'UI/UX Design',
      img: '/images/app-dev.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/ui-ux'
    },
    {
      title: 'Graphics Design',
      img: '/images/graphics.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/graphics-design'
    },
    {
      title: 'Digital Marketing',
      img: '/images/digital-marketing.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/digital-marketing'
    },
    {
      title: 'Social Media Management',
      img: '/images/social-media.png',
      description: 'Building Seamless Digital Experiences Through Cutting-Edge App Development.',
      link: '/services/social-media-managment'
    },
  ];

  return (
    <main ref={servicesRef} className="min-h-screen bg-[#020617] font-inter relative overflow-hidden">
      {/* Services Header Section */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Starfield */}
        <Starfield count={80} />
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/4 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/4 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Our Service</h1>
          <p className="text-gray-400 text-lg mb-12">
            Crafted for Excellence, Built for You! We Don't Just Deliver—We Elevate!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 mt-32">
            <div className="w-full md:w-1/3">
              <Image 
                src="/images/tech-circle.png" 
                alt="Technology Services"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-8 py-2 rounded-2xl mb-6 font-normal text-white text-1xl shadow-sm" style={{
                background: 'radial-gradient(ellipse at top left, #1e274b 30%, #151a2e 80%)',
                boxShadow: '0 2px 16px 0 rgba(30,39,75,0.2)'
              }}>
                What do we do?
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Why choose us?</h2>
              <p className="text-gray-400 leading-relaxed">
                Our mission is to harness the transformative power of technology to elevate businesses through 
                tailored, cutting-edge solutions. We are dedicated to delivering exceptional value by blending 
                innovative web development, strategic digital marketing, and intuitive design with a relentless 
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid Section - custom for this page */}
      <section className="w-full max-w-[1300px]  mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pageServices.map((service, idx) => (
          <Link href={service.link} key={idx} className="block focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl">
            <div
              className="relative rounded-2xl bg-gradient-to-br from-[#181e2a] to-[#0a0d12] shadow-xl p-8 flex flex-col items-center justify-between min-h-[320px] min-w-[330px] max-w-[431px] mx-auto border border-[#232c3b]/40 hover:border-blue-400/40 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Image + Title group */}
              <div className="flex flex-col items-center w-full z-10 transition-all duration-500 group-hover:translate-y-[-40px] group-hover:scale-90 group-hover:mb-2">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-41 h-41 object-contain transition-all duration-500" 
                  style={{willChange: 'transform'}}
                />
                <div className="font-semibold text-white text-2xl tracking-wide mt-2 text-center w-full transition-all duration-500">
                  {service.title}
                </div>
              </div>
              {/* Description (hidden until hover) */}
              <div className="text-white text-lg tracking-wide text-center w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500 z-10 pb-4">
                {service.description}
              </div>
              {/* Arrow Icon (for visual cue) */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#232c3b] to-[#1e274b] shadow-md group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-500 z-20">
                <svg
                  className="w-6 h-6 text-white transition-transform duration-500 group-hover:-rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:bg-blue-400/10 transition-all duration-500" />
            </div>
          </Link>
        ))}
      </section>
      {/* Our Recent Work Section */}
      <div className="mt-10">
        <RecentWork />
      </div>
      {/* Marketing Slider Section */}
      <div className="mt-10">
        <MarketingSlider />
      </div>
      {/* Contact CTA Section */}
      <div className="mt-10">
        <ContactCta />
      </div>
    </main>
  );
}
