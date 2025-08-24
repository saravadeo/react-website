import React, { Component } from "react";
import ReactGA              from "react-ga";

class Header extends Component {
    
    onAboutMeClick = () => {
        ReactGA.event({
                          category: "Header",
                          action  : "about_me_clicked"
                      });
    };
    
    render() {
        return (
            <header className="header">
                <div className="header__logo-box">
                    <img src={ require("../img/logo-white.png") } alt="Logo" className="header__logo"/>
                </div>
                <div className="header__text-box">
                    <h1 className="header-primary">
                        <span className="header-primary-main">Onkar Sarvade</span>
                        <span className="header-primary-sub">Lead Software Engineer & System Architect</span>
                        <span className="header-primary-sub1">Building scalable, distributed systems powering millions of users | Expert in Kafka, Node.js, AWS, and Observability</span>
                    </h1>
                    <a href="#section-about" className="btn btn-white btn-animated" onClick={ this.onAboutMeClick }>About
                        me</a>
                </div>
            </header>
        );
    }
}

export default Header;