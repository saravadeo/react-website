import React, { Component } from "react";
import "./scss/main.scss";
import Header               from "./component/header";
import AboutSection         from "./component/about-section";
import TechnologySection    from "./component/technology-section";
import ExperienceSection    from "./component/experience-section";
import StoriesSection       from "./component/stories-section";
import ContactSection       from "./component/contact-section";
import SideBar              from "./component/side-bar";
import BlogList             from "./components/Blog/BlogList";
import BlogPost             from "./components/Blog/BlogPost";
import ReactGA from 'react-ga';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            blogSlug: null
        };
    }
    
    componentDidMount() {
        ReactGA.initialize('UA-165274480-1');
        
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
    
    navigateToBlogPost = (slug) => {
        this.setState({ currentPage: 'blog-post', blogSlug: slug });
        window.history.pushState({}, '', `/blog/${slug}`);
    };
    
    navigateHome = () => {
        this.setState({ currentPage: 'home' });
        window.history.pushState({}, '', '/');
    };
    
    render() {
        const { currentPage, blogSlug } = this.state;
        
        return (
            <div className="App">
                {currentPage === 'home' && (
                    <>
                        <SideBar/>
                        <Header/>
                        <AboutSection/>
                        <TechnologySection/>
                        <ExperienceSection/>
                        <StoriesSection/>
                        <ContactSection/>
                        
                        {/* Blog Section Link */}
                        <section className="blog-preview-section">
                            <div className="container">
                                <h2>Latest from the Blog</h2>
                                <p>Technical insights and tutorials</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={this.navigateToBlog}
                                >
                                    View Blog
                                </button>
                            </div>
                        </section>
                    </>
                )}
                
                {currentPage === 'blog' && (
                    <>
                        <nav className="blog-nav">
                            <button 
                                className="blog-nav-home"
                                onClick={this.navigateHome}
                            >
                                ← Back to Home
                            </button>
                        </nav>
                        <BlogList />
                    </>
                )}
                
                {currentPage === 'blog-post' && (
                    <>
                        <nav className="blog-nav">
                            <button 
                                className="blog-nav-home"
                                onClick={() => window.history.back()}
                            >
                                ← Back
                            </button>
                        </nav>
                        <BlogPost />
                    </>
                )}
            </div>
        );
    }
}

export default App;
