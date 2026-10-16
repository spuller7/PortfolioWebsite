const agents = [
  {
    id: 'pebbles',
    name: 'Pebbles',
    summary: null,
    details: null,
    features: [],
    site: null,
  },
  {
    id: 'tixeye',
    name: 'TixEye',
    summary: 'AI ticketing aggregator and agentic commerce platform',
    details: null,
    features: [],
    site: 'https://www.tixeye.com',
  },
];

export function getAgent(id) {
  return agents.find((agent) => agent.id === id) || null;
}

export function agentApiPath(agentId) {
  return `/api/agents/${agentId}`;
}

export default agents;
