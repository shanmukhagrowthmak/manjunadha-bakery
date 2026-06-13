"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, Globe } from "lucide-react";

const trustSignals = [
  { icon: Zap, label: "Reply within 24hrs" },
  { icon: Lock, label: "NDA available" },
  { icon: Globe, label: "Remote, global clients" },
];

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 lg:py-36 px-6 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 gradient-cta"
        style={{ opacity: 0.9 }}
      />

      {/* Overlay pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 1px, transparent 1px),
                            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10,14,26,0.4) 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.18em]"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "rgba(240, 238, 248, 0.7)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            START A PROJECT
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
          >
            Your idea deserves
            <br />
            more than a pitch deck.
          </h2>

          <p
            className="text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.75)", fontWeight: 400 }}
          >
            Let&apos;s build the real thing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="mailto:hello@craftdexa.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              style={{
                background: "#FFFFFF",
                color: "#0A0E1A",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start Your Project →
            </a>
            <a
              href="mailto:hello@craftdexa.com?subject=Discovery Call"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Discovery Call
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2"
              >
                <Icon size={14} style={{ color: "rgba(255,255,255,0.6)" }} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
