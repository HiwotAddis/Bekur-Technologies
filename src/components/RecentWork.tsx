'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    id: 1,
    title: 'Dr. Mitku Specialty Dental Clinic Website:',
    description: 'Comprehensive information about dental services and specialties. User-friendly and accessible experience for patients.',
    image: '/images/projects/dental-website.png',
    categories: ['UI/UX DESIGN', 'FRONT-END', 'BACK-END']
  },
  {
    id: 2,
    title: 'Exact Betting Tip',
    description: 'Designed and Developed a clean and intuitive UI/UX for a sports betting tips app.',
    image: '/images/projects/betting-app.png',
    categories: ['BACK-END DEVELOPMENT', 'UI/UX DESIGN', 'MOBILE APP']
  },
  {
    id: 3,
    title: 'Dr. Mitku Specialty Dental Clinic Website',
    description: 'Comprehensive information about dental services and specialties. User-friendly and accessible experience for patients.',
    image: '/images/projects/dental-website.png',
    categories: ['UI/UX DESIGN', 'FRONT-END', 'BACK-END']
  },
  {
    id: 4,
    title: 'Dr. Mitku Specialty Dental Clinic Website',
    description: 'Facebook page post ad made to advertise holiday sale discounts.',
    image: '/images/projects/social-media.png',
    categories: ['SOCIAL MEDIA BOOSTING']
  },
  {
    id: 5,
    title: 'EthioFlix:',
    description: 'Designed and Developed a clean and intuitive App for Movie Lovers.',
    image: '/images/projects/ethioflix.png',
    categories: ['BACK-END DEVELOPMENT', 'UI/UX DESIGN', 'MOBILE APP']
  }
];

export default function RecentWork() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide every minute
  useEffect(() => {
    const interval = setInterval(nextSlide, 60000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative py-20 w-full font-inter bg-[#020617] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/50"></div>
      
      {/* Glowing background spots */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1300px] mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm"></div>
          <h2 className="text-4xl font-bold text-white mb-4 relative">Our Recent Work</h2>
          <p className="text-gray-300 relative text-lg">Explore our latest creations and success stories.</p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-[31%] flex-shrink-0 bg-[#0B1121] rounded-lg overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.categories.map((category, index) => (
                          <span 
                            key={index}
                            className="text-[10px] tracking-wider text-gray-400 uppercase"
                          >
                            {category}
                            {index < project.categories.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* See All Projects Card */}
              <div className="w-[31%] flex-shrink-0 bg-[#232c42] rounded-lg overflow-hidden flex items-center justify-center py-16">
                <div className="text-center">
                  <h3 className="text-2xl text-white font-medium mb-6">See all project</h3>
                  <Link 
                    href="/projects" 
                    className="inline-block"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group mx-auto">
                      <svg
                        className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>



          {/* Navigation Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <div className="flex items-center justify-center gap-2">
              {[...Array(projects.length + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute w-full -bottom-16 flex justify-between">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
