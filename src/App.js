import React, { useEffect } from 'react';
import './App.css';
import { Main } from './components/Main';
import AgentDetail from './components/AgentDetail';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';

function scrollToHash(hash) {
  const id = hash.replace('#', '');
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  target.scrollIntoView({ block: 'start' });
  root.style.scrollBehavior = previous;
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash));
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollManager />
        <Switch>
          <Route path="/agents/:agentId" component={AgentDetail} />
          <Route path="/" component={Main} exact />
          <Redirect from="/portfolio" to={{ pathname: '/', hash: '#work' }} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
