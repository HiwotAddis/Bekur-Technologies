import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import RecentWork from '../components/RecentWork';
import WhyChooseBekur from '../components/WhyChooseBekur';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#020617]">
      <div className="max-w-[1920px] mx-auto relative">
        <Hero />
        <Services />
        <RecentWork />
        <WhyChooseBekur />
        <FAQ />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
