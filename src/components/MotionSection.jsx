"use client";

import { motion } from "framer-motion";

export default function MotionSection({
  as = "section",
  children,
  className = "",
  delay = 0,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.section;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
