'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Walter Wite',
    role: 'CEO, TechCorp',
    image: '/testimonials/person1.jpg',
    content: 'Working with Bekur Technologies has been transformative for our business. Their innovative solutions and dedication to excellence are unmatched.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO, InnovateTech',
    image: '/testimonials/person2.jpg',
    content: 'The team at Bekur consistently delivers high-quality solutions. Their technical expertise and attention to detail are remarkable.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Director, FutureSoft',
    image: '/testimonials/person3.jpg',
    content: 'Exceptional service and cutting-edge solutions. Bekur Technologies has helped us stay ahead in the competitive market.'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Product Manager, NextGen',
    image: '/testimonials/person4.jpg',
    content: 'Their commitment to excellence and customer satisfaction is remarkable. Bekur has been instrumental in our digital transformation journey.'
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone testimonials for seamless loop
    const originalContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML = originalContent + originalContent;

    const scroll = () => {
      if (!scrollContainer) return;
      
      const totalHeight = scrollContainer.scrollHeight;
      const containerHeight = scrollContainer.clientHeight;
      const halfHeight = (totalHeight - containerHeight) / 2;
      
      if (scrollContainer.scrollTop >= halfHeight) {
        // Reset to first set without animation
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollTop = 0;
        // Re-enable smooth scrolling
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = 'smooth';
        }, 10);
      } else {
        scrollContainer.scrollTop += 1;
      }
    };

    let scrollInterval = setInterval(scroll, 30);

    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      clearInterval(scrollInterval); // Clear any existing interval
      scrollInterval = setInterval(scroll, 30);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="relative py-20 w-full bg-[#020617] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Client Say
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from those who've experienced the Bekur difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-16 p-8">
          {/* Left side - Bekur Logo */}
          <div className="relative w-full h-[400px] bg-[#0c1222] rounded-2xl overflow-hidden">
            <Image
              src="/bekur-logo.png"
              alt="Bekur Technologies"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Scrolling Testimonials */}
          <div 
            ref={scrollRef}
            className="relative w-full h-[400px] overflow-hidden hover:pause-scroll"
          >
            <div className="flex flex-col gap-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#0c1222] rounded-2xl p-6 space-y-4 mb-4 border border-[#1e3a8a] shrink-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
