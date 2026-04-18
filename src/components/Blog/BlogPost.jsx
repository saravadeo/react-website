import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../../data/blogList.json';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  // slug from useParams
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const post = blogData.posts.find((p) => p.slug === slug);
  const postIndex = blogData.posts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogData.posts[postIndex - 1] : null;
  const nextPost = postIndex < blogData.posts.length - 1 ? blogData.posts[postIndex + 1] : null;

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Try to fetch the markdown file
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) {
          // Fallback: try to get content from a different path
          const response2 = await fetch(`${process.env.PUBLIC_URL}/blogs/${slug}.md`);
          if (response2.ok) {
            const text = await response2.text();
            setContent(text);
          } else {
            setContent('# Post Not Found\n\nSorry, this post is not available.');
          }
        } else {
          const text = await response.text();
          setContent(text);
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

  // Parse markdown content
  const parseMarkdown = (markdown) => {
    if (!markdown) return '';

    // Extract frontmatter
    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let content = frontmatterMatch ? frontmatterMatch[2] : markdown;

    // Better markdown to HTML conversion
    // Replace code blocks first
    content = content.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    
    // Replace inline code
    content = content.replace(/`([^`]+)`/gim, '<code>$1</code>');
    
    // Replace headers
    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Replace bold and italic
    content = content.replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>');
    content = content.replace(/\*([^*]+)\*/gim, '<em>$1</em>');
    
    // Replace links
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Replace list items
    content = content.replace(/^- (.*$)/gim, '<li>$1</li>');
    content = content.replace(/(<li>.*<\/li>\n?)+/gim, '<ul>$&</ul>');
    
    // Replace newlines with paragraphs
    content = content.replace(/\n\n/gim, '</p><p>');
    content = content.replace(/\n/gim, '<br />');
    
    // Wrap in paragraphs if not already wrapped
    if (!content.startsWith('<')) {
      content = '<p>' + content + '</p>';
    }

    return content;
  };

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-page__toolbar">
          <Link to="/" className="blog-back-home">
            ← Portfolio
          </Link>
        </div>
        <div className="blog-error">
          <h1>Post Not Found</h1>
          <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/blog" className="blog-back-link">← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-page__toolbar">
        <Link to="/" className="blog-back-home">
          ← Portfolio
        </Link>
      </div>
    <article className="blog-post">
      <header className="blog-post-header">
        <div className="blog-post-meta">
          <span className="blog-post-date">{post.date}</span>
          <span className="blog-post-dot">•</span>
          <span className="blog-post-readtime">{post.readTime} read</span>
        </div>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
      />

      {loading && (
        <div className="blog-loading">Loading content...</div>
      )}

      <footer className="blog-post-footer">
        <div className="blog-post-nav">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="blog-nav-link blog-nav-prev">
              <span className="blog-nav-label">← Previous</span>
              <span className="blog-nav-title">{prevPost.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="blog-nav-link blog-nav-next">
              <span className="blog-nav-label">Next →</span>
              <span className="blog-nav-title">{nextPost.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>

        <Link to="/blog" className="blog-back-link">
          ← Back to all posts
        </Link>
      </footer>
    </article>
    </div>
  );
};

export default BlogPost;
