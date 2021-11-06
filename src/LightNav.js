import React from 'react';
import './LightNav.css';

function LightNav() {
  return (
    <nav className="nav">
      <span className="nav__logo">BLOG</span>
      <div className="nav__items">
        <a href="https://www.google.com">
          New Blog
        </a>
        <button>Get in Touch</button>
      </div>
    </nav>
  );
}

export default LightNav;
