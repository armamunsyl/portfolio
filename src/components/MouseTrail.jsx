"use client";

import { useEffect, useRef } from "react";

const ICONS = [
  "/icons/code.png",
  "/icons/react.png",
  "/icons/js.png",
  "/icons/mongo.png",
  "/icons/terminal.png",
  "/icons/gear.png",
  "/icons/firebase.png",
  "/icons/tailwind.png"
];

export default function MouseTrail() {
  const layerRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);
  const iconIndex = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches;

    if (!finePointer) return;

    const layer = layerRef.current;
    if (!layer) return;

    const spawn = (x, y) => {
      const img = document.createElement("img");
      img.src = ICONS[iconIndex.current % ICONS.length];
      iconIndex.current += 1;
      img.className = "mouse-icon-trail";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      const size = 24 + Math.random() * 12;
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;

      layer.appendChild(img);

      const dx = (x - lastPos.current.x) * 0.35;
      const dy = (y - lastPos.current.y) * 0.35;
      const driftX = Number.isFinite(dx) ? dx : 0;
      const driftY = Number.isFinite(dy) ? dy : 0;
      const rotate = (Math.random() * 30 - 15).toFixed(2);

      const animation = img.animate(
        [
          {
            opacity: 0.9,
            transform: "translate(-50%, -50%) scale(1) rotate(0deg)"
          },
          {
            opacity: 0,
            transform: `translate(-50%, -50%) translate(${driftX}px, ${driftY}px) scale(0.4) rotate(${rotate}deg)`
          }
        ],
        { duration: 1300, easing: "ease-out", fill: "forwards" }
      );

      animation.onfinish = () => {
        img.remove();
      };
    };

    const onMove = (event) => {
      const now = performance.now();
      const x = event.clientX;
      const y = event.clientY;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 22 && now - lastTime.current < 55) {
        return;
      }

      lastPos.current = { x, y };
      lastTime.current = now;
      spawn(x, y);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={layerRef} className="mouse-trail-layer" aria-hidden="true" />;
}
