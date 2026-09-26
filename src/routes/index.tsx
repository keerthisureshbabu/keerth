import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Braces, BriefcaseBusiness, Check, ChevronRight, CircleDot, Code2, Compass, Crosshair, ExternalLink, Globe2, GraduationCap, Layout, Mail, MapPin, Menu, Megaphone, Monitor, MousePointer2, PenTool, Phone, Search, ShieldCheck, Sparkles, Target, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/keerthana-portrait.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keerthana S — Digital Marketing Specialist & Front-End Developer" },
      { name: "description", content: "Explore the digital marketing, front-end development, campaigns, websites and selected projects of Keerthana S." },
      { property: "og:title", content: "Keerthana S — Digital Marketing Specialist & Front-End Developer" },
      { property: "og:description", content: "Digital marketing and front-end development working together to create meaningful digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const email = "keerthanasureshbabu286@gmail.com";
const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/search/results/people/?keywords=Keerthana%20S", short: "in", title: "Search for Keerthana on LinkedIn" },
  { label: "GitHub", href: "https://github.com/search?q=Keerthana+S&type=users", short: "gh", title: "Search for Keerthana on GitHub" },
  { label: "Email", href: `mailto:${email}`, short: "@", title: "Email Keerthana" },
];
const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const services = [
  { icon: Megaphone, title: "Digital Marketing", text: "Building targeted digital campaigns and strategies to improve visibility, engagement and business growth.", number: "01" },
  { icon: Target, title: "Paid Advertising", text: "Planning and managing performance campaigns across Meta, Google, LinkedIn and other advertising platforms.", number: "02" },
  { icon: Search, title: "SEO / AEO / GEO", text: "Improving online visibility across search engines, answer engines and emerging AI-driven discovery.", number: "03" },
  { icon: PenTool, title: "Social Media & Content", text: "Creating content strategies, social media assets and campaigns aligned with business goals.", number: "04" },
  { icon: Code2, title: "Website Development", text: "Creating responsive, modern websites with strong UI, performance and user experience.", number: "05" },
  { icon: BarChart3, title: "Analytics & Tracking", text: "Setting up analytics, GTM, Search Console, Meta Pixel and conversion tracking to understand performance.", number: "06" },
];
const skillGroups = [
  { icon: TrendingUp, title: "Digital Marketing", items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Reddit Ads", "SEO", "AEO", "GEO", "Social Media Marketing", "Content Strategy", "Google Merchant Center"] },
  { icon: Crosshair, title: "Analytics & Tracking", items: ["Google Analytics", "Google Tag Manager", "Search Console", "Meta Pixel", "Conversion Tracking"] },
  { icon: Braces, title: "Web Development", items: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "PHP", "Laravel", "MySQL", "WordPress", "WooCommerce"] },
  { icon: PenTool, title: "Design & Creative", items: ["Figma", "Photoshop", "CapCut", "DaVinci Resolve", "Poster Design", "Creative Content"] },
];
const projects = [
  { name: "Edventures Technology", category: "Technology / Website", description: "A responsive technology and education-focused company website and digital presence.", url: "https://edventurestechnology.com/", icon: Monitor, accent: "lime" },
  { name: "JeevaRaksha", category: "Healthcare / Organization Website", description: "A responsive website for an emergency-care training and community-focused organization.", url: "https://jeevaraksha.org/", icon: ShieldCheck, accent: "peach" },
  { name: "Navgraam", category: "Business Website", description: "A business website with structured content and modern web presentation.", url: "https://navgraam.in/", icon: Layout, accent: "sky" },
  { name: "TryMyWebsites", category: "Web Development", description: "A company platform presenting web, e-commerce and digital services.", url: "https://trymywebsites.com/", icon: Code2, accent: "lavender" },
  { name: "Smaart Eye Technologies", category: "Security Technology", description: "A responsive website for CCTV and security technology solutions.", url: "https://smaarteyetechnologies.com/", icon: CircleDot, accent: "mint" },
  { name: "SmartGPT", category: "Digital Marketing & Technology", description: "An Australia-focused site covering digital marketing, AI search, RFID and cloud services.", url: "https://smartgpt.com.au/", icon: Sparkles, accent: "sky" },
  { name: "GoldArk", category: "Gold Scheme Management Platform", description: "A digital gold and silver scheme platform with customer app and jeweller dashboard.", url: "https://goldark.meark.org/", icon: Compass, accent: "peach" },
  { name: "Meark HR Services", category: "HR / Recruitment", description: "A recruitment services website with responsive sections and lead-focused experience.", url: "https://hr.meark.org/", icon: BriefcaseBusiness, accent: "lavender" },
  { name: "TeamBee Studio", category: "React + Vite", description: "A responsive single-page studio website built with React and Vite.", url: "https://mearkwebdev.github.io/teambeestudio/", icon: Braces, accent: "mint" },
  { name: "GrmElitewear", category: "E-commerce / Web Development", description: "An ongoing website project involving PHP, MySQL, responsive UI and image design.", url: null, icon: MousePointer2, accent: "lime" },
];
const tools = ["Meta Ads", "Google Ads", "Google Analytics", "Google Tag Manager", "Search Console", "Figma", "Photoshop", "CapCut", "DaVinci Resolve", "WordPress", "WooCommerce", "React", "Vite", "PHP", "Laravel", "MySQL", "GitHub", "Vercel", "Hostinger", "Azure Blob Storage", "Lovable"];
const education = [
  { school: "RVS College of Arts and Science", degree: "B.Com (IT)", years: "2021 – 2024", grade: "82%" },
  { school: "Jaivabai Girls Higher Secondary School", degree: "HSC – Arts with Business Maths", years: "2019 – 2021", grade: "85%" },
  { school: "St. Thomas Girls Higher Secondary School", degree: "SSLC", years: "2018 – 2019", grade: "88%" },
];
const activities = [
  "PHP Full Stack Development Course – Altalya Solution Pvt. Ltd.",
  "BPM (Business Process Management) Training – RVS Training Academy.",
  'Team secured first prize in “Connection & Quiz” conducted by the MCA department.',
  "Participated in Resume Competition conducted by RVS College.",
  "Participated in Naukri Campus Young Turks conducted by Naukri.",
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label-light" : ""}`}><span className="label-dash" />{children}</div>;
}
function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`social-links ${compact ? "social-compact" : ""}`}>{social.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={item.title} title={item.title} className="social-link"><span className="social-mark">{item.short}</span><span>{item.label}</span><ArrowUpRight size={13} /></a>)}</div>;
}
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = nav.map((item) => document.querySelector(item.href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); revealObserver.disconnect(); };
  }, []);
  return <div className="portfolio">
    <header className={`site-header ${scrolled ? "header-compact" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Keerthana S, back to top"><span className="brand-symbol">K<span>.</span></span><span className="brand-name">KEERTHANA S<span className="brand-small">MARKETING & DEVELOPMENT</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map((item) => <a href={item.href} key={item.href} className={active === item.href ? "active" : ""}>{item.label}</a>)}</nav>
        <Button asChild className="nav-contact"><a href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={16} /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <a key={item.href} href={item.href} className={active === item.href ? "active" : ""} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={17} /></a>)}</nav>}
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title"><div className="container hero-grid">
        <div className="hero-content"><div className="availability"><span className="availability-dot" /> Open to Digital Projects</div><p className="hero-eyebrow">DIGITAL MARKETING SPECIALIST <span>/</span> FRONT-END DEVELOPER</p><h1 id="hero-title">KEERTHANA <em>S</em><span className="hero-period">.</span></h1><p className="hero-headline">Building Digital Experiences That Help Businesses <span>Grow.</span></p><p className="hero-description">I combine digital marketing, web development, analytics and creative strategy to build practical digital experiences that connect businesses with the right audience.</p><div className="hero-actions"><Button asChild size="lg"><a href="#projects">View My Work <ArrowDownRight size={18} /></a></Button><Button asChild variant="outline" size="lg"><a href="#contact">Let’s Work Together <ArrowUpRight size={18} /></a></Button></div><SocialLinks /></div>
        <div className="hero-visual"><div className="portrait-panel"><div className="portrait-pattern" /><img src={portrait.url} alt="Portrait of Keerthana S" className="portrait-image" fetchPriority="high" /><div className="portrait-bottom"><span><span className="mini-dot" /> Strategy meets execution</span><span>01 / KS</span></div></div><div className="floating-note"><span className="floating-note-icon"><Sparkles size={17} /></span><span>Marketing mind.<br /><strong>Developer hands.</strong></span></div><div className="portrait-side-label">THE PERSON BEHIND THE PIXELS · 2026</div></div>
      </div><div className="hero-bottom container"><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span><span>MARKETING × TECHNOLOGY × CREATIVITY</span></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div className="reveal"><SectionLabel>01 / THE PERSON</SectionLabel><h2 className="section-heading">About <em>Me.</em></h2><p className="about-lead">I connect the dots between <span>strategy, creativity and code.</span></p></div><div className="about-copy reveal"><p>I’m Keerthana S, a Digital Marketing Specialist and Front-End Developer focused on building strong digital experiences that connect businesses with their audiences.</p><p>With experience across digital marketing, paid advertising, SEO, social media, website development, analytics, e-commerce and creative content, I work across both the marketing and technical sides of a digital project.</p><p>I have worked on projects for businesses in India and international clients, supporting everything from campaign planning and audience targeting to website development, content optimization, tracking and online growth.</p><p>My background in front-end development helps me approach marketing from a technical perspective — understanding not only how to attract visitors, but also how websites, landing pages, tracking and user experience contribute to conversions.</p><p>I enjoy turning ideas into practical digital solutions — whether it’s a campaign, website, landing page or complete online presence.</p></div></div><div className="container expertise-strip reveal">{["Digital Marketing", "Web Development", "International Client Experience", "Multi-Project Experience"].map((x, i) => <div key={x} className="expertise-item"><span className="expertise-index">0{i + 1}</span><span>{x}</span><ArrowUpRight size={18} /></div>)}</div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>02 / HOW I CAN HELP</SectionLabel><h2 className="section-heading">What I <em>Do.</em></h2></div><p>From first impression to lasting impact — digital work that connects the whole picture.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, number }) => <article className="service-card reveal" key={title}><div className="service-card-top"><span className="service-icon"><Icon size={24} strokeWidth={1.7} /></span><span className="service-number">/{number}</span></div><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={19} /></article>)}</div></div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-top reveal"><div><SectionLabel light>03 / THE TOOLKIT</SectionLabel><h2 className="section-heading">Skills & <em>Expertise.</em></h2></div><p>Two disciplines, one connected approach to building better digital experiences.</p></div><div className="skills-grid">{skillGroups.map(({ icon: Icon, title, items }, index) => <article className="skill-group reveal" key={title}><div className="skill-group-heading"><span><Icon size={21} strokeWidth={1.6} /></span><span>0{index + 1} / {title}</span></div><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section id="projects" className="section projects-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>04 / SELECTED WORK</SectionLabel><h2 className="section-heading">Web Projects<span className="heading-dot">.</span></h2></div><p>A selection of websites and digital platforms across industries, built with purpose.</p></div><div className="projects-grid">{projects.map(({ name, category, description, url, icon: Icon, accent }, index) => <article className="project-card reveal" key={name}><div className={`project-art art-${accent}`} aria-hidden="true"><div className="art-topline"><span>KS / PROJECT {String(index + 1).padStart(2, "0")}</span><span>↗</span></div><div className="art-window"><div className="art-browser"><span /><span /><span /></div><div className="art-content"><div className="art-title"><Icon size={27} strokeWidth={1.5} /><span>{name}</span></div><div className="art-lines"><span /><span /><span /></div><div className="art-pill" /></div></div><div className="art-bottomline">{category.toUpperCase()}</div></div><div className="project-info"><p className="project-category">{category}</p><h3>{name}</h3><p className="project-description">{description}</p><div className="project-link-wrap">{url ? <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">Visit Website <ExternalLink size={15} /></a> : <span className="project-ongoing"><span className="availability-dot" /> Ongoing Project</span>}<span className="project-index">{String(index + 1).padStart(2, "0")}</span></div></div></article>)}</div></div></section>

      <section id="experience" className="section experience-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>05 / THE JOURNEY</SectionLabel><h2 className="section-heading">Experience<span className="heading-dot">.</span></h2></div><p>Hands-on work across marketing, websites and the space where they meet.</p></div><div className="experience-layout"><div className="experience-heading reveal"><span className="experience-icon"><TrendingUp size={23} /></span><h3>Digital Marketing<br />Experience</h3><p>Campaigns, content, visibility and measurable digital foundations.</p></div><div className="experience-list"><article className="experience-entry reveal"><div className="experience-meta"><span className="experience-time">CURRENT</span><span className="experience-company">Meark Enterprise Pvt. Ltd.</span></div><div><h4>Digital Marketing Specialist</h4><ul><li>Plan and execute digital marketing campaigns across Meta, Google, LinkedIn and other paid channels.</li><li>Manage social media content, creative requirements, campaign copy, audience targeting and performance optimization.</li><li>Work on SEO, AEO/GEO, Google Analytics, Google Tag Manager, Search Console and conversion tracking.</li><li>Create and manage websites, landing pages and e-commerce content.</li><li>Support product listings, website updates, image management and digital growth activities.</li></ul></div></article><article className="experience-entry reveal"><div className="experience-meta"><span className="experience-time">MAR 2024 – PRESENT</span><span className="experience-company">GP Clothing</span></div><div><h4>Digital Marketing</h4><ul><li>Planned and executed targeted digital marketing campaigns to support online presence and sales.</li><li>Analyzed customer behavior and website traffic using analytics tools.</li><li>Worked on SEO improvements and online visibility.</li><li>Engaged with online communities and social platforms to build brand visibility and trust.</li></ul></div></article></div></div><div className="dev-experience reveal"><div className="dev-left"><span className="experience-icon"><Code2 size={24} /></span><div><span className="eyebrow-small">WEB DEVELOPMENT EXPERIENCE</span><h3>TRYMYWEBSITES</h3><p>Junior PHP Developer</p></div></div><div className="dev-right"><p>Developed and maintained web applications using PHP, Laravel and MySQL; built front-end features with HTML, CSS and JavaScript; supported database integration, debugging and performance optimization.</p><div className="dev-tags">{["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"].map(x => <span key={x}>{x}</span>)}</div></div></div></div></section>

      <section className="section global-section"><div className="container global-grid"><div className="reveal"><SectionLabel light>06 / BEYOND BORDERS</SectionLabel><h2 className="section-heading">International<br /><em>Client Experience.</em></h2><p className="global-intro">Working across borders, audiences and digital touchpoints.</p><div className="global-orbit" aria-hidden="true"><Globe2 size={115} strokeWidth={0.65} /><span className="orbit-point orbit-one" /><span className="orbit-point orbit-two" /></div></div><div className="global-clients reveal"><article><span className="client-number">01 / INTERNATIONAL CLIENT PROJECT</span><div><h3>Brahmarsive</h3><ArrowUpRight size={22} /></div><p>Supported digital marketing, content and creative activities, campaign-related work and online presence.</p></article><article><span className="client-number">02 / AUSTRALIAN CLIENT PROJECT</span><div><h3>UWA</h3><ArrowUpRight size={22} /></div><p>Contributed to digital marketing, website and content activities and ongoing project coordination.</p></article></div></div></section>

      <section className="section approach-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>07 / THE PROCESS</SectionLabel><h2 className="section-heading">My <em>Approach.</em></h2></div><p>Thoughtful from first conversation to continuous improvement.</p></div><div className="approach-grid">{[{ title: "Understand", text: "Understand the business, audience and objectives.", icon: Search }, { title: "Plan", text: "Build the right marketing, content or technical strategy.", icon: Compass }, { title: "Create", text: "Develop campaigns, websites and digital experiences.", icon: PenTool }, { title: "Optimize", text: "Track performance, identify improvements and continuously optimize.", icon: TrendingUp }].map(({ title, text, icon: Icon }, i) => <article className="approach-step reveal" key={title}><span className="step-number">0{i + 1}</span><span className="step-icon"><Icon size={24} strokeWidth={1.5} /></span><h3>{title}</h3><p>{text}</p><span className="step-connector"><ChevronRight size={16} /></span></article>)}</div></div></section>

      <section className="section tools-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>08 / EVERYDAY ESSENTIALS</SectionLabel><h2 className="section-heading">Tools of the <em>Trade.</em></h2></div><p>Platforms and technologies I use to bring digital projects to life.</p></div><div className="tool-grid reveal">{tools.map((tool, i) => <div className="tool-item" key={tool}><span className={`tool-initial tool-color-${i % 5}`}>{tool.split(" ").map(w => w[0]).slice(0, 2).join("")}</span><span>{tool}</span></div>)}</div></div></section>

      <section className="section education-section"><div className="container"><div className="section-top reveal"><div><SectionLabel>09 / FOUNDATIONS</SectionLabel><h2 className="section-heading">Education & <em>More.</em></h2></div><p>The learning and experiences that shaped the work.</p></div><div className="education-grid"><div className="reveal"><div className="subsection-title"><GraduationCap size={21} /> Education</div>{education.map(item => <article className="education-item" key={item.school}><div><span>{item.years}</span><strong>{item.grade}</strong></div><h3>{item.school}</h3><p>{item.degree}</p></article>)}</div><div className="reveal"><div className="subsection-title"><Sparkles size={21} /> Certifications & Activities</div><ul className="activities-list">{activities.map(item => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul></div></div></div></section>

      <section className="freelance-section"><div className="container freelance-grid reveal"><div><SectionLabel light>10 / INDEPENDENT WORK</SectionLabel><h2>Freelance Digital<br />Marketing & <em>Web Projects.</em></h2></div><div><p>I work on independent digital marketing and web projects involving social media management, paid advertising, SEO, website creation and updates, WordPress/WooCommerce, product listing support, poster and content creation, website optimization and front-end development.</p><Button asChild variant="outline"><a href="#contact">Discuss a Project <ArrowUpRight size={17} /></a></Button></div></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="reveal"><SectionLabel>11 / LET’S CONNECT</SectionLabel><h2 className="contact-heading">Have a Project<br /><em>in Mind?</em></h2><p>Whether you need a marketing campaign, a high-converting website, SEO support or a complete digital presence, let’s turn your idea into something useful and measurable.</p><div className="contact-actions"><Button asChild size="lg"><a href={`mailto:${email}?subject=Let's%20talk%20about%20a%20project`}>Let’s Talk <ArrowUpRight size={18} /></a></Button><Button asChild variant="outline" size="lg"><a href={`mailto:${email}`}>Email Me <Mail size={17} /></a></Button></div></div><div className="contact-details reveal"><span className="contact-details-label">DIRECT LINE</span><a href={`mailto:${email}`}><span className="contact-detail-icon"><Mail size={20} /></span><span><small>EMAIL</small>{email}</span><ArrowUpRight size={20} /></a><a href="tel:+918428548287"><span className="contact-detail-icon"><Phone size={20} /></span><span><small>PHONE</small>+91 84285 48287</span><ArrowUpRight size={20} /></a><div className="contact-social"><span>FIND ME ONLINE</span><SocialLinks compact /></div></div></div></section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="footer-brand" href="#top">KEERTHANA S<span>.</span></a><p>Digital Marketing Specialist | Front-End Developer</p><p>Building digital experiences that connect businesses with their audiences.</p></div><nav aria-label="Footer navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-social"><SocialLinks compact /></div></div><div className="footer-bottom"><span>© 2026 Keerthana S. All rights reserved.</span><a href="#top">BACK TO TOP <ArrowUp size={14} /></a></div></div></footer>
    {scrolled && <Button size="icon" className="back-to-top" asChild><a href="#top" aria-label="Back to top" title="Back to top"><ArrowUp size={20} /></a></Button>}
  </div>;
}
