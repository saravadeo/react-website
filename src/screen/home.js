import React, {Component} from "react";
import SideBar from "../component/side-bar";
import Header from "../component/header";
import AboutSection from "../component/about-section";
import TechnologySection from "../component/technology-section";
import ExperienceSection from "../component/experience-section";
import StoriesSection from "../component/stories-section";
import ContactSection from "../component/contact-section";

class Home extends Component {
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
export default Home;