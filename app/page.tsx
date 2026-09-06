"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Code2, Database, TerminalSquare, ChevronDown } from "lucide-react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  i18n content                                                      */
/* ------------------------------------------------------------------ */

type Lang = "ua" | "en";

const t = {
  ua: {
    role: "FRONTEND DEVELOPER",
    tagline: "Будую production-застосунки з реальними БД, авторизацією, платежами та AI — не UI-демо.",
    nav: { about: "Про мене", work: "Проєкти", skills: "Навички", contact: "Контакти" },
    cta: { work: "Проєкти", touch: "Написати" },
    sec: {
      about: "ПРО_МЕНЕ",
      skills: "НАВИЧКИ",
      work: "ПРОЄКТИ",
      qualities: "ОСОБИСТІ_ЯКОСТІ",
      contact: "КОНТАКТИ",
    },
    focusLabel: "ФОКУС",
    focusTitle: "Full-Stack розробка",
    focusText:
      "Сучасні full-stack застосунки з фокусом на server-first архітектуру, типобезпеку від схеми БД до форми, автентифікацію, платежі та AI-інтеграції.",
    aboutP1:
      "Працюю переважно з React, Next.js і TypeScript на фронтенді та NestJS або Express із PostgreSQL на бекенді. Мої проєкти виходять із реальними базами даних, авторизацією, платежами та AI — мета завжди відтворити те, як виглядає робочий продукт від і до.",
    aboutP2:
      "Зараз будую AI-інтерфейси на Vercel AI SDK і Google Gemini. Дбаю про чисту feature-based структуру, яка лишається читабельною, поки проєкт росте.",
    aboutP3:
      "Студент другого курсу Software Engineering у Львівській політехніці. Основні проєкти зробив соло — від схеми до деплою, з тестами й CI. Шукаю першу роль у frontend-команді.",
    available: "Доступний до роботи",
    workSub: "GitHub Portfolio · Full-Stack & Frontend Development",
    live: "Live demo",
    source: "Код",
    qualitiesTech: "Технології",
    qualitiesSoft: "Про мене як розробника",
    tech: ["React 19", "Next.js", "TypeScript", "Node.js", "NestJS", "Express", "JavaScript", "Prisma ORM", "Drizzle ORM", "Tailwind CSS", "Zustand", "PostgreSQL"],
    soft: [
      "Готовий працювати",
      "Цілеспрямований",
      "Завжди готовий допомогти",
      "Швидко навчаюся",
      "Висока увага до деталей",
      "Самодисципліна",
      "Орієнтація на вирішення проблем",
      "Командна робота",
      "Чітка комунікація",
      "Відповідальність і самостійність",
      "Наполегливий",
      "Постійне навчання",
    ],
    contactSub: "FRONTEND DEVELOPER",
    contactText:
      "Шукаю Junior / Trainee Frontend або Full-Stack роль, віддалено або у Львові. Доступний 25–30 год/тиждень. Якщо щось у роботах зачепило — пишіть.",
  },
  en: {
    role: "FRONTEND DEVELOPER",
    tagline: "I build production web apps with real databases, auth, payments and AI — not UI demos.",
    nav: { about: "About", work: "Work", skills: "Skills", contact: "Contact" },
    cta: { work: "View work", touch: "Get in touch" },
    sec: {
      about: "ABOUT_ME",
      skills: "SKILLS",
      work: "WORK",
      qualities: "PERSONAL_TRAITS",
      contact: "CONTACT",
    },
    focusLabel: "FOCUS",
    focusTitle: "Full-Stack Development",
    focusText:
      "Modern full-stack apps focused on server-first architecture, type safety from the database schema to the form, authentication, payments and AI integrations.",
    aboutP1:
      "I work primarily with React, Next.js and TypeScript on the frontend, and NestJS or Express with PostgreSQL on the backend. My projects ship with real databases, authentication, payments and AI integrations — the goal is always to mirror what a working product looks like end-to-end.",
    aboutP2:
      "I'm currently building AI-powered interfaces with the Vercel AI SDK and Google Gemini. I care about a clean feature-based structure that stays readable as a project grows.",
    aboutP3:
      "I'm a second-year Software Engineering student at Lviv Polytechnic, and I built my main projects solo — from schema to deploy, with tests and CI. I'm looking for my first role in a frontend team.",
    available: "Available for work",
    workSub: "GitHub Portfolio · Full-Stack & Frontend Development",
    live: "Live demo",
    source: "Source",
    qualitiesTech: "Technologies",
    qualitiesSoft: "As a developer",
    tech: ["React 19", "Next.js", "TypeScript", "Node.js", "NestJS", "Express", "JavaScript", "Prisma ORM", "Drizzle ORM", "Tailwind CSS", "Zustand", "PostgreSQL"],
    soft: [
      "Ready to work",
      "Goal-oriented",
      "Always ready to help",
      "Fast learner",
      "High attention to detail",
      "Self-discipline",
      "Problem-solving mindset",
      "Teamwork",
      "Clear communication",
      "Ownership & autonomy",
      "Persistent",
      "Continuous learning",
    ],
    contactSub: "FRONTEND DEVELOPER",
    contactText:
      "Looking for a Junior / Trainee Frontend or Full-Stack role, remote or Lviv. Available 25–30 h/week. If something in my work caught your eye — feel free to reach out.",
  },
} as const;

