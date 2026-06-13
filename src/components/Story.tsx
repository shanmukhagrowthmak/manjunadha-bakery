"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeRise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Story() {
  return (
    <section
      id="story"
      style={{
        background: "#F7EFE1",
        padding: "clamp(3.5rem, 8vw, 6rem) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="grid md:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center"
        >
          {/* Text */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#DDA34B",
                marginBottom: "1rem",
              }}
            >
              Our Story
            </p>

            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.15,
                color: "#2B1D14",
                marginBottom: "2rem",
                letterSpacing: "-0.02em",
              }}
            >
              A Family Oven,
              <br />
              Since 2012
            </h2>

            <div
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "rgba(43,29,20,0.78)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                maxWidth: "60ch",
              }}
            >
              <p>
                In 2012, Manjunadha Rao left a twenty-year career as head baker
                at a local hotel and opened one small oven in Koyyalagudem —
                just himself, his savings, and his mother&apos;s biscuit recipe
                written on the back of an old exam paper.
              </p>
              <p>
                Fourteen years on, the oven has been re-lined once, the shop
                has grown by one extra door, but the recipe card still lives in
                the same drawer near the till — slightly singed at one corner
                from the day the very first batch nearly didn&apos;t make it.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              style={{
                margin: "2rem 0",
                paddingLeft: "1.25rem",
                borderLeft: "2px solid #DDA34B",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  color: "#7A2421",
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                }}
              >
                &ldquo;If the bun isn&apos;t warm, it isn&apos;t ready.&rdquo;
              </p>
              <footer
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(43,29,20,0.45)",
                }}
              >
                — House rule, since 2012
              </footer>
            </blockquote>

            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "rgba(43,29,20,0.78)",
                maxWidth: "60ch",
              }}
            >
              What hasn&apos;t changed: the cardamom in the air by 5:30 AM, the
              queue that forms before the shutter goes up, and the fact that
              every tray is still checked by someone with the family name on
              the signboard.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                aspectRatio: "4/5",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(43,29,20,0.15)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Hands shaping fresh dough in the bakery"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            {/* Mustard circle accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-1rem",
                right: "-1rem",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#DDA34B",
                opacity: 0.18,
                zIndex: -1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
