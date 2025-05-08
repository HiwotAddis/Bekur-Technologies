'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: '01',
    title: 'Digital Marketing',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/digital-marketing.png'
  },
  {
    id: '02',
    title: 'Social Media Management',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/social-media.png',
    link: '/services/social-media-managment'
  },
  {
    id: '03',
    title: 'Web Development',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/web-dev.png'
  },
  {
    id: '04',
    title: 'App Development',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/app-dev.png'
  },
  {
    id: '05',
    title: 'UI/UX Design',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/uiux.png',
    link: '/services/ui-ux'
  },
  {
    id: '06',
    title: 'Graphics design',
    description: 'Transforming Businesses With Strategic And Impactful Digital Marketing Solutions.',
    icon: '/icons/branding.png'
  }
];

export default function Services() {
  return (
    <section className="relative py-20 w-full font-inter">
      {/* Bright light effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1300px] mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm"></div>
          <h2 className="text-4xl font-bold text-white mb-4 relative">Our Service</h2>
          <p className="text-gray-300 relative text-lg">Our Expertise, Your Success</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0B1121] p-8 rounded-lg hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-transparent transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="text-blue-400"
                />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white tracking-wide">{service.title}</h3>
                  <span className="text-white opacity-70 font-light tracking-widest">{service.id}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed tracking-widest">
                  {service.description}
                </p>
                <div className="flex justify-end">
                  {service.link ? (
                    <Link href={service.link} className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-400 transition-all duration-300">
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
                    </Link>
                  ) : (
                    <Link
                      href={service.title === 'UI/UX Design' ? '/services/ui-ux' : `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-400 transition-all duration-300">
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
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
