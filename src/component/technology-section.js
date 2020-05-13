import React, { Component } from "react";

class TechnologySection extends Component {
    render() {
        return (
            <section id="section-technologies" className="section-technologies">
                <div className="row">
                    <div className="col-1-of-5">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-java-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Java</h3>
                            <p className="technology-box__text">
                                Used
                                <span className="font-bold">Spring, Spring-boot</span> framework to create backend
                                application.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-5">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-mysql-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                            <p className="technology-box__text">
                                Worked primary on <span className="font-bold">Mysql</span> also have experience in <span
                                className="font-bold">Elastic search, mongodb</span> etc.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-5">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-javascript-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Javascript</h3>
                            <p className="technology-box__text">
                                Created web application using <span className="font-bold">react, angular</span> and
                                mobile
                                application using <span className="font-bold">react-native</span>.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-5">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-html5-plain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">HTML5</h3>
                            <p className="technology-box__text">
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-5">
                        <div className="technology-box">
                            <i className="technology-box__icon devicon-react-original"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
                            <p className="technology-box__text">
                                Knowledge of <span className="font-bold">Redux, React-router</span> etc. and
                                architecture of react
                                application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TechnologySection;