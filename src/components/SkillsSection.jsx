"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";

export default function SkillsSection() {
  const groups = [
    {
      title: "Frontend",
      tagline: "Interfaces that feel fast and elegant.",
      accent: "text-pink-400",
      ring: "from-pink-500/30 via-pink-500/10 to-transparent",
      skills: [
        { name: "HTML5", icon: "/icons/html1.png" },
        { name: "CSS3", icon: "/icons/css1.png" },
        { name: "JavaScript (ES6+)", icon: "/icons/js.png" },
        { name: "React.js", icon: "/icons/react.png" },
        { name: "Next.js", icon: "/icons/next1.png" },
        { name: "TailwindCSS", icon: "/icons/tailwind.png" },
        { name: "DaisyUI", icon: "/icons/code.png" }
      ]
    },
    {
      title: "Backend",
      tagline: "Reliable data, secure flows.",
      accent: "text-sky-400",
      ring: "from-sky-500/30 via-sky-500/10 to-transparent",
      skills: [
        { name: "Node.js", icon: "/icons/terminal.png" },
        { name: "Express.js", icon: "/icons/gear.png" },
        { name: "MongoDB", icon: "/icons/mongo.png" },
        { name: "Mongoose", icon: "/icons/code.png" }
      ]
    },
    {
      title: "Tools & Platforms",
      tagline: "Ship faster with the right stack.",
      accent: "text-purple-400",
      ring: "from-purple-500/30 via-purple-500/10 to-transparent",
      skills: [
        { name: "Git & GitHub", icon: "/icons/code.png" },
        { name: "Netlify", icon: "/icons/terminal.png" },
        { name: "Vercel", icon: "/icons/next1.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "Postman", icon: "/icons/gear.png" }
      ]
    },
    {
      title: "Other Skills",
      tagline: "Clean UX, solid fundamentals.",
      accent: "text-emerald-400",
      ring: "from-emerald-500/30 via-emerald-500/10 to-transparent",
      skills: [
        { name: "REST APIs", icon: "/icons/code.png" },
        { name: "JWT Authentication", icon: "/icons/gear.png" },
        { name: "UI/UX Fundamentals", icon: "/icons/image.png" },
        { name: "Problem Solving", icon: "/icons/terminal.png" },
        { name: "Responsive Design", icon: "/icons/code.png" }
      ]
    }
  ];
  const totalSkills = groups.reduce(
    (sum, group) => sum + group.skills.length,
    0
  );
  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };
  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <MotionSection
      id="skills"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,_rgba(236,72,153,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.14),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:linear-gradient(to_right,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] [background-size:80px_80px]" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
            Skills Atlas
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills & <span className="text-pink-500">Expertise</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-[15px] md:text-base">
            A structured view of the tools and technologies I use to craft modern, scalable web products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1.95fr]">
          <motion.div
            variants={card}
            className="rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Overview
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {groups.map((group) => (
                <motion.div
                  key={group.title}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full bg-current ${group.accent}`} />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {group.title}
                      </p>
                      <p className="text-xs text-white/50">{group.tagline}</p>
                    </div>
                  </div>
                  <span className="text-xs text-white/70">
                    {group.skills.length} skills
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                  Total
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {totalSkills}
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                  Categories
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {groups.length}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((group) => (
              <motion.div
                key={group.title}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${group.ring} p-[1px]`}
              >
                <div className="rounded-3xl bg-black/70 p-6 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${group.accent}`}>
                        {group.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/60">
                        {group.tagline}
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                      Stack
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center">
                          <Image
                            src={skill.icon}
                            alt=""
                            width={14}
                            height={14}
                            className="opacity-90"
                          />
                        </span>
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </MotionSection>
  );
}
