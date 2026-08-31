"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Nexus",
    subtitle: "AI Canvas Workspace",
    image: "/nexus.png",
    description:
      "AI workspace where every result — web search, chart, image, document analysis — becomes a card on an infinite canvas. Draw an edge between cards and one feeds the other as context. Streaming responses, cited web search, document Q&A.",
    tags: ["Next.js 16", "React Flow", "Vercel AI SDK", "Gemini", "Prisma", "PostgreSQL"],
    demo: "https://nexus-ai-chi-orcin.vercel.app",
    github: "https://github.com/Metenchuk/Nexus-ai",
  },
  {
    num: "02",
    title: "TaskFlow",
    subtitle: "Project Management SaaS",
    image: "/taskflow.png",
    description:
      "Full-stack SaaS with Kanban boards, AI task generation, real-time team chat and Stripe billing. NestJS backend + React frontend, JWT auth with device/session tracking, drag-and-drop board, voice messages via MediaRecorder API.",
    tags: ["React 19", "NestJS", "Socket.io", "Stripe", "PostgreSQL", "Docker"],
    demo: "https://task-flow-bay-nu.vercel.app",
    github: "https://github.com/Metenchuk/TaskFlow",
  },
  {
    num: "03",
    title: "MealMover",
    subtitle: "Food Delivery Platform",
    image: "/mealmover.png",
    description:
      "Full-stack food delivery platform: restaurant catalog on React Server Components, menu filtering in SQL (not a rate-limited API), persistent Zustand cart, full checkout with server-side order totals, OAuth sign-in.",
    tags: ["Next.js 16", "RSC", "NextAuth", "Prisma", "Upstash Redis", "GSAP"],
    demo: "https://mealmover-5va8.vercel.app",
    github: "https://github.com/Metenchuk/mealmover",
  },
];

const skills = {
  Frontend: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "React Hook Form", "Framer Motion", "React Flow", "Zod"],
  Backend: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "Socket.io", "JWT", "REST API", "Docker"],
  "AI & Tools": ["Vercel AI SDK", "Google Gemini", "Stripe", "Git", "Vercel", "Vitest", "GitHub Actions"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-[#ccd6f6] antialiased selection:bg-teal-400/20">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0f1e]/85 backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-medium tracking-tight text-[#e6f1ff]">
            NM
          </a>
          <nav className="flex gap-6 text-sm text-[#8892b0]">
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#work" className="hover:text-teal-300 transition-colors">Work</a>
            <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6">
        <section className="pt-24 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center"
          >
            <div className="flex-1">
              <p className="mb-5 font-mono text-sm text-teal-300">
                Nazar Metenchuk — Lviv, Ukraine
              </p>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#e6f1ff] sm:text-5xl">
                Frontend developer building
                <br />
                production-grade web apps,
                <br />
                <span className="text-[#4a5578]">not UI demos.</span>
              </h1>
              <div className="mt-8 flex gap-4">
                <a
                  href="#work"
                  className="rounded-md bg-teal-400/10 px-5 py-2.5 text-sm text-teal-300 border border-teal-400/30 transition-colors hover:bg-teal-400/20"
                >
                  View work
                </a>
                <a
                  href="mailto:metenchuk.nazar@gmail.com"
                  className="rounded-md border border-white/15 px-5 py-2.5 text-sm text-[#ccd6f6] transition-colors hover:border-white/40"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-teal-400/20 sm:h-48 sm:w-48"
            >
              <Image
                src="/myself photo.png"
                alt="Nazar Metenchuk"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="pb-24">
          <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-teal-300">
            About
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4 text-[#8892b0] leading-relaxed"
          >
            <p>
              I work primarily with <span className="text-[#ccd6f6]">React, Next.js and TypeScript</span> on
              the frontend, and <span className="text-[#ccd6f6]">NestJS with PostgreSQL</span> on the backend.
              My projects ship with real databases, authentication, payments and AI integrations —
              the goal is always to mirror what a working product actually looks like end-to-end.
            </p>
            <p>
              I&apos;m currently building AI-powered interfaces with the Vercel AI SDK and Google Gemini.
              I care about server-first architectures, type safety from the database schema all the way
              to the form, and a clean feature-based code structure that stays readable as a project grows.
            </p>
            <p>
              I&apos;m a second-year Software Engineering student at Lviv Polytechnic, and I built my three
              main projects solo — from schema to deploy, with tests and CI. I&apos;m looking for my first
              role in a frontend team where I can keep growing toward full-stack.
            </p>
          </motion.div>
        </section>

        <section id="work" className="pb-24">
          <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-teal-300">
            Selected work
          </h2>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                className="group block overflow-hidden rounded-xl border border-white/5 bg-[#111827] transition-all duration-300 hover:border-teal-400/20 hover:bg-[#151d30]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-[#0a0f1e]">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-sm text-teal-300/70 pt-1">{p.num}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-lg font-medium text-[#e6f1ff]">
                          {p.title}
                          <span className="ml-2 font-normal text-[#4a5578]">— {p.subtitle}</span>
                        </h3>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#4a5578] transition-all group-hover:text-teal-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-3 text-sm text-[#8892b0] leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-teal-400/10 px-2.5 py-1 font-mono text-xs text-teal-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-5 font-mono text-xs text-[#8892b0]">
                        <span className="group-hover:text-teal-300 transition-colors">Live demo ↗</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(p.github, "_blank", "noopener");
                          }}
                          className="hover:text-teal-300 transition-colors"
                        >
                          Source ↗
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="skills" className="pb-24">
          <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-teal-300">
            Skills
          </h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([group, items]) => (
              <motion.div
                key={group}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid gap-3 sm:grid-cols-[140px_1fr]"
              >
                <p className="font-mono text-sm text-[#8892b0]">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 px-3 py-1 font-mono text-xs text-[#8892b0] transition-colors hover:border-teal-400/40 hover:text-teal-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#e6f1ff]">
              Open to new opportunities.
            </h2>
            <p className="mb-8 max-w-lg text-[#8892b0] leading-relaxed">
              Looking for a Junior / Trainee Frontend or Full-Stack role, remote or Lviv.
              If something in my work caught your eye — feel free to reach out.
            </p>
            <div className="flex gap-6 font-mono text-sm">
              <a href="mailto:metenchuk.nazar@gmail.com" className="text-[#8892b0] transition-colors hover:text-teal-300">Email</a>
              <a href="https://github.com/Metenchuk" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] transition-colors hover:text-teal-300">GitHub</a>
              <a href="https://linkedin.com/in/nazar-metenchuk" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] transition-colors hover:text-teal-300">LinkedIn</a>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-white/5 py-8 font-mono text-xs text-[#4a5578]">
          Built with Next.js &amp; Tailwind · Nazar Metenchuk 2026
        </footer>
      </main>
    </div>
  );
}