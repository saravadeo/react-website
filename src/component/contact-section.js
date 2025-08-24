import React, { Component } from "react";
import ReactGA              from "react-ga";

class ContactSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name       : "",
            email      : "",
            phoneNumber: "",
            message    : "",
            showSuccess: false
        };
    }
    
    onSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        ReactGA.event({
                          category: "ContactUs",
                          action  : "submit_clicked"
                      });
        if ( this.state.name && this.state.email && this.state.phoneNumber ) {
            const { name, email, phoneNumber, message } = this.state;
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phoneNumber);
            if (message) {
                formData.append('message', message);
            }
            
            // Submit to Getform
            fetch("https://getform.io/f/ajjroeza", {
                method: "POST",
                body: formData
            }).then(() => {
                this.setState({
                                  name       : "",
                                  email      : "",
                                  phoneNumber: "",
                                  message    : "",
                                  showSuccess: true
                              });
                // Auto-hide success message after 4 seconds
                setTimeout(() => {
                    this.setState({ showSuccess: false });
                }, 4000);
            }).catch(() => {
                alert("Please try again later.");
            });
            
        }
    };
    
    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    closeSuccess = () => {
        this.setState({ showSuccess: false });
    };
    
    
    render() {
        return (
            <section id="section-contact" className="section-contact" style={{position:'relative'}}>
                {/* Success Popup */}
                {this.state.showSuccess && (
                    <div className="success-popup-overlay" onClick={this.closeSuccess}>
                        <div className="success-popup" onClick={(e) => e.stopPropagation()}>
                            <div className="success-popup__icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="success-popup__title">Message Sent Successfully!</h3>
                            <p className="success-popup__message">
                                Thank you for contacting me. I'll get back to you soon!
                            </p>
                            <button className="success-popup__close" onClick={this.closeSuccess}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="contact">
                        <div className="contact__form">
                            <form action="https://getform.io/f/ajjroeza" method="POST" encType="multipart/form-data" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="header-secondary">
                                        Contact me
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input id="name" name="name" type="text" className="form__input" placeholder="Full name"
                                           onChange={ this.onChange }
                                           value={ this.state.name }
                                           required/>
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    <input id="email" name="email" type="email" className="form__input" placeholder="Email address"
                                           onChange={ this.onChange }
                                           value={ this.state.email }
                                           required/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>
                                <div className="form__group">
                                    <input id="phoneNumber" name="phone" type="tel" className="form__input"
                                           placeholder="Phone number"
                                           onChange={ this.onChange }
                                           value={ this.state.phoneNumber }
                                           required/>
                                    <label htmlFor="phone" className="form__label">Phone number</label>
                                </div>
                                <div className="form__group">
                                    <textarea id="message" name="message" className="form__input" 
                                              placeholder="Your message (optional)"
                                              onChange={ this.onChange }
                                              value={ this.state.message }
                                              rows="4"
                                              style={{resize: 'vertical', minHeight: '100px'}}/>
                                    <label htmlFor="message" className="form__label">Message</label>
                                </div>
                                <div className="form__group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{height: 30, width: 100, position:'absolute', bottom: 0, right: 0}} onClick={this.props.onShowMoon} />
            </section>
        );
    }
}

export default ContactSection;