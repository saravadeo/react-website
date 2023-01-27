import React, {Component} from "react";
import SideBar from "../component/side-bar";
import Header from "../component/header";
import AboutSection from "../component/about-section";
import TechnologySection from "../component/technology-section";
import ExperienceSection from "../component/experience-section";
import StoriesSection from "../component/stories-section";
import ContactSection from "../component/contact-section";
import Moon from "./moon";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moon: false
    }
  }

  onShowMoon = () => {
    this.setState({moon: !this.state.moon})
  }

  render() {
    return (
      <div className="App">
        {!this.state.moon ? (
          <>
            <SideBar/>
            <Header/>
            <AboutSection/>
            <TechnologySection/>
            <ExperienceSection/>
            <StoriesSection/>
            <ContactSection onShowMoon={this.onShowMoon}/>
          </>
          ) :
          (
            <div style={{position: 'relative'}}>
              <Moon onShowMoon={this.onShowMoon}/>
            </div>
          )}
      </div>
    );
  }
}

export default Home;