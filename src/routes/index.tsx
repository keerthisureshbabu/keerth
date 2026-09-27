import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Braces,
  BriefcaseBusiness,
  Check,
  Code2,
  Crosshair,
  ExternalLink,
  Globe2,
  GraduationCap,
  Layout,
  Mail,
  Menu,
  Megaphone,
  PenTool,
  Phone,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "@/assets/keerthana.jpeg";

const email = "keerthanasureshbabu286@gmail.com";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    mark: "in",
    href: "https://www.linkedin.com/search/results/people/?keywords=Keerthana%20S",
    title: "Find Keerthana on LinkedIn",
  },
  {
    label: "GitHub",
    mark: "gh",
    href: "https://github.com/search?q=Keerthana+S&type=users",
    title: "Find Keerthana on GitHub",
  },
  {
    label: "Email",
    mark: "@",
    href: `mailto:${email}`,
    title: "Email Keerthana",
  },
];

const skills = [
  {
    icon: Megaphone,
    name: "Digital Marketing",
    index: "01",
    items: [
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "Reddit Ads",
      "SEO",
      "AEO",
      "GEO",
      "Social Media Marketing",
      "Content Strategy",
      "Google Merchant Center",
    ],
  },
  {
    icon: BarChart3,
    name: "Analytics",
    index: "02",
    items: [
      "Google Analytics",
      "Google Tag Manager",
      "Search Console",
      "Meta Pixel",
      "Conversion Tracking",
    ],
  },
  {
    icon: Code2,
    name: "Development",
    index: "03",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "PHP",
      "Laravel",
      "MySQL",
      "WordPress",
      "WooCommerce",
    ],
  },
  {
    icon: PenTool,
    name: "Creative",
    index: "04",
    items: [
      "Figma",
      "Photoshop",
      "CapCut",
      "DaVinci Resolve",
      "Poster Design",
      "Creative Content",
    ],
  },
];

const services = [
  {
    icon: Megaphone,
    name: "Digital Marketing",
    text: "Building targeted digital campaigns that improve visibility, engagement and business growth.",
  },
  {
    icon: Target,
    name: "Paid Advertising",
    text: "Campaign planning, audience targeting, creative strategy and performance optimization.",
  },
  {
    icon: Search,
    name: "SEO / AEO / GEO",
    text: "Improving digital visibility across search engines, answer engines and emerging AI-driven discovery.",
  },
  {
    icon: Layout,
    name: "Website Development",
    text: "Building responsive, modern websites with strong UI, performance and user experience.",
  },
  {
    icon: PenTool,
    name: "Social Media & Content",
    text: "Creating content strategies, campaigns and creative assets aligned with business goals.",
  },
  {
    icon: Crosshair,
    name: "Analytics & Tracking",
    text: "Using analytics, GTM, Search Console and conversion tracking to understand digital performance.",
  },
];

const projects = [
  {
    name: "Edventures Technology",
    category: "Technology / Website",
    url: "https://edventurestechnology.com/",
    icon: Layout,
    code: "EDV",
  },
  {
    name: "JeevaRaksha",
    category: "Healthcare / Organization Website",
    url: "https://jeevaraksha.org/",
    icon: Crosshair,
    code: "JVR",
  },
  {
    name: "Navgraam",
    category: "Business Website",
    url: "https://navgraam.in/",
    icon: Globe2,
    code: "NVG",
  },
  {
    name: "TRYMYWEBSITES",
    category: "Web Development",
    url: "https://trymywebsites.com/",
    icon: Code2,
    code: "TMW",
  },
  {
    name: "Smaart Eye Technologies",
    category: "Security Technology",
    url: "https://smaarteyetechnologies.com/",
    icon: Crosshair,
    code: "SET",
  },
  {
    name: "SmartGPT",
    category: "Digital Marketing & Technology",
    url: "https://smartgpt.com.au/",
    icon: Sparkles,
    code: "SGP",
  },
  {
    name: "GoldArk",
    category: "Gold Scheme Management Platform",
    url: "https://goldark.meark.org/",
    icon: TrendingUp,
    code: "GLD",
  },
  {
    name: "Meark HR Services",
    category: "HR / Recruitment",
    url: "https://hr.meark.org/",
    icon: BriefcaseBusiness,
    code: "MHR",
  },
  {
    name: "TeamBee Studio",
    category: "React + Vite",
    url: "https://mearkwebdev.github.io/teambeestudio/",
    icon: Braces,
    code: "TBS",
  },
  {
    name: "GrmElitewear",
    category: "E-commerce / Web Development",
    url: null,
    icon: Layout,
    code: "GRM",
  },
];

