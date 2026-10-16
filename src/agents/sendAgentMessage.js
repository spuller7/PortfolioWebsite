import { agentApiPath } from '../data/agents';

// Future Vercel serverless function: POST { message } to /api/agents/:agentId
// and return { reply }. Do not call fetch until that function exists.
export function sendAgentMessage(agentId, message) {
  const endpoint = agentApiPath(agentId);
  return Promise.resolve({
    connected: false,
    endpoint,
    message,
  });
}
