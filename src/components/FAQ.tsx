'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is your favorite template from BRIX Templates?',
    answer: 'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, branding, and social media management. Each service is tailored to meet your specific business needs and goals.'
  },
  {
    id: 2,
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We\'ll provide a detailed timeline during our initial consultation based on your specific requirements.'
  },
  {
    id: 3,
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your digital solution continues to perform optimally.'
  },
  {
    id: 4,
    question: 'What is your development process like?',
    answer: 'Our development process follows an agile methodology with clear phases: Discovery & Planning, Design, Development, Testing, Launch, and Support. We maintain transparent communication throughout and involve clients in key decision-making steps.'
  }
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="relative py-20 w-full font-inter bg-[#030712]">
      <div className="w-full bg-[#0f1729] rounded-2xl max-w-[1300px] mx-auto p-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className=" rounded-2xl p-2 mx-8">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="mb-4 "
            >
              <div className="w-full rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-6 text-left bg-[#0B1121] hover:bg-[#131b2e] transition-all duration-300 flex items-center justify-between group"
                >
                  <h3 className="text-lg font-medium text-white py-4">{faq.question}</h3>
                  <span 
                    className={`ml-6 flex-shrink-0 ${openQuestion === faq.id ? 'bg-white text-[#0B1121]' : 'text-white'} rounded-full p-2 transition-all duration-300`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-90' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
                {openQuestion === faq.id && (
                  <div className="px-6 py-5 pb-32 bg-[#0B1121] text-gray-400 text-base leading-relaxed animate-fadeIn border-t border-gray-800/50">

                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
