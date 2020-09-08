import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {EmailModal} from './EmailModal';
import {ResumeModal} from './ResumeModal';
import {Header} from './Header';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {emailModalShow : false, resumeModalShow : false}
    }

    viewEmailModal() {
        this.setState({
            emailModalShow: true
        })
    }

    render() {

        let emailModalClose =() => this.setState({emailModalShow:false});
        let resumeModalClose =() => this.setState({resumeModalShow:false});

        return ( 
            <div className="App">
                <Header viewEmailModal={this.viewEmailModal.bind(this)} />

                <div className="MainBanner">
                    <div>
                    <div className="container">
                        
                            <div className="row">
                                <div className="Slogan">
                                    <div className="Slogan-headline">Let's Get Your Product</div>
                                    <img data-sal="slide-down" data-sal-delay="500" src="images/Developed.svg"></img>
                                </div>
                            </div>
                            
                            <div className="row Button-container">
                                <div className="Center">
                                    <a data-sal="slide-right" data-sal-delay="1000" className="Button" onClick={()=> this.setState({resumeModalShow:true})}>Resume</a>
                                    <a data-sal="slide-left" data-sal-delay="1000" className="Button" onClick={()=> this.setState({emailModalShow:true})}>Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EmailModal show={this.state.emailModalShow} onHide={emailModalClose} />
                <ResumeModal show={this.state.resumeModalShow} onHide={resumeModalClose} />

                <div className="Arrow"><a href="#About" className="Center"><img src="images/arrow.png"></img></a></div>

                <section className="Section" id="About">
                    <div className="container">
                    <div className="row">
                        
                        <div className="col-6 Mobile-only Align-center">
                            <img className="Phone-static" src="images/phone-static.svg"></img>
                        </div>

                        <div className="col-6 Graphic-description">
                        <div className="Align-left">
                            <h1 data-sal="slide-right">Mobile App Development</h1>
                            <ul>
                            <li data-sal="slide-right" data-sal-delay="100">
                                Hybrid-App Development and Publishing
                            </li>
                            <li data-sal="slide-right" data-sal-delay="200">
                                Hyper-Casual Game Development
                            </li>
                            <li data-sal="slide-right" data-sal-delay="300">
                                Progressive Web Apps
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="col-6 Desktop-only">
                            <div className="shapeshifter Phone Graphic" data-sal="slide-left"></div>
                        </div>

                    </div>

                    <div className="row">
                        
                        <div className="col-6 Desktop-only">
                            <div className="shapeshifter Computer Graphic" data-sal="slide-right"></div>
                        </div>

                        <div className="col-6 Mobile-only Align-center">
                            <img className="Computer-static" src="images/computer-static.svg"></img>
                        </div>

                        <div className="col-6 Graphic-description">
                            <div className="Align-right">
                                <h1 data-sal="slide-left">Web Development</h1>
                                <ul>
                                <li data-sal="slide-left" data-sal-delay="100">
                                    Front & Back End Development
                                </li>
                                <li data-sal="slide-left" data-sal-delay="200">
                                    API and Database Architecture
                                </li>
                                <li data-sal="slide-left" data-sal-delay="300">
                                    User Experience Design
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="Section" id="Portfolio">
                    <div>
                    <div className="container">
                        <div className="row">
                        <h1>Latest Work</h1>
                        </div>

                        <div className="row">
                        <ul id="Projects">
                            <li>
                            <a href="https://apps.apple.com/us/app/gnop/id1492956973" target="_blank">
                                <img data-sal="slide-left" data-sal-delay="100" src="images/portfolio/gnop-showcase.png"></img>
                            </a>
                            </li>
                            <li>
                            <a href="https://globalgamejam.org/2019/games/nestegg" target="_blank">
                                <img data-sal="slide-left" data-sal-delay="200" src="images/portfolio/nest-egg-showcase.png"></img>
                            </a>
                            </li>
                            <li>
                            <a href="https://ldjam.com/events/ludum-dare/41/tidal" target="_blank">
                                <img data-sal="slide-left" data-sal-delay="300" src="images/portfolio/tidal-showcase.png"></img>
                            </a>
                            </li>
                            <li>
                            <a>
                                <img data-sal="slide-left" data-sal-delay="400" src="images/portfolio/coin-king-showcase.png"></img>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="Section" id="Toolkit">
                    <div className="container">
                    <div className="row">
                        <img data-sal="slide-down" data-sal-delay="100" className="UofM-logo" src="images/University-of-Michigan-Logo.png"></img>
                    </div>

                    <div className="row">
                        <ul id="Companies">
                        <li>
                            <a href="https://aysling.com/" target="_blank">
                            <img data-sal="slide-right" data-sal-delay="100" src="images/aysling-logo.png"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://annarborusa.org/" target="_blank">
                            <img data-sal="slide-up" data-sal-delay="100" src="images/spark-logo.png"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://intvo.com/" target="_blank">
                            <img data-sal="slide-left" data-sal-delay="100" src="images/intvo-logo.png"></img>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div className="row">
                        <ul className="Toolkit">
                        <li>
                            <img src="/images/toolkit/xd.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/photoshop.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/illustrator.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/php.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/graphql.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/c.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/cpp.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/csharp.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/css.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/ethereum.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/firebase.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/git.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/sass.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/html.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/ionic.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/java.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/javascript.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/json.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/python.png"></img>
                        </li>
                        <li>
                            <img src="/images/toolkit/react.png"></img>
                        </li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="Center Align-center">
                        <h1>Ready to get started?</h1>
                        </div>
                    </div>

                    <div className="row Final-button">
                        <div className="Center">
                        <a className="Button" onClick={()=> this.setState({emailModalShow:true})}>Contact</a>
                        </div>
                    </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="left-text-content">
                                <p>Copyright &copy; 2020 Travis Spuller</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </footer>
                </div>
        );
    }
}