const langOptions: { code: Lang; label: string }[] = [
  { code: "ua", label: "🇺🇦 UA" },
  { code: "en", label: "🇬🇧 EN" },
];

const projects = [
  {
    num: "01",
    title: "Nexus",
    subtitle: { ua: "AI Canvas Workspace", en: "AI Canvas Workspace" },
    image: "/nexus.png",
    description: {
      ua: "AI-простір, де кожен результат — веб-пошук, графік, зображення, аналіз документа — стає карткою на безмежному полотні. З'єднай дві картки ребром, і одна передає іншій контекст. Streaming-відповіді, цитований веб-пошук, Q&A по документах.",
      en: "AI workspace where every result — web search, chart, image, document analysis — becomes a card on an infinite canvas. Draw an edge between cards and one feeds the other as context. Streaming responses, cited web search, document Q&A.",
    },
    tags: ["Next.js 16", "React Flow", "Vercel AI SDK", "Gemini", "Prisma", "PostgreSQL"],
    demo: "https://nexus-ai-chi-orcin.vercel.app",
    github: "https://github.com/Metenchuk/Nexus-ai",
  },
  {
    num: "02",
    title: "TaskFlow",
    subtitle: { ua: "Project Management SaaS", en: "Project Management SaaS" },
    image: "/taskflow.png",
    description: {
      ua: "Full-stack SaaS: Kanban-дошки, AI-генерація задач, health-скоринг проєктів і Stripe-білінг. Бекенд на NestJS + фронтенд на React, JWT-авторизація з трекінгом сесій, drag-and-drop дошка.",
      en: "Full-stack SaaS with Kanban boards, AI task generation, project health scoring and Stripe billing. NestJS backend + React frontend, JWT auth with device/session tracking, drag-and-drop board.",
    },
    tags: ["React 19", "NestJS", "Prisma", "Stripe", "PostgreSQL", "Docker"],
    demo: "https://task-flow-bay-nu.vercel.app",
    github: "https://github.com/Metenchuk/TaskFlow",
  },
  {
    num: "03",
    title: "MealMover",
    subtitle: { ua: "Food Delivery Platform", en: "Food Delivery Platform" },
    image: "/mealmover.png",
    description: {
      ua: "Full-stack платформа доставки їжі: каталог ресторанів на React Server Components, фільтрація меню в SQL, persistent Zustand-кошик, повний checkout із серверним підрахунком сум, OAuth-вхід.",
      en: "Full-stack food delivery platform: restaurant catalog on React Server Components, menu filtering in SQL, persistent Zustand cart, full checkout with server-side order totals, OAuth sign-in.",
    },
    tags: ["Next.js 16", "RSC", "NextAuth", "Prisma", "Upstash Redis", "GSAP"],
    demo: "https://mealmover-5va8.vercel.app",
    github: "https://github.com/Metenchuk/mealmover",
  },
  {
    num: "04",
    title: "TicketDesk",
    subtitle: { ua: "Support Ticketing Platform", en: "Support Ticketing Platform" },
    image: "/ticketdesk.png",
    description: {
      ua: "Клавіатурний split-view інструмент для техпідтримки в стилі Linear: список тікетів ліворуч, деталь праворуч. Стан живе в URL для розшарюваних посилань, optimistic-оновлення статусів, командна палітра Cmd+K і real-time колаборація агентів через WebSockets.",
      en: "A keyboard-first split-view support tool inspired by Linear: ticket list on the left, detail on the right. State lives in the URL for shareable links, optimistic status updates, a Cmd+K command palette, and real-time agent collaboration over WebSockets.",
    },
    tags: ["React 19", "Express", "Drizzle", "PostgreSQL", "TanStack Query", "WebSocket"],
    demo: "https://supportdesk-ai-five.vercel.app",
    github: "https://github.com/Metenchuk/supportdesk-ai",
  },
];

