"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingIcons() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".floating-icon").forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { opacity: 0, y: -12, scale: 0.95 },
          {
            opacity: 0.45,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.12,
            ease: "power2.out",
          }
        );

        gsap.to(icon, {
          y: "+=12",
          duration: 4 + index * 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: index * 0.25,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      
      <Image
        src="/icons/code.png"
        width={60}
        height={60}
        alt="code icon"
        className="floating-icon absolute top-20 left-12 opacity-40 float-up"
      />

      <Image
        src="/icons/react.png"
        width={60}
        height={60}
        alt="react icon"
        className="floating-icon absolute top-1/3 right-16 opacity-40 float-diag-right"
      />

      <Image
        src="/icons/js.png"
        width={60}
        height={60}
        alt="js icon"
        className="floating-icon absolute bottom-32 left-20 opacity-40 float-rotate"
      />

      <Image
        src="/icons/mongo.png"
        width={60}
        height={60}
        alt="mongo icon"
        className="floating-icon absolute bottom-16 right-32 opacity-40 float-wobble"
      />

      <Image
        src="/icons/terminal.png"
        width={100}
        height={100}
        alt="terminal icon"
        className="floating-icon absolute top-1/2 left-1/2 opacity-40 float-diag-left"
      />

      <Image
        src="/icons/gear.png"
        width={60}
        height={60}
        alt="gear icon"
        className="floating-icon absolute top-10 right-1/3 opacity-40 float-down"
      />
      <Image
        src="/icons/firebase.png"
        width={60}
        height={60}
        alt="firebase icon"
        className="floating-icon absolute top-12 right-1/2 opacity-40 float-rotate"
      />

      <Image
        src="/icons/tailwind.png"
        width={60}
        height={60}
        alt="tailwind icon"
        className="floating-icon absolute top-40 left-1/5 opacity-60 float-wobble"
      />
      
    </div>
  );
}
