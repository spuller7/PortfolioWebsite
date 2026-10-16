import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import AgentChat from './AgentChat';
import { getAgent } from '../data/agents';
import '../css/agent.css';

function Placeholder({ children }) {
  return (
    <p className="placeholder-copy">
      <strong>Placeholder</strong>
      {children}
    </p>
  );
}

function AgentDetail({ match }) {
  const agent = getAgent(match.params.agentId);

  useEffect(() => {
    const previous = document.title;
    document.title = agent
      ? `${agent.name} — Travis Spuller`
      : 'Agent not found — Travis Spuller';
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [agent]);

  if (!agent) {
    return (
      <>
        <Header />
        <main className="site-main" id="content">
          <p className="agent-back">
            <Link to={{ pathname: '/', hash: '#agents' }}>Back to agents</Link>
          </p>
          <h1>Agent not found</h1>
          <Footer />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="site-main" id="content">
        <p className="agent-back">
          <Link to={{ pathname: '/', hash: '#agents' }}>Back to agents</Link>
        </p>
        <div className="agent-layout">
          <article className="agent-copy">
            <h1>{agent.name}</h1>
            {agent.summary ? (
              <p className="agent-summary">{agent.summary}</p>
            ) : (
              <Placeholder>Add a short description.</Placeholder>
            )}

            <h2>Details</h2>
            {agent.details ? (
              <p>{agent.details}</p>
            ) : (
              <Placeholder>
                {agent.summary
                  ? 'A longer description is not in the repo yet.'
                  : 'Details are not in the repo yet.'}
              </Placeholder>
            )}

            <h2>Features</h2>
            {agent.features.length > 0 ? (
              <ul>
                {agent.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : (
              <Placeholder>Add features.</Placeholder>
            )}

            {agent.site && (
              <p className="agent-site">
                <a href={agent.site} target="_blank" rel="noopener noreferrer">
                  {agent.site.replace(/^https?:\/\//, '')}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            )}
          </article>
          <AgentChat agent={agent} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default AgentDetail;
