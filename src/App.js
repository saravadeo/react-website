import React, { Component } from "react";
import "./scss/main.scss";
import Header               from "./component/header";
import AboutSection         from "./component/about-section";
import TechnologySection    from "./component/technology-section";
import ExperienceSection    from "./component/experience-section";
import StoriesSection       from "./component/stories-section";
import ContactSection       from "./component/contact-section";
import SideBar              from "./component/side-bar";
import ReactGA from 'react-ga';

class App extends Component {
    
    componentDidMount() {
        ReactGA.initialize('UA-165274480-1');
    }
    
    render() {
        return (
            <div className="App">
                <SideBar/>
                <Header/>
                <AboutSection/>
                <TechnologySection/>
                <ExperienceSection/>
                <StoriesSection/>
                <ContactSection/>
            </div>
        );
    }
}

export default App;
