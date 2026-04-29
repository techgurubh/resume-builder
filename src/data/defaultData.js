export const defaultData = {
  personal: {
    name: "Alexandra Chen",
    title: "Senior Product Designer",
    email: "alex.chen@email.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexchen",
    website: "alexchen.design",
  },
  summary:
    "Visionary product designer with 8+ years crafting intuitive digital experiences for Fortune 500 companies. Led cross-functional teams to deliver high-impact products used by millions. Passionate about the intersection of human psychology and interface design.",
  experience: [
    {
      id: 1,
      company: "Stripe",
      role: "Lead Product Designer",
      period: "2021 – Present",
      location: "San Francisco, CA",
      bullets: [
        "Redesigned the merchant dashboard, reducing task completion time by 42%",
        "Led a team of 6 designers across 3 product verticals",
        "Established the company-wide design system used by 200+ engineers",
      ],
    },
    {
      id: 2,
      company: "Airbnb",
      role: "Senior UX Designer",
      period: "2018 – 2021",
      location: "San Francisco, CA",
      bullets: [
        "Designed the host onboarding flow, increasing completion rates by 31%",
        "Conducted 80+ user interviews to inform product strategy",
        "Collaborated with engineers to ship 12 major product features",
      ],
    },
    {
      id: 3,
      company: "IDEO",
      role: "UX Designer",
      period: "2016 – 2018",
      location: "Palo Alto, CA",
      bullets: [
        "Delivered design sprints for clients in healthcare and fintech",
        "Created prototypes and usability test plans for rapid iteration",
      ],
    },
  ],
  skills: [
    "Figma", "Design Systems", "User Research",
    "Prototyping", "Accessibility", "React", "TypeScript", "Data Viz",
  ],
  education: [
    {
      id: 1,
      school: "Carnegie Mellon University",
      degree: "M.Des. in Interaction Design",
      period: "2014 – 2016",
      gpa: "3.9 / 4.0",
    },
    {
      id: 2,
      school: "UC Berkeley",
      degree: "B.A. in Cognitive Science",
      period: "2010 – 2014",
      gpa: "3.7 / 4.0",
    },
  ],
  // ↓ THIS ENTIRE BLOCK IS NEW ↓
  certifications: [
    { id: 1, name: "Google UX Design Certificate", org: "Google",        year: "2023" },
    { id: 2, name: "Certified Scrum Master (CSM)",  org: "Scrum Alliance", year: "2021" },
  ],
  // ↑ END NEW BLOCK ↑
};
