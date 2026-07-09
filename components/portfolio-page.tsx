'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaArrowUpRightFromSquare,
  FaGlobe,
  FaJava,
  FaServer,
  FaDatabase,
  FaDiagramProject
} from 'react-icons/fa6';
import { SiSpringboot, SiReact, SiTypescript, SiFastapi, SiMysql, SiGit, SiDocker, SiPostgresql, SiMongodb, SiHibernate } from 'react-icons/si';

type Lang = 'en' | 'es';

const content = {
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navStack: 'Tech Stack',
    navServices: 'Services',
    navContact: 'Contact',
    heroTitle:
      'Backend Developer building reliable applications with Java & Spring Boot.',
    heroSubtitle:
      "I help companies and clients build practical products with a strong backend foundation and clean architecture.",
    ctaProjects: 'View projects',
    ctaContact: 'Let’s work together',
    aboutTitle: 'About me',
    aboutText:
      'I am Farid Salomon, a backend-oriented developer focused on the Java ecosystem, Spring Boot, REST APIs, persistence with Hibernate/JPA, and database design. I also use React and TypeScript as complementary tools when a product needs a clear interface, but my strongest focus is backend engineering. I work with SQL and NoSQL databases, essential tools like Docker and Git, and I have an advanced level of English.',
    projectsTitle: 'Featured projects',
    stackTitle: 'Technologies',
    stackIntro: 'Backend first, with frontend as a complementary skill when the product needs it.',
    servicesTitle: 'Freelance services',
    services: [
      {
        title: 'Backend APIs',
        description: 'REST API development with Java, Spring Boot, validation, clean endpoints, and maintainable service layers.',
        tag: 'Java · Spring Boot'
      },
      {
        title: 'Business logic',
        description: 'Domain rules, workflows, integrations, and backend structure designed around real product needs.',
        tag: 'Architecture · Services'
      },
      {
        title: 'Persistence layer',
        description: 'Database modeling, Hibernate/JPA mappings, SQL/NoSQL persistence, and data-driven backend features.',
        tag: 'JPA · SQL · NoSQL'
      }
    ],
    contactTitle: 'Contact me',
    contactText: 'Send me a message and I will reply soon.',
    name: 'Name',
    message: 'Message',
    send: 'Send message',
    theme: 'Theme',
    lang: 'ES',
    live: 'Website',
    repository: 'GitHub',
    comingSoon: 'Coming soon',
    preview: 'Preview',
    directLinks: 'Direct links'
  },
  es: {
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navStack: 'Tecnologías',
    navServices: 'Servicios',
    navContact: 'Contacto',
    heroTitle:
      'Desarrollador Backend construyendo aplicaciones confiables con Java y Spring Boot.',
    heroSubtitle:
      'Ayudo a empresas y clientes a construir productos prácticos con una base backend sólida y arquitectura limpia.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Trabajemos juntos',
    aboutTitle: 'Sobre mí',
    aboutText:
      'Soy Farid Salomon, desarrollador orientado a backend con foco en el ecosistema Java, Spring Boot, APIs REST, persistencia con Hibernate/JPA y diseño de bases de datos. También uso React y TypeScript como herramientas complementarias cuando el producto necesita una interfaz clara, pero mi fortaleza principal está en backend. Trabajo con bases de datos SQL y NoSQL, herramientas esenciales como Docker y Git, y tengo nivel avanzado de inglés.',
    projectsTitle: 'Proyectos destacados',
    stackTitle: 'Tecnologías',
    stackIntro: 'Backend primero, con frontend como complemento cuando el producto lo necesita.',
    servicesTitle: 'Servicios freelance',
    services: [
      {
        title: 'APIs backend',
        description: 'Desarrollo de APIs REST con Java, Spring Boot, validaciones, endpoints claros y capas de servicio mantenibles.',
        tag: 'Java · Spring Boot'
      },
      {
        title: 'Lógica de negocio',
        description: 'Reglas de dominio, flujos, integraciones y estructura backend pensada para necesidades reales de producto.',
        tag: 'Arquitectura · Servicios'
      },
      {
        title: 'Capa de persistencia',
        description: 'Modelado de datos, mapeos con Hibernate/JPA, persistencia SQL/NoSQL y funcionalidades basadas en datos.',
        tag: 'JPA · SQL · NoSQL'
      }
    ],
    contactTitle: 'Contactame',
    contactText: 'Enviame un mensaje y te respondo pronto.',
    name: 'Nombre',
    message: 'Mensaje',
    send: 'Enviar mensaje',
    theme: 'Tema',
    lang: 'EN',
    live: 'Web',
    repository: 'GitHub',
    comingSoon: 'Próximamente',
    preview: 'Vista previa',
    directLinks: 'Links directos'
  }
} as const;

