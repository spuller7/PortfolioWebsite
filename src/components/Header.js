import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const navItems = [
  { hash: '#agents', label: 'Agents' },
  { hash: '#work', label: 'Work' },
  { hash: '#experience', label: 'Experience' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#education', label: 'Education' },
  { hash: '#contact', label: 'Contact' },
];

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.key === 'Escape' && this.state.menuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const headerClass = ['site-header', this.state.menuOpen ? 'is-open' : '']
      .filter(Boolean)
      .join(' ');

    return (
      <header className={headerClass}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="header-top">
          <Link className="logo" to="/" onClick={this.closeMenu}>
            Travis Spuller
          </Link>
          <button
            type="button"
            className="menu-trigger"
            aria-label={this.state.menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={this.state.menuOpen}
            aria-controls="site-nav"
            onClick={this.toggleMenu}
          >
            <span />
          </button>
        </div>

        <nav id="site-nav" className={this.state.menuOpen ? 'is-visible' : ''} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link to={{ pathname: '/', hash: item.hash }} onClick={this.closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-meta">
          <p>Detroit, Michigan</p>
          <a
            href="https://www.linkedin.com/in/travis-spuller"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:travis.spuller@gmail.com">travis.spuller@gmail.com</a>
        </div>
      </header>
    );
  }
}
