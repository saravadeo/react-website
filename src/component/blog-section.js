import React from 'react';
import blogData from '../data/blogList.json';

const BlogSection = ({ onBlogClick }) => {
    const latestPosts = blogData.posts.slice(0, 3);
    
    return (
        <section id="blog" className="section section--blog">
            <div className="container">
                <div className="section__header">
                    <span className="section__number">04</span>
                    <h2 className="section__title">Latest Posts</h2>
                </div>
                
                <div className="blog-preview__grid">
                    {latestPosts.map((post) => (
                        <article key={post.id} className="blog-preview__card">
                            <div className="blog-preview__meta">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            
                            <h3 className="blog-preview__title">{post.title}</h3>
                            
                            <p className="blog-preview__excerpt">{post.excerpt}</p>
                            
                            <div className="blog-preview__tags">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="blog-preview__tag">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="blog-preview__actions">
                    <button onClick={onBlogClick} className="btn btn--primary">
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
