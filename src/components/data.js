// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit this file to update your projects, skills, and personal info.

export const PERSONAL = {
  name:         "Omkar Yadav",
  role:         "Web Developer",
  email:        "omkary357@gmail.com",
  phone:        "+91 77150 78272",
  location:     "Andheri East, Mumbai – 400093",
  availability: "Open to freelance & full‑time",
  github:       "https://github.com/omkary357",
  linkedin:     "https://www.linkedin.com/in/omkar-yadav-b07b35232/",
  twitter:      "https://x.com/30Haddi",
  bio: [
    "I'm Omkar Yadav, a web developer based in Mumbai, India. I work across multiple stacks — building everything from WordPress sites and blogs to full-stack applications with Django, Java, and the MERN stack.",
    "I'm currently pursuing my Master of Computer Applications (MCA) at the University of Mumbai, and I hold a B.Sc. in Information Technology from the same university.",
    "I enjoy building practical projects that solve real problems — from voice-activated platforms to event photography websites.",
  ],
};

export const EDUCATION = [
  {
    degree: "MCA — Master of Computer Applications",
    inst:   "University of Mumbai",
    years:  "2024 – 2026",
  },
  {
    degree: "B.Sc. Information Technology",
    inst:   "University of Mumbai",
    years:  "2021 – 2024",
  },
];

export const PROJECTS = [
  {
    id:    1,
    title: "E-Commerce for Visually Impaired",
    tag:   "Java",
    year:  "2024",
    type:  "College Project",
    desc:  "A voice-activated e-commerce platform for individuals with visual impairments. Users can register, log in, and add products to cart using voice commands via Web Speech Recognition.",
    tech:  ["Java", "JSP", "Hibernate", "Tomcat", "MySQL"],
    link:  "https://github.com/omkary357/ecommerce-for-visually-impaired",
  },
  {
    id:    2,
    title: "Sportify",
    tag:   "Django",
    year:  "2025",
    type:  "College Project",
    desc:  "A website for sports event and coaching registration designed for societies and corporate organisations, built with the Django framework and MySQL.",
    tech:  ["Django", "Python", "MySQL", "HTML", "CSS"],
    link:  "https://github.com/omkary357/sportify",
  },
  {
    id:    3,
    title: "TechMate.Blog",
    tag:   "WordPress",
    year:  "2025",
    type:  "Personal Project",
    desc:  "A technical blog deployed on WordPress with themes, plugins, categories, and media management. Configured on Hostinger with domain, hosting setup, and SEO basics.",
    tech:  ["WordPress", "PHP", "Hostinger", "SEO"],
    link:  "https://techmatedemo.wordpress.com/",
  },
  {
    id:    4,
    title: "Moments & Milestones",
    tag:   "MERN Stack",
    year:  "2026",
    type:  "Personal Project",
    desc:  "An event photography and milestone celebration website built using React — featuring galleries, package listings, and a booking enquiry section.",
    tech:  ["React", "HTML", "CSS", "JavaScript"],
    link:  "https://moments-memories-xi.vercel.app/",
  },
    {
    id:    5,
    title: "Accessible E-Commerce Store",
    tag:   "MERN Stack",
    year:  "2026",
    type:  "Personal Project",
    desc:  "An e-commerce platform for visually impaired individuals. Users can register, log in, and add products to cart using voice commands via Web Speech Recognition.",
    tech:  ["React", "JSON", "Web Speech API", "JavaScript"],
    link:  "https://accessible-shop.vercel.app/",
  },
    {
    id:    6,
    title: "Navigation Helper",
    tag:   "MERN Stack",
    year:  "2026",
    type:  "Personal Project",
    desc:  "A voice-first, fully accessible navigation web app for visually impaired users — built with React, Node.js, JSON file, and open APIs.",
    tech:  ["React", "JSON", "Web Speech API", "JavaScript", "Node.js"],
    link:  "https://github.com/omkary357/navigation-helper",
  },
];

export const SKILLS = [
  { name: "WordPress",        pct: 85, cat: "CMS"      },
  { name: "Django / Python",  pct: 75, cat: "Backend"  },
  { name: "Java / JSP",       pct: 85, cat: "Backend"  },
  { name: "React.js",         pct: 75, cat: "Frontend" },
  { name: "HTML & CSS",       pct: 90, cat: "Frontend" },
  { name: "MySQL",            pct: 82, cat: "Database" },
  { name: "MongoDB",          pct: 65, cat: "Database" },
  { name: "Node.js",          pct: 65, cat: "Backend"  },
  { name: "Git & GitHub",     pct: 75, cat: "DevOps"   },
  { name: "REST APIs",        pct: 70, cat: "Backend"  },
];

export const TAG_META = {
  "WordPress":  { bg: "#e8f4f8", color: "#1a6c8c", dot: "#1a6c8c" },
  "Django":     { bg: "#fff3e8", color: "#a04800", dot: "#a04800" },
  "Java":       { bg: "#fef3e2", color: "#8a5a00", dot: "#8a5a00" },
  "MERN Stack": { bg: "#eef6ee", color: "#2a7a2a", dot: "#2a7a2a" },
};

export const STACKS = [
  { name: "WordPress",  icon: "🌐", desc: "Themes, plugins, WooCommerce, Hostinger" },
  { name: "Django",     icon: "🐍", desc: "Python backend, REST APIs, MySQL"        },
  { name: "Java",       icon: "☕", desc: "JSP, Hibernate, Tomcat, MySQL"           },
  { name: "MERN Stack", icon: "⚛️",  desc: "MongoDB, Express, React, Node.js"       },
];

export const TYPEWRITER_ROLES = [
  "Web Developer",
  "WordPress Developer",
  "Django Developer",
  "Java Developer",
  "MERN Stack Developer",
];

export const FILTERS = ["All", "WordPress", "Django", "Java", "MERN Stack"];
export const NAV     = ["Home", "About", "Projects", "Skills", "Contact"];
