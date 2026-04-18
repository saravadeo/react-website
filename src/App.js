import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import "./scss/main.scss";

const SECTION_SCROLL_KEY = "pendingSection";

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMobileMenuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onHome) {
      scrollToId(sectionId);
    } else {
      sessionStorage.setItem(SECTION_SCROLL_KEY, sectionId);
      navigate("/");
    }
  };

  const handleHomeClick = (e) => {
    setIsMobileMenuOpen(false);
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const sectionLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Open Source", id: "opensource" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`nav ${isScrolled ? "nav--scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="nav__container">
        <Link to="/" className="nav__logo" onClick={handleHomeClick}>
          <span className="nav__logo-bracket">[</span>
          <span className="nav__logo-text">OS</span>
          <span className="nav__logo-bracket">]</span>
        </Link>
        <button
          type="button"
          className="nav__mobile-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <ul
          id="primary-menu"
          className={`nav__menu ${isMobileMenuOpen ? "nav__menu--open" : ""}`}
        >
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleSectionClick(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className={
                location.pathname.startsWith("/blog") ? "nav__link--active" : ""
              }
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Typing Effect Hook
const useTypingEffect = (texts, typingSpeed = 80, pauseTime = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, pauseTime]);

  return { displayedText, isTyping: !isDeleting };
};

// Hero Section
const Hero = () => {
  const techStacks = [
    "Distributed Systems",
    "OpenTelemetry & Observability",
    "Apache Kafka & Event Streaming",
    "AWS Cloud Architecture",
    "AI-Powered Diagnostics",
    "ClickHouse & Analytics",
    "LangChain & LLM Orchestration",
    "Microservices at Scale",
  ];

  const { displayedText, isTyping } = useTypingEffect(techStacks, 60, 2500);

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__grid"></div>
        <div className="hero__gradient"></div>
      </div>
      <div className="hero__content">
        <div className="hero__terminal">
          <div className="hero__terminal-header">
            <span className="hero__terminal-btn hero__terminal-btn--red"></span>
            <span className="hero__terminal-btn hero__terminal-btn--yellow"></span>
            <span className="hero__terminal-btn hero__terminal-btn--green"></span>
            <span className="hero__terminal-title">onkar@portfolio:~</span>
          </div>
          <div className="hero__terminal-body">
            <div className="hero__line">
              <span className="hero__prompt">$</span>
              <span className="hero__command"> whoami</span>
            </div>
            <div className="hero__line hero__line--output">
              <h1 className="hero__name">Onkar Sarvade</h1>
            </div>
            <div className="hero__line">
              <span className="hero__prompt">$</span>
              <span className="hero__command"> cat role.txt</span>
            </div>
            <div className="hero__line hero__line--output">
              <p className="hero__title">Software Development Engineer III (SDE-3)</p>
              <p className="hero__subtitle">Distributed Systems | Scalable Cloud Architecture</p>
            </div>
            <div className="hero__line">
              <span className="hero__prompt">$</span>
              <span className="hero__command"> echo $EXPERTISE</span>
            </div>
            <div className="hero__line hero__line--output hero__line--typing">
              <span className="hero__typing">{displayedText}</span>
              <span className={`hero__cursor ${isTyping ? "hero__cursor--blink" : ""}`}>█</span>
            </div>
            <div className="hero__line hero__line--prompt">
              <span className="hero__prompt">$</span>
              <span className="hero__cursor hero__cursor--blink">█</span>
            </div>
          </div>
        </div>
        <div className="hero__summary">
          <p>Staff-level engineer and system architect with <strong>11+ years</strong> of experience designing and scaling distributed systems and internal platforms serving <strong>millions of users</strong> across fintech, e-commerce, and sports tech.</p>
        </div>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Get in Touch</a>
          <a href="#experience" className="btn btn--secondary">View Experience</a>
          <a href="https://github.com/saravadeo" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">GitHub →</a>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow">↓</div>
      </div>
    </section>
  );
};

