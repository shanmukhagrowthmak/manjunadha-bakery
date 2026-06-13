"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "The Counter", href: "#the-counter" },
  { label: "Bake Times", href: "#bake-times" },
  { label: "Visit", href: "#visit" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const whatsappUrl =
  "https://wa.me/918688104282?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#7A2421",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
              paddingBottom: "3rem",
              borderBottom: "1px solid rgba(247,239,225,0.12)",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#F7EFE1",
                letterSpacing: "-0.01em",
              }}
            >
              Manjunadha Bakery
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "rgba(247,239,225,0.65)",
              }}
            >
              Baked fresh. Baked honest. Since 2012.
            </p>

            {/* Nav links */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "0.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(247,239,225,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#DDA34B")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,239,225,0.55)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social + WhatsApp */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(247,239,225,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F7EFE1")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,239,225,0.45)")
                  }
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#2B1D14",
                  background: "#DDA34B",
                  padding: "0.4rem 0.875rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "rgba(247,239,225,0.35)",
                textAlign: "center",
              }}
            >
              © 2026 Manjunadha Bakery. All recipes kept in the family.
            </p>
            <a
              href="mailto:manjunadhabengalurubakery@gmail.com"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "rgba(247,239,225,0.28)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(247,239,225,0.55)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,239,225,0.28)")
              }
            >
              manjunadhabengalurubakery@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
