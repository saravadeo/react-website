import React, { Component } from "react";

class TechnologySection extends Component {
    render() {
        return (
            <section id="section-technologies" className="section-technologies">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="header-secondary">Technical Skills & Expertise</h2>
                </div>
                
                {/* Core Technologies Row */}
                <div className="row u-margin-bottom-medium">
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-java-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Java & Spring</h3>
                            <p className="technology-box__text">
                                Core Java with <span className="font-bold">Spring Boot</span>, <span className="font-bold">Spring Security</span>, 
                                and <span className="font-bold">Data JPA</span>. Built robust backend systems and microservices architecture.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-javascript-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">JavaScript & Node.js</h3>
                            <p className="technology-box__text">
                                Modern ES6+ features with <span className="font-bold">Node.js</span>, <span className="font-bold">NestJS</span>, 
                                and <span className="font-bold">TypeScript</span>. Full-stack development from frontend to backend.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-react-original"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">React & Mobile</h3>
                            <p className="technology-box__text">
                                <span className="font-bold">React</span> with Hooks and Redux, plus <span className="font-bold">React Native</span> 
                                for cross-platform mobile development with shared codebase.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cloud & Infrastructure Row */}
                <div className="row u-margin-bottom-medium">
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-amazonwebservices-plain-wordmark"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">AWS & Cloud</h3>
                            <p className="technology-box__text">
                                Cloud infrastructure with <span className="font-bold">EC2, RDS, CloudFront, SQS</span>. 
                                Deployed scalable applications and managed cloud resources efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-docker-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">DevOps & Tools</h3>
                            <p className="technology-box__text">
                                <span className="font-bold">Docker, Kubernetes</span>, and <span className="font-bold">CI/CD pipelines</span>. 
                                Automated deployment and infrastructure management.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-redis-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Data & Caching</h3>
                            <p className="technology-box__text">
                                <span className="font-bold">Redis</span> for caching, <span className="font-bold">Kafka</span> for streaming, 
                                and database optimization for high-performance applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Monitoring & Architecture Row */}
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-opentelemetry-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Observability</h3>
                            <p className="technology-box__text">
                                Comprehensive monitoring with <span className="font-bold">Datadog</span>, 
                                <span className="font-bold">Signoz</span>, and <span className="font-bold">ClickHouse</span>. 
                                Real-time monitoring, distributed tracing, and performance tracking across microservices.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-networkx-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Architecture</h3>
                            <p className="technology-box__text">
                                <span className="font-bold">Microservices</span>, <span className="font-bold">Distributed Systems</span>, 
                                and <span className="font-bold">AI/Automation</span>. Designed scalable, fault-tolerant architectures 
                                with load balancing and horizontal scaling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TechnologySection;