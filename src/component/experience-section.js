import React, { Component } from "react";
import ReactGA              from "react-ga";

class ExperienceSection extends Component {
    
    
    onPeopleAroundMeClick = () => {
        ReactGA.event({
                          category: "Experience",
                          action  : "people_around_me_clicked"
                      });
    };
    
    render() {
        return (
            <section className="section-experience" id="section-experience">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="header-secondary">
                        Professional Experience
                    </h2>
                </div>
                <div className="card__container">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--6">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--6">
                                Senior Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Dream11</div>
                                    <div className="card__achievement">
                                        Platform serving millions of users daily on India's largest fantasy sports platform
                                    </div>
                                    <div className="card__responsibilities">
                                        Lead development of high-performance microservices architecture, maintain platform stability during peak traffic events, and collaborate with cross-functional teams
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-6">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Node.js, React, TypeScript</li>
                                                <li>• Microservices, AWS, Redis</li>
                                                <li>• High-scale distributed systems</li>
                                                <li>• Real-time features & optimization</li>
                                            </ul>
                                            <h4>Key Responsibilities</h4>
                                            <ul>
                                                <li>• Maintain platform stability during peak traffic</li>
                                                <li>• Cross-functional team collaboration</li>
                                                <li>• Innovative solution delivery</li>
                                                <li>• Performance optimization</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--5">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--5">
                                Technical Lead
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Technology Leadership</div>
                                    <div className="card__achievement">
                                        Lead team of developers building scalable applications with microservice architecture
                                    </div>
                                    <div className="card__responsibilities">
                                        Own multiple critical services, architect AWS infrastructure, and mentor junior developers while implementing CI/CD pipelines
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Node.js, React, Express</li>
                                                <li>• Microservices Architecture</li>
                                                <li>• MySQL, Elasticsearch, Redis</li>
                                                <li>• AWS Infrastructure & Services</li>
                                            </ul>
                                            <h4>Leadership Skills</h4>
                                            <ul>
                                                <li>• Team management & mentoring</li>
                                                <li>• Code reviews & quality standards</li>
                                                <li>• CI/CD pipeline implementation</li>
                                                <li>• Technical decision making</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--4">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--4">
                                Lead Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">System Architecture</div>
                                    <div className="card__achievement">
                                        Built complete system from scratch including Website, Admin Panel, and Inventory Management
                                    </div>
                                    <div className="card__responsibilities">
                                        Lead technology team development, architect backend and frontend modules, and implement best practices for testing and deployment
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Node.js, React, NestJS</li>
                                                <li>• MongoDB, Elasticsearch</li>
                                                <li>• AWS Cloud Services</li>
                                                <li>• Testing & deployment tools</li>
                                            </ul>
                                            <h4>Project Scope</h4>
                                            <ul>
                                                <li>• Stakeholder collaboration</li>
                                                <li>• Requirements gathering & delivery</li>
                                                <li>• End-to-end development</li>
                                                <li>• Best practices implementation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--3">
                                Senior Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Full-Stack Development</div>
                                    <div className="card__achievement">
                                        Developed robust backend systems and responsive desktop applications
                                    </div>
                                    <div className="card__responsibilities">
                                        Research and develop blockchain POC using Hyperledger Fabric, implement RESTful APIs, and optimize system performance
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Java, Spring, Jersey</li>
                                                <li>• React, Angular</li>
                                                <li>• Hyperledger Fabric</li>
                                                <li>• MySQL, PostgreSQL</li>
                                            </ul>
                                            <h4>Technical Focus</h4>
                                            <ul>
                                                <li>• Backend system architecture</li>
                                                <li>• Desktop application development</li>
                                                <li>• Blockchain technology research</li>
                                                <li>• Performance optimization</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--2">
                                Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Financial Technology</div>
                                    <div className="card__achievement">
                                        Built comprehensive financial application with optimized database architecture
                                    </div>
                                    <div className="card__responsibilities">
                                        Manage complete product lifecycle, create custom React Native plugins for SMS reading and UPI payment integration
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Java, Spring, Hibernate</li>
                                                <li>• React, React Native</li>
                                                <li>• Apache Kafka, Redis</li>
                                                <li>• MySQL, Elasticsearch</li>
                                            </ul>
                                            <h4>Innovations</h4>
                                            <ul>
                                                <li>• SMS reading functionality</li>
                                                <li>• UPI payment integration</li>
                                                <li>• Native Android features</li>
                                                <li>• Custom plugin development</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">
                                Associate Consultant
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Data & Analytics</div>
                                    <div className="card__achievement">
                                        Developed Nielsen data applications for store management and metrics creation
                                    </div>
                                    <div className="card__responsibilities">
                                        Work with TIBCO BusinessWorks (BW), create data visualization dashboards, and implement data processing workflows
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• TIBCO BW, Spotfire</li>
                                                <li>• Java, React</li>
                                                <li>• Oracle Database</li>
                                                <li>• Data visualization tools</li>
                                            </ul>
                                            <h4>Business Impact</h4>
                                            <ul>
                                                <li>• Store data management</li>
                                                <li>• Multiple metrics creation</li>
                                                <li>• Business intelligence dashboards</li>
                                                <li>• Data processing workflows</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExperienceSection;