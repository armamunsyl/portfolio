"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GlassProjectCard({ images, title, description, features }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[1000px] h-[520px] rounded-[55px] bg-gradient-to-br from-[#ff2ea650] to-[#6b00ff50] backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden flex p-8 relative">

      {/* LEFT STORY SLIDER (Facebook Style) */}
      <div className="w-1/2 h-full bg-black/20 rounded-[40px] relative overflow-hidden">

        <div
          className="flex h-full transition-transform duration-[800ms] ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex items-center justify-center p-6">
              <Image 
                src={img}
                alt="slide"
                width={600}
                height={600}
                className="w-full h-full object-contain rounded-[30px]"
              />
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 px-10 py-6 text-white flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-extrabold">{title}</h2>
        <p className="text-gray-200 text-lg leading-relaxed">{description}</p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
