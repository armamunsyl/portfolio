"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6 mt-40">
    
      <div className="absolute -top-16 left-2/7 -translate-x-1/2 z-20">
        <Image
          src="/avatars/contact_writer.png"
          alt="contact avatar"
          width={180}
          height={180}
          className="object-contain drop-shadow-2xl"
        />
      </div>

  
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-[35px] border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.35)] pt-20 pb-10 px-8">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Contact <span className="text-pink-500">Me</span>
        </h1>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      
          <div className="space-y-5 text-white text-sm">

            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="opacity-70">armamunsyl@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="opacity-70">+880 01704567244</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="opacity-70">Sylhet, Bangladesh</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Social</h3>
              <div className="flex gap-3 mt-1 text-sm">
                <a href="https://github.com/armamunsyl" className="hover:text-pink-500 transition">GitHub</a>
                <a href="https://www.linkedin.com/in/armamunsyl/" className="hover:text-pink-500 transition">LinkedIn</a>
              </div>
            </div>

          </div>

       
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 text-sm"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 text-sm"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 text-sm"
            ></textarea>

            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition shadow-[0_0_12px_rgba(255,0,150,0.4)]">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
