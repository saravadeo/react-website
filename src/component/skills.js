import React from 'react';

const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'REST APIs'] },
    { category: 'Cloud', items: ['AWS', 'CloudFront', 'Lambda', 'S3'] },
    { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'Linux'] }
];

const Skills = () => {
    return (
        <section id="skills" className="section section--skills">
            <div className="container">
                <div className="section__header">
                    <span className="section__number">02</span>
                    <h2 className="section__title">Skills</h2>
                </div>
                
                <div className="skills__grid">
                    {skills.map((group, index) => (
                        <div key={index} className="skills__card">
                            <h3 className="skills__category">{group.category}</h3>
                            <div className="skills__items">
                                {group.items.map((skill, i) => (
                                    <span key={i} className="skills__item">
                                        {skill}
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

export default Skills;
