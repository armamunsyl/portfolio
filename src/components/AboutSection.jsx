import Image from "next/image";
import MotionSection from "./MotionSection";
export default function AboutSection() {
  return (
    <MotionSection
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      delay={0.1}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-full w-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl" />
          <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[32px] border border-white/10 bg-black/60" />

          <div className="relative rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 to-black/70 p-4 backdrop-blur-xl">
            <Image
              src="/profile5.png"
              width={420}
              height={420}
              className="rounded-2xl object-cover"
              alt="Portrait of Abdur Rahman Mamun"
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Availability
            </p>
            <p className="mt-1 text-sm text-white">Open for freelance</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
            About Studio
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            About <span className="text-pink-500">Me</span>
          </h2>
          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            I’m a Full-Stack Developer focused on crafting modern, fast, and polished
            web experiences. My work blends clean interfaces with reliable systems.
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            My core toolkit includes{" "}
            <span className="text-pink-400">React, Next.js, TailwindCSS</span> and a
            backend foundation in{" "}
            <span className="text-pink-400">Node.js, Express, and MongoDB.</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "UI Engineering",
              "Responsive Systems",
              "Performance Focus",
              "API Design"
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Focus", value: "Full-Stack" },
              { label: "Collaboration", value: "Remote / On-site" },
              { label: "Based In", value: "Bangladesh" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
