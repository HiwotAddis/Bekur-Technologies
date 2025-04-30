'use client';

interface Reason {
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    title: 'We Think Beyond Design',
    description: 'We don\'t just create visuals, we build brand experiences that tell your story and connect with your audience.'
  },
  {
    title: 'Innovation Meets Functionality',
    description: 'We blend creativity with cutting-edge technology to deliver designs and digital solutions that aren\'t just effective, intuitive, and results-driven.'
  },
  {
    title: 'Tailored for Your Success',
    description: 'We take time to understand your business, industry, and audience to create branding, websites, and apps that truly fit your goals.'
  },
  {
    title: 'Seamless Collaboration',
    description: 'Our process is transparent, communicative, and designed to keep you involved at every step, ensuring the final result exceeds expectations.'
  },
  {
    title: 'Passion for Perfection',
    description: 'From the smallest design element to the overall user experience, we refine and perfect every aspect to deliver outstanding results that truly stand out.'
  },
  {
    title: 'Long-Term Impact',
    description: 'Our focus is on building strong, lasting digital identities that scale with your business and keep you ahead of the competition.'
  }
];

export default function WhyChooseBekur() {
  return (
    <section className="relative py-20 w-full font-inter bg-[#020617] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/50"></div>
      
      {/* Glowing background spots */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -top-20 right-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1300px] mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm"></div>
          <h2 className="text-4xl font-bold text-white mb-4 relative">Why choose Bekur</h2>
          <p className="text-gray-300 relative text-lg">Discover the unparalleled advantages of partnering with us.</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-[#0B1121] rounded-lg p-8 flex flex-col items-center text-center group hover:bg-[#232c42] transition-all duration-300 border-2 border-transparent hover:border-blue-500 relative"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
