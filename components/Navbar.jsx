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
    <>
      <style>{`
        .nav-desktop-links { display: flex; align-items: center; gap: 4px; }
        .nav-hamburger      { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none; }
          .nav-hamburger      { display: flex; }
        }

        .nav-mobile-menu {
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 12px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 8px 24px rgba(10,15,30,0.12);
        }

        .nav-mobile-link {
          padding: 13px 16px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 500;
          color: var(--ink-soft);
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: background 0.15s, color 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-mobile-link:hover {
          background: var(--accent-glow);
          color: var(--accent);
        }

        .nav-mobile-cta {
          margin-top: 8px;
          padding: 14px 24px;
          background: var(--accent);
          color: #fff;
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s;
        }
        .nav-mobile-cta:hover { background: #4338ca; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}>

        {/* ── Top bar ── */}
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div style={{
              width: 36, height: 36, background: "var(--accent)", borderRadius: 9,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16,
            }}>A</div>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem",
              color: scrolled ? "var(--ink)" : "#fff",
              transition: "color 0.3s",
            }}>
              Accred<span style={{ color: "var(--accent-light)" }}>ian</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="nav-desktop-links">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  padding: "8px 14px", borderRadius: 8, fontSize: "0.875rem", fontWeight: 500,
                  color: scrolled ? "var(--ink-soft)" : "rgba(255,255,255,0.8)",
                  border: "none", background: "none", cursor: "pointer", transition: "all 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = scrolled ? "var(--accent)" : "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? "var(--ink-soft)" : "rgba(255,255,255,0.8)"; e.currentTarget.style.background = "none"; }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={onCTAClick}
              style={{
                marginLeft: 12, padding: "9px 22px",
                background: "var(--accent)", color: "#fff",
                borderRadius: 100, fontSize: "0.875rem", fontWeight: 600,
                border: "none", cursor: "pointer", transition: "all 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#4338ca"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Get a Demo
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 8px", borderRadius: 8,
              display: "flex", flexDirection: "column",
              gap: mobileOpen ? "0px" : "5px",
              justifyContent: "center", alignItems: "center",
              width: 40, height: 40,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2,
              background: scrolled ? "var(--ink)" : "#fff",
              transition: "transform 0.25s, opacity 0.25s",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2,
              background: scrolled ? "var(--ink)" : "#fff",
              transition: "opacity 0.2s",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2,
              background: scrolled ? "var(--ink)" : "#fff",
              transition: "transform 0.25s, opacity 0.25s",
              transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div className="nav-mobile-menu">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} className="nav-mobile-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
            <button className="nav-mobile-cta" onClick={() => { setMobileOpen(false); onCTAClick(); }}>
              Get a Demo
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
