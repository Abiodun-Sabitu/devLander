import React from "react";
import "./PortfolioModal.css";

const projects = [
  {
    name: "Cabinote",
    link: "https://cabinote.vercel.app/",
    tech: "React, Tailwind CSS",
    description:
      "Note-taking app with drag-and-drop support, dark mode, and persistent local storage via custom hooks.",
    tag: "Frontend",
  },
  {
    name: "Blogging API",
    link: "https://blogging-api-qaef.onrender.com/api-docs",
    tech: "Node.js, Express, MongoDB",
    description:
      "RESTful API with user auth, post/comment routes, and public Swagger documentation.",
    tag: "Backend",
  },
  {
    name: "GeegPay",
    link:"https://geegpay-sab.vercel.app/",
    tech: "React, Tailwind CSS",
    description:
      "A pixel-perfect Fintech inspired dashboard submitted for the GeegPay Dashboard Design contest on X. Showcases attention to layout, responsiveness, and modern component design using Tailwind CSS.",
    tag: "Frontend",
  },
  {
    name: "Todoz App",
    link: "https://todooz-app.onrender.com/",
    tech: "Node.js, Express, MongoDB",
    description:
      "A simple full-stack task manager with user login, task creation/editing, and completion tracking. Built using server-side rendering (EJS), Express routing, and MongoDB persistence. Highlights fundamentals of full-stack architecture and user flow handling.",
    tag: "Fullstack",
  },
  {
    name: "XPay Core",
    link: "https://github.com/Abiodun-Sabitu/xpay-core",
    tech: "Node.js, Express, PostgreSQL",
    description:
      "Backend service for a fintech dashboard application. Handles routing, user transactions, and data modeling for account summaries and payment flows. Demonstrates RESTful design, relational DB structure, and modular controller patterns.",
    tag: "Backend",
  },

  {
    name: "Single Tab – Package",
    link: "https://www.npmjs.com/package/single-tab",
    tech: "React, NPM",
    description:
      "Published a lightweight React utility on NPM to detect and handle duplicate browser tabs. Prevents silent duplication, displays customizable warnings, and integrates easily with any UI framework. Supports SSR and is compatible with React and Next.js apps.",
    tag: "Package",
  },

  {
    name: "Mombosa",
    link: "https://mombosa.vercel.app/",
    tech: "Vue.js, HTML5 Audio API",
    description:
      "An interactive web game for young children that displays animal cards and plays audio prompts to teach animal names and their young (e.g., cow and calf).",
    tag: "Frontend",
  },
  {
    name: "AIQ Engine",
    link: "https://github.com/Abiodun-Sabitu/aiq-engine",
    tech: "Node.js, Express, PostgreSQL, Supabase",
    description:
      "Backend for a real-time AI quiz app with scoring, badges, and WebSocket-based leaderboard.",
    tag: "Backend",
  },
  {
    name: "Sparkify Lander",
    link: "https://www.sparkify.ng/",
    tech: "Astro.js, Tailwind CSS, Framer Motion",
    description:
      "Developed a responsive landing page for Sparkify Solutions, a digital agency offering landing pages, web design, and email branding. Built with Astro.js and Tailwind CSS, and styled for brand identity and performance.",
    tag: "Frontend",
  },

  {
    name: "Tandow API",
    link: "",
    tech: "Node.js, TypeScript, Express, PostgreSQL (Prisma), Cloudflare R2, JWT, Nodemailer",
    description:
      "Backend powering Tandow, a SaaS platform for email campaign analytics and QR-based lead capture. Features include JWT auth, 2FA via email OTP, Cloudflare R2 file uploads, dashboard analytics, and QR code generation. Private Repository – Available on Request.",
    tag: "Backend",
  },
];

const tagColors = {
  Backend: "#ff7eb8ff",
  Fullstack: "#ffb86b",
  Frontend: "#50fa7b",
  Package: "#bd93f9",
};

export default function PortfolioModal({ isOpen, isClosing, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div
        className={
          isClosing
            ? "overlay-portfolio-closing"
            : "overlay-transparent-to-semi"
        }
      ></div>
      <div
        className="portfolio-modal"
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          zIndex: 4,
          opacity: 0,
          animation: isClosing
            ? "slideOut 1.2s ease-in forwards"
            : "slideIn 1.2s ease-out forwards",
        }}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-header">
                <a
                  href={project.link || "#"}
                  onClick={(e) => {
                    if (!project.link) e.preventDefault();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.name}{" "}
                  <span role="img" aria-label="link">
                    🔗
                  </span>
                </a>
                <span
                  className="project-tag"
                  style={{
                    border: `2px solid ${tagColors[project.tag]}`,
                    color: tagColors[project.tag],
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <div className="project-tech">Tech: {project.tech}</div>
              <div className="project-desc">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
