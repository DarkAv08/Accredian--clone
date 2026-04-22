// lib/api.js

export const mockAPI = {
  getStats: async () => {
    await new Promise(r => setTimeout(r, 600));
    return {
      companies: "500+",
      learners: "50,000+",
      programs: "100+",
      npsScore: "72",
    };
  },

  getTestimonials: async () => {
    await new Promise(r => setTimeout(r, 400));
    return [
      {
        id: 1,
        name: "Priya Sharma",
        role: "L&D Head, TCS",
        text: "Accredian transformed how we upskill our workforce. The AI/ML programs delivered measurable ROI within 6 months.",
        avatar: "PS",
      },
      {
        id: 2,
        name: "Rahul Mehta",
        role: "CHRO, Infosys BPM",
        text: "The cohort-based model kept engagement incredibly high. We saw a 40% increase in course completion rates.",
        avatar: "RM",
      },
      {
        id: 3,
        name: "Anita Reddy",
        role: "VP Engineering, Flipkart",
        text: "Best-in-class curriculum co-created with industry experts. Our teams are now truly future-ready.",
        avatar: "AR",
      },
    ];
  },

  /**
   * POST /api/leads
   * Submits a lead capture form entry.
   * @param {object} data - Form fields: firstName, lastName, email, phone, company, size, message
   */
  submitLead: async (data) => {
    await new Promise(r => setTimeout(r, 900));
    console.log("Lead submitted:", data); // Replace with real POST in production
    return { success: true, message: "Thank you! Our team will reach out within 24 hours." };
  },
};
