'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="contact-section relative py-32 mb-8 mx-32 bg-[#020617]" 
      id="contact"
      style={{
        background: `
          linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.25)),
          radial-gradient(circle at center, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.2)),
          linear-gradient(to right, #020617, #0f172a)
        `
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center contact-content">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Are you ready to kick off with us?
          </h2>
          <div className="mt-12 px-4 sm:px-0">
            <button
              type="button"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#020617] font-medium py-4 px-8 sm:px-16 md:px-32 lg:px-64 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg"
              onClick={() => {
  router.push("/contact");
}}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