const projects = [
  {
    name: 'Ospaat',
    summaryEn: 'Healthcare platform for sugarcane workers social coverage.',
    summaryEs: 'Plataforma de obra social para trabajadores de la caña de azúcar.',
    tech: ['FastAPI', 'Python', 'MySQL', 'HTML/CSS'],
    live: 'https://ospaat.com.ar',
    repo: 'https://github.com/turkaym/ospaat_web',
    logo: '/LOGOTIPO_Mesa de trabajo 1.png',
    logoClass: 'h-16 w-auto max-w-[13rem] object-contain',
    accent: 'from-softblue-100 via-white to-mint-100',
    darkAccent: 'dark:from-slate-800 dark:via-zinc-900 dark:to-emerald-950',
    previewTitle: 'Healthcare coverage portal',
    previewMeta: 'Members · Requests · Benefits'
  },
  {
    name: 'El Tano Frutos Secos',
    summaryEn: 'Ecommerce storefront and business workflow for a local dried-fruit brand.',
    summaryEs: 'Tienda online y flujo comercial para una marca local de frutos secos.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'TypeScript'],
    live: 'https://frutoseltano.com.ar',
    repo: 'https://github.com/turkaym/elTano-ecommerce',
    logo: '/logo.png',
    logoClass: 'h-24 w-24 object-contain',
    accent: 'from-mint-100 via-white to-amber-100',
    darkAccent: 'dark:from-emerald-950 dark:via-zinc-900 dark:to-yellow-950',
    previewTitle: 'Ecommerce catalog',
    previewMeta: 'Products · Orders · Checkout'
  },
  {
    name: 'Farid Salomon Portfolio',
    summaryEn: 'This personal portfolio, built to present backend focus, projects, and contact paths clearly.',
    summaryEs: 'Este portfolio personal, creado para presentar foco backend, proyectos y vías de contacto con claridad.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'pnpm'],
    live: 'https://faridsalomon.com',
    repo: 'https://github.com/turkaym/personal_website',
    logo: '/logoOscuro.png',
    darkLogo: '/logoOscuro.png',
    logoClass: 'h-14 w-auto max-w-[12rem] object-contain',
    accent: 'from-charcoal/10 via-white to-softblue-100',
    darkAccent: 'dark:from-zinc-800 dark:via-zinc-900 dark:to-sky-950',
    previewTitle: 'Personal brand site',
    previewMeta: 'About · Projects · Contact'
  }
];

const stackGroups = [
  {
    title: 'Backend core',
    titleEs: 'Base backend',
    description: 'Primary focus for business logic, APIs, services, persistence, and maintainable server-side systems.',
    descriptionEs: 'Foco principal para lógica de negocio, APIs, servicios, persistencia y sistemas backend mantenibles.',
    featured: true,
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Hibernate / JPA', icon: SiHibernate },
      { name: 'SQL / MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'NoSQL', icon: SiMongodb }
    ]
  },
  {
    title: 'Complementary frontend',
    titleEs: 'Frontend complementario',
    description: 'Used as a complement to connect interfaces with backend capabilities when the product needs it.',
    descriptionEs: 'Usado como complemento para conectar interfaces con capacidades backend cuando el producto lo necesita.',
    featured: false,
    items: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript }
    ]
  },
  {
    title: 'Tools and APIs',
    titleEs: 'Herramientas y APIs',
    description: 'Essential tools for delivery, collaboration, containers, and API-driven applications.',
    descriptionEs: 'Herramientas esenciales para entrega, colaboración, contenedores y aplicaciones basadas en APIs.',
    featured: false,
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git & GitHub', icon: SiGit }
    ]
  }
];

