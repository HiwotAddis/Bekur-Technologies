'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Introducing Glide Certification Level 1',
    excerpt: 'Learn about our Glide Certification program, and what we\'re planning next',
    image: '/blog/certification.png',
    category: 'News',
    author: {
      name: 'Cait Levin',
      avatar: '/blog/authors/author1.jpg',
    },
    date: '20 Oct 2023',
  },
  
  {
    id: 2,
    title: 'The Power Apps alternative you need to expand your app-building capabilities',
    excerpt: 'Add Glide to your no code app toolbox so more of your team can participate in building software',
    image: '/blog/powerapps.png',
    category: 'Learn',
    author: {
      name: 'Sara Chen',
      avatar: '/blog/authors/author2.jpg',
    },
    date: '3 Nov 2023',
  },
  {
    id: 3,
    title: 'Build a Custom IT Help Desk in Under an Hour',
    excerpt: 'Create and fully customize your own IT ticketing software without having to code a single line',
    image: '/blog/helpdesk.png',
    category: 'Tools',
    author: {
      name: 'Wren Noble',
      avatar: '/blog/authors/author3.jpg',
    },
    date: '10 Nov 2023',
  },
  {
    id: 4,
    title: 'Meet your Glide Certified community challenge winners',
    excerpt: 'Last month we announced Glide\'s first certification. To celebrate the launch, we challenged our Glide community members',
    image: '/blog/community.png',
    category: 'News',
    author: {
      name: 'Andy Claremont',
      avatar: '/blog/authors/author4.jpg',
    },
    date: '22 Nov 2023',
  },
  {
    id: 5,
    title: 'The Power Apps alternative you need to expand your app-building capabilities',
    excerpt: 'Add Glide to your no code app toolbox so more of your team can participate in building software',
    image: '/blog/powerapps.png',
    category: 'Learn',
    author: {
      name: 'Wilson Noble',
      avatar: '/blog/authors/author3.jpg',
    },
    date: '19 Nov 2023',
  },
  {
    id: 6,
    title: 'Build a Custom IT Help Desk in Under an Hour',
    excerpt: 'Create and fully customize your own IT ticketing software without having to code a single line',
    image: '/blog/helpdesk.png',
    category: 'Tools',
    author: {
      name: 'Sarah Chen',
      avatar: '/blog/authors/author2.jpg',
    },
    date: '3 Mar 2023',
  },
  {
    id: 7,
    title: 'Meet your Glide Certified community challenge winners',
    excerpt: 'Last month we announced Glide\'s first certification. To celebrate the launch, we challenged our Glide community members',
    image: '/blog/community.png',
    category: 'News',
    author: {
      name: 'Andy Claremont',
      avatar: '/blog/authors/author4.jpg',
    },
    date: '22 Nov 2023',
  },
  
];

export default function Blog() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const postsPerSlide = 4;
  const totalSlides = Math.ceil(blogPosts.length / postsPerSlide);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <section className="relative py-20 px-16 w-full bg-[#020617]">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h2>
          <p className="text-gray-400 text-lg">
            Discover Insight, Tips, Tricks
          </p>
        </div>

        <div className="relative">
          {/* Blog Posts Grid */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}>
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts
                      .slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide)
                      .map((post) => (

              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <div className="bg-[#0c1222] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${{
                      'News': 'text-orange-400 bg-orange-400/10',
                      'Learn': 'text-cyan-400 bg-cyan-400/10',
                      'Tools': 'text-yellow-400 bg-yellow-400/10'
                    }[post.category]}`}>
                      {post.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Author & Date */}
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-white">{post.author.name}</p>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
                    </Link>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Container */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            {/* Previous Button */}
            <button
              onClick={previousSlide}
              className="w-10 h-10 bg-[#0c1222]/80 text-white rounded-full hover:bg-[#0c1222] transition-all flex items-center justify-center"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center space-x-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex items-center gap-2 ${index === currentSlide ? 'opacity-100' : 'opacity-40'}`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/60'}`}
                  />
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-[#0c1222]/80 text-white rounded-full hover:bg-[#0c1222] transition-all flex items-center justify-center"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>        </div>
      </div>
    </section>
  );
}
