"use client";

// app/page.jsx  — Next.js App Router entry point
// Fetches data from the mock API and passes it down to the relevant sections.

import { useState, useEffect, useRef } from "react";
import { mockAPI } from "../lib/api";

import Navbar       from "../components/Navbar";
import Hero         from "../components/Hero";
import Stats        from "../components/Stats";
import Solutions    from "../components/Solutions";
import HowItWorks   from "../components/HowItWorks";
import Programs     from "../components/Programs";
import Testimonials from "../components/Testimonials";
import LeadForm     from "../components/LeadForm";
import Footer       from "../components/Footer";


export default function HomePage() {
  const [stats,        setStats]        = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const formRef = useRef(null);

  // Simulate API fetches (replace with real fetch() calls in production)
  useEffect(() => {
    mockAPI.getStats().then(setStats);
    mockAPI.getTestimonials().then(setTestimonials);
  }, []);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar       onCTAClick={scrollToForm} />
      <Hero         onCTAClick={scrollToForm} />
      <Stats        data={stats} />
      <Solutions    />
      <HowItWorks   />
      <Programs     />
      <Testimonials data={testimonials} />
      <LeadForm     formRef={formRef} />
      <Footer       />
    </>
  );
}
