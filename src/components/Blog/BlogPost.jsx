import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogData from '../../data/blogList.json';
import './Blog.css';

const TURNSTILE_SITEKEY = '';
const REACTIONS_API = 'https://reactions-api.onkarsarvade17.workers.dev';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [reactionCounts, setReactionCounts] = useState({ liked: 0, learned: 0, fire: 0 });
  const [userReactions, setUserReactions] = useState({ liked: false, learned: false, fire: false });

  const post = blogData.posts.find((p) => p.slug === slug);
  const postIndex = blogData.posts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogData.posts[postIndex - 1] : null;
  const nextPost = postIndex < blogData.posts.length - 1 ? blogData.posts[postIndex + 1] : null;

  // Load reaction counts from reactions.json
  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const res = await fetch(`${REACTIONS_API}?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data[slug]) {
            setReactionCounts(data[slug]);
          }
        }
      } catch {
        // Non-critical
      }
    };
    fetchReactions();
  }, [slug]);

  // Load user's previous reactions (toggle state only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`blog-rx-${slug}`);
      if (stored) setUserReactions(JSON.parse(stored));
    } catch {}
  }, [slug]);

  // Handle reaction click
  const handleReaction = useCallback((type) => {
    const newUserState = !userReactions[type];

    // Optimistic UI update
    const updatedUser = { ...userReactions, [type]: newUserState };
    const delta = newUserState ? 1 : -1;
    const updatedCounts = { ...reactionCounts, [type]: Math.max(0, (reactionCounts[type] || 0) + delta) };
    setUserReactions(updatedUser);
    setReactionCounts(updatedCounts);
    localStorage.setItem(`blog-rx-${slug}`, JSON.stringify(updatedUser));

    // Only send to server when adding a reaction (delta: 1)
    if (!userReactions[type]) {
      try {
        fetch(`${REACTIONS_API}/react`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, type, delta: 1 }),
        }).catch(() => {});
      } catch {}
    }
  }, [slug, userReactions, reactionCounts]);

  // Load blog content
  useEffect(() => {
    const loadContent = async () => {
      try {
        const baseUrl = process.env.PUBLIC_URL || '';
        const response = await fetch(`${baseUrl}/blogs/${slug}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          setContent('# Post Not Found\n\nSorry, this post is not available.');
        }
      } catch {
        setContent('# Error\n\nFailed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    if (post) {
      loadContent();
    } else {
      setLoading(false);
    }
  }, [slug, post]);

  const parseMarkdown = (markdown) => {
    if (!markdown) return '';
    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let body = frontmatterMatch ? frontmatterMatch[2] : markdown;

    let html = body
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="blog-code"><code class="language-$1">$2</code></pre>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/gim, '<em>$1</em>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      .split('\n\n')
      .map(para => {
        para = para.trim();
        if (!para) return '';
        if (para.startsWith('<h') || para.startsWith('<pre') || para.startsWith('<li')) return para;
        if (para.includes('<li>')) return '<ul>' + para + '</ul>';
        return '<p>' + para + '</p>';
      })
      .join('\n');
    return html;
  };

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-page__bg">
          <div className="blog-page__grid" />
          <div className="blog-page__glow" />
        </div>
        <div className="blog-container">
          <nav className="blog-breadcrumb">
            <Link to="/" className="blog-breadcrumb__link">← Portfolio</Link>
            <span className="blog-breadcrumb__sep">/</span>
            <Link to="/blog" className="blog-breadcrumb__link">Blog</Link>
          </nav>
          <article className="blog-article">
            <h1 className="blog-article__title">Post Not Found</h1>
            <p className="blog-article__text">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="blog-btn">← Back to all posts</Link>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Helmet>
        <title>{post.title} — Onkar Sarvade Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`Onkar Sarvade, ${post.tags.join(', ')}, system design, backend engineering, distributed systems`} />
        <meta property="og:title" content={`${post.title} — Onkar Sarvade`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${post.title} — Onkar Sarvade`} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={`https://saravadeo.github.io/react-website/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": { "@type": "Person", "name": "Onkar Sarvade" },
          "publisher": { "@type": "Person", "name": "Onkar Sarvade" },
          "keywords": post.tags.join(', ')
        })}</script>
      </Helmet>

      <div className="blog-page__bg">
        <div className="blog-page__grid" />
        <div className="blog-page__glow" />
      </div>

      <div className="blog-container">
        <nav className="blog-breadcrumb">
          <Link to="/" className="blog-breadcrumb__link">← Portfolio</Link>
          <span className="blog-breadcrumb__sep">/</span>
          <Link to="/blog" className="blog-breadcrumb__link">Blog</Link>
          <span className="blog-breadcrumb__sep">/</span>
          <span className="blog-breadcrumb__current">{post.slug}</span>
        </nav>

        <article className="blog-article">
          <header className="blog-header">
            <div className="blog-meta">
              <time className="blog-meta__date">{post.date}</time>
              <span className="blog-meta__dot">•</span>
              <span className="blog-meta__read">{post.readTime} read</span>
            </div>
            <h1 className="blog-header__title">{post.title}</h1>
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </header>

          <div className="blog-content">
            {loading ? (
              <div className="blog-loading">Loading...</div>
            ) : (
              <div
                className="blog-content__body"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
              />
            )}
          </div>

          {/* Turnstile widget (hidden, only if sitekey configured) */}
          {TURNSTILE_SITEKEY && (
            <div style={{ display: 'none' }}>
              <div className="cf-turnstile" data-sitekey={TURNSTILE_SITEKEY} />
            </div>
          )}

          {/* Reactions */}
          <div className="blog-reactions">
            <p className="blog-reactions__prompt">How was this article?</p>
            <div className="blog-reactions__buttons">
              <button
                className={`blog-reactions__btn ${userReactions.liked ? 'blog-reactions__btn--active' : ''}`}
                onClick={() => handleReaction('liked')}
                aria-label="Helpful"
              >
                <span className="blog-reactions__emoji">👍</span>
                <span className="blog-reactions__label">Helpful</span>
                {reactionCounts.liked > 0 && <span className="blog-reactions__count">{reactionCounts.liked}</span>}
              </button>
              <button
                className={`blog-reactions__btn ${userReactions.learned ? 'blog-reactions__btn--active' : ''}`}
                onClick={() => handleReaction('learned')}
                aria-label="Learned something"
              >
                <span className="blog-reactions__emoji">💡</span>
                <span className="blog-reactions__label">Learned something</span>
                {reactionCounts.learned > 0 && <span className="blog-reactions__count">{reactionCounts.learned}</span>}
              </button>
              <button
                className={`blog-reactions__btn ${userReactions.fire ? 'blog-reactions__btn--active' : ''}`}
                onClick={() => handleReaction('fire')}
                aria-label="Insightful"
              >
                <span className="blog-reactions__emoji">🔥</span>
                <span className="blog-reactions__label">Insightful</span>
                {reactionCounts.fire > 0 && <span className="blog-reactions__count">{reactionCounts.fire}</span>}
              </button>
            </div>
          </div>

          <footer className="blog-footer">
            <div className="blog-nav">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="blog-nav__link blog-nav__prev">
                  <span className="blog-nav__label">← Previous</span>
                  <span className="blog-nav__title">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="blog-nav__link blog-nav__next">
                  <span className="blog-nav__label">Next →</span>
                  <span className="blog-nav__title">{nextPost.title}</span>
                </Link>
              )}
            </div>
            <Link to="/blog" className="blog-btn blog-btn--center">← All posts</Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;