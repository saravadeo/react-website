import React from 'react';

const About = () => {
    return (
        <section id="about" className="section section--about">
            <div className="container">
                <div className="section__header">
                    <span className="section__number">01</span>
                    <h2 className="section__title">About Me</h2>
                </div>
                
                <div className="about__content">
                    <div className="about__text">
                        <p>
                            I'm a full-stack developer with 5+ years of experience building 
                            scalable web applications. I specialize in JavaScript ecosystems, 
                            cloud infrastructure, and solving complex engineering challenges.
                        </p>
                        <p>
                            Currently focused on building performant systems with React, Node.js, 
                            and AWS. I love writing clean code and sharing what I learn through 
                            technical blog posts.
                        </p>
                        
                        <div className="about__stats">
                            <div className="stat">
                                <span className="stat__number">5+</span>
                                <span className="stat__label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">50+</span>
                                <span className="stat__label">Projects Shipped</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">100%</span>
                                <span className="stat__label">Remote Friendly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
