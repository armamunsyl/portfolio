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
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full overflow-x-hidden
        transition-all
        ${isScrolled ? "backdrop-blur-lg bg-black/40 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-[90rem] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-white text-2xl font-semibold tracking-wide whitespace-nowrap">
          <span className="text-pink-500">ar</span>mamun
          <span className="text-pink-500">syl</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="#home" className="hover:text-pink-500 transition">Home</Link>
          <Link href="#about" className="hover:text-pink-500 transition">About</Link>
          <Link href="#projects" className="hover:text-pink-500 transition">Projects</Link>
          <Link href="#contact" className="hover:text-pink-500 transition">Contact</Link>

          <a
            href="/cv.pdf"
            className="
              px-4 py-2 rounded-full text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              transition-all 
              hover:shadow-[0_0_20px_rgba(255,0,168,0.6)]
              whitespace-nowrap
            "
          >
            Download CV
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-5 space-y-4 text-white overflow-hidden">
          <Link href="#home" onClick={() => setOpen(false)} className="block hover:text-pink-400">Home</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="block hover:text-pink-400">About</Link>
          <Link href="#projects" onClick={() => setOpen(false)} className="block hover:text-pink-400">Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="block hover:text-pink-400">Contact</Link>

          <a
            href="/cv.pdf"
            onClick={() => setOpen(false)}
            className="
              block px-4 py-2 mt-2 rounded-full text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:shadow-[0_0_20px_rgba(255,0,168,0.6)]
            "
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
