"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "PROJECTS DELIVERED" },
  { value: 98, suffix: "%", label: "CLIENT RETENTION" },
  { value: 4, suffix: "wk", label: "AVG MVP TURNAROUND" },
  { value: 6, suffix: "+", label: "YEARS OF ENGINEERING" },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "#131929", borderTop: "1px solid #1E2A45", borderBottom: "1px solid #1E2A45" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,99,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center py-8 px-6 relative"
            >
              {/* Vertical divider */}
              {i < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/4 h-1/2 w-px hidden lg:block"
                  style={{ background: "#1E2A45" }}
                />
              )}

              <span
                className="text-5xl lg:text-6xl font-bold tabular-nums"
                style={{ fontFamily: "var(--font-syne)", color: "#6C63FF" }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                />
              </span>
              <span
                className="mt-2 text-xs tracking-[0.18em]"
                style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
