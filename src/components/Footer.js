import React, { Component } from 'react';
import '../css/footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Travis Spuller</p>
          <a href="mailto:travis.spuller@gmail.com">travis.spuller@gmail.com</a>
        </div>
      </footer>
    );
  }
}
