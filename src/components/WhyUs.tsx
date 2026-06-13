"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const proofPoints = [
  "98% client retention since launch",
  "Average MVP shipped in under 4 weeks",
  "Same team from strategy to launch — no handoffs",
  "AI-native stack, built for 2026 and beyond",
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-28 lg:py-36 px-6 relative overflow-hidden"
      style={{ background: "#0A0E1A" }}
    >
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#1E2A45" }} />

      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — bold statement */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block text-xs tracking-[0.2em] mb-8"
              style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}
            >
              WHY CRAFTDEXA
            </span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
            >
              Founders don't come back because we're good.
            </h2>
            <p
              className="mt-4 text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F5A623" }}
            >
              They come back because we give a damn.
            </p>

            <p
              className="mt-8 text-base leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
            >
              Most studios sell you a project. We sell you a partnership. The
              difference is measurable — in retention, in speed, in how often
              you have to ask for an update.
            </p>
          </motion.div>

          {/* Right — proof points card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
              style={{
                background: "#131929",
                border: "1px solid #1E2A45",
                boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
              }}
            >
              {/* Card gradient bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(108,99,255,0.1) 0%, transparent 60%)",
                }}
              />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)" }}
                  >
                    <span style={{ color: "#6C63FF", fontSize: "1rem" }}>✦</span>
                  </div>
                  <span
                    className="text-xs tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
                  >
                    BY THE NUMBERS
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {proofPoints.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ x: 20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 py-4"
                      style={{
                        borderBottom:
                          i < proofPoints.length - 1
                            ? "1px solid #1E2A45"
                            : "none",
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(108,99,255,0.15)" }}
                      >
                        <Check size={11} style={{ color: "#6C63FF" }} strokeWidth={3} />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)", color: "#F0EEF8", fontWeight: 500 }}
                      >
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
