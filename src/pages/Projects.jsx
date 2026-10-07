import React from "react";
import { Helmet } from "react-helmet-async";
import { apps, openSource, links } from "../data/site";
import { ExternalLink } from "../components/Layout";
import { trackEvent } from "../analytics";

const AppIcon = ({ app }) =>
  app.icon ? (
    <img src={app.icon} alt="" className="app-icon" width="48" height="48" />
  ) : (
    <span className="app-icon app-icon--letter" style={{ background: app.color }} aria-hidden="true">
      {app.initial}
    </span>
  );

const isExternal = (href) => /^https?:\/\//.test(href);

// Compact row, used on the home page
export const AppRow = ({ app }) => (
  <li>
    <a
      href={app.website}
      className="app-row"
      {...(isExternal(app.website) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => trackEvent("Apps", "app_click", app.name)}
    >
      <AppIcon app={app} />
      <span className="app-row__text">
        <span className="app-row__name">
          {app.name}
          <span className={`status status--${app.status === "Live" ? "live" : "soon"}`}>
            {app.status}
          </span>
        </span>
        <span className="app-row__tagline">{app.tagline}</span>
      </span>
      <span className="app-row__arrow" aria-hidden="true">
        →
      </span>
    </a>
  </li>
);

const Projects = () => (
  <>
    <Helmet>
      <title>Projects — Onkar Sarvade</title>
      <meta
        name="description"
        content="Apps Onkar Sarvade has built solo, and his open source work on Datadog's Java tracer, Kafka and logging tools."
      />
      <meta property="og:title" content="Projects — Onkar Sarvade" />
      <link rel="canonical" href="https://www.onkarsarvade.com/projects" />
    </Helmet>

    <header className="page-head">
      <h1 className="page-head__title">Projects</h1>
      <p className="page-head__lede">
        Apps I&apos;ve designed, built and shipped on my own, plus open source work that came out of
        my day job.
      </p>
    </header>

    <section className="block">
      <h2 className="block__title">Apps</h2>
      <div className="app-cards">
        {apps.map((app) => (
          <article key={app.name} className="app-card">
            <div className="app-card__head">
              <AppIcon app={app} />
              <div>
                <h3 className="app-card__name">{app.name}</h3>
                <p className="app-card__meta">
                  {app.platforms} ·{" "}
                  <span className={`status status--${app.status === "Live" ? "live" : "soon"}`}>
                    {app.status}
                  </span>
                </p>
              </div>
            </div>
            <p className="app-card__tagline">{app.tagline}</p>
            <p className="app-card__text">{app.description}</p>
            <p className="tags">
              {app.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </p>
            <p className="app-card__links">
              <a
                href={app.website}
                {...(isExternal(app.website) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => trackEvent("Apps", "app_click", app.name)}
              >
                Website →
              </a>
              {app.playStore && (
                <a
                  href={app.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("Apps", "playstore_click", app.name)}
                >
                  Google Play →
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>

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
