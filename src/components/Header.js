import React, { Component } from 'react';
import '../css/header.css';
import { EmailModal } from './EmailModal';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailModalShow: false,
      menuOpen: false,
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrolled = window.pageYOffset > 24 || document.documentElement.scrollTop > 24;
    if (scrolled !== this.state.scrolled) {
      this.setState({ scrolled });
    }
  }

  toggleMenu() {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  viewEmailModal() {
    this.setState({ emailModalShow: true, menuOpen: false });
  }

  render() {
    const emailModalClose = () => this.setState({ emailModalShow: false });
    const headerClass = [
      'site-header',
      this.state.scrolled ? 'is-scrolled' : '',
      this.state.menuOpen ? 'is-open' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <header className={headerClass}>
        <div className="container header-inner">
          <a className="logo" href="#top" onClick={this.closeMenu}>
            Travis Spuller
          </a>

          <button
            type="button"
            className="menu-trigger"
            aria-label="Toggle navigation"
            aria-expanded={this.state.menuOpen}
            onClick={this.toggleMenu}
          >
            <span />
          </button>

          <nav className={`Navigation${this.state.menuOpen ? ' is-visible' : ''}`}>
            <ul>
              <li>
                <a href="#featured" onClick={this.closeMenu}>
                  Work
                </a>
              </li>
              <li>
                <a href="#about" onClick={this.closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={this.closeMenu}>
                  Experience
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="Button"
                  onClick={() => this.viewEmailModal()}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <EmailModal show={this.state.emailModalShow} onHide={emailModalClose} />
      </header>
    );
  }
}
