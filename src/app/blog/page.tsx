"use client";
import React from "react";

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
const blogPosts = [
  // Existing posts ...
  // New posts for the bottom section (screenshot)
  // (Do not include blogPosts[9], [10], [11], [12] in any top rows)
  
  {
    id: 1,
    title: "Smarter, faster enterprise AI deployment",
    image: "/blog/blog1.png",
    date: "Apr 08, 2025",
    author: "Michael Hao  ",
    tags: ["For Business"],
    excerpt: "Streamline your AI workflows and accelerate deployment across your organization.",
    link: "#",
    avatar: "/blog/authors/author1.jpg",
  },
  {
    id: 2,
    title: "Secure AI in government: Improving services for all",
    image: "/blog/blog2.png",
    date: "Apr 04, 2025",
    author: "Multiple Authors",
    tags: ["For Business", "Public Sector"],
    excerpt: "How AI is transforming public services while keeping citizen data safe.",
    link: "#",
    avatar: "/blog/authors/author2.jpg",
  },
  {
    id: 3,
    title: "The promise of autonomous and secure AI agents",
    image: "/blog/blog3.png",
    date: "Apr 03, 2025",
    author: "Cohere Team",
    tags: ["For Business"],
    excerpt: "Exploring the next frontier in automation and decision-making.",
    link: "#",
    avatar: "/blog/authors/author3.jpg",
  },
  {
    id: 4,
    title: "Building AI agents: 5 common hurdles and fixes",
    image: "/blog/blog4.png",
    date: "Mar 28, 2025",
    author: "Matthew Koscak",
    tags: ["For Business", "Developers"],
    excerpt: "Overcome the most frequent hurdles in AI agent development.",
    link: "#",
    avatar: "/blog/authors/author4.jpg",
  },
  // New blogs for the third row
  {
    id: 5,
    title: "The AI shift in healthcare: A playbook for technical leaders",
    image: "/blog/blog5.png",
    date: "Mar 26, 2025",
    author: "Dan potts. ian salter ",
    tags: ["For Business", "Developers"],
    excerpt: "How AI can help drive progress and innovation across the nation.",
    link: "#",
    avatar: "/blog/authors/author2.jpg",
  },
  {
    id: 6,
    title: "Making AI work for America",
    image: "/blog/blog6.png",
    date: "Mar 20, 2025",
    author: "Melika Carroll, AJ Bhadelia",
    tags: ["Company"],
    excerpt: "How AI can help drive progress and innovation across the nation.",
    link: "#",
    avatar: "/blog/authors/author1.jpg",
  },
  {
    id: 7,
    title: "Introducing Command A: Max performance, minimal compute",
    image: "/blog/blog7.png",
    date: "Mar 13, 2025",
    author: "Cohere Team",
    tags: ["Company", "Newsroom", "Product"],
    excerpt: "Command A delivers high performance AI with minimal resource use.",
    link: "#",
    avatar: "/blog/authors/author3.jpg",
  },
  {
    id: 8,
    title: "Cohere and LG CNS partner for Korean enterprise AI services",
    image: "/blog/blog8.png",
    date: "Mar 10, 2025",
    author: "Cohere Team",
    tags: ["Company", "Newsroom"],
    excerpt: "Cohere and LG CNS are bringing advanced AI to Korean enterprises.",
    link: "#",
    avatar: "/blog/authors/default.png",
  },
  {
    id: 9,
    title: "AI and cybersecurity: The future of digital safeguards",
    image: "/blog/blog9.png",
    date: "Mar 05, 2025",
    author: "Cohere Team",
    tags: ["For Business"],
    excerpt: "Exploring the intersection of AI and cybersecurity for a safer digital world.",
    link: "#",
    avatar: "/blog/authors/default.png",
  },
  {
    id: 10,
    title: "What is generative AI?",
    image: "/blog/blog10.png",
    date: "Mar 03, 2025",
    author: "Cohere Team",
    tags: ["For Business", "Glossary"],
    excerpt: "An introduction to generative AI and its applications.",
    link: "#",
    avatar: "/blog/authors/default.png",
  },
  {
    id: 11,
    title: "What is generative AI?",
    image: "/blog/blog10.png",
    date: "Mar 03, 2025",
    author: "Cohere Team",
    tags: ["For Business", "Glossary"],
    excerpt: "An introduction to generative AI and its applications.",
    link: "#",
    avatar: "/blog/authors/default.png",
  },
  {
    id: 12,
    title: "Introducing Command R7B Arabic",
    image: "/blog/blog12.png",
    date: "Feb 27, 2025",
    author: "Cohere Team",
    tags: ["Product", "Newsroom"],
    excerpt: "Announcing Command R7B Arabic for advanced language tasks.",
    link: "#",
    avatar: "/blog/authors/default.png",
  },


];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-[#b58a8a] bg-transparent text-[11px] text-[#f4cfcf] font-medium rounded-[6px] px-2.5 py-0.5 mr-2 mb-1 uppercase tracking-wide shadow-[0_0_2px_#b58a8a]">
      {children}
    </span>
  );
}

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#06091a] font-poppins overflow-x-hidden">
      <section className="relative py-20 text-center overflow-hidden">
        {/* Starfield */}
        <div className="absolute left-0 top-0 w-full" style={{height: '900px', pointerEvents: 'none', zIndex: 10}}>
          <Starfield count={80} />
        </div>
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Blog</h1>
          <p className="text-gray-400 text-lg mb-12">
          Discover Insight, Tips, Tricks 
          </p>
        </div>
      </section>
      {/* Blog Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-24">
        {/* First row: Featured Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-stretch">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl min-h-[260px] bg-[#181d27] flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="object-cover w-full h-64 md:h-[320px]" />
          </div>
          {/* Meta & Content */}
          <div className="flex flex-col justify-center h-full px-2">
            {/* Authors and Date */}
            <div className="flex items-center space-x-3 mb-2">
              <img src={blogPosts[0].avatar} alt={blogPosts[0].author} className="w-6 h-6 rounded-full border border-[#23273b]" />
              <span className="text-[13px] text-[#b7b5c7] font-medium">
                {blogPosts[0].author}
              </span>
              <span className="text-[12px] text-[#b7b5c7]">— {blogPosts[0].date}</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.4rem]  text-white mb-2 leading-tight">
              {blogPosts[0].title}
            </h2>
            <div className="mb-2 flex flex-wrap">
              {blogPosts[0].tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <a href={blogPosts[0].link} className="mt-2 flex items-center gap-1 w-fit text-[15px] font-medium text-white hover:text-[#ffe5e5] transition-colors">
              READ FULL ARTICLE <span className="ml-1 text-[18px]">→</span>
            </a>
          </div>
        </div>

        {/* Second row: 3 Medium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(1, 4).map((post) => (
            <div key={post.id} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#181d27] to-[#10131a] transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
              <img src={post.image} alt={post.title} className="object-cover w-full h-[180px]" />
              <div className="flex-1 flex flex-col justify-between px-4 pt-4 pb-5">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <img src={post.avatar} alt={post.author} className="w-5 h-5 rounded-full border border-[#23273b]" />
                    <span className="text-[12px] text-[#b7b5c7] font-medium">{post.author}</span>
                    <span className="text-[11px] text-[#b7b5c7]">— {post.date}</span>
                  </div>
                  <h3 className="text-[1.1rem] text-white  mb-1 leading-tight">{post.title}</h3>
                  <div className="mb-2 flex flex-wrap">
                    {post.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
                <a href={post.link} className="mt-2 flex items-center gap-1 w-fit text-xs font-medium text-white hover:text-[#ffe5e5] transition-colors">
                  READ FULL ARTICLE <span className="ml-1 text-[14px]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Third row: Featured Blog (blogPosts[4]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-stretch mt-16">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl min-h-[260px] bg-[#181d27] flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
            <img src={blogPosts[4].image} alt={blogPosts[4].title} className="object-cover w-full h-64 md:h-[320px]" />
          </div>
          {/* Meta & Content */}
          <div className="flex flex-col justify-center h-full px-2">
            {/* Authors and Date */}
            <div className="flex items-center space-x-3 mb-2">
              <img src={blogPosts[4].avatar} alt={blogPosts[4].author} className="w-6 h-6 rounded-full border border-[#23273b]" />
              <span className="text-[13px] text-[#b7b5c7] font-medium">
                {blogPosts[4].author}
              </span>
              <span className="text-[12px] text-[#b7b5c7]">— {blogPosts[4].date}</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.4rem]  text-white mb-2 leading-tight">
              {blogPosts[4].title}
            </h2>
            <div className="mb-2 flex flex-wrap">
              {blogPosts[4].tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <a href={blogPosts[4].link} className="mt-2 flex items-center gap-1 w-fit text-[15px] font-medium text-white hover:text-[#ffe5e5] transition-colors">
              READ FULL ARTICLE <span className="ml-1 text-[18px]">→</span>
            </a>
          </div>
        </div>
        {/* Fourth row: 3 More Medium Cards (blogPosts[5], [6], [7]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.slice(5, 8).map((post) => (
            <div key={post.id} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#181d27] to-[#10131a] transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
              <img src={post.image} alt={post.title} className="object-cover w-full h-[180px]" />
              <div className="flex-1 flex flex-col justify-between px-4 pt-4 pb-5">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <img src={post.avatar} alt={post.author} className="w-5 h-5 rounded-full border border-[#23273b]" />
                    <span className="text-[12px] text-[#b7b5c7] font-medium">{post.author}</span>
                    <span className="text-[11px] text-[#b7b5c7]">— {post.date}</span>
                  </div>
                  <h3 className="text-[1.1rem] text-white  mb-1 leading-tight">{post.title}</h3>
                  <div className="mb-2 flex flex-wrap">
                    {post.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
                <a href={post.link} className="mt-2 flex items-center gap-1 w-fit text-xs font-medium text-white hover:text-[#ffe5e5] transition-colors">
                  READ FULL ARTICLE <span className="ml-1 text-[14px]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fifth row: Featured Blog (blogPosts[9]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-stretch mt-16">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl min-h-[260px] bg-[#181d27] flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
            <img src={blogPosts[8].image} alt={blogPosts[8].title} className="object-cover w-full h-64 md:h-[320px]" />
          </div>
          {/* Meta & Content */}
          <div className="flex flex-col justify-center h-full px-2">
            {/* Authors and Date */}
            <div className="flex items-center space-x-3 mb-2">
              <img src={blogPosts[8].avatar} alt={blogPosts[8].author} className="w-6 h-6 rounded-full border border-[#23273b]" />
              <span className="text-[13px] text-[#b7b5c7] font-medium">
                {blogPosts[8].author}
              </span>
              <span className="text-[12px] text-[#b7b5c7]">— {blogPosts[8].date}</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.4rem]  text-white mb-2 leading-tight">
              {blogPosts[8].title}
            </h2>
            <div className="mb-2 flex flex-wrap">
              {blogPosts[8].tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <a href={blogPosts[8].link} className="mt-2 flex items-center gap-1 w-fit text-[15px] font-medium text-white hover:text-[#ffe5e5] transition-colors">
              READ FULL ARTICLE <span className="ml-1 text-[18px]">→</span>
            </a>
          </div>
        </div>
        {/* Sixth row: 3 More Medium Cards (blogPosts[10], [11], [12]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.slice(9, 12).map((post) => (
            <div key={post.id} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#181d27] to-[#10131a] transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#23273b]/70">
              <img src={post.image} alt={post.title} className="object-cover w-full h-[180px]" />
              <div className="flex-1 flex flex-col justify-between px-4 pt-4 pb-5">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <img src={post.avatar} alt={post.author} className="w-5 h-5 rounded-full border border-[#23273b]" />
                    <span className="text-[12px] text-[#b7b5c7] font-medium">{post.author}</span>
                    <span className="text-[11px] text-[#b7b5c7]">— {post.date}</span>
                  </div>
                  <h3 className="text-[1.1rem] text-white  mb-1 leading-tight">{post.title}</h3>
                  <div className="mb-2 flex flex-wrap">
                    {post.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
                <a href={post.link} className="mt-2 flex items-center gap-1 w-fit text-xs font-medium text-white hover:text-[#ffe5e5] transition-colors">
                  READ FULL ARTICLE <span className="ml-1 text-[14px]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="w-full flex justify-center items-center py-16 px-10">
          <div className="w-full max-w-7xl bg-gradient-to-br from-[#232c3b]/50 to-[#101624]/50 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative overflow-hidden">
            {/* Glowing lights left and right */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex-1 min-w-[250px] text-left pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
              <p className="text-gray-300 text-base md:text-lg max-w-lg">Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.</p>
            </div>
            <form className="relative z-10 flex-1 flex items-center justify-end w-full md:w-auto">
            <div className="flex w-full md:w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl rounded-r-none bg-gradient-to-r from-[#23263a] to-[#181c2a] text-white placeholder-gray-400 px-5 py-4 outline-none border-none focus:ring-2 focus:ring-blue-600 text-base"
                style={{minWidth: 0}}
              />
              <button type="submit" className="rounded-r-xl rounded-l-none bg-white text-black font-semibold px-8 py-4 transition hover:bg-blue-100 focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
          </div>
      </section>
    </main>
  );
}
