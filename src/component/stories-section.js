import React, { Component } from "react";

class StoriesSection extends Component {
    render() {
        return (
            <section id="section-stories" className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={ require("../img/video.mp4") } type="video/mp4"/>
                        <source src={ require("../img/video.webm") } type="video/webm"/>
                        Your browser not supported
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="header-secondary">
                        KEY PEOPLE
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="story">
                            <a href="https://www.linkedin.com/in/chouguleds/">
                                <figure className="story__shape">
                                    <img src={ require("../img/nat-8.jpg") } alt="Person photo1" className="story__img"/>
                                    <figcaption className="story__caption">Deepak Chougule</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="header-tertiary">
                                        Deepak Chougule <span className="font-color-black">|</span> SDE II at
                                        Dream11 <span
                                        className="font-color-black">|</span> Trader, Believer, Dreamer
                                    </h3>
                                    <p>
                                        Language agnostic backend engineer having strong hold over Microservices
                                        Architecture,
                                        Scalability concepts, Data Structures, Database. Always strives for performance
                                        and
                                        efficiency who believes gaining a millisecond is a great achievement.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="story">
                            <a href="https://www.linkedin.com/in/jigar-shah-engg/">
                                <figure className="story__shape">
                                    <img src={ require("../img/nat-9.jpg") } alt="Person photo2" className="story__img"/>
                                    <figcaption className="story__caption">Jigar Shah</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="header-tertiary">
                                        Jigar Shah <span className="font-color-black">|</span> Product Engineer at
                                        GO-JEK
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has
                                        been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is
                                        simply
                                        dummy
                                        text of
                                        the printing. Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="story">
                            <a href="https://www.linkedin.com/in/rajat-chandak-28b184a1/">
                                <figure className="story__shape">
                                    <img src={ require("../img/nat-81.jpg") } alt="Person photo3" className="story__img"/>
                                    <figcaption className="story__caption">Rajat Chandak</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="header-tertiary">Rajat Chandak <span
                                        className="font-color-black">|</span> Software
                                        Engineer at N26</h3>
                                    <p>
                                        I am an experienced Software Engineer with technical knowledge in designing and
                                        implementing
                                        scalable and resilient systems. Key interest areas lies in Distributed Systems,
                                        micro
                                        services.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="story">
                            <a href="https://www.linkedin.com/in/suraj-mandal-181938a0/">
                                <figure className="story__shape">
                                    <img src={ require("../img/nat-91.jpg") } alt="Person photo4"
                                         className="story__img"/>
                                    <figcaption className="story__caption">Suraj Mandal</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="header-tertiary">Suraj Mandal <span
                                        className="font-color-black">|</span> Full-stack
                                        Developer at ShoppinPal</h3>
                                    <p>
                                        I'm a full-stack developer having experience in building complex integrations
                                        end to
                                        end.
                                        Always up for learning new technologies. Also, have the ability to switch hats
                                        in a
                                        jiffy in
                                        regards to the development process.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="https://jigarminion.dev" className="btn-text">
                        Read about them &rarr;
                    </a>
                </div>
            </section>
        );
    }
}

export default StoriesSection;