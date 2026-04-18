import React from 'react';

const Header = ({ onBlogClick }) => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__terminal">
                    <div className="header__terminal-bar">
                        <span className="header__terminal-btn header__terminal-btn--red"></span>
                        <span className="header__terminal-btn header__terminal-btn--yellow"></span>
                        <span className="header__terminal-btn header__terminal-btn--green"></span>
                        <span className="header__terminal-title">portfolio — bash — 80×24</span>
                    </div>
                    <div className="header__terminal-body">
                        <div className="header__line">
                            <span className="header__prompt">$</span>
                            <span className="header__command"> whoami</span>
                        </div>
                        <div className="header__line header__line--output">
                            <h1 className="header__name">Onkar Sarvade</h1>
                        </div>
                        <div className="header__line">
                            <span className="header__prompt">$</span>
                            <span className="header__command"> cat role.txt</span>
                        </div>
                        <div className="header__line header__line--output">
                            <p className="header__role">Software Engineer // Full Stack Developer</p>
                        </div>
                        <div className="header__line">
                            <span className="header__prompt">$</span>
                            <span className="header__cursor">█</span>
                        </div>
                    </div>
                </div>
                
                <div className="header__actions">
                    <a href="#about" className="btn btn--primary">
                        View Profile
                    </a>
                    <button onClick={onBlogClick} className="btn btn--secondary">
                        Read Blog
                    </button>
                </div>
                
                <div className="header__scroll">
                    <span>Scroll</span>
                    <div className="header__scroll-arrow">↓</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
