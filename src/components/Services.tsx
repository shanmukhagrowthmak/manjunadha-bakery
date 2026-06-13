"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  Rocket,
  BarChart3,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: Globe,
    name: "Web Design & Development",
    description: "Performant, animated, conversion-optimised web experiences",
    tags: ["Next.js", "React", "Tailwind", "Motion"],
  },
  {
    num: "02",
    icon: Layers,
    name: "Bubble Development",
    description: "Full-stack no-code apps built at enterprise scale",
    tags: ["Bubble.io", "NoCode", "API", "Workflows"],
  },
  {
    num: "03",
    icon: Smartphone,
    name: "App Development",
    description: "Native and cross-platform mobile products people actually use",
    tags: ["iOS", "Android", "React Native", "Expo"],
  },
  {
    num: "04",
    icon: Brain,
    name: "AI SaaS Development",
    description: "Intelligent systems woven in, not bolted on",
    tags: ["LLM", "OpenAI", "RAG", "Embeddings"],
  },
  {
    num: "05",
    icon: Rocket,
    name: "MVP Development",
    description: "Ship a validated product, not a 6-month waterfall",
    tags: ["4-week sprints", "Lean", "Test & Learn"],
  },
  {
    num: "06",
    icon: BarChart3,
    name: "Digital Marketing",
    description: "Growth systems that compound, not campaigns that expire",
    tags: ["SEO", "Paid", "Content", "Analytics"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 lg:py-36 px-6"
      style={{ background: "#0A0E1A" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span
            className="block text-xs tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}
          >
            WHAT WE BUILD
          </span>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
          >
            Every service.
            <br />
            <span style={{ color: "#8B90A7" }}>One team. Zero handoffs.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

function ServiceCard({
  svc,
  index,
  inView,
}: {
  svc: Service;
  index: number;
  inView: boolean;
}) {
  const Icon = svc.icon;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col gap-5 p-6 lg:p-7 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: "#131929",
        border: "1px solid #1E2A45",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(108,99,255,0.5)";
        e.currentTarget.style.background = "#161D30";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(108,99,255,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid #1E2A45";
        e.currentTarget.style.background = "#131929";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Number */}
      <span
        className="absolute top-6 right-7 text-4xl font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-syne)",
          color: "rgba(30, 42, 69, 0.6)",
        }}
      >
        {svc.num}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "rgba(108,99,255,0.12)",
          border: "1px solid rgba(108,99,255,0.2)",
        }}
      >
        <Icon size={18} style={{ color: "#6C63FF" }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="text-lg leading-snug"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#F0EEF8" }}
        >
          {svc.name}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}
        >
          {svc.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: "1px solid #1E2A45" }}>
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "#8B90A7",
              background: "rgba(30, 42, 69, 0.5)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
