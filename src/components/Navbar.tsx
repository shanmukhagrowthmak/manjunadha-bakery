"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "The Counter", href: "#the-counter" },
  { label: "Bake Times", href: "#bake-times" },
  { label: "Visit", href: "#visit" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const whatsappUrl =
    "https://wa.me/918688104282?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "#F7EFE1" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(43,29,20,0.08)" : "none",
        }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.01em",
              color: scrolled ? "#7A2421" : "#F7EFE1",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            Manjunadha Bakery
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: scrolled ? "#2B1D14" : "#F7EFE1CC",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#DDA34B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled ? "#2B1D14" : "#F7EFE1CC")
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
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "#DDA34B",
                color: "#2B1D14",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(221,163,75,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              color: scrolled ? "#2B1D14" : "#F7EFE1",
              background: scrolled ? "rgba(43,29,20,0.06)" : "rgba(247,239,225,0.15)",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Open menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(43,29,20,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed top-0 right-0 h-full w-72 z-[70] flex flex-col"
              style={{ background: "#F7EFE1", borderLeft: "1px solid rgba(122,36,33,0.12)" }}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#7A2421",
                  }}
                >
                  Manjunadha Bakery
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: "rgba(122,36,33,0.08)",
                    border: "none",
                    borderRadius: "6px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#7A2421",
                  }}
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1 px-4 py-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1, ease: EASE }}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#2B1D14",
                      textDecoration: "none",
                      padding: "0.875rem 1rem",
                      borderRadius: "8px",
                      transition: "background 0.15s ease, color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(122,36,33,0.06)";
                      e.currentTarget.style.color = "#7A2421";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#2B1D14";
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto px-6 pb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    background: "#DDA34B",
                    color: "#2B1D14",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "0.875rem",
                    borderRadius: "8px",
                  }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
