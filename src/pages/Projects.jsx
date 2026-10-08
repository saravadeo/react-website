import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ossStats, openSource, moreOpenSource, links } from "../data/site";
import { ExternalLink } from "../components/Layout";

const Projects = () => (
  <>
    <Helmet>
      <title>Open source — Onkar Sarvade</title>
      <meta
        name="description"
        content="Onkar Sarvade's open source work: merged contributions to Datadog's Java tracer, maintaining LogWise, and building the Asgard AI agent for the Odin deployment platform."
      />
      <meta property="og:title" content="Open source — Onkar Sarvade" />
      <link rel="canonical" href="https://www.onkarsarvade.com/projects" />
    </Helmet>

    <header className="page-head">
      <h1 className="page-head__title">Open source</h1>
      <p className="page-head__lede">
        Most of my day job is observability and platform work, and a good part of it ships in the
        open: upstream fixes to Datadog&apos;s tracer, a logging stack I maintain, and an AI agent
        for a deployment platform. The apps I build on my own live on{" "}
        <Link to="/shiponfriday">Ship on Friday</Link>.
      </p>
    </header>

    <ul className="oss-stats">
      {ossStats.map((stat) => (
        <li key={stat.label} className="oss-stats__item">
          <span className="oss-stats__value">{stat.value}</span>
          <span className="oss-stats__label">{stat.label}</span>
        </li>
      ))}
    </ul>

    <section className="block">
      <h2 className="block__title">Highlights</h2>
      <div className="app-cards">
        {openSource.map((item) => (
          <article key={item.title} className="app-card oss-card">
            <div className="oss-card__head">
              <h3 className="app-card__name">
                <ExternalLink href={item.link} platform={`oss_${item.title.toLowerCase()}`}>
                  {item.title} ↗
                </ExternalLink>
              </h3>
              <span className="oss-card__role">{item.role}</span>
            </div>
            <p className="app-card__meta">{item.org}</p>
            <p className="app-card__text">{item.description}</p>
            <ul className="oss-card__highlights">
              {item.highlights.map((h) => (
                <li key={h.text}>
                  {h.text}
                  {h.link && (
                    <>
                      {" "}
                      <ExternalLink href={h.link} className="oss-card__pr">
                        {h.label}
                      </ExternalLink>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p className="tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="block">
      <h2 className="block__title">Also</h2>
      <ul className="oss-list">
        {moreOpenSource.map((item) => (
          <li key={item.title} className="oss-list__item">
            <div className="oss-list__head">
              {item.link ? (
                <ExternalLink href={item.link} className="oss-list__title">
                  {item.title} ↗
                </ExternalLink>
              ) : (
                <span className="oss-list__title">{item.title}</span>
              )}
              <span className="oss-list__meta">{item.org}</span>
            </div>
            <p className="oss-list__text">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="block__text">
        More on{" "}
        <ExternalLink href={links.github} platform="github_profile">
          GitHub
        </ExternalLink>
        .
      </p>
    </section>
  </>
);

export default Projects;
