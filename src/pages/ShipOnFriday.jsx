import React from "react";
import { Helmet } from "react-helmet-async";
import { apps, links } from "../data/site";
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

const ShipOnFriday = () => (
  <>
    <Helmet>
      <title>Ship on Friday — apps by Onkar Sarvade</title>
      <meta
        name="description"
        content="Ship on Friday: the apps and software tools Onkar Sarvade builds solo with AI. YCal, ChallengeCam and Inboxwise."
      />
      <meta property="og:title" content="Ship on Friday — apps by Onkar Sarvade" />
      <meta
        property="og:description"
        content="I break the oldest rule in software: I ship on Fridays. The apps and tools I build with AI."
      />
      <meta property="og:url" content="https://www.onkarsarvade.com/shiponfriday" />
      <link rel="canonical" href="https://www.onkarsarvade.com/shiponfriday" />
    </Helmet>

    <header className="sof-hero">
      <img src="/shiponfriday/avatar.png" alt="" className="sof-hero__logo" width="88" height="88" />
      <div>
        <p className="sof-hero__handle">@shiponfriday</p>
        <h1 className="sof-hero__title">
          Ship on <span>Friday</span>
        </h1>
        <p className="sof-hero__lede">
          I break the oldest rule in software: I ship on Fridays. These are the apps and tools I
          build on my own with AI, from idea to store listing.
        </p>
        <p className="sof-hero__links">
          <ExternalLink href={links.instagram} platform="shiponfriday_instagram">
            Instagram ↗
          </ExternalLink>
          <ExternalLink href={links.youtube} platform="shiponfriday_youtube">
            YouTube ↗
          </ExternalLink>
        </p>
      </div>
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
  </>
);

export default ShipOnFriday;
