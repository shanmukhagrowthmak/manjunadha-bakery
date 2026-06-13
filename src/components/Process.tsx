"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    phase: "Discover",
    weeks: "Week 1–2",
    description:
      "We enter your world. Deep research, stakeholder calls, competitive audit. We don't guess — we understand.",
  },
  {
    num: "02",
    phase: "Design",
    weeks: "Week 2–5",
    description:
      "We make it believable. High-fidelity prototypes, motion specs, brand alignment. You'll see it before we build it.",
  },
  {
    num: "03",
    phase: "Develop",
    weeks: "Week 4–10",
    description:
      "We engineer it to scale. Clean code, CI/CD, type-safe. Built for the long run, not just the demo.",
  },
  {
    num: "04",
    phase: "Scale",
    weeks: "Ongoing",
    description:
      "We grow it with you. Analytics, iteration, growth systems. This is where most agencies disappear — we don't.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      ref={ref}
      className="py-28 lg:py-36 px-6 relative overflow-hidden"
      style={{ background: "#0A0E1A" }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #1E2A45 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <span
            className="block text-xs tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}
          >
            HOW WE WORK
          </span>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
          >
            Fast. Transparent.
            <br />
            <span style={{ color: "#8B90A7" }}>No surprises.</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px" style={{ background: "#1E2A45" }}>
            <motion.div
              className="h-full origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "#6C63FF", opacity: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-5 cursor-pointer"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step circle */}
                <div className="relative flex items-center">
                  <motion.div
                    className="w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center"
                    animate={{
                      borderColor: activeStep === i ? "#F5A623" : "#1E2A45",
                      background:
                        activeStep === i
                          ? "rgba(245,166,35,0.15)"
                          : "#0A0E1A",
                      scale: activeStep === i ? 1.3 : 1,
                    }}
                  >
                    {activeStep === i && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#F5A623" }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <span
                    className="text-xs font-bold"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#F5A623" }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-2xl transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      color: activeStep === i ? "#F0EEF8" : "#B8BCCC",
                    }}
                  >
                    {step.phase}
                  </h3>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
                  >
                    {step.weeks}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical stack */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div
            className="absolute left-5 top-6 bottom-6 w-px"
            style={{ background: "linear-gradient(to bottom, #6C63FF, transparent)" }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="flex gap-6 pb-10 relative"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10"
                  style={{
                    background: "#131929",
                    border: "2px solid #6C63FF",
                    fontFamily: "var(--font-space-mono)",
                    color: "#F5A623",
                  }}
                >
                  {step.num}
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#F0EEF8" }}
                >
                  {step.phase}
                </h3>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
                >
                  {step.weeks}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
