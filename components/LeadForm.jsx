"use client";

import { useState } from "react";
import { mockAPI } from "../lib/api";
import { PERKS } from "../lib/data";

const INITIAL_FORM = {
  firstName: "", lastName: "", email: "",
  phone: "", company: "", size: "", message: "",
};

const inputStyle = {
  width: "100%", padding: "10px 12px",
  border: "1.5px solid #e5e7eb", borderRadius: 8,
  fontSize: 14, outline: "none",
  color: "var(--ink)", background: "#fff",
  fontFamily: "inherit", boxSizing: "border-box",
};

// ✅ Defined OUTSIDE the component so it never remounts
const Field = ({ label, children, error }) => (
  <div>
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>
      {label}
    </label>
    {children}
    {error && <span style={{ color: "red", fontSize: 12 }}>{error}</span>}
  </div>
);

export default function LeadForm({ formRef }) {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors]   = useState({});

  const change = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.email.trim())     errs.email     = "Required";
    if (!form.company.trim())   errs.company   = "Required";
    return errs;
  };

  const submit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    const res = await mockAPI.submitLead(form);
    setLoading(false);
    if (res.success) setSuccess(res.message);
  };

  return (
    <section
      className="section relative"
      id="contact"
      ref={formRef}
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #1e1b4b 100%)", overflow: "hidden" }}
    >
      {/* Blob */}
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)",
        top: -100, right: -100, pointerEvents: "none",
      }} />

      <div className="section-inner" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          <div>
            <div
              className="section-badge"
              style={{ background: "rgba(79,70,229,0.25)", color: "var(--accent-light)", display: "inline-block", marginBottom: 24 }}
            >
              Get Started
            </div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Ready to upskill<br />your team at scale?
            </h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>
              Join 500+ enterprises building future-ready workforces with Accredian's enterprise learning platform.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {PERKS.map(perk => (
                <div key={perk} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 2,
                    background: "rgba(52,211,153,0.2)", color: "#34d399",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
                  }}>✓</div>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{perk}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div style={{
            background: "#fff", borderRadius: 20,
            boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
            overflow: "hidden",
          }}>
            {success ? (
              <div style={{ textAlign: "center", padding: "60px 40px" }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>🎉</div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>You're all set!</h4>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem" }}>{success}</p>
              </div>
            ) : (
              <>
                <div style={{ padding: "40px 40px 28px" }}>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--ink)", marginBottom: 6 }}>
                    Book a Free Demo
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--slate)", marginBottom: 28 }}>
                    Fill out the form and we'll be in touch within 24 hours.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
                    <Field label="First Name *" error={errors.firstName}>
                      <input style={inputStyle} name="firstName" value={form.firstName} onChange={change} placeholder="Priya" />
                    </Field>
                    <Field label="Last Name">
                      <input style={inputStyle} name="lastName" value={form.lastName} onChange={change} placeholder="Sharma" />
                    </Field>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <Field label="Work Email *" error={errors.email}>
                      <input style={inputStyle} name="email" type="email" value={form.email} onChange={change} placeholder="priya@company.com" />
                    </Field>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
                    <Field label="Phone">
                      <input style={inputStyle} name="phone" value={form.phone} onChange={change} placeholder="+91 98765 43210" />
                    </Field>
                    <Field label="Company *" error={errors.company}>
                      <input style={inputStyle} name="company" value={form.company} onChange={change} placeholder="Acme Corp" />
                    </Field>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <Field label="Team Size">
                      <select style={inputStyle} name="size" value={form.size} onChange={change}>
                        <option value="">Select team size</option>
                        <option>1–50</option>
                        <option>51–200</option>
                        <option>201–500</option>
                        <option>500+</option>
                      </select>
                    </Field>
                  </div>

                  <div style={{ marginBottom: 0 }}>
                    <Field label="What are you looking to achieve?">
                      <textarea
                        style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                        name="message"
                        value={form.message}
                        onChange={change}
                        placeholder="Tell us about your learning goals…"
                      />
                    </Field>
                  </div>
                </div>

                <div style={{ padding: "20px 40px 40px", textAlign: "center" }}>
                  <button
                    onClick={submit}
                    disabled={loading}
                    style={{
                      padding: "14px 48px",
                      background: "var(--accent)", color: "#fff",
                      border: "none", borderRadius: 100,
                      fontSize: 15, fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.25s",
                      opacity: loading ? 0.7 : 1,
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#4338ca"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(79,70,229,0.4)"; }}}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    {loading ? "Submitting…" : "Get My Free Demo →"}
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}