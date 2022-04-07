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
                        Experience
                    </h2>
                </div>
                <div className="card__container">
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
                                    <ul>
                                        <li>Node, React</li>
                                        <li>Express</li>
                                        <li>MySQL, Elasticsearch</li>
                                        <li>AWS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            Developing scalable applications using microservice architecture. Owning multiple services in microservice, also responsible for architecting AWS infrastructure. Also developing mobile applications from scratch.
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
                                    <ul>
                                        <li>Node, React</li>
                                        <li>NestJS</li>
                                        <li>MongoDB, Elasticsearch</li>
                                        <li>AWS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            Developing the whole system from scratch. Lead of technology team and architecting back-end and front-end modules like Website, Admin and Inventory.
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
                                Sr. Software Engineer
                            </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Java - Spring</li>
                                        <li>React, Angular</li>
                                        <li>Mysql</li>
                                        <li>Blockchain</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            Developing backend using Java, Jersey etc. Creating
                                            desktop application using angular and react. Also did
                                            POC on blockchain using hyper ledger fabric.
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
                                    <ul>
                                        <li>Java - Spring, Hibernate</li>
                                        <li>React, React-native</li>
                                        <li>Kafka</li>
                                        <li>Mysql, Elasticsearch, Redis</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            Played a key role in developing financial app from
                                            scratch. Designed database for ledger system. Involved
                                            in the complete product development life cycle right
                                            from requirement gathering to deployment.
                                            Created react-native plugins for native android
                                            functionality like reading SMS and making payment
                                            using UPI.
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
                                    <ul>
                                        <li>Java</li>
                                        <li>React</li>
                                        <li>Business Works (BW6)</li>
                                        <li>ORACLE</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            Worked on TIBCO tools like, Business works (BW),
                                            Spotfire. Developed application for Nielson, which
                                            manages data related to stores and create multiple
                                            metrics from the same data
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#section-stories" className="btn btn-primary" onClick={ this.onPeopleAroundMeClick }>
                        People around me
                    </a>
                </div>
            </section>
        );
    }
}

export default ExperienceSection;