import React from "react";
import { Link, NavLink } from "react-router-dom";
import { elsewhere } from "../data/site";
import { trackEvent } from "../analytics";

const navItems = [
  { to: "/shiponfriday", label: "Apps" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export const Nav = () => (
  <header className="site-nav">
    <div className="site-nav__inner">
      <Link
        to="/"
        className="site-nav__name"
        onClick={() => trackEvent("Navigation", "logo_click", undefined)}
      >
        Onkar Sarvade
      </Link>
      <nav aria-label="Primary">
        <ul className="site-nav__links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? " site-nav__link--active" : ""}`
                }
                onClick={() => trackEvent("Navigation", "nav_click", item.label.toLowerCase())}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export const ExternalLink = ({ href, platform, className, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    onClick={() => platform && trackEvent("Contact", "social_click", platform)}
  >
    {children}
  </a>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__links">
        {elsewhere.map((item) => (
          <ExternalLink key={item.label} href={item.href} platform={item.platform}>
            {item.label}
          </ExternalLink>
        ))}
        <Link to="/privacy-policy">Privacy</Link>
      </div>
      <p className="site-footer__copy">© 2026 Onkar Sarvade · Made in Mumbai</p>
    </div>
  </footer>
);
