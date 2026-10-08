import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Nav, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ShipOnFriday from "./pages/ShipOnFriday";
import About from "./pages/About";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { trackPageView } from "./analytics";
import "./scss/main.scss";

// Old one-page anchors (/#experience etc.) now live on their own pages
const LEGACY_ANCHORS = {
  "#about": "/about",
  "#experience": "/about",
  "#skills": "/about",
  "#education": "/about",
  "#contact": "/about",
  "#opensource": "/projects",
  "#apps": "/shiponfriday",
};

const AppShell = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const legacyTarget = location.pathname === "/" && LEGACY_ANCHORS[location.hash];

  return (
    <div className="site">
      <Nav />
      <main className="site-main">
        {legacyTarget ? (
          <Navigate to={legacyTarget} replace />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shiponfriday" element={<ShipOnFriday />} />
            <Route path="/apps" element={<Navigate to="/shiponfriday" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router basename="/">
    <AppShell />
  </Router>
);

export default App;
