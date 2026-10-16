import React, { useState } from 'react';
import { sendAgentMessage } from '../agents/sendAgentMessage';

let nextId = 1;

function AgentChat({ agent }) {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const userId = nextId++;
    setDraft('');
    setMessages((current) => [...current, { id: userId, role: 'user', text }]);

    sendAgentMessage(agent.id, text).then((result) => {
      if (result.connected) return;
      setMessages((current) => [
        ...current,
        {
          id: nextId++,
          role: 'status',
          text: 'Not sent. This chat is not connected yet.',
        },
      ]);
    });
  }

  return (
    <section className="agent-chat" aria-labelledby="agent-chat-heading">
      <div className="agent-chat-banner">
        <h2 id="agent-chat-heading">Chat</h2>
        <p>Coming soon. This chat is not connected.</p>
      </div>

      <div className="agent-chat-log" role="log" aria-live="polite" aria-relevant="additions">
        {messages.length === 0 ? (
          <p className="agent-chat-empty">No messages yet.</p>
        ) : (
          <ol>
            {messages.map((message) => (
              <li key={message.id} className={`agent-chat-message agent-chat-message--${message.role}`}>
                <span className="agent-chat-role">
                  {message.role === 'user' ? 'You' : 'Status'}
                </span>
                <p>{message.text}</p>
              </li>
            ))}
          </ol>
        )}
      </div>

      <form className="agent-chat-form" onSubmit={handleSubmit}>
        <label htmlFor="agent-chat-input">Message</label>
        <div className="agent-chat-row">
          <input
            id="agent-chat-input"
            name="message"
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a message"
            autoComplete="off"
          />
          <button type="submit" disabled={!draft.trim()}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default AgentChat;
