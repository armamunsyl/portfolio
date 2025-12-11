"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import MotionSection from "./MotionSection";

export default function GlassProjectCard({
  images,
  title,
  description,
  features,
  links,
}) {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2500
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <MotionSection
      as="div"
      className="w-[92%] max-w-[1050px] mx-auto rounded-[40px] bg-gradient-to-br from-[#ff2ea620] to-[#6b00ff35] backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col md:flex-row p-5 md:p-8 gap-6 md:gap-4 md:h-[360px]"
      delay={0.2}
    >
      {/* LEFT — IMAGE SLIDER */}
      <div
        className="w-full md:w-[45%] h-[220px] md:h-full rounded-[28px] bg-black/10 overflow-hidden relative"
      >
        <div
          className="flex h-full transition-transform duration-[900ms] ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-full h-full flex items-center justify-center p-3 md:p-4"
            >
              <Image
                src={src}
                alt="project"
                width={600}
                height={600}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — TEXT SECTION */}
      <div className="w-full md:w-[55%] flex flex-col justify-center text-white gap-3 md:gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
          {title}
        </h2>

        <p className="text-gray-200 text-[14px] md:text-[15px] leading-relaxed">
          {description}
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-1">Features</h3>
          <ul className="text-gray-300 text-sm space-y-[2px] list-disc ml-5 leading-tight">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-2 md:mt-4">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              className="px-4 py-2 rounded-full text-sm bg-white/20 hover:bg-white/30 border border-white/20 backdrop-blur-md transition"
            >
              Live Demo
            </a>
          )}

          {links?.client && (
            <a
              href={links.client}
              target="_blank"
              className="px-4 py-2 rounded-full text-sm bg-blue-500 hover:bg-blue-600 text-white transition"
            >
              Client Code
            </a>
          )}

          {links?.server && (
            <a
              href={links.server}
              target="_blank"
              className="px-4 py-2 rounded-full text-sm bg-purple-600 hover:bg-purple-700 text-white transition"
            >
              Server Code
            </a>
          )}
        </div>
      </div>
    </MotionSection>
  );
}
