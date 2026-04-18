import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blogList.json';
import './Blog.css';

const BlogList = () => {
  const { posts } = blogData;

  return (
    <div className="blog-page blog-page--list">
      <div className="blog-page__bg" aria-hidden="true">
        <div className="blog-page__grid" />
        <div className="blog-page__glow" />
      </div>

      <div className="blog-container blog-container--list">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="blog-breadcrumb__link">
            ← Portfolio
          </Link>
          <span className="blog-breadcrumb__sep">/</span>
          <span className="blog-breadcrumb__current">Blog</span>
        </nav>

        <header className="blog-list-hero">
          <span className="blog-list-eyebrow">Writing</span>
          <h1 className="blog-list-title">Blog</h1>
          <p className="blog-list-lede">
            Technical notes on production systems — observability, cloud, and
            shipping reliable software.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="blog-list-empty">
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <ul className="blog-list-grid">
            {posts.map((post) => (
              <li key={post.id} className="blog-list-grid__cell">
                <article className="blog-list-card">
                  <div className="blog-list-card__accent" aria-hidden="true" />
                  <div className="blog-list-card__meta">
                    <time dateTime={post.date} className="blog-list-card__date">
                      {post.date}
                    </time>
                    <span className="blog-list-card__dot">·</span>
                    <span className="blog-list-card__read">{post.readTime} read</span>
                  </div>
                  <h2 className="blog-list-card__title">
                    <Link to={`/blog/${post.slug}`} className="blog-list-card__link">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="blog-list-card__excerpt">{post.excerpt}</p>
                  <div className="blog-list-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-list-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-list-card__cta"
                  >
                    Read article
                    <span className="blog-list-card__cta-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogList;
