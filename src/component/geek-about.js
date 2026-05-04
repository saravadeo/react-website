import React, { Component } from "react";
import { trackEvent } from "../analytics";

class GeekAbout extends Component {
    skills = [
        { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go"] },
        { category: "Frontend", items: ["React", "Vue.js", "Next.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "GraphQL", "REST APIs"] },
        { category: "Cloud", items: ["AWS", "CloudFront", "S3", "Lambda"] },
        { category: "DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "Linux"] },
        { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] }
    ];
    
    onSkillClick = (skill) => {
        trackEvent("About", "skill_click", skill);
    };
    
    render() {
        return (
            <section id="section-about" className="geek-about">
                <div className="geek-container">
                    {/* Section Header */}
                    <div className="geek-section-header">
                        <span className="geek-section-prompt">$</span>
                        <h2 className="geek-section-title">cat about.json</h2>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="geek-about-grid">
                        {/* Left: Bio */}
                        <div className="geek-about-bio">
                            <div className="geek-code-block">
                                <div className="geek-code-header">
                                    <span className="geek-code-dots">● ● ●</span>
                                    <span className="geek-code-lang">JSON</span>
                                </div>
                                <pre className="geek-code-content">
{
`{
  "name": "Onkar Sarvade",
  "role": "Software Engineer",
  "experience": "5+ years",
  "focus": [
    "Full Stack Development",
    "Cloud Architecture",
    "Performance Optimization",
    "SEO Engineering"
  ],
  "currently": "Building scalable web apps",
  "available": true
}`}
                                </pre>
                            </div>
                            
                            <div className="geek-about-text">
                                <p>
                                    I'm a full-stack developer passionate about building 
                                    performant, scalable web applications. I specialize in 
                                    JavaScript ecosystems, cloud infrastructure, and solving 
                                    complex engineering challenges.
                                </p>
                                <p>
                                    When I'm not coding, I write technical articles about 
                                    the lessons I learn while shipping production systems.
                                </p>
                            </div>
                        </div>
                        
                        {/* Right: Skills */}
                        <div className="geek-about-skills">
                            <h3 className="geek-skills-title">
                                <span className="geek-icon">$ </span>
                                ls -la skills/
                            </h3>
                            
                            <div className="geek-skills-list">
                                {this.skills.map((skillGroup, index) => (
                                    <div key={index} className="geek-skill-group">
                                        <div className="geek-skill-category">
                                            <span className="geek-skill-arrow">▶ </span>
                                            {skillGroup.category}
                                        </div>
                                        <div className="geek-skill-items">
                                            {skillGroup.items.map((skill, i) => (
                                                <span 
                                                    key={i}
                                                    className="geek-skill-tag"
                                                    onClick={() => this.onSkillClick(skill)}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Stats Bar */}
                    <div className="geek-stats-bar">
                        <div className="geek-stat-item">
                            <span className="geek-stat-number">5+</span>
                            <span className="geek-stat-label">Years Experience</span>
                        </div>
                        <div className="geek-stat-item">
                            <span className="geek-stat-number">50+</span>
                            <span className="geek-stat-label">Projects Shipped</span>
                        </div>
                        <div className="geek-stat-item">
                            <span className="geek-stat-number">100%</span>
                            <span className="geek-stat-label">Remote Friendly</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GeekAbout;
