import React, { Component } from "react";
import ReactGA              from "react-ga";

class AboutSection extends Component {
    
    onKnowMoreClick = () => {
        ReactGA.event({
                          category: "Profile",
                          action  : "know_more_clicked"
                      });
    };
    
    render() {
        return (
            <section id="section-about" className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="header-secondary">
                        Profile
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="header-tertiary u-margin-bottom-small">
                            About me
                        </h3>
                        <p className="paragraph">
                            <span className="font-bold">Lead Software Engineer & System Architect</span>
                            <span>
                            10+ years experience, event-driven architecture, AI-driven automation, observability systems, leadership & mentorship. I love solving complex problems and mentoring teams to build clean, resilient software
                            </span>
                        </p>
                        <h3 className="header-tertiary u-margin-bottom-small">
                            Vision
                        </h3>
                        <p className="paragraph">
                        “My vision is to design technology that is powerful at scale, yet simple enough for everyone to use.”
                        </p>
                        <a href="#section-technologies" onClick={ this.onKnowMoreClick } className="btn-text">Know
                            more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img
                                srcSet={ `${ require("../img/nat-1.jpg") } 300w, ${ require("../img/nat-1-large.jpg") } 1000w")` }
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="" className="composition__photo composition__photo--p1"
                                src={ require("../img/nat-1.jpg") }/>
                            <img
                                srcSet={ `${ require("../img/nat-2.jpg") } 300w, ${ require("../img/nat-2-large.jpg") } 1000w")` }
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="" className="composition__photo composition__photo--p2"
                                src={ require("../img/nat-2.jpg") }/>
                            <img
                                srcSet={ `${ require("../img/nat-3.jpg") } 300w, ${ require("../img/nat-3-large.jpg") } 1000w")` }
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="" className="composition__photo composition__photo--p3"
                                src={ require("../img/nat-3.jpg") }/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutSection;