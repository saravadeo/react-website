import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blogList.json';
import './Blog.css';

const BlogList = () => {
  const { posts } = blogData;

  return (
    <div className="blog-page">
      <div className="blog-page__toolbar">
        <Link to="/" className="blog-back-home">
          ← Portfolio
        </Link>
      </div>
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">
          Technical insights, tutorials, and lessons learned from building production systems.
        </p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-readtime">{post.readTime} read</span>
            </div>

            <h2 className="blog-card-title">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="blog-card-excerpt">{post.excerpt}</p>

            <div className="blog-card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>

            <Link to={`/blog/${post.slug}`} className="blog-read-more">
              Read article →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="blog-empty">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BlogList;
