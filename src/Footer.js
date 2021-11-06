import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__logo">BLOG</span>
        <p className="footer__copyright">
          © 2021 Inspired by UDX Blog Dribbble Developed by Fatima
        </p>
      </div>
      <div className="footer__socialHandles">
        <a href="https://www.github.com">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com">
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
