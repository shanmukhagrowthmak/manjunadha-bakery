"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.75, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#7A2421",
        minHeight: "100svh",
        paddingTop: "4rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
        aria-hidden="true"
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(122,36,33,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#DDA34B",
            marginBottom: "1.5rem",
          }}
        >
          Estd. 2012 · Koyyalagudem, West Godavari
        </motion.p>

        {/* H1 */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 9vw, 7rem)",
            lineHeight: 1.0,
            color: "#F7EFE1",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Manjunadha
          <br />
          Bakery
        </motion.h1>

        {/* Subhead */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            lineHeight: 1.7,
            color: "rgba(247,239,225,0.75)",
            marginBottom: "2.5rem",
            maxWidth: "42rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Fresh-baked buns, khara biscuits, and the Mangalore classics —
          made the same way, every single morning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#the-counter"
            style={{
              display: "inline-block",
              background: "#DDA34B",
              color: "#2B1D14",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.875rem 1.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(221,163,75,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            See What&apos;s Fresh Today
          </a>
          <a
            href="#story"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#F7EFE1",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.875rem 1.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              border: "1.5px solid rgba(247,239,225,0.4)",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,239,225,0.8)";
              e.currentTarget.style.background = "rgba(247,239,225,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,239,225,0.4)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Read Our Story
          </a>
        </motion.div>
      </div>

      {/* Scalloped bottom divider — cream arches cutting into maroon */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "60px" }}
        >
          <path
            d="M0 60 L0 42 Q40 0 80 42 Q120 0 160 42 Q200 0 240 42 Q280 0 320 42 Q360 0 400 42 Q440 0 480 42 Q520 0 560 42 Q600 0 640 42 Q680 0 720 42 Q760 0 800 42 Q840 0 880 42 Q920 0 960 42 Q1000 0 1040 42 Q1080 0 1120 42 Q1160 0 1200 42 Q1240 0 1280 42 Q1320 0 1360 42 Q1400 0 1440 42 L1440 60 Z"
            fill="#F7EFE1"
          />
        </svg>
      </div>
    </section>
  );
}
