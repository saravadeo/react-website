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
                            <span className="font-bold">Full Stack Developer | Artist | Dancer | Sportsman</span>
                            <span>
                        A Full Stack Developer with 4 years of experience in Java, Spring, Javascript, React etc.
                        Application development with Agile methodology with extreme programming focused on OOPS
                        concept and clean code.
                    </span>
                        </p>
                        <h3 className="header-tertiary u-margin-bottom-small">
                            Vision
                        </h3>
                        <p className="paragraph">
                            My vision is to create a product that can easily accessible for the poorest to poor and
                            richest to
                            richer.
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