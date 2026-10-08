import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { openSource, links } from "../data/site";
import { ExternalLink } from "../components/Layout";

const Projects = () => (
  <>
    <Helmet>
      <title>Projects — Onkar Sarvade</title>
      <meta
        name="description"
        content="Onkar Sarvade's open source work on Datadog's Java tracer, Kafka and logging tools."
      />
      <meta property="og:title" content="Projects — Onkar Sarvade" />
      <link rel="canonical" href="https://www.onkarsarvade.com/projects" />
    </Helmet>

    <header className="page-head">
      <h1 className="page-head__title">Projects</h1>
      <p className="page-head__lede">
        Open source work that came out of my day job. The apps I build on my own live on{" "}
        <Link to="/shiponfriday">Ship on Friday</Link>.
      </p>
    </header>

    <section className="block">
      <h2 className="block__title">Open source</h2>
      <ul className="oss-list">
        {openSource.map((item) => (
          <li key={item.title} className="oss-list__item">
            <div className="oss-list__head">
              {item.link ? (
                <ExternalLink href={item.link} className="oss-list__title">
                  {item.title} ↗
                </ExternalLink>
              ) : (
                <span className="oss-list__title">{item.title}</span>
              )}
              <span className="oss-list__meta">
                {item.org} · {item.status}
              </span>
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
