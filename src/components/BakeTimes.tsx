"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const times = [
  {
    time: "5:30 AM",
    label: "First Out",
    description:
      "Buns and rusks come out first, still steaming.",
  },
  {
    time: "8:00 AM",
    label: "Breakfast",
    description:
      "Khara biscuits and veg puffs, fresh for the breakfast crowd.",
  },
  {
    time: "4:00 PM",
    label: "After School",
    description:
      "Cream buns and butter cookies, for the after-school rush.",
  },
  {
    time: "6:30 PM",
    label: "Last Tray",
    description:
      "Last tray of the day: plum cake, and tomorrow's dough goes to rest.",
  },
];

export default function BakeTimes() {
  return (
    <section
      id="bake-times"
      style={{
        background: "#234D44",
        padding: "clamp(3.5rem, 8vw, 6rem) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: "3rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#DDA34B",
              marginBottom: "0.875rem",
            }}
          >
            Today&apos;s Bake Times
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.15,
              color: "#F7EFE1",
              letterSpacing: "-0.02em",
            }}
          >
            Come hungry at the right hour
          </h2>
        </motion.div>

        {/* Timeline */}
        <div
          style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: 0 }}
        >
          {times.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: EASE }}
              style={{
                display: "grid",
                gridTemplateColumns: "7rem 1fr",
                gap: "1.5rem",
                alignItems: "start",
                padding: "1.75rem 0",
                borderBottom: i < times.length - 1 ? "1px solid rgba(247,239,225,0.1)" : "none",
              }}
            >
              {/* Time */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                    color: "#DDA34B",
                    display: "block",
                  }}
                >
                  {item.time}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(221,163,75,0.5)",
                    marginTop: "0.25rem",
                    display: "block",
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.65,
                  color: "rgba(247,239,225,0.82)",
                  paddingTop: "0.1rem",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
