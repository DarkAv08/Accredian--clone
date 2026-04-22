"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Solutions",    id: "solutions" },
  { label: "How It Works", id: "process" },
  { label: "Programs",     id: "programs" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Navbar({ onCTAClick }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 40px",
          height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            style={{
              width: 40, height: 40, background: "var(--accent)", borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18,
            }}
          >
            A
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "var(--ink)" }}>
            Accred<span style={{ color: "var(--accent)" }}>ian</span>
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden sm:flex">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                padding: "8px 16px", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500,
                color: "var(--ink-soft)", border: "none", background: "none", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--ink-soft)"; e.currentTarget.style.background = "none"; }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={onCTAClick}
            style={{
              marginLeft: 16, padding: "10px 24px",
              background: "var(--accent)", color: "#fff",
              borderRadius: 100, fontSize: "0.9rem", fontWeight: 600,
              border: "none", cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#4338ca"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, fontSize: 20, color: "var(--ink)" }}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="sm:hidden"
          style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 8 }}
        >
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                padding: "8px 16px", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500,
                color: "var(--ink-soft)", border: "none", background: "none",
                cursor: "pointer", textAlign: "left",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onCTAClick(); }}
            style={{
              marginTop: 8, padding: "10px 24px", background: "var(--accent)",
              color: "#fff", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600,
              border: "none", cursor: "pointer",
            }}
          >
            Get a Demo
          </button>
        </div>
      )}
    </nav>
  );
}