import React, { Component } from "react";
import ReactGA              from "react-ga";

class SideBar extends Component {
    
    constructor() {
        super();
        this.state = {
            checked: false
        };
    }
    
    togglePopup = () => {
        ReactGA.event({
                          category: "SideBar",
                          action  : this.state.checked ? "side_bar_open" : "side_bar_close"
                      });
        this.setState({ checked: !this.state.checked });
    };
    
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"
                       checked={ this.state.checked }
                       onClick={ this.togglePopup }/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item" onClick={ this.togglePopup }>
                            <a href="#section-about" className="navigation__link">About
                                me</a>
                        </li>
                        <li className="navigation__item" onClick={ this.togglePopup }><a href="#section-technologies"
                                                                                         className="navigation__link">Technology</a>
                        </li>
                        <li className="navigation__item" onClick={ this.togglePopup }><a href="#section-experience"
                                                                                         className="navigation__link">Experience</a>
                        </li>
                        <li className="navigation__item" onClick={ this.togglePopup }><a href="#section-stories"
                                                                                         className="navigation__link">Key
                            People</a></li>
                        <li className="navigation__item" onClick={ this.togglePopup }><a href="#section-contact"
                                                                                         className="navigation__link">Contact
                            us</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;