// Stats Bar
const StatsBar = () => {
  const stats = [
    { value: "11+", label: "Years Experience" },
    { value: "600+", label: "Services Scaled" },
    { value: "16+", label: "Gbps Telemetry" },
    { value: "500+", label: "Engineers Supported" },
    { value: "100K+", label: "App Downloads" },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-bar__container">
        {stats.map((stat, index) => (
          <div key={index} className="stats-bar__item">
            <span className="stats-bar__value">{stat.value}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Key Impact Section
const KeyImpact = () => {
  const impacts = [
    {
      icon: "📊",
      title: "Observability Platform",
      description: "Scaled platform processing 16+ Gbps telemetry across 600+ services, supporting 500+ engineers with real-time insights",
      metrics: "16+ Gbps • 600+ services • 500+ engineers",
    },
    {
      icon: "🎯",
      title: "Telemetry Standards",
      description: "Established organization-wide standards for logs, metrics, and traces across all engineering teams",
      metrics: "Standardized • Automated • Monitored",
    },
    {
      icon: "⚙️",
      title: "DORA ERP Platform",
      description: "Architected and delivered ERP-scale internal platform automating CMS, sales, invoicing, and operations workflows",
      metrics: "CMS • Sales • Invoicing • Operations",
    },
    {
      icon: "🤖",
      title: "AI-Powered Diagnostics",
      description: "Introduced AI-assisted anomaly detection and automated root-cause analysis using LangChain and LangGraph",
      metrics: "LangChain • LangGraph • LLM Orchestration",
    },
  ];

  return (
    <section id="about" className="section section--impact">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Leadership</span>
          <h2 className="section__title">Key Impact & Technical Leadership</h2>
        </div>
        <div className="impact__grid">
          {impacts.map((impact, index) => (
            <div key={index} className="impact__card">
              <div className="impact__icon">{impact.icon}</div>
              <h3 className="impact__title">{impact.title}</h3>
              <p className="impact__description">{impact.description}</p>
              <span className="impact__metrics">{impact.metrics}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "📝",
      skills: ["Java", "Node.js", "TypeScript", "JavaScript", "React Native"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      skills: ["AWS EC2", "RDS", "SQS", "CloudFront", "Distributed Cloud Systems"],
    },
    {
      title: "Observability",
      icon: "🔍",
      skills: ["OpenTelemetry", "Distributed Tracing", "Monitoring", "Alerting", "Telemetry Systems", "Incident Management", "SigNoz", "ClickHouse"],
    },
    {
      title: "Messaging & Events",
      icon: "📨",
      skills: ["Apache Kafka", "Event-Driven Architecture", "High-Throughput Messaging", "Stream Processing"],
    },
    {
      title: "Data & Storage",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "ElasticSearch", "ClickHouse"],
    },
    {
      title: "Architecture",
      icon: "🏗️",
      skills: ["Distributed Systems", "Event-Driven Architecture", "Microservices", "Component-Driven UI", "System Design"],
    },
    {
      title: "AI & ML Systems",
      icon: "🧠",
      skills: ["LangChain", "LangGraph", "LLM Orchestration", "AI-Assisted Diagnostics", "Anomaly Detection"],
    },
    {
      title: "Open Source",
      icon: "🌟",
      skills: ["Vert.x", "Datadog", "Apache Kafka", "Spark", "LogWise"],
    },
  ];

  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Expertise</span>
          <h2 className="section__title">Technical Skills</h2>
        </div>
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__card">
              <div className="skills__header">
                <span className="skills__icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__items">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skills__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      role: "Software Development Engineer III (SDE-3)",
      company: "Sporta Technologies Private Limited (Dream11)",
      location: "Mumbai, India",
      period: "Sept 2020 - Present",
      type: "Full-time",
      achievements: [
        "Architected and scaled centralized observability platform processing 16+ Gbps telemetry across 600+ services used by 500+ engineers",
        "Designed and deployed cloud-native observability stack using OpenTelemetry, ClickHouse, and SigNoz",
        "Led initiatives to standardize telemetry instrumentation and monitoring practices organization-wide",
        "Built AI-assisted anomaly detection and automated root-cause diagnostics using LangChain and LangGraph",
        "Head of Engineering for DreamSetGo - owned end-to-end system architecture, designed scalable microservices",
        "Engineered DORA - full-scale Admin Panel/ERP system covering CMS, lead capture, package customization, sales workflow, invoicing, and operational dashboards",
      ],
      technologies: ["OpenTelemetry", "ClickHouse", "SigNoz", "LangChain", "LangGraph", "AWS", "Kafka", "Java", "Node.js"],
    },
    {
      role: "Software Engineer - Team Lead",
      company: "StyleCracker",
      location: "Mumbai, India",
      period: "Oct 2019 - Sept 2020",
      type: "Full-time",
      achievements: [
        "Led development from ground up across full-stack modules",
        "Spearheaded technology team in architecting scalable systems",
        "Implemented modern front-end architecture inspired by component-driven design",
      ],
      technologies: ["React", "Node.js", "AWS", "Microservices"],
    },
    {
      role: "Senior Software Engineer",
      company: "GupShup",
      location: "Mumbai, India",
      period: "Feb 2019 - Oct 2019",
      type: "Full-time",
      achievements: [
        "Developed robust Java-based backend systems",
        "Led successful blockchain POC using Hyperledger Fabric",
      ],
      technologies: ["Java", "Hyperledger Fabric", "Blockchain", "REST APIs"],
    },
    {
      role: "Senior Software Engineer",
      company: "Kyepot",
      location: "Mumbai, India",
      period: "Jul 2016 - Jan 2019",
      type: "Full-time",
      achievements: [
        "Built financial application end-to-end including ledger database, transaction flows, and concurrency controls",
        "Led first UPI end-to-end integration for the company",
        "Developed and published multiple React Native Android packages",
      ],
      technologies: ["React Native", "Java", "UPI", "FinTech", "Android"],
    },
    {
      role: "Associate Consultant",
      company: "TIBCO Software Limited",
      location: "Pune, India",
      period: "Jun 2015 - Jun 2016",
      type: "Full-time",
      achievements: [
        "Designed and implemented data management application for Nielsen using TIBCO BW",
        "Created dashboards and reporting pipelines for enterprise clients",
      ],
      technologies: ["TIBCO BW", "Data Management", "Dashboards", "Reporting"],
    },
  ];

  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Career</span>
          <h2 className="section__title">Work Experience</h2>
          <p className="section__subtitle">11+ years of building scalable systems and leading engineering teams</p>
        </div>
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__timeline-marker">
                <div className="experience__timeline-dot"></div>
                {index !== experiences.length - 1 && <div className="experience__timeline-line"></div>}
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <div className="experience__meta">
                    <span className="experience__company">{exp.company}</span>
                    <span className="experience__location">{exp.location}</span>
                  </div>
                  <div className="experience__period">
                    <span className="experience__date">{exp.period}</span>
                    <span className="experience__type">{exp.type}</span>
                  </div>
                </div>
                <h3 className="experience__role">{exp.role}</h3>
                <ul className="experience__achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="experience__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Open Source Section
const OpenSource = () => {
  const contributions = [
    {
      title: "Vert.x PostgreSQL Tracing",
      description: "Added support for automatic PostgreSQL query tracing in Vert.x 4, enabling Datadog APM integration for better observability",
      tags: ["Vert.x", "PostgreSQL", "Datadog", "APM"],
      link: "https://github.com/vert-x3/vertx-mysql-postgresql-client",
    },
    {
      title: "Datadog dd-trace-java (#8471)",
      description:
        "Vert.x PostgreSQL client instrumentation for Datadog APM — merged contribution in the Java tracer",
      tags: ["Datadog", "Vert.x", "PostgreSQL", "APM"],
      link: "https://github.com/DataDog/dd-trace-java/pull/8471",
    },
    {
      title: "Datadog dd-trace-java (#11149)",
      description:
        "Cross-platform UTF-8 handling: explicit charset for String.getBytes() to fix encoding on international deployments",
      tags: ["Datadog", "Java", "UTF-8"],
      link: "https://github.com/DataDog/dd-trace-java/pull/11149",
    },
    {
      title: "LogWise",
      description:
        "Open-source end-to-end logging: Vector → Kafka → Spark → S3/Athena, Grafana dashboards, and deployment automation",
      tags: ["Logging", "Kafka", "Spark", "Grafana"],
      link: "https://github.com/dream-horizon-org/logwise",
    },
    {
      title: "Spark Structured Streaming",
      description: "Implemented Spark Structured Streaming integration using bytecode instrumentation for enhanced monitoring capabilities",
      tags: ["Apache Spark", "Streaming", "Java"],
      link: "#",
    },
    {
      title: "Kafka Rack-Aware Assignment",
      description: "Added support for follower fetching with rack-aware assignment in Apache Kafka, improving data locality and performance",
      tags: ["Apache Kafka", "Distributed Systems"],
      link: "https://github.com/apache/kafka",
    },
    {
      title: "Prerender.io + CloudFront + S3",
      description:
        "AWS CloudFormation and manual setup for Prerender.io with CloudFront and S3 to improve SEO for JavaScript SPAs",
      tags: ["AWS", "CloudFront", "SEO", "Prerender.io"],
      link: "https://github.com/saravadeo/prerender-io-cloudfront-s3",
    },
    {
      title: "React Native Mobile App",
      description: "Contributed to RN app with 100k+ downloads and 4+ star rating, implementing key features and performance optimizations",
      tags: ["React Native", "Mobile", "Android"],
      link: "#",
    },
  ];

  return (
    <section id="opensource" className="section section--opensource">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Community</span>
          <h2 className="section__title">Open Source Contributions</h2>
        </div>
        <div className="opensource__grid">
          {contributions.map((contrib, index) => {
            const isExternal =
              contrib.link && /^https?:\/\//i.test(contrib.link);
            return (
              <a
                key={index}
                href={contrib.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="opensource__card"
                onClick={
                  contrib.link === "#" ? (e) => e.preventDefault() : undefined
                }
              >
                <div className="opensource__card-header">
                  <span className="opensource__icon" aria-hidden="true">
                    [&lt;&gt;]
                  </span>
                  <span className="opensource__arrow" aria-hidden="true">
                    {isExternal ? "↗" : "—"}
                  </span>
                </div>
                <h3 className="opensource__title">{contrib.title}</h3>
                <p className="opensource__description">{contrib.description}</p>
                <div className="opensource__tags">
                  {contrib.tags.map((tag, idx) => (
                    <span key={idx} className="opensource__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  return (
    <section id="education" className="section section--education">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Academic</span>
          <h2 className="section__title">Education</h2>
        </div>
        <div className="education__card">
          <div className="education__header">
            <div className="education__institution">
              <h3 className="education__name">Walchand College of Engineering</h3>
              <span className="education__type">Government-Aided Autonomous Institute</span>
            </div>
            <div className="education__period">Jun 2011 - May 2015</div>
          </div>
          <div className="education__details">
            <div className="education__degree">
              <span className="education__degree-title">Bachelor of Technology (BTech)</span>
              <span className="education__major">Computer Science and Engineering</span>
            </div>
            <div className="education__gpa">
              <span className="education__gpa-label">GPA</span>
              <span className="education__gpa-value">7.6/10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const contacts = [
    { icon: "📧", label: "Email", value: "saravadeo@yahoo.com", href: "mailto:saravadeo@yahoo.com" },
    { icon: "📱", label: "Phone", value: "+91 9960498810", href: "tel:+919960498810" },
    { icon: "📍", label: "Location", value: "Mumbai, India", href: "#contact" },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/onkar-sarvade-4b36ab63",
      href: "https://www.linkedin.com/in/onkar-sarvade-4b36ab63/",
    },
    { icon: "⚡", label: "GitHub", value: "github.com/saravadeo", href: "https://github.com/saravadeo" },
    {
      icon: "🌐",
      label: "Stack Overflow",
      value: "stackoverflow.com/users/4539951/onkar-saravade",
      href: "https://stackoverflow.com/users/4539951/onkar-saravade",
    },
  ];

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Connect</span>
          <h2 className="section__title">Get In Touch</h2>
        </div>
        <div className="contact__content">
          <p className="contact__text">
            I&apos;m always interested in discussing distributed systems, observability, cloud architecture,
            and new opportunities. Let&apos;s connect and build something amazing together.
          </p>
          <div className="contact__grid">
            {contacts.map((contact, index) => {
              const openInNewTab = /^https?:\/\//.test(contact.href);
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="contact__card"
                  {...(openInNewTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="contact__icon">{contact.icon}</span>
                  <div className="contact__info">
                    <span className="contact__label">{contact.label}</span>
                    <span className="contact__value">{contact.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">[OS]</span>
            <p className="footer__tagline">Distributed Systems • Scalable Architecture</p>
          </div>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <Link to="/blog">Blog</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Onkar Sarvade. All rights reserved.</p>
          <p className="footer__tech">Built with React • Styled with SCSS</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  useEffect(() => {
    const pending = sessionStorage.getItem(SECTION_SCROLL_KEY);
    if (pending) {
      sessionStorage.removeItem(SECTION_SCROLL_KEY);
      const t = window.setTimeout(() => scrollToId(pending), 80);
      return () => window.clearTimeout(t);
    }
  }, []);

  return (
    <>
      <Hero />
      <StatsBar />
      <KeyImpact />
      <Skills />
      <Experience />
      <OpenSource />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

const AppShell = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </div>
);

const App = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
