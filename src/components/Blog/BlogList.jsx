import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogData from '../../data/blogList.json';
import { trackEvent } from '../../analytics';
import './Blog.css';

const POSTS_PER_PAGE = 12;

const TOPICS = [
  { id: 'all', label: 'All' },
  { id: 'writing', label: 'Writing' },
  { id: 'ai-news', label: 'AI news roundups' },
];

const matchesTopic = (post, topic) => {
  if (topic === 'writing') return post.category !== 'AI News';
  if (topic === 'ai-news') return post.category === 'AI News';
  return true;
};

const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = TOPICS.some((t) => t.id === searchParams.get('topic')) ? searchParams.get('topic') : 'all';
  const posts = blogData.posts.filter((post) => matchesTopic(post, topic));
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(parseInt(searchParams.get('page') || '1', 10), totalPages || 1));
  const currentPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const setParams = (nextTopic, page) => {
    const params = {};
    if (nextTopic !== 'all') params.topic = nextTopic;
    if (page > 1) params.page = page;
    setSearchParams(params);
  };

  const goToPage = (page) => {
    setParams(topic, page);
    trackEvent('Blog', 'blog_page_click', String(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectTopic = (id) => {
    setParams(id, 1);
    trackEvent('Blog', 'blog_topic_click', id);
  };

  return (
    <div className="blog-page blog-page--list">
      <Helmet>
        <title>Blog — Onkar Sarvade</title>
        <meta name="description" content="Writing by Onkar Sarvade on building apps, backend engineering, distributed systems and automation, plus daily AI news roundups." />
        <meta name="keywords" content="Onkar Sarvade blog, indie apps, system design, backend engineering, distributed systems, observability, automation, AI news" />
        <meta property="og:title" content="Blog — Onkar Sarvade" />
        <meta property="og:description" content="Writing on building apps, backend engineering and automation, plus daily AI news roundups." />
        <meta name="twitter:title" content="Blog — Onkar Sarvade" />
        <meta name="twitter:description" content="Writing on building apps, backend engineering and automation, plus daily AI news roundups." />
        <link rel="canonical" href="https://www.onkarsarvade.com/blog" />
      </Helmet>

      <div className="blog-container blog-container--list">
        <header className="blog-list-hero">
          <h1 className="blog-list-title">Blog</h1>
          <p className="blog-list-lede">
            Notes on building apps, backend engineering and automating my own work, plus a daily roundup of AI news.
          </p>
        </header>

        <div className="blog-topics" role="group" aria-label="Filter posts">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`blog-topics__btn ${t.id === topic ? 'blog-topics__btn--active' : ''}`}
              aria-pressed={t.id === topic}
              onClick={() => selectTopic(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

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
