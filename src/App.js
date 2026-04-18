import React, { Component } from "react";
import "./scss/main.scss";

// Geek Theme Components
import GeekHeader from "./component/geek-header";
import GeekAbout from "./component/geek-about";

// Original Components (will be styled)
import TechnologySection from "./component/technology-section";
import ExperienceSection from "./component/experience-section";
import ContactSection from "./component/contact-section";

// Blog Components
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";

import ReactGA from 'react-ga4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            blogSlug: null
        };
    }
    
    componentDidMount() {
        ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 tracking ID
        
        // Check URL for blog routes
        const path = window.location.pathname;
        if (path.startsWith('/blog/')) {
            const slug = path.replace('/blog/', '');
            this.setState({ currentPage: 'blog-post', blogSlug: slug });
        } else if (path === '/blog') {
            this.setState({ currentPage: 'blog' });
        }
    }
    
    navigateToBlog = () => {
        this.setState({ currentPage: 'blog' });
        window.history.pushState({}, '', '/blog');
    };
    
    navigateHome = () => {
        this.setState({ currentPage: 'home', blogSlug: null });
        window.history.pushState({}, '', '/');
    };
    
    render() {
        const { currentPage, blogSlug } = this.state;
        
        if (currentPage === 'home') {
            return (
                <div className="App">
                    <GeekHeader onBlogClick={this.navigateToBlog} />
                    <GeekAbout />
                    <TechnologySection />
                    <ExperienceSection />
                    <ContactSection />
                </div>
            );
        }
        
        if (currentPage === 'blog') {
            return (
                <div className="App">
                    <nav className="geek-nav-bar">
                        <button 
                            className="geek-nav-btn"
                            onClick={this.navigateHome}
                        >
                            ← cd ~
                        </button>
                        <span className="geek-nav-title">~/blog</span>
                    </nav>
                    <BlogList />
                </div>
            );
        }
        
        if (currentPage === 'blog-post') {
            return (
                <div className="App">
                    <nav className="geek-nav-bar">
                        <button 
                            className="geek-nav-btn"
                            onClick={() => window.history.back()}
                        >
                            ← cd ..
                        </button>
                        <span className="geek-nav-title">~/blog/{blogSlug}</span>
                    </nav>
                    <BlogPost />
                </div>
            );
        }
        
        return (
            <div className="App">
                <GeekHeader onBlogClick={this.navigateToBlog} />
            </div>
        );
    }
}

export default App;
