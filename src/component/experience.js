import React from 'react';

const experiences = [
    {
        company: 'Rupshup',
        role: 'Sr. Software Engineer',
        period: '2021 - Present',
        location: 'Mumbai, India',
        highlights: ['Microservices Architecture', 'Performance Optimization', 'Team Leadership']
    },
    {
        company: 'Kyepot',
        role: 'Software Engineer',
        period: '2019 - 2021',
        location: 'Mumbai, India',
        highlights: ['Full Stack Development', 'AWS Infrastructure', 'Agile Methodology']
    },
    {
        company: 'TIBCO',
        role: 'Associate Consultant',
        period: '2017 - 2019',
        location: 'Pune, India',
        highlights: ['Integration Projects', 'Client Solutions', 'Technical Consulting']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section section--experience">
            <div className="container">
                <div className="section__header">
                    <span className="section__number">03</span>
                    <h2 className="section__title">Experience</h2>
                </div>
                
                <div className="experience__list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience__item">
                            <div className="experience__header">
                                <div className="experience__company">{exp.company}</div>
                                <div className="experience__period">{exp.period}</div>
                            </div>
                            <div className="experience__role">{exp.role}</div>
                            <div className="experience__location">{exp.location}</div>
                            
                            <div className="experience__highlights">
                                {exp.highlights.map((highlight, i) => (
                                    <span key={i} className="experience__tag">
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
