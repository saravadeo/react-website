import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section section--contact">
            <div className="container">
                <div className="section__header">
                    <span className="section__number">05</span>
                    <h2 className="section__title">Get In Touch</h2>
                </div>
                
                <div className="contact__content">
                    <p className="contact__text">
                        I'm always open to discussing new projects, creative ideas or 
                        opportunities to be part of your vision.
                    </p>
                    
                    <div className="contact__links">
                        <a href="mailto:onkar@saravadeo.com" className="contact__link">
                            <span className="contact__link-icon">✉</span>
                            onkar@saravadeo.com
                        </a>
                        
                        <a href="https://github.com/saravadeo" target="_blank" rel="noopener noreferrer" className="contact__link">
                            <span className="contact__link-icon">⚡</span>
                            GitHub
                        </a>
                        
                        <a href="https://www.linkedin.com/in/onkar-sarvade-4b36ab63/" target="_blank" rel="noopener noreferrer" className="contact__link">
                            <span className="contact__link-icon">💼</span>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
