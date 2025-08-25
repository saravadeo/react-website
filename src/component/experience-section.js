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
                                Lead Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Dream11 (DreamSports)</div>
                                    <div className="card__achievement">
                                        Working on Dream11's Observability Platform managing 16+ Gbps log traffic
                                    </div>
                                    <div className="card__responsibilities">
                                        Building and scaling systems for logs, metrics, traces, and incident management using distributed tracing, alerting, and monitoring tools. Actively exploring AI-driven anomaly detection and alert noise reduction.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-6">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Distributed tracing & monitoring tools</li>
                                                <li>• High-throughput log processing (16+ Gbps)</li>
                                                <li>• AI-driven anomaly detection</li>
                                                <li>• Incident management systems</li>
                                            </ul>
                                            <h4>Key Achievements</h4>
                                            <ul>
                                                <li>• Managing massive log traffic scale</li>
                                                <li>• AI-powered alert noise reduction</li>
                                                <li>• End-to-end observability platform</li>
                                                <li>• Real-time monitoring & alerting</li>
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
                                Head of Engineering
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">DreamSetGo (DreamSports)</div>
                                    <div className="card__achievement">
                                        Engineered DORA - full-scale Admin Panel/ERP system covering entire lifecycle
                                    </div>
                                    <div className="card__responsibilities">
                                        Led technology function as Head of Engineering for lean, high-impact team. Owned end-to-end system architecture, designed scalable microservices, and built fault-tolerant distributed systems. Built SAP-style process automation covering website content management, lead capture, package customization, sales workflow, invoicing, and operational dashboards.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Microservices architecture</li>
                                                <li>• AWS infrastructure & services</li>
                                                <li>• ERP system architecture</li>
                                                <li>• Process automation</li>
                                            </ul>
                                            <h4>Leadership & Achievements</h4>
                                            <ul>
                                                <li>• DORA ERP system development</li>
                                                <li>• End-to-end system ownership</li>
                                                <li>• SAP-style process automation</li>
                                                <li>• Technology roadmap planning</li>
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
                                Software Engineer - Team Lead
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">StyleCracker</div>
                                    <div className="card__achievement">
                                        Led technology team development and system architecture
                                    </div>
                                    <div className="card__responsibilities">
                                        Led technology team development, architected both backend and frontend modules including web applications, admin portals, and inventory management systems. Implemented best practices for testing and deployment while ensuring rapid, reliable delivery.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Full-stack development</li>
                                                <li>• Web applications & admin portals</li>
                                                <li>• Inventory management systems</li>
                                                <li>• Testing & deployment tools</li>
                                            </ul>
                                            <h4>Project Scope</h4>
                                            <ul>
                                                <li>• Technology team leadership</li>
                                                <li>• Backend and frontend architecture</li>
                                                <li>• Best practices implementation</li>
                                                <li>• Rapid, reliable delivery</li>
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
                                    <div className="card__company">GupShup</div>
                                    <div className="card__achievement">
                                        Developed Java-based backend systems and successful Blockchain POC
                                    </div>
                                    <div className="card__responsibilities">
                                        Developed robust backend systems using Java and conducted successful research and development of blockchain technology using Hyperledger Fabric. Implemented RESTful APIs and database optimization techniques for improved performance.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Java backend development</li>
                                                <li>• Hyperledger Fabric</li>
                                                <li>• RESTful APIs</li>
                                                <li>• Database optimization</li>
                                            </ul>
                                            <h4>Technical Focus</h4>
                                            <ul>
                                                <li>• Backend system architecture</li>
                                                <li>• Blockchain technology research</li>
                                                <li>• Performance optimization</li>
                                                <li>• API development</li>
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
                                Senior Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <div className="card__company">Kyepot</div>
                                    <div className="card__achievement">
                                        Built financial app from ground up with robust ledger system database
                                    </div>
                                    <div className="card__responsibilities">
                                        Played a pivotal role in developing a comprehensive financial application from scratch. Designed and optimized database architecture for a complex ledger system. Involved in the complete product development lifecycle from requirement gathering to deployment.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• Financial application development</li>
                                                <li>• Database architecture design</li>
                                                <li>• Ledger system implementation</li>
                                                <li>• Product lifecycle management</li>
                                            </ul>
                                            <h4>Key Contributions</h4>
                                            <ul>
                                                <li>• Complete financial app development</li>
                                                <li>• Complex database architecture</li>
                                                <li>• End-to-end product delivery</li>
                                                <li>• Financial system expertise</li>
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
                                    <div className="card__company">TIBCO Software Limited</div>
                                    <div className="card__achievement">
                                        Developed data management application for Nielsen using TIBCO tools
                                    </div>
                                    <div className="card__responsibilities">
                                        Developed a data management application for Nielsen using TIBCO BusinessWorks (BW) that generated multiple metrics from store-related data. Implemented data processing workflows and created interactive dashboards for business intelligence and analytics.
                                    </div>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            <h4>Technologies Used</h4>
                                            <ul>
                                                <li>• TIBCO BusinessWorks (BW)</li>
                                                <li>• Data management systems</li>
                                                <li>• Business intelligence tools</li>
                                                <li>• Analytics dashboards</li>
                                            </ul>
                                            <h4>Business Impact</h4>
                                            <ul>
                                                <li>• Nielsen data applications</li>
                                                <li>• Multiple metrics generation</li>
                                                <li>• Store data management</li>
                                                <li>• Business intelligence solutions</li>
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