import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const id = anchor.getAttribute('href').slice(1);
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  const headerOffset = 80;
  const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
  window.history.pushState(null, '', `#${id}`);
});

serviceWorker.unregister();
