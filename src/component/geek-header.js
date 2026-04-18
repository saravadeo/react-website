import React, { Component } from "react";
import ReactGA from "react-ga";

class GeekHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: "",
            fullText: "Software Engineer // Full Stack Developer",
            showCursor: true
        };
    }
    
    componentDidMount() {
        this.typeText();
    }
    
    typeText = () => {
        const { fullText } = this.state;
        let currentIndex = 0;
        
        const typeInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                this.setState({ typedText: fullText.slice(0, currentIndex) });
                currentIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    };
    
    onTerminalClick = () => {
        ReactGA.event({
            category: "Header",
            action: "terminal_clicked"
        });
    };
    
    render() {
        const { typedText, showCursor } = this.state;
        
        return (
            <header className="geek-header">
                {/* Terminal Window */}
                <div className="geek-terminal">
                    {/* Terminal Header */}
                    <div className="geek-terminal-header">
                        <div className="geek-terminal-buttons">
                            <span className="geek-btn geeks-btn-red"></span>
                            <span className="geek-btn geeks-btn-yellow"></span>
                            <span className="geek-btn geeks-btn-green"></span>
                        </div>
                        <span className="geek-terminal-title">onkar@portfolio:~</span>
                    </div>
                    
                    {/* Terminal Body */}
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
                            <p className="geek-role">
                                {typedText}
                                {showCursor && <span className="geek-cursor">█</span>}
                            </p>
                        </div>
                        
                        <div className="geek-line">
                            <span className="geek-prompt">$</span>
                            <span className="geek-command blink"> _</span>
                        </div>
                    </div>
                </div>
                
                {/* Quick Stats */}
                <div className="geek-stats">
                    <div className="geek-stat">
                        <span className="geek-stat-label">Status:</span>
                        <span className="geek-stat-value geek-status-active">● Available for hire</span>
                    </div>
                    <div className="geek-stat">
                        <span className="geek-stat-label">Location:</span>
                        <span className="geek-stat-value">Remote / Worldwide</span>
                    </div>
                    <div className="geek-stat">
                        <span className="geek-stat-label">Stack:</span>
                        <span className="geek-stat-value geek-tag">React</span>
                        <span className="geek-stat-value geek-tag">Node.js</span>
                        <span className="geek-stat-value geek-tag">AWS</span>
                    </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="geek-ctas">
                    <a href="#section-about" className="geek-btn-primary" onClick={this.onTerminalClick}>
                        <span className="geek-icon">$</span> ./view-profile.sh
                    </a>
                    <a href="https://github.com/saravadeo" target="_blank" rel="noopener noreferrer" className="geek-btn-secondary">
                        <span className="geek-icon">⚡</span> GitHub
                    </a>
                </div>
                
                {/* Scroll Indicator */}
                <div className="geek-scroll">
                    <span className="geek-scroll-text">Scroll to explore</span>
                    <span className="geek-scroll-arrow">↓</span>
                </div>
            </header>
        );
    }
}

export default GeekHeader;
