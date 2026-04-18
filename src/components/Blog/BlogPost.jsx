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
        const response = await fetch(`/blogs/${slug}.md`);
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

  // Parse markdown to terminal-style content
  const parseContent = (markdown) => {
    if (!markdown) return [];

    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const body = frontmatterMatch ? frontmatterMatch[2] : markdown;

    const lines = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLang = '';

    body.split('\n').forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          lines.push({ type: 'code', content: codeContent.trim(), lang: codeLang, key: idx });
          codeContent = '';
          codeLang = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLang = line.replace(/```/g, '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      if (line.startsWith('# ')) {
        lines.push({ type: 'h1', content: line.replace('# ', ''), key: idx });
      } else if (line.startsWith('## ')) {
        lines.push({ type: 'h2', content: line.replace('## ', ''), key: idx });
      } else if (line.startsWith('### ')) {
        lines.push({ type: 'h3', content: line.replace('### ', ''), key: idx });
      } else if (line.startsWith('- ')) {
        lines.push({ type: 'li', content: line.replace('- ', ''), key: idx });
      } else if (line.match(/^\d+\. /)) {
        lines.push({ type: 'oli', content: line.replace(/^\d+\. /, ''), num: line.match(/^\d+/)[0], key: idx });
      } else if (line.trim() === '') {
        lines.push({ type: 'br', key: idx });
      } else if (line.startsWith('>')) {
        lines.push({ type: 'quote', content: line.replace(/^>\s?/, ''), key: idx });
      } else {
        // Process inline formatting
        let processed = line
          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*]+)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        lines.push({ type: 'p', content: processed, key: idx });
      }
    });

    return lines;
  };

  const contentLines = parseContent(content);

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-page__background">
          <div className="blog-page__grid" />
          <div className="blog-page__gradient" />
        </div>
        <div className="blog-page__content">
          <div className="blog-terminal">
            <div className="blog-terminal__header">
              <span className="blog-terminal__btn blog-terminal__btn--red" />
              <span className="blog-terminal__btn blog-terminal__btn--yellow" />
              <span className="blog-terminal__btn blog-terminal__btn--green" />
              <span className="blog-terminal__title">error.log</span>
            </div>
            <div className="blog-terminal__body">
              <div className="blog-line">
                <span className="blog-line__prompt">❯</span>
                <span className="blog-line__content blog-line__error">Post Not Found</span>
              </div>
              <div className="blog-line">
                <span className="blog-line__prompt">❯</span>
                <span className="blog-line__content">The blog post you&apos;re looking for doesn&apos;t exist.</span>
              </div>
              <div className="blog-line">
                <Link to="/blog" className="blog-line__link">← Back to blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-page__background">
        <div className="blog-page__grid" />
        <div className="blog-page__gradient" />
      </div>

      <div className="blog-page__content">
        {/* Navigation */}
        <div className="blog-nav">
          <Link to="/" className="blog-nav__link">
            <span className="blog-nav__icon">←</span>
            <span className="blog-nav__text">portfolio</span>
          </Link>
          <Link to="/blog" className="blog-nav__link">
            <span className="blog-nav__icon">📰</span>
            <span className="blog-nav__text">all posts</span>
          </Link>
        </div>

        {/* Post Terminal */}
        <article className="blog-terminal">
          <div className="blog-terminal__header">
            <span className="blog-terminal__btn blog-terminal__btn--red" />
            <span className="blog-terminal__btn blog-terminal__btn--yellow" />
            <span className="blog-terminal__btn blog-terminal__btn--green" />
            <span className="blog-terminal__title">{post.slug}.md</span>
          </div>
          
          <div className="blog-terminal__body">
            {/* Post Meta */}
            <div className="blog-line blog-line--meta">
              <span className="blog-line__label">date:</span>
              <span className="blog-line__value">{post.date}</span>
            </div>
            <div className="blog-line blog-line--meta">
              <span className="blog-line__label">read:</span>
              <span className="blog-line__value">{post.readTime}</span>
            </div>
            <div className="blog-line blog-line--meta">
              <span className="blog-line__label">tags:</span>
              <span className="blog-line__tags">
                {post.tags.map((tag, i) => (
                  <span key={tag} className="blog-line__tag">
                    {tag}{i < post.tags.length - 1 ? ',' : ''}
                  </span>
                ))}
              </span>
            </div>
            <div className="blog-line blog-line--separator" />

            {/* Post Title */}
            <div className="blog-line blog-line--title">
              <span className="blog-line__hash">#</span>
              <span className="blog-line__heading">{post.title}</span>
            </div>
            <div className="blog-line blog-line--separator" />

            {/* Post Content */}
            {loading ? (
              <div className="blog-line">
                <span className="blog-line__prompt">❯</span>
                <span className="blog-line__content blog-line--blink">Loading content...</span>
              </div>
            ) : (
              contentLines.map((line) => {
                switch (line.type) {
                  case 'h1':
                    return (
                      <div key={line.key} className="blog-line blog-line--h1">
                        <span className="blog-line__prompt">❯</span>
                        <span className="blog-line__hash">#</span>
                        <span className="blog-line__heading" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'h2':
                    return (
                      <div key={line.key} className="blog-line blog-line--h2">
                        <span className="blog-line__prompt">❯</span>
                        <span className="blog-line__hash">##</span>
                        <span className="blog-line__heading" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'h3':
                    return (
                      <div key={line.key} className="blog-line blog-line--h3">
                        <span className="blog-line__prompt">❯</span>
                        <span className="blog-line__hash">###</span>
                        <span className="blog-line__heading" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'li':
                    return (
                      <div key={line.key} className="blog-line blog-line--list">
                        <span className="blog-line__bullet">▸</span>
                        <span className="blog-line__content" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'oli':
                    return (
                      <div key={line.key} className="blog-line blog-line--list">
                        <span className="blog-line__bullet blog-line__bullet--num">{line.num}.</span>
                        <span className="blog-line__content" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'quote':
                    return (
                      <div key={line.key} className="blog-line blog-line--quote">
                        <span className="blog-line__quote-mark">"</span>
                        <span className="blog-line__content" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                  case 'code':
                    return (
                      <div key={line.key} className="blog-line blog-line--code">
                        <div className="blog-code__header">
                          <span className="blog-code__lang">{line.lang || 'bash'}</span>
                        </div>
                        <pre className="blog-code__content">
                          <code>{line.content}</code>
                        </pre>
                      </div>
                    );
                  case 'br':
                    return <div key={line.key} className="blog-line blog-line--empty" />;
                  default:
                    return (
                      <div key={line.key} className="blog-line">
                        <span className="blog-line__prompt">❯</span>
                        <span className="blog-line__content" dangerouslySetInnerHTML={{ __html: line.content }} />
                      </div>
                    );
                }
              })
            )}
          </div>
        </article>

        {/* Post Navigation */}
        <div className="blog-post-nav">
          {prevPost && (
            <Link to={`/blog/${prevPost.slug}`} className="blog-post-nav__link blog-post-nav__prev">
              <span className="blog-post-nav__label">← previous</span>
              <span className="blog-post-nav__title">{prevPost.title}</span>
            </Link>
          )}
          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="blog-post-nav__link blog-post-nav__next">
              <span className="blog-post-nav__label">next →</span>
              <span className="blog-post-nav__title">{nextPost.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
