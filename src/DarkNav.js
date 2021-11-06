import React from 'react';
import './DarkNav.css';
import { Link } from 'react-router-dom';

function DarkNav() {
  return (
    <nav className="nav">
      <span className="nav__logo">BLOG</span>
      <div className="nav__items">
        <Link to="/blogs/new">New Blog</Link>
        <button>Get in Touch</button>
      </div>
    </nav>
  );
}

export default DarkNav;
