"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
// Starfield effect
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

export default function AboutPage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".about-hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power3.out" }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
      <main className="relative min-h-screen w-full bg-[#020617] font-inter relative overflow-hidden" ref={heroRef}>
        

        <section className="relative py-20 text-center overflow-hidden">
                {/* Starfield */}
                <Starfield count={80} />
                {/* Big Light Blue Circular Shadows */}
                <div className="hidden md:block absolute -left-40 top-1/4 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
                <div className="hidden md:block absolute -right-40 top-1/4 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
                <div className="container mx-auto px-4 relative z-20">
                  <h1 className="text-5xl font-bold text-white mt-10 mb-4">About Us</h1>
                  <p className="text-gray-400 text-lg mb-12">
                  Skyrocketing Your Business Revenue with Impact
                  </p>
                  {/* Mission & Vision Section */}
                  <section className="w-full py-10  px-4 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
                      {/* Left: Vision and Mission Text */}
                      <div className="text-left flex flex-col gap-16 justify-center md:w-1/2 w-full">
                        <div>
                          <button className="mb-6 px-8 py-3 rounded-xl bg-gradient-to-br from-[#232c3b] to-[#1e274b] text-blue-100 font-normal text-xl shadow-lg border-none relative overflow-hidden">
                            Our Mission  & Vision
                          </button>
                          <h2 className="text-3xl font-bold text-white mb-4 px-2 w-fit  rounded-sm py-8">Our Vision</h2>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            To pioneer a future where technology transcends boundaries, empowering businesses and individuals to thrive in a dynamic digital world. At Bekur Tech Solution, we envision a landscape where innovative solutions seamlessly integrate into every facet of life, driving sustainable growth, fostering creativity, and unlocking limitless possibilities for our clients across the globe.
                          </p>
                        </div>
                        <div>
                          <button className="mb-6 px-8 py-3 rounded-xl bg-gradient-to-br from-[#232c3b] to-[#1e274b] text-blue-100 font-normal text-xl shadow-lg border-none relative overflow-hidden">
                            Our Mission  & Vision
                          </button>
                          <h2 className="text-3xl font-bold text-white mb-4 px-2 w-fit rounded-sm py-8">Our Mission</h2>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            Our mission is to harness the transformative power of technology to elevate businesses through tailored, cutting-edge solutions. We are dedicated to delivering exceptional value by blending innovative web development, strategic digital marketing, and intuitive design with a relentless commitment to client success.
                          </p>
                        </div>
                      </div>
                      {/* Right: Single Image for Both */}
                      <div className="flex justify-center items-center md:w-1/2 w-full">
                        <div className=" mt-20 relative w-[570px] h-[570px] flex items-center justify-center">
                          {/* Glowing circuit background */}
                          <img src="/images/about logo.png" alt="Vision and Mission Glow" className="absolute inset-0 w-full h-full object-contain opacity-90 select-none pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* History Section */}
                  <section className="w-full flex justify-center items-center py-16 px-2">
                    <div className="relative w-full max-w-7xl bg-gradient-to-br from-[#19223a] to-[#101624] rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center text-center overflow-hidden">
                      {/* Lighting effect */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-blue-400/20 blur-2xl rounded-full pointer-events-none" style={{filter:'blur(60px)'}}/>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 z-10">Our History</h2>
                      <p className="text-gray-300 text-lg mb-10 z-10">Our Work Shouts Louder Than Our Words</p>
                      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 z-10">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center border-r border-gray-500 last:border-none md:last:border-none">
                          <span className="text-4xl md:text-5xl font-bold text-white">2024</span>
                          <span className="text-gray-400 mt-2">Founded</span>
                        </div>
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center border-r border-gray-500 last:border-none md:last:border-none">
                          <span className="text-4xl md:text-5xl font-bold text-white">240</span>
                          <span className="text-gray-400 mt-2">Awards Achieved</span>
                        </div>
                        {/* Stat 3 */}
                        <div className="flex flex-col items-center border-r border-gray-500 last:border-none md:last:border-none">
                          <span className="text-4xl md:text-5xl font-bold text-white">145+</span>
                          <span className="text-gray-400 mt-2">Projects</span>
                        </div>
                        {/* Stat 4 */}
                        <div className="flex flex-col items-center">
                          <span className="text-4xl md:text-5xl font-bold text-white">10+</span>
                          <span className="text-gray-400 mt-2 text-center">Satisfied clients on 4 countries</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Philosophy Section */}
                  <section className="w-full flex justify-center items-center py-20 px-2">
                    <div className="w-full max-w-7xl flex flex-col items-center">
                      {/* Section Title */}
                      <button className="mb-16 px-8 py-3 rounded-xl bg-gradient-to-br from-[#232c3b] to-[#1e274b] text-blue-100 font-normal text-2xl shadow-lg border-none relative overflow-hidden">
                        Our Philosophy
                      </button>
                      {/* Philosophy Items */}
                      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1,2,3].map((_,i) => (
                          <div key={i} className="flex flex-col items-center text-center">
                            <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-2xl bg-[#232c3b] bg-opacity-60 shadow-xl relative">
                              <img src="/icons/target.png" alt="Innovation Hub Icon" className="w-full h-full object-contain z-10 rounded-2xl" />
                              <span className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-2xl"></span>
                            </div>
                            <h3 className="text-white text-2xl font-semibold mb-4">Innovation Hub</h3>
                            <p className="text-gray-300 text-base max-w-xs">
                              We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  
                  {/* Values Section */}
                  <section className="w-full flex justify-center items-center py-20 px-2">
                    <div className="w-full max-w-7xl flex flex-col items-center">
                      {/* Section Title */}
                      <button className="mb-16 px-8 py-3 rounded-xl bg-gradient-to-br from-[#232c3b] to-[#1e274b] text-blue-100 font-normal text-2xl shadow-lg border-none relative overflow-hidden">
                        Our Values
                      </button>
                      {/* Values Cards */}
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="relative flex flex-col items-center text-center bg-gradient-to-br from-[#232c3b]/60 to-[#151a2e]/60 rounded-2xl p-8 shadow-xl min-h-[300px]">
                          <img src="/icons/target-.png" alt="Passionate Icon" className="w-20 h-20 mb-6 object-contain rounded-2xl" />
                          <h3 className="text-white text-xl font-semibold mb-3">Passionate</h3>
                          <p className="text-gray-300 text-base">We are intensely enthusiastic about providing a superior experience.</p>
                          <span className="absolute left-1/2  -translate-x-1/2 bottom-2 w-40 h-12 bg-blue-400/60 blur-[36px] rounded-full pointer-events-none"></span>
                        </div>
                        {/* Card 2 */}
                        <div className="relative flex flex-col items-center text-center bg-gradient-to-br from-[#232c3b]/60 to-[#151a2e]/60 rounded-2xl p-8 shadow-xl min-h-[300px]">
                          <img src="/icons/flag.png" alt="Expertise Icon" className="w-20 h-20 mb-6 object-contain rounded-2xl" />
                          <h3 className="text-white text-xl font-semibold mb-3">Expertise</h3>
                          <p className="text-gray-300 text-base">We are polite and kind to one another, even when it gets tough</p>
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-40 h-12 bg-blue-400/60 blur-[36px] rounded-full pointer-events-none"></span>
                        </div>
                        {/* Card 3 */}
                        <div className="relative flex flex-col items-center text-center bg-gradient-to-br from-[#232c3b]/60 to-[#151a2e]/60 rounded-2xl p-8 shadow-xl min-h-[300px]">
                          <img src="/icons/trophy.png" alt="Innovation Icon" className="w-20 h-20 mb-6 object-contain rounded-2xl" />
                          <h3 className="text-white text-xl font-semibold mb-3">Innovation</h3>
                          <p className="text-gray-300 text-base">We are empowered to do our jobs and work towards a common goal.</p>
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-40 h-12 bg-blue-400/60 blur-[36px] rounded-full pointer-events-none"></span>
                        </div>
                        {/* Card 4 */}
                        <div className="relative flex flex-col items-center text-center bg-gradient-to-br from-[#232c3b]/60 to-[#151a2e]/60 rounded-2xl p-8 shadow-xl min-h-[300px]">
                          <img src="/icons/digital-marketing.png" alt="Personalized Approach Icon" className="w-20 h-20 mb-6 object-contain rounded-2xl" />
                          <h3 className="text-white text-xl font-semibold mb-3">Personalized Approach</h3>
                          <p className="text-gray-300 text-base">We work as a team and trust each other to create a seamless experience.</p>
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-40 h-12 bg-blue-400/60 blur-[36px] rounded-full pointer-events-none"></span>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Clients Section */}
                  <section className="w-full flex justify-center items-center py-16 px-2">
                    <div className="w-full  flex flex-col items-center">
                      {/* Section Title */}
                      <button className="mb-12 px-8 py-3 rounded-xl bg-gradient-to-br from-[#232c3b] to-[#1e274b] text-blue-100 font-normal text-2xl shadow-lg border-none relative overflow-hidden">
                        Our Clients
                      </button>
                      {/* Clients Logos Row */}
                      <div className="w-full flex flex-wrap justify-center items-center gap-x-20 gap-y-6">
                        <img src="/partners/payoneer.png" alt="Payoneer" className="h-10" />
                        <img src="/partners/bitcoin.png" alt="Bitcoin" className="h-10" />
                        <img src="/partners/bitpay.png" alt="Bitpay" className="h-10" />
                        <img src="/partners/visa.png" alt="Visa" className="h-10" />
                        <img src="/partners/stripe.png" alt="Stripe" className="h-10" />
                        <img src="/partners/gumroad.png" alt="Gumroad" className="h-10" />
                        <img src="/partners/cashapp.png" alt="Cash App" className="h-10" />
                      </div>
                    </div>
                  </section>
                  {/* Newsletter Section */}
                  <section className="w-full flex justify-center items-center py-16 px-2">
                    <div className="w-full max-w-7xl bg-gradient-to-br from-[#232c3b]/50 to-[#101624]/50 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative overflow-hidden">
                      {/* Glowing lights left and right */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
                      <div className="flex-1 min-w-[250px] text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
                        <p className="text-gray-300 text-base md:text-lg max-w-lg">Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.</p>
                      </div>
                      <form className="flex flex-col md:flex-row items-center gap-4 flex-1 justify-end w-full md:w-auto max-w-xl">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-[#232c3b] to-[#1e274b] text-white placeholder-white outline-none border-none shadow-inner min-w-[220px] max-w-lg backdrop-blur-sm"
                          required
                        />
                        <button
                          type="submit"
                          className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-blue-100 transition"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </section>
                </div>
              </section>
      </main>
      
  );
}
