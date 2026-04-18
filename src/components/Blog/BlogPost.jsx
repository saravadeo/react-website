import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../../data/blogList.json';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const post = blogData.posts.find((p) => p.slug === slug);
  const postIndex = blogData.posts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogData.posts[postIndex - 1] : null;
  const nextPost = postIndex < blogData.posts.length - 1 ? blogData.posts[postIndex + 1] : null;

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Use PUBLIC_URL for GitHub Pages compatibility
        const baseUrl = process.env.PUBLIC_URL || '';
        const response = await fetch(`${baseUrl}/blogs/${slug}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          setContent('# Post Not Found\n\nSorry, this post is not available.');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
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

  // Parse markdown to HTML
  const parseMarkdown = (markdown) => {
    if (!markdown) return '';

    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let body = frontmatterMatch ? frontmatterMatch[2] : markdown;

    // Convert markdown to HTML
    let html = body
      // Code blocks first
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="blog-code"><code class="language-$1">$2</code></pre>')
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold and italic
      .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/gim, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Lists
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      // Paragraphs (must be last)
      .split('\n\n')
      .map(para => {
        para = para.trim();
        if (!para) return '';
        if (para.startsWith('<h') || para.startsWith('<pre') || para.startsWith('<li')) return para;
        if (para.includes('<li>')) {
          return '<ul>' + para + '</ul>';
        }
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
      {/* Background */}
      <div className="blog-page__bg">
        <div className="blog-page__grid" />
        <div className="blog-page__glow" />
      </div>

      <div className="blog-container">
        {/* Navigation */}
        <nav className="blog-breadcrumb">
          <Link to="/" className="blog-breadcrumb__link">← Portfolio</Link>
          <span className="blog-breadcrumb__sep">/</span>
          <Link to="/blog" className="blog-breadcrumb__link">Blog</Link>
          <span className="blog-breadcrumb__sep">/</span>
          <span className="blog-breadcrumb__current">{post.slug}</span>
        </nav>

        {/* Article */}
        <article className="blog-article">
          {/* Header */}
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

          {/* Content */}
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

          {/* Footer / Navigation */}
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
