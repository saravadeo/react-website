import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/main.scss";

// Simple working components first
const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__terminal">
        <div className="header__terminal-bar">
          <span className="header__terminal-btn header__terminal-btn--red"></span>
          <span className="header__terminal-btn header__terminal-btn--yellow"></span>
          <span className="header__terminal-btn header__terminal-btn--green"></span>
          <span className="header__terminal-title">portfolio — bash — 80×24</span>
        </div>
        <div className="header__terminal-body">
          <div className="header__line">
            <span className="header__prompt">$</span>
            <span className="header__command"> whoami</span>
          </div>
          <div className="header__line header__line--output">
            <h1 className="header__name">Onkar Sarvade</h1>
          </div>
          <div className="header__line">
            <span className="header__prompt">$</span>
            <span className="header__command"> cat role.txt</span>
          </div>
          <div className="header__line header__line--output">
            <p className="header__role">Software Engineer // Full Stack Developer</p>
          </div>
          <div className="header__line">
            <span className="header__prompt">$</span>
            <span className="header__cursor">█</span>
          </div>
        </div>
      </div>
      <div className="header__actions">
        <a href="#about" className="btn btn--primary">View Profile</a>
        <a href="#/blog" className="btn btn--secondary">Read Blog</a>
      </div>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="section section--about">
    <div className="container">
      <div className="section__header">
        <span className="section__number">01</span>
        <h2 className="section__title">About Me</h2>
      </div>
      <div className="about__content">
        <div className="about__text">
          <p>I'm a full-stack developer with 5+ years of experience building scalable web applications.</p>
          <p>Currently focused on building performant systems with React, Node.js, and AWS.</p>
        </div>
        <div className="about__stats">
          <div className="stat">
            <span className="stat__number">5+</span>
            <span className="stat__label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__label">Projects Shipped</span>
          </div>
          <div className="stat">
            <span className="stat__number">100%</span>
            <span className="stat__label">Remote Friendly</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section section--skills">
    <div className="container">
      <div className="section__header">
        <span className="section__number">02</span>
        <h2 className="section__title">Skills</h2>
      </div>
      <div className="skills__grid">
        <div className="skills__card">
          <h3 className="skills__category">Frontend</h3>
          <div className="skills__items">
            <span className="skills__item">React</span>
            <span className="skills__item">Vue.js</span>
            <span className="skills__item">TypeScript</span>
            <span className="skills__item">Next.js</span>
          </div>
        </div>
        <div className="skills__card">
          <h3 className="skills__category">Backend</h3>
          <div className="skills__items">
            <span className="skills__item">Node.js</span>
            <span className="skills__item">Express</span>
            <span className="skills__item">GraphQL</span>
            <span className="skills__item">REST APIs</span>
          </div>
        </div>
        <div className="skills__card">
          <h3 className="skills__category">Cloud</h3>
          <div className="skills__items">
            <span className="skills__item">AWS</span>
            <span className="skills__item">CloudFront</span>
            <span className="skills__item">Lambda</span>
            <span className="skills__item">S3</span>
          </div>
        </div>
        <div className="skills__card">
          <h3 className="skills__category">Tools</h3>
          <div className="skills__items">
            <span className="skills__item">Git</span>
            <span className="skills__item">Docker</span>
            <span className="skills__item">CI/CD</span>
            <span className="skills__item">Linux</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section section--experience">
    <div className="container">
      <div className="section__header">
        <span className="section__number">03</span>
        <h2 className="section__title">Experience</h2>
      </div>
      <div className="experience__list">
        <div className="experience__item">
          <div className="experience__header">
            <div className="experience__company">Rupshup</div>
            <div className="experience__period">2021 - Present</div>
          </div>
          <div className="experience__role">Sr. Software Engineer</div>
          <div className="experience__location">Mumbai, India</div>
          <div className="experience__highlights">
            <span className="experience__tag">Microservices Architecture</span>
            <span className="experience__tag">Performance Optimization</span>
            <span className="experience__tag">Team Leadership</span>
          </div>
        </div>
        <div className="experience__item">
          <div className="experience__header">
            <div className="experience__company">Kyepot</div>
            <div className="experience__period">2019 - 2021</div>
          </div>
          <div className="experience__role">Software Engineer</div>
          <div className="experience__location">Mumbai, India</div>
          <div className="experience__highlights">
            <span className="experience__tag">Full Stack Development</span>
            <span className="experience__tag">AWS Infrastructure</span>
          </div>
        </div>
        <div className="experience__item">
          <div className="experience__header">
            <div className="experience__company">TIBCO</div>
            <div className="experience__period">2017 - 2019</div>
          </div>
          <div className="experience__role">Associate Consultant</div>
          <div className="experience__location">Pune, India</div>
          <div className="experience__highlights">
            <span className="experience__tag">Integration Projects</span>
            <span className="experience__tag">Technical Consulting</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section section--contact">
    <div className="container">
      <div className="section__header">
        <span className="section__number">04</span>
        <h2 className="section__title">Get In Touch</h2>
      </div>
      <div className="contact__content">
        <p className="contact__text">I'm always open to discussing new projects and opportunities.</p>
        <div className="contact__links">
          <a href="mailto:onkar@saravadeo.com" className="contact__link">✉ onkar@saravadeo.com</a>
          <a href="https://github.com/saravadeo" target="_blank" rel="noopener noreferrer" className="contact__link">⚡ GitHub</a>
          <a href="https://linkedin.com/in/onkarsarvade" target="_blank" rel="noopener noreferrer" className="contact__link">💼 LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

// Blog placeholder
const BlogPage = () => (
  <div className="blog-page">
    <nav className="nav-bar">
      <a href="#/" className="nav-btn">← Back to Home</a>
      <span className="nav-title">Blog</span>
    </nav>
    <div style={{padding: '4rem 2rem', textAlign: 'center', color: '#94a3b8'}}>
      <h2>Blog Coming Soon</h2>
      <p>Check back later for technical articles and tutorials.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><About /><Skills /><Experience /><Contact /></>} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
