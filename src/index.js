import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function scrollToId(id, behavior) {
  const target = document.getElementById(id);
  if (!target) return;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  if (behavior === 'auto') root.style.scrollBehavior = 'auto';
  target.scrollIntoView({ behavior, block: 'start' });
  if (behavior === 'auto') root.style.scrollBehavior = previous;
}

function scrollBehavior() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return reduce ? 'auto' : 'smooth';
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('hashchange', () => {
  const id = window.location.hash.slice(1);
  if (id) scrollToId(id, scrollBehavior());
});

const initialId = window.location.hash.slice(1);
if (initialId) {
  scrollToId(initialId, 'auto');
  window.addEventListener('load', () => scrollToId(initialId, 'auto'));
}

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const id = anchor.getAttribute('href').slice(1);
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  scrollToId(id, scrollBehavior());
  window.history.pushState(null, '', `#${id}`);
});

serviceWorker.unregister();
