"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="studio"
      ref={ref}
      className="relative py-28 lg:py-36 px-6 overflow-hidden"
      style={{ background: "#0A0E1A" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — headline */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block text-xs tracking-[0.2em] mb-8"
              style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
            >
              ABOUT US
            </span>
            <h2
              className="text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
            >
              Not an Agency.
              <br />
              <span className="relative inline-block">
                A Craft Engine.
                {/* Amber underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-full h-1 rounded-full origin-left"
                  style={{ background: "#F5A623", bottom: "-6px" }}
                />
              </span>
            </h2>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(19, 25, 41, 0.8)",
                border: "1px solid #1E2A45",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#F5A623" }}
              />
              <span
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
              >
                FOUNDED 2026 · REMOTE-FIRST
              </span>
            </motion.div>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
            >
              Most agencies take your brief and disappear for 3 months. We
              embed. We move fast. We treat your product like it's ours —
              because{" "}
              <span style={{ color: "#F0EEF8", fontWeight: 500 }}>
                our reputation depends on it.
              </span>
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
            >
              CraftDexa was built in 2026 by a 25-year-old who got tired of
              watching great ideas die at the hands of slow, bloated studios.
              We're{" "}
              <span style={{ color: "#F0EEF8", fontWeight: 500 }}>
                the studio we wished existed.
              </span>
            </p>

            {/* Divider line */}
            <div className="h-px w-full" style={{ background: "#1E2A45" }} />

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "25", label: "Year-old founder" },
                { num: "2026", label: "Est. fully remote" },
                { num: "6+", label: "Years engineering" },
                { num: "4wk", label: "Avg MVP sprint" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-syne)", color: "#6C63FF" }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: "#8B90A7",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
