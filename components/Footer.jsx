// components/Footer.jsx
import { FOOTER_LINKS } from "../lib/data";

const footerStyles = `
  .footer { background: var(--ink); padding: 64px 24px 32px; }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 48px;
  }
  .footer-brand p {
    font-size: 0.875rem; color: rgba(255,255,255,0.45);
    line-height: 1.7; margin-top: 14px; max-width: 280px;
  }
  .footer-col h5 {
    font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.3);
    text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;
  }
  .footer-col a {
    display: block; font-size: 14px; color: rgba(255,255,255,0.55);
    margin-bottom: 10px; text-decoration: none; transition: color 0.2s; cursor: pointer;
  }
  .footer-col a:hover { color: var(--accent-light); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .footer-bottom p { font-size: 13px; color: rgba(255,255,255,0.3); }

  @media (max-width: 900px) {
    .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
  }
  @media (max-width: 600px) {
    .footer { padding: 48px 20px 28px; }
    .footer-top { grid-template-columns: 1fr; gap: 28px; }
    .footer-brand { grid-column: 1 / -1; }
    .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
  }
`;

export default function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">

            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "36px", height: "36px", background: "var(--accent)", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "16px",
                  flexShrink: 0,
                }}>A</div>
                <span style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "20px", color: "#fff",
                }}>
                  Accred<span style={{ color: "var(--accent-light)" }}>ian</span>
                </span>
              </div>
              <p>India's leading enterprise upskilling platform. Building future-ready talent since 2018.</p>
            </div>

            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading} className="footer-col">
                <h5>{heading}</h5>
                {links.map(link => <a key={link}>{link}</a>)}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
            <p>Privacy Policy · Terms of Service · Cookie Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
