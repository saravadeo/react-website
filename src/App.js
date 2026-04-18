import React, { Component } from "react";
import "./scss/main.scss";

// Components
import Header from "./component/header";
import About from "./component/about";
import Skills from "./component/skills";
import Experience from "./component/experience";
import BlogSection from "./component/blog-section";
import Contact from "./component/contact";

// Blog Pages
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            blogSlug: null
        };
    }
    
    componentDidMount() {
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
                    <Header onBlogClick={this.navigateToBlog} />
                    <About />
                    <Skills />
                    <Experience />
                    <BlogSection onBlogClick={this.navigateToBlog} />
                    <Contact />
                </div>
            );
        }
        
        if (currentPage === 'blog') {
            return (
                <div className="App blog-page">
                    <nav className="nav-bar">
                        <button className="nav-btn" onClick={this.navigateHome}>
                            ← Back to Home
                        </button>
                        <span className="nav-title">Blog</span>
                    </nav>
                    <BlogList />
                </div>
            );
        }
        
        if (currentPage === 'blog-post') {
            return (
                <div className="App blog-page">
                    <nav className="nav-bar">
                        <button className="nav-btn" onClick={() => window.history.back()}>
                            ← Back
                        </button>
                        <span className="nav-title">{blogSlug}</span>
                    </nav>
                    <BlogPost />
                </div>
            );
        }
        
        return (
            <div className="App">
                <Header onBlogClick={this.navigateToBlog} />
            </div>
        );
    }
}

export default App;
