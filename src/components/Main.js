import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import FeaturedGrid from './FeaturedGrid';
import ProjectGrid from './ProjectGrid';
import experience from '../data/experience';
import skills from '../data/skills';
import education from '../data/education';
import agents from '../data/agents';
import '../css/agent.css';

const summary =
  'Full-stack engineer specializing in agentic AI systems and automation pipelines, building LLM applications, RAG-based analytics tools, and agentic workflows with LangChain, LangGraph, and vector stores. Delivers AI features end to end across Python, Node.js, and React, from model orchestration to production interfaces.';

export function Main() {
  return (
    <>
      <Header />
      <main className="site-main" id="content">
        <section className="hero" id="top">
          <p className="eyebrow">Detroit, Michigan</p>
          <h1>Senior AI Engineer</h1>
          <p className="lede">{summary}</p>
          <ul className="hero-stack" aria-label="Core tools">
            <li>LangChain</li>
            <li>LangGraph</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
          <div className="hero-actions">
            <Link className="Button Button--primary" to={{ pathname: '/', hash: '#agents' }}>
              Agents
            </Link>
            <Link className="Button Button--ghost" to={{ pathname: '/', hash: '#experience' }}>
              Experience
            </Link>
          </div>
        </section>

        <section className="Section" id="agents" aria-labelledby="agents-heading">
          <div className="section-intro">
            <h2 id="agents-heading">Agents</h2>
          </div>
          <div className="agent-cards">
            {agents.map((agent) => (
              <Link key={agent.id} className="agent-card" to={`/agents/${agent.id}`}>
                <h3>{agent.name}</h3>
                {agent.summary ? (
                  <p>{agent.summary}</p>
                ) : (
                  <p className="placeholder-copy">
                    <strong>Placeholder</strong>
                    Add a short description.
                  </p>
                )}
                <span className="agent-card-action">Open</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="Section" id="experience" aria-labelledby="experience-heading">
          <div className="section-intro">
            <h2 id="experience-heading">Experience</h2>
          </div>
          <ol className="role-list">
            {experience.map((role) => (
              <li key={role.id}>
                <article className="role">
                  <div className="role-meta">
                    <p className="role-dates">
                      <time dateTime={role.start}>{role.dates}</time>
                    </p>
                    <p className="role-location">{role.location}</p>
                  </div>
                  <div className="role-body">
                    <h3>{role.title}</h3>
                    <p className="role-company">{role.company}</p>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="Section" id="skills" aria-labelledby="skills-heading">
          <div className="section-intro">
            <h2 id="skills-heading">Skills</h2>
          </div>
          <div className="skill-groups">
            {skills.map((group) => (
              <section key={group.id} className="skill-group" aria-labelledby={`${group.id}-heading`}>
                <h3 id={`${group.id}-heading`}>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="Section" id="education" aria-labelledby="education-heading">
          <div className="section-intro">
            <h2 id="education-heading">Education</h2>
          </div>
          <ul className="education-list">
            {education.map((item) => (
              <li key={item.id}>
                <h3>{item.credential}</h3>
                <p>{item.school}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="Section" id="work" aria-labelledby="work-heading">
          <div className="section-intro">
            <h2 id="work-heading">Work</h2>
            <p>AI and agentic projects first, then earlier software.</p>
          </div>
          <h3 className="work-subhead">AI and agentic</h3>
          <FeaturedGrid />
          <h3 className="work-subhead work-subhead--later">Earlier work</h3>
          <ProjectGrid />
        </section>

        <section className="Section Section--contact" id="contact" aria-labelledby="contact-heading">
          <div className="contact-panel">
            <h2 id="contact-heading">Contact</h2>
            <p>Detroit, Michigan</p>
            <ul className="contact-links">
              <li>
                <a href="mailto:travis.spuller@gmail.com">travis.spuller@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/travis-spuller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
