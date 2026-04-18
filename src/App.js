import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

// Home page component
const HomePage = () => (
  <>
    <Header />
    <About />
    <Skills />
    <Experience />
    <BlogSection />
    <Contact />
  </>
);

// Blog page with nav
const BlogPage = () => (
  <>
    <nav className="nav-bar">
      <a href="/" className="nav-btn">← Back to Home</a>
      <span className="nav-title">Blog</span>
    </nav>
    <BlogList />
  </>
);

// Blog post page with nav
const BlogPostPage = () => (
  <>
    <nav className="nav-bar">
      <a href="#/blog" className="nav-btn">← Back</a>
      <span className="nav-title">Post</span>
    </nav>
    <BlogPost />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/:slug" component={BlogPostPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
