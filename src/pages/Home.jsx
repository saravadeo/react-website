import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogData from "../data/blogList.json";
import { apps } from "../data/site";

// Personal writing first; the daily AI news roundups live on the blog page
const recentWriting = blogData.posts
  .filter((post) => post.category !== "AI News")
  .slice(0, 5);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Onkar Sarvade",
  url: "https://www.onkarsarvade.com/",
  mainEntity: {
    "@type": "Person",
    name: "Onkar Sarvade",
    jobTitle: "Staff Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
};

const Home = () => (
  <>
    <Helmet>
      <title>Onkar Sarvade — software engineer and indie app maker</title>
      <meta
        name="description"
        content="Onkar Sarvade is a software engineer in Mumbai who builds backend and observability systems at Dream11 and makes small, useful apps on the side."
      />
      <meta property="og:title" content="Onkar Sarvade — software engineer and indie app maker" />
      <meta
        property="og:description"
        content="Backend and observability engineer by day, indie app maker by night. Apps, open source and writing."
      />
      <meta property="og:url" content="https://www.onkarsarvade.com/" />
      <meta name="twitter:title" content="Onkar Sarvade — software engineer and indie app maker" />
      <link rel="canonical" href="https://www.onkarsarvade.com/" />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>

    <section className="intro">
      <h1 className="intro__title">Hi, I&apos;m Onkar.</h1>
      <p className="intro__lede">
        I&apos;m a software engineer in Mumbai. By day I build backend and observability systems at
        Dream11. In the evenings and on weekends I make small, useful apps, and write about what I
        learn along the way.
      </p>
      <div className="intro__actions">
        <Link to="/shiponfriday" className="button button--primary">
          See what I&apos;m building
        </Link>
        <Link to="/blog" className="button">
          Read the blog
        </Link>
      </div>
    </section>

    <section className="block">
      <h2 className="block__title">Building now</h2>
      <Link to="/shiponfriday" className="sof-teaser">
        <img src="/shiponfriday/avatar.png" alt="" className="sof-teaser__logo" width="56" height="56" />
        <span className="sof-teaser__text">
          <span className="sof-teaser__name">
            Ship on <span>Friday</span>
          </span>
          <span className="sof-teaser__tagline">
            {apps.length} apps I build solo with AI: {apps.map((app) => app.name).join(", ")}
          </span>
        </span>
        <span className="sof-teaser__icons" aria-hidden="true">
          {apps.map((app) => (
            <img key={app.name} src={app.icon} alt="" width="28" height="28" />
          ))}
        </span>
        <span className="app-row__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </section>

    <section className="block">
      <div className="block__head">
        <h2 className="block__title">Recent writing</h2>
        <Link to="/blog" className="block__more">
          All posts →
        </Link>
      </div>
      <ul className="post-list">
        {recentWriting.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="post-list__item">
              <span className="post-list__title">{post.title}</span>
              <time className="post-list__date" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section className="block">
      <h2 className="block__title">By day</h2>
      <p className="block__text">
        11+ years building backends for fintech, e-commerce and sports tech. At Dream11 I run the
        observability platform that handles 16+ Gbps of telemetry from 600+ services, and I
        contribute to open source tools like Datadog&apos;s Java tracer.{" "}
        <Link to="/about">More about me →</Link>
      </p>
    </section>
  </>
);

export default Home;
