"use client";
import { useRouter, usePathname } from "next/navigation";
import router from "next/router";

export default function ContactCta() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="w-full flex justify-center items-center py-14 px-2">
      <div className="relative w-full max-w-7xl bg-gradient-to-br from-[#0B1121] to-[#102145] rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center text-center overflow-hidden">
        {/* Lighting effect */}
        <div className="absolute top-0 left-1/3 w-1/3 h-24 bg-blue-400/30 blur-2xl rounded-full pointer-events-none" style={{filter:'blur(48px)'}}/>
        <div className="absolute top-0 right-1/3 w-1/3 h-24 bg-blue-300/20 blur-2xl rounded-full pointer-events-none" style={{filter:'blur(36px)'}}/>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 z-10">Let’s Build Something Amazing Together!</h2>
        <p className="text-gray-300 text-lg mb-8 z-10">Ready to take your project to the next level? Get in touch with us today and let’s bring your vision to life!</p>
        <button
          className="bg-white text-black font-semibold rounded-lg px-40 py-3 shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 z-10"
          onClick={() => {
            if (pathname === "/") {
              const formSection = document.getElementById("contact-form-section");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              router.push("/contact");
            }
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
