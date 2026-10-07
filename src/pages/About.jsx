import React from "react";
import { Helmet } from "react-helmet-async";
import { elsewhere, experience, skills } from "../data/site";
import { ExternalLink } from "../components/Layout";

const About = () => (
  <>
    <Helmet>
      <title>About — Onkar Sarvade</title>
      <meta
        name="description"
        content="Onkar Sarvade is a software engineer with 11+ years in backend systems, observability and cloud infrastructure, currently at Dream11 in Mumbai."
      />
      <meta property="og:title" content="About — Onkar Sarvade" />
      <link rel="canonical" href="https://www.onkarsarvade.com/about" />
    </Helmet>

    <header className="page-head">
      <h1 className="page-head__title">About</h1>
    </header>

    <section className="block prose">
      <p>
        I&apos;m Onkar, a software engineer from Mumbai. I studied computer science at Walchand
        College of Engineering and have spent the last 11 years building backend systems: payments
        and ledgers at a fintech startup, commerce platforms, and now the observability platform at
        Dream11 that 500+ engineers use to see what their services are doing.
      </p>
      <p>
        Outside work I build small apps on my own, from idea to store listing. I like products that
        do one job well, respect privacy and don&apos;t need an account. I also write about the
        engineering problems I run into and the tools I build to automate my own work.
      </p>
      <p>
        I&apos;m always happy to chat about distributed systems, observability, indie apps or new
        opportunities. LinkedIn is the quickest way to reach me.
      </p>
    </section>

    <section className="block">
      <h2 className="block__title">Work</h2>
      <ol className="work-list">
        {experience.map((job) => (
          <li key={job.company} className="work-list__item">
            <span className="work-list__period">{job.period}</span>
            <div>
              <h3 className="work-list__role">
                {job.role}, <span className="work-list__company">{job.company}</span>
              </h3>
              <ul className="work-list__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section className="block">
      <h2 className="block__title">Tools I use</h2>
      <dl className="skill-list">
        {skills.map((s) => (
          <div key={s.group} className="skill-list__row">
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="block">
      <h2 className="block__title">Education</h2>
      <p className="block__text">
        B.Tech in Computer Science and Engineering, Walchand College of Engineering
        (2011 — 2015).
      </p>
    </section>

    <section className="block">
      <h2 className="block__title">Get in touch</h2>
      <ul className="contact-list">
        {elsewhere.map((item) => (
          <li key={item.label}>
            <ExternalLink href={item.href} platform={item.platform}>
              {item.label} ↗
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default About;
