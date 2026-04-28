# 🇵🇭 Adulting Survival Guide PH

**The First Adulting Operating System for Filipinos.**

Adulting Survival Guide PH is a structured, multi-page platform designed to help young Filipinos navigate the complexities of adult life—from government IDs and high-interest savings to tenant rights and mental health. It is built as a high-performance **Single Page Application (SPA)** that prioritizes actionable steps over theoretical knowledge.

---

## 🌟 Product Vision
The "Adulting Operating System" philosophy treats adulthood as a series of manageable systems rather than an overwhelming pile of chores. 
- **Voice & Tone**: High-trust, expert, yet approachable (The "Kuya/Ate" perspective).
- **Core Value**: Transforming confusion into a checklist.
- **Goal**: Decreasing the cognitive load of navigating Philippine bureaucracy.

## 🏗️ Technical Architecture

### 1. Data-Driven Components
The system utilizes a **Template-Engine Architecture**. Instead of manually coding UI for every module, we use:
- **`ModuleTemplate.tsx`**: A heavy-lifting container that handles sidebar navigation, progress tracking, and layout.
- **Topic Manifests**: Each page (e.g., `Finance.tsx`) acts as a content manifest, feeding a standardized `TopicSection[]` array into the template.

### 2. Intelligent UX Features
- **Deterministic Routing**: Uses `React Router 7` for seamless transitions.
- **Persistence Context**: Integration with `localStorage` via the `Checklist` component. User progress (checked tasks) is mapped to unique element IDs and persisted across sessions.
- **Adaptive Layouts**: A responsive **Layout Explorer** that shifts from a desktop sidebar navigation to a mobile bottom/top-bar experience.

### 3. Design Language (Swiss-Editorial PH)
- **Typography**: 
  - *Headings*: `Playfair Display` (Serif) for authoritative, editorial feel.
  - *Body*: `DM Sans` (Sans) for high legibility at 16px/18px.
- **Color Palette**:
  - `Primary (#1a3d2b)`: Deep Forest (Stability).
  - `Accent (#e8a320)`: Warm Amber (Guidance).
  - `Surface (#f9f5ef)`: Warm Bone (Reduced eye strain).

---

## 📄 Platform Structure

| Module | Route | Content Focus |
| :--- | :--- | :--- |
| **Foundation** | `/foundation` | Gov't ID stack (PhilSys, SSS, Passport). |
| **Finance** | `/finance` | Digital banking, EF math, credit building. |
| **Property** | `/property` | Real Estate (LTS, RFO), Car hidden costs. |
| **Health** | `/health` | PhilHealth/HMO layering, insurance math. |
| **Living** | `/living` | Tenant rights (RA 9653), utility setups. |
| **Growth** | `/growth` | Life optimization, "Do Hard Things," mindset. |
| **Knowledge** | `/resources` | Acronym reference, glossary, cheat sheets. |

---

## ⚙️ Development Guide

### How to Add New Content
Adding a new section to an existing module is strictly configuration-based:
1. Locate the `topics` array in the relevant page (e.g., `src/pages/Health.tsx`).
2. Add a new object following the `TopicSection` interface.
3. The sidebar navigation, anchor links, and mobile menus will auto-update.

### Technology Stack
- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State**: React Hooks + LocalStorage
- **Build**: Vite 6

---

## 🚀 The ROADMAP
This build is considered **Phase 1: Knowledge Framework**. For the long-term vision, including **AI Assistants**, **Gov’t Wizards**, and **Cost Calculators**, please refer to the `ROADMAP.md` file.

---

## 🏁 Maintenance Disclaimer
Procedures for Philippine government agencies (BIR, SSS, DFA) are subject to change. Always verify official document requirements at the respective agency websites. Progress beats perfection.

