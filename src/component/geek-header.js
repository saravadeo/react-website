import React, { Component } from "react";
import { trackEvent } from "../analytics";

class GeekHeader extends Component {
    render() {
        return (
            <header className="geek-header">
                <div className="geek-terminal">
                    <div className="geek-terminal-header">
                        <div className="geek-terminal-buttons">
                            <span className="geek-btn geeks-btn-red"></span>
                            <span className="geek-btn geeks-btn-yellow"></span>
                            <span className="geek-btn geeks-btn-green"></span>
                        </div>
                        <span className="geek-terminal-title">onkar@portfolio:~</span>
                    </div>
                    
                    <div className="geek-terminal-body">
                        <div className="geek-line">
                            <span className="geek-prompt">$</span>
                            <span className="geek-command"> whoami</span>
                        </div>
                        
                        <div className="geek-line geek-output">
                            <h1 className="geek-name">
                                <span className="geek-bracket">[</span>
                                Onkar Sarvade
                                <span className="geek-bracket">]</span>
                            </h1>
                        </div>
                        
                        <div className="geek-line">
                            <span className="geek-prompt">$</span>
                            <span className="geek-command"> cat role.txt</span>
                        </div>
                        
                        <div className="geek-line geek-output">
                            <p className="geek-role">Software Engineer // Full Stack Developer</p>
                        </div>
                        
                        <div className="geek-line">
                            <span className="geek-prompt">$</span>
                            <span className="geek-command blink"> _</span>
                        </div>
                    </div>
                </div>
                
                <div className="geek-stats">
                    <div className="geek-stat">
                        <span className="geek-stat-label">Status:</span>
                        <span className="geek-stat-value geek-status-active">● Available</span>
                    </div>
                    <div className="geek-stat">
                        <span className="geek-stat-label">Location:</span>
                        <span className="geek-stat-value">Remote</span>
                    </div>
                </div>
                
                <div className="geek-ctas">
                    <a href="#section-about" className="geek-btn-primary">
                        <span className="geek-icon">$</span> ./view-profile.sh
                    </a>
                    <button onClick={this.props.onBlogClick} className="geek-btn-secondary">
                        <span className="geek-icon">#</span> Blog
                    </button>
                </div>
            </header>
        );
    }
}

export default GeekHeader;