const stack = [
  "React",
  "Vite",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "Laravel",
  "MySQL",
  "WordPress",
  "WooCommerce",
  "GitHub",
  "Vercel",
  "Google Analytics",
  "GTM",
  "Meta Ads",
  "Figma",
  "Photoshop",
];

const education = [
  {
    school: "RVS College of Arts and Science",
    qualification: "B.Com (IT)",
    period: "2021 – 2024",
    grade: "82%",
  },
  {
    school: "Jaivabai Girls Higher Secondary School",
    qualification: "HSC – Arts with Business Maths",
    period: "2019 – 2021",
    grade: "85%",
  },
  {
    school: "St. Thomas Girls Higher Secondary School",
    qualification: "SSLC",
    period: "2018 – 2019",
    grade: "88%",
  },
];

const activities = [
  "PHP Full Stack Development Course — Altalya Solution Pvt. Ltd.",
  "BPM (Business Process Management) Training — RVS Training Academy.",
  'Team secured first prize in “Connection & Quiz” conducted by the MCA department.',
  "Participated in Resume Competition conducted by RVS College.",
  "Participated in Naukri Campus Young Turks conducted by Naukri.",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={
            item.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          title={item.title}
          aria-label={item.title}
        >
          <span className="social-glyph">{item.mark}</span>
          <span>{item.label}</span>
          <ArrowUpRight size={13} />
        </a>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const current = [...nav].reverse().find((item) => {
        const node = document.querySelector(item.href);

        return (
          node &&
          node.getBoundingClientRect().top <= window.innerHeight * 0.42
        );
      });

      setActive(current?.href ?? "#home");
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((node) => observer.observe(node));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="container nav-inner">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            KEERTHANA <span>S.</span>
          </a>

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <a
                className={active === item.href ? "active" : ""}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="nav-cta" asChild>
            <a href={`mailto:${email}`}>
              Let's Talk <ArrowUpRight size={16} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </Button>
        </div>

        <nav
          className={`mobile-nav ${menuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {nav.map((item) => (
            <a
              tabIndex={menuOpen ? 0 : -1}
              className={
                active === item.href ? "active" : ""
              }
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero"
          aria-labelledby="hero-title"
        >
          <div
            className="hero-gridlines"
            aria-hidden="true"
          />
          <div
            className="hero-beam"
            aria-hidden="true"
          />
          <div
            className="hero-particles"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </div>

          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-badge">
                <span className="badge-pulse" />
                DIGITAL MARKETING × WEB DEVELOPMENT
              </div>

              <h1 id="hero-title">
                Turning <span>Digital Ideas</span>
                <br />
                Into Experiences
                <br />
                That Grow
                <span className="period">.</span>
              </h1>

              <p className="hero-description">
                I'm Keerthana S — a Digital Marketing
                Specialist and Front-End Developer focused
                on building websites, campaigns and digital
                experiences that connect businesses with
                their audiences.
              </p>

              <div className="hero-actions">
                <Button asChild size="lg">
                  <a href="#projects">
                    Explore My Work
                    <ArrowUpRight size={18} />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <a href="#contact">
                    Let's Connect
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>

              <SocialLinks />
            </div>

            <div className="hero-visual">
              <div className="portrait-orbit orbit-outer" />
              <div className="portrait-orbit orbit-inner" />

              <span className="orbit-node node-one" />
              <span className="orbit-node node-two" />
              <span className="orbit-node node-three" />

              <div className="portrait-frame">
                <img
                  src={portrait}
                  alt="Keerthana S"
                  fetchPriority="high"
                />
              </div>

              <div className="portrait-caption">
                <span className="caption-dot" />

                <span>
                  KEERTHANA S
                  <br />
                  <small>
                    MARKETING × DEVELOPMENT
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="container hero-foot">
            <span>
              AVAILABLE FOR DIGITAL PROJECTS{" "}
              <span className="foot-dot" />
            </span>

            <a href="#about">
              SCROLL TO EXPLORE
              <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="section about-section"
        >
          <div className="container about-layout">
            <div className="about-copy reveal">
              <Eyebrow>01 / ABOUT ME</Eyebrow>

              <h2>
                More Than Just <span>Marketing.</span>
              </h2>

              <p className="lead">
                Where strategy, creativity and code come
                together.
              </p>

              <p>
                I’m Keerthana S, a Digital Marketing
                Specialist and Front-End Developer focused
                on building strong digital experiences that
                connect businesses with their audiences.
              </p>

              <p>
                With experience across digital marketing,
                paid advertising, SEO, social media, website
                development, analytics, e-commerce and
                creative content, I work across both the
                marketing and technical sides of a digital
                project.
              </p>

              <p>
                My background in front-end development helps
                me approach marketing from a technical
                perspective — understanding how websites,
                landing pages, tracking and user experience
                contribute to digital growth.
              </p>

              <p>
                I enjoy turning ideas into practical digital
                solutions — whether it’s a campaign, website,
                landing page or complete online presence.
              </p>
            </div>

            <div
              className="about-visual reveal"
              aria-label="Marketing, web, analytics, and creative expertise"
            >
              <div className="about-crosshair" />

              <span className="about-center">
                IDEA <span>→</span> IMPACT
              </span>

              {[
                {
                  name: "MARKETING",
                  icon: Megaphone,
                },
                {
                  name: "WEB",
                  icon: Code2,
                },
                {
                  name: "ANALYTICS",
                  icon: BarChart3,
                },
                {
                  name: "CREATIVE",
                  icon: PenTool,
                },
              ].map(({ name, icon: Icon }, i) => (
                <div
                  className={`about-float about-float-${i}`}
                  key={name}
                >
                  <Icon size={21} />
                  <span>{name}</span>
                  <ArrowUpRight size={14} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>02 / THE EXPERTISE</Eyebrow>

                <h2>
                  Skills & <span>Expertise.</span>
                </h2>
              </div>

              <p>
                A connected skill set across campaigns,
                code, data and design.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map(
                ({
                  icon: Icon,
                  name,
                  index,
                  items,
                }) => (
                  <article
                    className="skill-card reveal"
                    key={name}
                  >
                    <div className="skill-top">
                      <span className="icon-box">
                        <Icon
                          size={24}
                          strokeWidth={1.6}
                        />
                      </span>

                      <span className="card-index">
                        /{index}
                      </span>
                    </div>

                    <h3>{name}</h3>

                    <div className="skill-list">
                      {items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section services-section"
        >
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>03 / WHAT I DO</Eyebrow>

                <h2>
                  What I Can <span>Build.</span>
                </h2>
              </div>

              <p>
                From the first impression to the details
                behind the scenes.
              </p>
            </div>

            <div className="services-grid">
              {services.map(
                ({ icon: Icon, name, text }, i) => (
                  <article
                    className="service-card reveal"
                    key={name}
                  >
                    <div className="service-top">
                      <span className="service-icon">
                        <Icon
                          size={25}
                          strokeWidth={1.6}
                        />
                      </span>

                      <span className="card-index">
                        0{i + 1}
                      </span>
                    </div>

                    <h3>{name}</h3>

                    <p>{text}</p>

                    <ArrowUpRight
                      className="service-arrow"
                      size={19}
                    />
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>04 / SELECTED WORK</Eyebrow>

                <h2>
                  Selected <span>Projects.</span>
                </h2>
              </div>

              <p>
                Websites, platforms and digital experiences
                I've worked on.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map(
                (
                  {
                    name,
                    category,
                    url,
                    icon: Icon,
                    code,
                  },
                  i
                ) => (
                  <article
                    className="project-card reveal"
                    key={name}
                  >
                    <div
                      className="project-preview"
                      aria-hidden="true"
                    >
                      <div className="preview-top">
                        <span>
                          PORTFOLIO /{" "}
                          {String(i + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span>↗</span>
                      </div>

                      <div className="preview-rings" />

                      <div className="preview-window">
                        <div className="window-bar">
                          <span />
                          <span />
                          <span />

                          <i>
                            preview /{" "}
                            {code.toLowerCase()}
                          </i>
                        </div>

                        <div className="window-body">
                          <div className="window-icon">
                            <Icon
                              size={24}
                              strokeWidth={1.4}
                            />
                          </div>

                          <span className="window-code">
                            {code}
                          </span>

                          <div className="window-lines">
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="window-pill" />
                        </div>
                      </div>

                      <span className="preview-coordinate">
                        KS — DIGITAL /{" "}
                        {String(i + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    <div className="project-details">
                      <span className="project-category">
                        {category}
                      </span>

                      <h3>{name}</h3>

                      <div className="project-bottom">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                            <ExternalLink size={16} />
                          </a>
                        ) : (
                          <span className="ongoing">
                            <span className="caption-dot" />
                            Ongoing Project
                          </span>
                        )}

                        <span>
                          {String(i + 1).padStart(
                            2,
                            "0"
                          )}{" "}
                          / 10
                        </span>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>05 / THE JOURNEY</Eyebrow>

                <h2>
                  Experience<span>.</span>
                </h2>
              </div>

              <p>
                Hands-on work across marketing, development
                and everything in between.
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-item reveal">
                <div className="timeline-dot" />

                <div className="timeline-date">
                  CURRENT
                </div>

                <div className="timeline-content">
                  <span className="timeline-type">
                    DIGITAL MARKETING
                  </span>

                  <h3>
                    Meark Enterprise Pvt. Ltd.
                  </h3>

                  <h4>
                    Digital Marketing Specialist
                  </h4>

                  <ul>
                    <li>
                      Plan and execute digital marketing
                      campaigns across Meta, Google,
                      LinkedIn and other paid channels.
                    </li>

                    <li>
                      Manage social media content, creative
                      requirements, campaign copy, audience
                      targeting and performance optimization.
                    </li>

                    <li>
                      Work on SEO, AEO/GEO, Google
                      Analytics, Google Tag Manager, Search
                      Console and conversion tracking.
                    </li>

                    <li>
                      Create and manage websites, landing
                      pages and e-commerce content.
                    </li>

                    <li>
                      Support product listings, website
                      updates, image management and digital
                      growth activities.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal">
                <div className="timeline-dot" />

                <div className="timeline-date">
                  MAR 2024 – PRESENT
                </div>

                <div className="timeline-content">
                  <span className="timeline-type">
                    DIGITAL MARKETING
                  </span>

                  <h3>GP Clothing</h3>

                  <h4>Digital Marketing</h4>

                  <ul>
                    <li>
                      Planned and executed targeted digital
                      marketing campaigns to support online
                      presence and sales.
                    </li>

                    <li>
                      Analyzed customer behavior and
                      website traffic using analytics tools.
                    </li>

                    <li>
                      Worked on SEO improvements and online
                      visibility.
                    </li>

                    <li>
                      Engaged with online communities and
                      social platforms to build brand
                      visibility and trust.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal">
                <div className="timeline-dot" />

                <div className="timeline-date">
                  WEB DEVELOPMENT
                </div>

                <div className="timeline-content">
                  <span className="timeline-type">
                    DEVELOPMENT
                  </span>

                  <h3>TRYMYWEBSITES</h3>

                  <h4>Junior PHP Developer</h4>

                  <p>
                    Developed and maintained web
                    applications using PHP, Laravel and
                    MySQL; built front-end features with
                    HTML, CSS and JavaScript; supported
                    database integration, debugging and
                    performance optimization.
                  </p>

                  <div className="experience-tags">
                    {[
                      "PHP",
                      "Laravel",
                      "MySQL",
                      "HTML",
                      "CSS",
                      "JavaScript",
                    ].map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section international-section">
          <div className="container international-layout">
            <div className="reveal">
              <Eyebrow>06 / BEYOND BORDERS</Eyebrow>

              <h2>
                Working Across <span>Borders.</span>
              </h2>

              <p>
                Digital work that travels beyond one market
                or audience.
              </p>

              <div
                className="network"
                aria-hidden="true"
              >
                <div className="network-ring ring-a" />
                <div className="network-ring ring-b" />

                <Globe2
                  size={126}
                  strokeWidth={0.6}
                />

                <i className="network-point point-a" />
                <i className="network-point point-b" />
                <i className="network-point point-c" />
              </div>
            </div>

            <div className="international-clients reveal">
              <article>
                <span>
                  01 / INTERNATIONAL CLIENT PROJECT
                </span>

                <h3>
                  Brahmarsive{" "}
                  <ArrowUpRight size={21} />
                </h3>

                <p>
                  Supported digital marketing, content and
                  creative activities, campaign-related work
                  and online presence.
                </p>
              </article>

              <article>
                <span>
                  02 / AUSTRALIAN CLIENT PROJECT
                </span>

                <h3>
                  UWA <ArrowUpRight size={21} />
                </h3>

                <p>
                  Contributed to digital marketing, website
                  and content activities and ongoing project
                  coordination.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section workflow-section">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>07 / MY PROCESS</Eyebrow>

                <h2>
                  How I <span>Work.</span>
                </h2>
              </div>

              <p>
                A clear path from understanding the
                challenge to making it better.
              </p>
            </div>

            <div className="workflow-grid">
              {[
                {
                  title: "Understand",
                  text: "Understand the business, audience and objective.",
                },
                {
                  title: "Strategize",
                  text: "Build the right digital and technical strategy.",
                },
                {
                  title: "Create",
                  text: "Build campaigns, websites and digital experiences.",
                },
                {
                  title: "Optimize",
                  text: "Measure, improve and refine performance.",
                },
              ].map(({ title, text }, i) => (
                <article
                  className="workflow-step reveal"
                  key={title}
                >
                  <span className="workflow-number">
                    0{i + 1}
                  </span>

                  <div className="workflow-line" />

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="stack-section"
          aria-label="Technology stack"
        >
          <div className="container stack-heading">
            <Eyebrow>
              08 / TECHNOLOGY STACK
            </Eyebrow>

            <span>TOOLS THAT POWER THE WORK</span>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div
                  className="marquee-set"
                  aria-hidden={copy === 1}
                  key={copy}
                >
                  {stack.map((item) => (
                    <span
                      className="marquee-item"
                      key={item}
                    >
                      <span className="stack-diamond" />
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section freelance-section">
          <div className="container freelance-layout reveal">
            <div>
              <Eyebrow>
                09 / INDEPENDENT WORK
              </Eyebrow>

              <h2>
                Freelance &
                <br />
                <span>
                  Independent Projects.
                </span>
              </h2>
            </div>

            <div>
              <p>
                I work on independent digital marketing and
                web projects involving social media
                management, paid advertising, SEO, website
                creation and updates, WordPress/WooCommerce,
                product listing support, poster and content
                creation, website optimization and front-end
                development.
              </p>

              <h3>
                Have a project that needs both marketing and
                technical thinking?
              </h3>

              <Button asChild size="lg">
                <a href="#contact">
                  Start a Conversation
                  <ArrowUpRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <Eyebrow>
                  10 / THE FOUNDATION
                </Eyebrow>

                <h2>
                  Education & <span>More.</span>
                </h2>
              </div>

              <p>
                The learning and experiences behind the
                work.
              </p>
            </div>

            <div className="education-layout">
              <div className="reveal">
                <div className="column-title">
                  <GraduationCap size={20} />
                  EDUCATION
                </div>

                {education.map((item) => (
                  <article
                    className="education-entry"
                    key={item.school}
                  >
                    <div className="education-meta">
                      <span>{item.period}</span>
                      <strong>{item.grade}</strong>
                    </div>

                    <h3>{item.school}</h3>

                    <p>{item.qualification}</p>
                  </article>
                ))}
              </div>

              <div className="reveal">
                <div className="column-title">
                  <Sparkles size={20} />
                  CERTIFICATIONS & ACTIVITIES
                </div>

                <ul className="activity-list">
                  {activities.map((item) => (
                    <li key={item}>
                      <Check size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
        >
          <div
            className="contact-gridlines"
            aria-hidden="true"
          />

          <div className="container contact-layout">
            <div className="reveal">
              <Eyebrow>
                11 / LET'S CONNECT
              </Eyebrow>

              <h2>
                Let's Build
                <br />
                <span>Something Digital.</span>
              </h2>

              <p>
                Have an idea, project or business challenge?
                Let’s turn it into a practical digital
                experience.
              </p>

              <div className="contact-actions">
                <Button asChild size="lg">
                  <a
                    href={`mailto:${email}?subject=Let's%20talk%20about%20a%20project`}
                  >
                    Let's Talk
                    <ArrowUpRight size={18} />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <a href={`mailto:${email}`}>
                    Send Email
                    <Mail size={17} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="contact-details reveal">
              <span className="details-label">
                DIRECT CONNECTION
              </span>

              <a href={`mailto:${email}`}>
                <Mail size={19} />

                <span>
                  <small>EMAIL</small>
                  {email}
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a href="tel:+918428548287">
                <Phone size={19} />

                <span>
                  <small>PHONE</small>
                  +91 84285 48287
                </span>

                <ArrowUpRight size={17} />
              </a>

              <div className="details-social">
                <span>FIND ME ONLINE</span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <a
                className="footer-brand"
                href="#home"
              >
                KEERTHANA <span>S.</span>
              </a>

              <p>
                Digital Marketing Specialist |
                Front-End Developer
              </p>

              <p>
                Building digital experiences that connect
                businesses with their audiences.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <SocialLinks />
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Keerthana S. All rights reserved.
            </span>

            <span>
              BUILT AT THE INTERSECTION OF DESIGN &
              TECHNOLOGY
            </span>
          </div>
        </div>
      </footer>

      {scrolled && (
        <Button
          size="icon"
          asChild
          className="back-top"
        >
          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </Button>
      )}
    </div>
  );
}
