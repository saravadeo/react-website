import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogData from '../../data/blogList.json';
import { trackEvent } from '../../analytics';
import './Blog.css';

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { posts } = blogData;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(parseInt(searchParams.get('page') || '1', 10), totalPages || 1));
  const currentPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const goToPage = (page) => {
    setSearchParams(page === 1 ? {} : { page });
    trackEvent('Blog', 'blog_page_click', String(page));
    document.querySelector('.blog-list-hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="blog-page blog-page--list">
      <Helmet>
        <title>Blog — Onkar Sarvade | System Design & Backend Engineering</title>
        <meta name="description" content="Technical blog by Onkar Sarvade on system design, backend engineering, distributed systems, scalable architecture, and lessons from building production platforms." />
        <meta name="keywords" content="Onkar Sarvade blog, system design, backend engineering, distributed systems, scalable architecture, observability, microservices, cloud native" />
        <meta property="og:title" content="Blog — Onkar Sarvade | System Design & Backend Engineering" />
        <meta property="og:description" content="Technical articles on system design, backend engineering, distributed systems, and building scalable production platforms." />
        <meta name="twitter:title" content="Blog — Onkar Sarvade | System Design & Backend Engineering" />
        <meta name="twitter:description" content="Technical articles on system design, backend engineering, and building scalable production platforms." />
        <link rel="canonical" href="https://saravadeo.github.io/react-website/blog" />
      </Helmet>
      <div className="blog-page__bg" aria-hidden="true">
        <div className="blog-page__grid" />
        <div className="blog-page__glow" />
      </div>

      <div className="blog-container blog-container--list">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="blog-breadcrumb__link" onClick={() => trackEvent("Blog", "blog_back", "portfolio_home")}>
            ← Portfolio
          </Link>
          <span className="blog-breadcrumb__sep">/</span>
          <span className="blog-breadcrumb__current">Blog</span>
        </nav>

        <header className="blog-list-hero">
          <span className="blog-list-eyebrow">Writing</span>
          <h1 className="blog-list-title">System Design & Backend Engineering Blog</h1>
          <p className="blog-list-lede">
            Technical notes on scalable system design, backend engineering, distributed systems, and shipping reliable cloud-native software.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="blog-list-empty">
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <ul className="blog-list-grid">
            {currentPosts.map((post) => (
              <li key={post.id} className="blog-list-grid__cell">
                <Link to={`/blog/${post.slug}`} className="blog-list-card-link" onClick={() => trackEvent("Blog", "blog_card_click", post.slug)}>
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
                      {post.title}
                    </h2>
                    <p className="blog-list-card__excerpt">{post.excerpt}</p>
                    <div className="blog-list-card__tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="blog-list-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="blog-list-card__cta">
                      Read article
                      <span className="blog-list-card__cta-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {totalPages > 1 && (
          <nav className="blog-pagination" aria-label="Blog pagination">
            <button
              className="blog-pagination__btn blog-pagination__btn--prev"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            <div className="blog-pagination__pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`blog-pagination__btn ${page === currentPage ? 'blog-pagination__btn--active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className="blog-pagination__btn blog-pagination__btn--next"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogList;