const serviceIcons = [FaServer, FaDiagramProject, FaDatabase];

export function PortfolioPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkTheme = storedTheme ? storedTheme === 'dark' : prefersDark;

    setDark(shouldUseDarkTheme);
    document.documentElement.classList.toggle('dark', shouldUseDarkTheme);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark, themeReady]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    if (status === 'success') setFeedback('success');
    if (status === 'error') setFeedback('error');
  }, []);

  useEffect(() => {
    const sections = ['about', 'projects', 'stack', 'services', 'contact'];
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `border-b-2 pb-0.5 transition ${
      activeSection === id
        ? 'border-mint-100 text-charcoal dark:text-mint-100 font-semibold'
        : 'border-transparent text-slategray dark:text-zinc-300 hover:border-softblue-100 hover:text-charcoal dark:hover:border-mint-100 dark:hover:text-white'
    }`;

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-lightbg to-white dark:from-charcoal dark:to-zinc-900">
      <div className="hero-shape -left-16 top-24 h-52 w-52 bg-mint-100/40" />
      <div className="hero-shape right-0 top-36 h-64 w-64 bg-softblue-100/40" />
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/85 backdrop-blur dark:border-zinc-700 dark:bg-charcoal/85">
        <div className="container-page flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image
              src="/logoOscuro.png"
              alt="Farid Salomon"
              width={172}
              height={44}
              className="h-10 w-auto object-contain md:h-11"
              priority
            />
          </div>
          <nav className="hidden gap-1 text-sm md:flex">
            <a href="#about" className={`px-3 py-1.5 ${navLinkClass('about')}`}>{t.navAbout}</a>
            <a href="#projects" className={`px-3 py-1.5 ${navLinkClass('projects')}`}>{t.navProjects}</a>
            <a href="#stack" className={`px-3 py-1.5 ${navLinkClass('stack')}`}>{t.navStack}</a>
            <a href="#services" className={`px-3 py-1.5 ${navLinkClass('services')}`}>{t.navServices}</a>
            <a href="#contact" className={`px-3 py-1.5 ${navLinkClass('contact')}`}>{t.navContact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-1 text-sm transition hover:border-mint-100 hover:bg-mint-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 dark:border-zinc-700 dark:hover:border-mint-100/40 dark:hover:bg-mint-100/10"
            >
              {dark ? <FaSun /> : <FaMoon />}
              {t.theme}
            </button>
            <a className="rounded-lg border border-zinc-300 px-3 py-1 text-sm transition hover:border-softblue-100 hover:bg-softblue-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-softblue-100 dark:border-zinc-700 dark:hover:border-softblue-100/40 dark:hover:bg-softblue-100/10" href={lang === 'en' ? '/es' : '/'}>
              {t.lang}
            </a>
          </div>
        </div>
      </header>

      <section className="container-page grid gap-8 py-12 md:py-14 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="fade-up">
          <h1 className="fade-up fade-delay-1 text-3xl font-bold leading-tight md:text-5xl">{t.heroTitle}</h1>
          <p className="fade-up fade-delay-2 mt-5 max-w-2xl text-slategray dark:text-zinc-300">{t.heroSubtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-mint-100 px-4 py-2 text-charcoal shadow-lg shadow-mint-100/25 transition hover:-translate-y-0.5 hover:bg-mint-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100">
              {t.ctaProjects}
            </a>
            <a href="#contact" className="rounded-xl border border-softblue-100/70 bg-softblue-100/10 px-4 py-2 transition hover:-translate-y-0.5 hover:border-mint-100 hover:bg-softblue-100/45 hover:shadow-lg hover:shadow-softblue-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-softblue-100 dark:border-softblue-100/30 dark:bg-softblue-100/10 dark:hover:border-mint-100/50 dark:hover:bg-mint-100/10">
              {t.ctaContact}
            </a>
          </div>
          <div className="fade-up fade-delay-3 mt-6 flex gap-4 text-slategray dark:text-zinc-300">
            <a href="https://github.com/turkaym" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-charcoal dark:hover:text-mint-100">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/farid-salomon/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-charcoal dark:hover:text-mint-100">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="/profile2.png"
          alt="Farid Salomon"
          width={420}
          height={520}
          className="fade-up fade-delay-2 mx-auto rounded-2xl border border-zinc-200 object-cover shadow-xl shadow-zinc-900/10 dark:border-zinc-800 dark:shadow-black/30"
          priority
        />
      </section>

      <section id="about" className="container-page fade-up py-9 md:py-10 scroll-mt-24">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/75 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 md:p-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold">{t.aboutTitle}</h2>
            <p className="mt-4 leading-7 text-slategray dark:text-zinc-300">{t.aboutText}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="container-page fade-up py-9 md:py-10 scroll-mt-24">
        <h2 className="text-2xl font-semibold">{t.projectsTitle}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-lg shadow-zinc-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30"
            >
              <div className={`relative h-80 bg-gradient-to-br ${p.accent} ${p.darkAccent} p-4`}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} website`}
                  className="flex h-[17rem] flex-col rounded-2xl border border-white/70 bg-white/75 p-3 shadow-xl shadow-zinc-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 dark:border-white/10 dark:bg-zinc-950/55"
                >
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="flex h-28 items-center justify-center rounded-xl bg-white/70 p-3 dark:bg-zinc-950/30">
                    <Image
                      src={p.darkLogo && dark ? p.darkLogo : p.logo}
                      alt={`${p.name} logo`}
                      width={220}
                      height={120}
                      className={`${p.logoClass} transition duration-300 group-hover:scale-105`}
                    />
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slategray dark:text-zinc-400">{t.preview}</p>
                  <p className="mt-1 min-h-12 font-semibold text-charcoal dark:text-white">{p.previewTitle}</p>
                  <div className="mt-auto h-2 rounded-full bg-charcoal/10 dark:bg-white/15" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-charcoal/10 dark:bg-white/15" />
                </a>
                <span className="absolute bottom-4 right-4 rounded-full bg-charcoal px-3 py-1 text-xs text-white dark:bg-mint-100 dark:text-charcoal">
                  {p.previewMeta}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slategray dark:text-zinc-300 md:min-h-[6rem]">
                  {lang === 'en' ? p.summaryEn : p.summaryEs}
                </p>
                <div className="mt-4 flex min-h-[4.25rem] flex-wrap content-start gap-2">
                  {p.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 transition group-hover:bg-mint-100/30 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-mint-100/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5 text-sm">
                  <a
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-300 px-3 py-2 text-center transition hover:border-mint-100 hover:bg-mint-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 dark:border-zinc-700 dark:hover:border-mint-100/40"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaArrowUpRightFromSquare /> {t.live}
                  </a>
                  <a
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-zinc-100 px-3 py-2 text-center text-zinc-700 transition hover:border-softblue-100 hover:bg-softblue-100/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-softblue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-softblue-100/40 dark:hover:bg-softblue-100/10"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> {t.repository}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="container-page fade-up py-9 md:py-10 scroll-mt-24">
        <h2 className="text-2xl font-semibold">{t.stackTitle}</h2>
        <p className="mt-2 text-slategray dark:text-zinc-300">{t.stackIntro}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className={`group rounded-3xl border p-5 shadow-lg shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-softblue-100 hover:shadow-xl hover:shadow-softblue-100/20 dark:hover:border-mint-100/35 dark:hover:shadow-black/25 ${
                group.featured
                  ? 'border-mint-100/70 bg-gradient-to-br from-mint-100/40 to-white dark:border-mint-100/30 dark:from-mint-100/10 dark:to-zinc-900'
                  : 'border-zinc-200/80 bg-white hover:bg-gradient-to-br hover:from-softblue-100/25 hover:to-mint-100/20 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:from-softblue-100/10 dark:hover:to-mint-100/10'
              }`}
            >
              <h3 className="font-semibold">{lang === 'en' ? group.title : group.titleEs}</h3>
              <p className="mt-2 text-sm leading-6 text-slategray dark:text-zinc-300">
                {lang === 'en' ? group.description : group.descriptionEs}
              </p>
              <ul className="mt-4 grid gap-2">
                {group.items.map((item) => (
                  <li key={item.name} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white/75 px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-mint-100 hover:bg-mint-100/25 group-hover:border-softblue-100/60 dark:border-zinc-700 dark:bg-zinc-950/40 dark:hover:border-mint-100/40 dark:hover:bg-mint-100/10">
                    <item.icon className="shrink-0 text-charcoal transition dark:text-mint-100" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="container-page fade-up py-9 md:py-10 scroll-mt-24">
        <h2 className="text-2xl font-semibold">{t.servicesTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-zinc-200/80 bg-white/75 p-5 shadow-lg shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-mint-100 hover:bg-gradient-to-br hover:from-mint-100/25 hover:to-softblue-100/20 hover:shadow-xl hover:shadow-mint-100/20 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-mint-100/35 dark:hover:from-mint-100/10 dark:hover:to-softblue-100/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-mint-100 transition group-hover:scale-105 dark:bg-mint-100 dark:text-charcoal">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slategray dark:text-zinc-300">{service.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-mint-100/40 px-3 py-1 text-xs font-medium text-charcoal dark:bg-mint-100/10 dark:text-mint-100">
                  {service.tag}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="container-page fade-up py-9 md:py-10 scroll-mt-24">
        <h2 className="text-2xl font-semibold">{t.contactTitle}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">{t.contactText}</p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-5 space-y-3"
          onSubmit={() => setIsSubmitting(true)}
        >
          <input type="hidden" name="access_key" value="a723e60c-5be3-4bdb-89f4-1f5208a78811" />
          <input type="hidden" name="subject" value="New portfolio contact message" />
          <input type="hidden" name="from_name" value="faridsalomon.com contact form" />
          <input type="hidden" name="redirect" value="https://faridsalomon.com/?status=success#contact" />
          <input type="hidden" name="replyto" value="email" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <label className="block">
            <span className="mb-1 block text-sm">{t.name}</span>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-zinc-300 bg-transparent p-3 dark:border-zinc-700"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Email</span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-zinc-300 bg-transparent p-3 dark:border-zinc-700"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">{t.message}</span>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border border-zinc-300 bg-transparent p-3 dark:border-zinc-700"
            />
          </label>
          <button
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="rounded-xl bg-mint-100 px-5 py-2 text-charcoal disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (lang === 'en' ? 'Sending...' : 'Enviando...') : t.send}
          </button>
          {feedback === 'success' && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status" aria-live="polite">
              {lang === 'en'
                ? 'Message sent successfully. Thanks for reaching out!'
                : 'Mensaje enviado correctamente. ¡Gracias por contactarme!'}
            </p>
          )}
          {feedback === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400" role="alert">
              {lang === 'en'
                ? 'There was an error sending your message. Please email me directly.'
                : 'Hubo un error al enviar tu mensaje. Escribime por email directamente.'}
            </p>
          )}
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {lang === 'en'
              ? 'If your message is sent successfully, this section will reload. If it fails, please email me directly.'
              : 'Si tu mensaje se envía correctamente, esta sección se recargará. Si falla, escribime por email directamente.'}
          </p>
        </form>
        <p className="mt-5 text-sm text-slategray dark:text-zinc-300">
          {lang === 'en' ? 'Prefer direct email?' : '¿Preferís email directo?'}{' '}
          <a className="font-medium text-charcoal underline decoration-mint-100 decoration-2 underline-offset-4 transition hover:text-slategray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 dark:text-mint-100 dark:hover:text-white" href="mailto:faridsalomon90@gmail.com">
            faridsalomon90@gmail.com
          </a>
        </p>
      </section>
      <footer className="container-page py-12">
        <div className="rounded-3xl border border-zinc-200 bg-white/70 px-5 py-7 shadow-xl shadow-zinc-900/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 md:px-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slategray dark:text-zinc-400">{t.directLinks}</p>
            <div className="flex w-full flex-wrap justify-center gap-3 text-sm">
              <a
                href="https://github.com/turkaym"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-3 py-2 transition hover:-translate-y-0.5 hover:border-mint-100 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 dark:border-zinc-600 dark:bg-zinc-950/30 dark:hover:border-mint-100/40 dark:hover:bg-zinc-900"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/farid-salomon/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-3 py-2 transition hover:-translate-y-0.5 hover:border-softblue-100 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-softblue-100 dark:border-zinc-600 dark:bg-zinc-950/30 dark:hover:border-softblue-100/40 dark:hover:bg-zinc-900"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
