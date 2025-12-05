"use client";

import Image from "next/image";

export default function TechScroller() {
  const techLogos = [
    { name: "HTML", src: "html1.png" },
    { name: "CSS", src: "css1.png" },
    { name: "JavaScript", src: "js.png" },
    { name: "React", src: "react.png" },
    { name: "Next", src: "next1.png" },
    { name: "Tailwind", src: "tailwind.png" },
    { name: "MongoDB", src: "mongo.png" },
    { name: "Firebase", src: "firebase.png" },
  ];

  return (
    <div className="w-full overflow-hidden py-10">
      <style>{`
        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="scroll-track gap-16">
        {[...techLogos, ...techLogos].map((tech, i) => (
          <div key={i} className="flex items-center gap-4">
            <Image
              src={`/icons/${tech.src}`} // must be in public/icons/
              width={48}
              height={48}
              alt={tech.name}
              className="object-contain opacity-90"
            />
            <span className="text-white text-3xl font-extrabold tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
