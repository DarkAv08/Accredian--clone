
# Accredian Enterprise — Next.js Clone

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with Next.js (App Router), React, and component-scoped CSS.

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   └── page.jsx              # Root page — composes all sections
├── components/
│   ├── Navbar.jsx            # Fixed nav with scroll detection + mobile menu
│   ├── Hero.jsx              # Full-screen hero with gradient + CTAs
│   ├── Stats.jsx             # Key metrics bar (data from API)
│   ├── Solutions.jsx         # 6-card solutions grid
│   ├── HowItWorks.jsx        # 4-step process with connector line
│   ├── Programs.jsx          # 3-card program grid
│   ├── Testimonials.jsx      # 3-column testimonials (data from API)
│   ├── LeadForm.jsx          # Lead capture form with validation
│   └── Footer.jsx            # 4-column footer
├── lib/
│   ├── api.js                # Mock API (simulates Next.js API routes)
│   └── data.js               # All static content constants
├── styles/
│   └── globals.css           # Design tokens + shared utility styles
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Create a new Next.js project

```bash
npx create-next-app@latest accredian-enterprise
cd accredian-enterprise
```

### 2. Copy these files into the project

Replace or merge the generated `app/`, add the `components/`, `lib/`folders.

### 3. Install dependencies

No extra packages needed beyond the default Next.js install.

```bash
npm install
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
npx vercel
```

---

## 🧠 Approach Taken

- **Component-per-section** structure: each page section lives in its own file for clarity and reusability.
- **Static data in `lib/data.js`**: all copy (solutions, programs, footer links, perks) is centralized — easy to update or connect to a CMS.
- **Mock API in `lib/api.js`**: simulates real Next.js API routes (`/api/stats`, `/api/testimonials`, `/api/leads`). Replace the `async` functions with `fetch("/api/...")` calls in production.
- **Scoped CSS strings**: each component ships its own CSS inside a `<style>` tag — works cleanly in this single-file demo format; in a real Next.js project, use CSS Modules (`Component.module.css`) instead.
- **`"use client"` directive**: applied only to components that use hooks or browser events (Navbar, Hero, LeadForm). Pure display components are server-renderable.

---

## 🤖 AI Usage

AI (Claude) was used for:
- **Initial scaffolding**: generating the full single-file component with all sections.
- **Design decisions**: color palette (indigo + dark navy), typography pairing (Syne + DM Sans), card hover effects.
- **CSS patterns**: gradient mesh backgrounds, radial blob decorations, connecting line in the steps section.

Manually reviewed and improved:
- Split the single file into this multi-file component architecture.
- Added `"use client"` directives appropriately for App Router compatibility.
- Centralized static data into `lib/data.js` for easier content management.
- Added `console.log` stub in `submitLead` to mark the real API integration point.
- Cleaned up responsive breakpoints and ensured the mobile hamburger menu works correctly.

---

## ⭐ Bonus

- **Lead capture form** is fully implemented with client-side validation and a success state.
- **Mock API** includes a `submitLead` endpoint ready to be swapped for a real Next.js API route + database write.

