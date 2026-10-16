import React from 'react';
import '../css/footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Travis Spuller</p>
      <p>Detroit, Michigan</p>
      <a href="mailto:travis.spuller@gmail.com">travis.spuller@gmail.com</a>
    </footer>
  );
}
