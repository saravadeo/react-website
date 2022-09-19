import React, { Component } from "react";
import ReactGA              from "react-ga";

class ContactSection extends Component {
    
    constructor() {
        super();
        this.state = {
            name       : "",
            email      : "",
            phoneNumber: ""
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
            const { name, email, phoneNumber } = this.state;
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phoneNumber);
            fetch("https://script.google.com/macros/s/AKfycbyJNgXOEAsINcL7Yae4wWY3-MhRafmM5miJ7-pAz4dSGROdR1Yc6ZPRX3i0EvTKRuyF/exec", {
                method: "post",
                body  : formData
            }).then(() => {
                this.setState({
                                  name       : "",
                                  email      : "",
                                  phoneNumber: ""
                              });
                alert("Thanks for contacting me. I will get back soon.");
            }).catch(() => {
                alert("Please try again later.");
            });
            
        }
    };
    
    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };
    
    
    render() {
        return (
            <section id="section-contact" className="section-contact">
                <div className="row">
                    <div className="contact">
                        <div className="contact__form">
                            <form action="" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="header-secondary">
                                        Contact me
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input id="name" type="text" className="form__input" placeholder="Full name"
                                           onChange={ this.onChange }
                                           value={ this.state.name }
                                           required/>
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    <input id="email" type="email" className="form__input" placeholder="Email address"
                                           onChange={ this.onChange }
                                           value={ this.state.email }
                                           required/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>
                                <div className="form__group">
                                    <input id="phoneNumber" type="number" className="form__input"
                                           placeholder="Phone number"
                                           onChange={ this.onChange }
                                           value={ this.state.phoneNumber }
                                           required/>
                                    <label htmlFor="phone" className="form__label">Phone number</label>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn-primary" onClick={ this.onSubmit }>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;