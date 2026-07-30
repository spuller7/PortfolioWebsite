import React, { Component } from 'react';
import { EmailModal } from './EmailModal';
import { Header } from './Header';
import { Footer } from './Footer';
import FeaturedGrid from './FeaturedGrid';
import ProjectGrid from './ProjectGrid';

const companies = [
  { name: 'TicketSocket', href: 'https://ticketsocket.com/', src: 'images/TicketSocket_RGB_422x292.png' },
  { name: 'Ann Arbor SPARK', href: 'https://annarborusa.org/', src: 'images/spark-logo.png' },
  { name: 'Intvo', href: 'https://intvo.com/', src: 'images/intvo-logo.png' },
  { name: 'Ford', href: 'https://ford.com/', src: 'images/ford-logo.png' },
  { name: 'Quantum Signal AI', href: 'https://quantumsignalai.com/', src: 'images/qsai-logo.png' },
  { name: 'Aysling', href: 'https://aysling.com/', src: 'images/aysling-logo.png' },
];

const skills = [
  'xd', 'photoshop', 'illustrator', 'php', 'graphql', 'c', 'cpp', 'csharp',
  'css', 'ethereum', 'firebase', 'git', 'sass', 'html', 'ionic', 'java',
  'javascript', 'json', 'python', 'react',
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { emailModalShow: false };
  }

  viewEmailModal() {
    this.setState({ emailModalShow: true });
  }

  render() {
    const emailModalClose = () => this.setState({ emailModalShow: false });

    return (
      <>
        <Header />
        <main className="App" id="top">
          <section className="hero">
            <div className="hero-atmosphere" aria-hidden="true" />
            <div className="container hero-content">
              <p className="hero-brand">Travis Spuller</p>
              <h1 className="hero-headline">Full-stack engineer building products that ship.</h1>
              <p className="hero-lede">
                Mobile apps, web platforms, and game experiences — with a focus on
                clean architecture, precise UX, and modern JavaScript.
              </p>
              <div className="hero-actions">
                <a className="Button Button--primary" href="#featured">
                  View work
                </a>
                <button
                  type="button"
                  className="Button Button--ghost"
                  onClick={() => this.viewEmailModal()}
                >
                  Get in touch
                </button>
              </div>
            </div>
          </section>

          <section className="Section Section--featured" id="featured">
            <div className="container">
              <div className="section-intro">
                <h2>Recent projects</h2>
                <p>Current work across ticketing, marketing, and AI commerce.</p>
              </div>
              <FeaturedGrid />
            </div>
          </section>

          <section className="Section Section--work" id="work">
            <div className="container">
              <div className="section-intro">
                <h2>Selected work</h2>
                <p>Apps, games, and design systems across web and mobile.</p>
              </div>
              <ProjectGrid />
            </div>
          </section>

          <section className="Section Section--about" id="about">
            <div className="container about-grid">
              <div className="section-intro">
                <h2>About</h2>
                <p>
                  Computer Science graduate from the University of Michigan with
                  industry experience in data processing, database architecture,
                  and user-experience design. I care about consistency and
                  precision from concept through launch.
                </p>
              </div>
              <div className="about-columns">
                <div className="about-block">
                  <h3>Mobile</h3>
                  <ul>
                    <li>Hybrid app development and publishing</li>
                    <li>Hyper-casual game development</li>
                    <li>Progressive web apps</li>
                  </ul>
                </div>
                <div className="about-block">
                  <h3>Web</h3>
                  <ul>
                    <li>Front-end and back-end development</li>
                    <li>API and database architecture</li>
                    <li>User experience design</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="Section Section--experience" id="experience">
            <div className="container">
              <div className="section-intro">
                <h2>Experience</h2>
                <p>Teams and tools I’ve worked with along the way.</p>
              </div>

              <div className="experience-logo">
                <img
                  className="UofM-logo"
                  src="images/University-of-Michigan-Logo.png"
                  alt="University of Michigan"
                />
              </div>

              <ul className="company-grid">
                {companies.map((company) => (
                  <li key={company.name}>
                    <a href={company.href} target="_blank" rel="noopener noreferrer">
                      <img src={company.src} alt={company.name} />
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="Toolkit">
                {skills.map((skill) => (
                  <li key={skill}>
                    <img src={`images/toolkit/${skill}.png`} alt={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="Section Section--contact" id="contact">
            <div className="container contact-panel">
              <h2>Ready to get started?</h2>
              <p>Let’s talk about your next product, app, or prototype.</p>
              <button
                type="button"
                className="Button Button--primary"
                onClick={() => this.viewEmailModal()}
              >
                Contact
              </button>
            </div>
          </section>

          <EmailModal show={this.state.emailModalShow} onHide={emailModalClose} />
          <Footer />
        </main>
      </>
    );
  }
}