const skillGroups = [
  { icon: Monitor, title: { ua: "Frontend", en: "Frontend" }, items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Framer Motion", "React Flow", "Zod"] },
  { icon: Code2, title: { ua: "Backend", en: "Backend" }, items: ["NestJS", "Express", "Node.js", "PostgreSQL", "Prisma", "Drizzle ORM", "WebSocket", "JWT", "REST API", "Docker"] },
  { icon: Database, title: { ua: "База даних", en: "Database" }, items: ["PostgreSQL", "Prisma", "Drizzle ORM", "pgvector", "Upstash Redis", "Neon"] },
  { icon: TerminalSquare, title: { ua: "Інструменти", en: "Tools & Workflow" }, items: ["Git / GitHub", "Vercel", "Render", "Vite", "Vitest", "GitHub Actions", "Stripe", "Figma"] },
];

/* ------------------------------------------------------------------ */
/*  Motion helpers                                                    */
/* ------------------------------------------------------------------ */

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

/* A section whose heading + content fade/slide in together as you reach it */
function Section({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="scroll-mt-24 pb-28"
    >
      <motion.h2
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mb-12 flex items-center gap-3 text-3xl font-black tracking-tight text-white sm:text-4xl"
      >
        <span className="text-sky-400">{">"}</span>
        <span className="font-mono">{heading}</span>
      </motion.h2>
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Language dropdown                                                 */
/* ------------------------------------------------------------------ */

function LangPicker({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = langOptions.find((o) => o.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 rounded-lg border border-sky-400/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-sky-400/50"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-lg border border-sky-400/20 bg-[#0b1020] shadow-[0_8px_30px_-8px_rgba(56,189,248,0.35)]"
          role="listbox"
        >
          {langOptions.map((o) => (
            <li key={o.code} role="option" aria-selected={o.code === lang}>
              <button
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-semibold transition-colors hover:bg-sky-400/10 ${
                  o.code === lang ? "text-sky-300" : "text-slate-300"
                }`}
              >
                {o.label}
                {o.code === lang && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400" />}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("ua");
  const L = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080b14] text-slate-300 antialiased selection:bg-sky-400/25">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border border-sky-400/15 bg-[#0b1020]/85 shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)] backdrop-blur-md"
              : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-black text-[#080b14]">
              NM
            </span>
            <span className="hidden text-sm font-semibold leading-tight text-white sm:block">
              Nazar<br />Metenchuk
            </span>
          </a>

          <nav className="hidden gap-7 text-sm text-slate-400 sm:flex">
            <a href="#about" className="transition-colors hover:text-sky-300">{L.nav.about}</a>
            <a href="#work" className="transition-colors hover:text-sky-300">{L.nav.work}</a>
            <a href="#skills" className="transition-colors hover:text-sky-300">{L.nav.skills}</a>
            <a href="#contact" className="transition-colors hover:text-sky-300">{L.nav.contact}</a>
          </nav>

          <LangPicker lang={lang} setLang={setLang} />
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-[80vh] flex-col justify-center pb-24 pt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-sm tracking-[0.3em] text-slate-500"
          >
            {L.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-6xl font-black leading-[0.95] tracking-tighter sm:text-8xl"
          >
            <span className="text-white">Nazar</span>{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Metenchuk
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {L.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#080b14] transition-transform hover:-translate-y-0.5"
            >
              {L.cta.work}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:metenchuk.nazar@gmail.com"
              className="rounded-xl border border-sky-400/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-sky-400/60"
            >
              {L.cta.touch}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex gap-3 font-mono text-sm"
          >
            <a href="https://github.com/Metenchuk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition-colors hover:text-sky-300">GitHub</a>
            <a href="https://www.linkedin.com/in/nazar-metenchuk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition-colors hover:text-sky-300">LinkedIn</a>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" heading={L.sec.about}>
          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-6 rounded-2xl border border-white/5 bg-[#0b1020]/60 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]"
          >
            <div className="space-y-5 leading-relaxed text-slate-400">
              <p>{L.aboutP1}</p>
              <p>{L.aboutP2}</p>
              <p>{L.aboutP3}</p>
              <p className="flex items-center gap-2 font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {L.available}
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/15 bg-gradient-to-br from-sky-500/5 to-blue-600/5 p-6">
              <p className="font-mono text-xs tracking-widest text-slate-500">{L.focusLabel}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{L.focusTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{L.focusText}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "NestJS", "Express", "PostgreSQL"].map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-sky-300">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Skills */}
        <Section id="skills" heading={L.sec.skills}>
          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title.en}
                  variants={reveal}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-2xl border border-white/5 bg-[#0b1020]/60 p-5 transition-colors hover:border-sky-400/25"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400/10 text-sky-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-bold text-white">{g.title[lang]}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-sky-400" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Work */}
        <Section id="work" heading={L.sec.work}>
          <motion.p variants={reveal} transition={{ duration: 0.5 }} className="-mt-8 mb-10 font-mono text-sm text-slate-500">
            {L.workSub}
          </motion.p>

          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={reveal}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group grid gap-0 overflow-hidden rounded-2xl border border-white/5 bg-[#0b1020]/60 transition-colors hover:border-sky-400/25 lg:grid-cols-2"
              >
                <div className={`relative aspect-[16/10] w-full overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-sm text-sky-400/70">{p.num}</span>
                    <span className="font-mono text-xs text-slate-500">{p.subtitle[lang]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-sky-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="group/btn flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#080b14] transition-transform hover:-translate-y-0.5">
                      {L.live}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-sky-300">{L.source}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Personal traits + tech */}
        <Section heading={L.sec.qualities}>
          <motion.p variants={reveal} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xs tracking-widest text-slate-500">
            {L.qualitiesTech}
          </motion.p>
          <motion.div variants={stagger} className="mb-10 flex flex-wrap gap-3">
            {L.tech.map((s) => (
              <motion.span
                key={s}
                variants={reveal}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-sky-400/20 bg-sky-400/5 px-4 py-2.5 font-mono text-sm text-sky-300 transition-colors hover:border-sky-400/50"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <motion.p variants={reveal} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xs tracking-widest text-slate-500">
            {L.qualitiesSoft}
          </motion.p>
          <motion.div variants={stagger} className="flex flex-wrap gap-3">
            {L.soft.map((q) => (
              <motion.span
                key={q}
                variants={reveal}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-[#0b1020]/60 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
              >
                {q}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact" heading={L.sec.contact}>
          <motion.div variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl">
              <span className="text-white">Nazar</span><br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Metenchuk</span>
            </h3>
            <p className="mt-4 font-mono text-sm tracking-[0.3em] text-slate-500">{L.contactSub}</p>
            <p className="mt-6 max-w-lg leading-relaxed text-slate-400">{L.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
              <a href="mailto:metenchuk.nazar@gmail.com" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition-colors hover:text-sky-300">Email</a>
              <a href="https://github.com/Metenchuk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition-colors hover:text-sky-300">GitHub</a>
              <a href="https://www.linkedin.com/in/nazar-metenchuk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition-colors hover:text-sky-300">LinkedIn</a>
            </div>
          </motion.div>
        </Section>

        <footer className="border-t border-white/5 py-8 font-mono text-xs text-slate-600">
          {lang === "ua" ? "Зроблено з Next.js і Tailwind" : "Built with Next.js & Tailwind"} · Nazar Metenchuk 2026
        </footer>
      </main>
    </div>
  );
}