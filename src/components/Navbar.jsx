"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "backdrop-blur-lg bg-black/40 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-white text-2xl font-semibold tracking-wide">
          <span className="text-pink-500">ar</span>mamun<span className="text-pink-500">syl</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="#home" className="hover:text-pink-500 transition">Home</Link>
          <Link href="#about" className="hover:text-pink-500 transition">About</Link>
          <Link href="#projects" className="hover:text-pink-500 transition">Projects</Link>
          <Link href="#contact" className="hover:text-pink-500 transition">Contact</Link>

          <a href="/cv.pdf" className="px-4 py-2 rounded-full text-white border-2 border-transparent bg-black bg-clip-padding bg-gradient-to-r from-pink-500 to-purple-600 transition-all hover:shadow-[0_0_20px_rgba(255,0,168,0.7)]">
            Download CV
          </a>
        </div>

        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg px-6 py-4 space-y-4 text-white">
          <Link href="#home" onClick={() => setOpen(false)} className="block hover:text-pink-500">Home</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="block hover:text-pink-500">About</Link>
          <Link href="#projects" onClick={() => setOpen(false)} className="block hover:text-pink-500">Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="block hover:text-pink-500">Contact</Link>

          <a href="/cv.pdf" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-full text-white border-2 border-transparent bg-black bg-clip-padding bg-gradient-to-r from-pink-500 to-purple-600 transition-all hover:shadow-[0_0_20px_rgba(255,0,168,0.7)]">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
