"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const hours = [
  { days: "Mon – Sat", time: "6:00 AM – 9:00 PM" },
  { days: "Sunday", time: "7:00 AM – 1:00 PM" },
];

export default function Visit() {
  return (
    <section
      id="visit"
      style={{
        background: "#F7EFE1",
        padding: "clamp(3.5rem, 8vw, 6rem) 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: EASE }}
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
              Visit Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.15,
                color: "#2B1D14",
                letterSpacing: "-0.02em",
                marginBottom: "2.5rem",
              }}
            >
              Find us in
              <br />
              Koyyalagudem
            </h2>

            {/* Address */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#2B1D14",
                  marginBottom: "0.35rem",
                }}
              >
                Manjunadha Bakery
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "rgba(43,29,20,0.7)",
                }}
              >
                Koyyalagudem, West Godavari District
                <br />
                Andhra Pradesh
              </p>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#DDA34B",
                  marginBottom: "0.75rem",
                }}
              >
                Hours
              </p>
              {hours.map((h) => (
                <div
                  key={h.days}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(43,29,20,0.08)",
                    maxWidth: "22rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.9375rem",
                      color: "#2B1D14",
                    }}
                  >
                    {h.days}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      color: "rgba(43,29,20,0.65)",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="tel:+918688104282"
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "1rem",
                  color: "#7A2421",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                +91 86881 04282
              </a>
              <a
                href="mailto:manjunadhabengalurubakery@gmail.com"
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "1rem",
                  color: "#7A2421",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                manjunadhabengalurubakery@gmail.com
              </a>
            </div>

            {/* Directions CTA */}
            <a
              href="https://www.google.com/maps/search/Koyyalagudem+West+Godavari"
              target="_blank"
              rel="noopener noreferrer"
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
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(221,163,75,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Directions
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: EASE }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(43,29,20,0.12)",
              border: "1px solid rgba(43,29,20,0.06)",
            }}
          >
            <iframe
              title="Koyyalagudem, West Godavari map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.9900%2C17.0000%2C81.0400%2C17.0300&layer=mapnik"
              style={{
                width: "100%",
                height: "420px",
                border: "none",
                display: "block",
              }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Scalloped top of footer — maroon scallops from above */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{ transform: "translateY(1px)" }}
      >
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "50px" }}
        >
          <path
            d="M0 0 L1440 0 L1440 14 Q1400 50 1360 14 Q1320 50 1280 14 Q1240 50 1200 14 Q1160 50 1120 14 Q1080 50 1040 14 Q1000 50 960 14 Q920 50 880 14 Q840 50 800 14 Q760 50 720 14 Q680 50 640 14 Q600 50 560 14 Q520 50 480 14 Q440 50 400 14 Q360 50 320 14 Q280 50 240 14 Q200 50 160 14 Q120 50 80 14 Q40 50 0 14 Z"
            fill="#7A2421"
          />
        </svg>
      </div>
    </section>
  );
}
