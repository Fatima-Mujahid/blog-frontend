import React from 'react';
import './Banner.css';
import blog from './images/plant1.jpg';
import author from './images/person.jpg';

function Banner() {
  return (
    <header className="banner">
      <img className="banner__image" src={blog} alt="Blog Title" />
      <div className="banner__contents">
        <div className="banner__blog">
          <p className="banner__category">Blog Category</p>
          <h1 className="banner__title">
            Blog Title: Why Should We Do This For What Reasons Why Why
          </h1>
          <p className="banner__body">
            A blog is a discussion or informational website published on the
            World Wide Web consisting of discrete, often informal diary-style
            text entries. Posts are typically displayed in reverse chronological
            order.
          </p>
        </div>
        <div className="banner__author">
          <img
            src={author}
            alt="Fatima Mujahid"
            className="banner__authorImage"
          />
          <div>
            <p className="banner__authorName">Fatima Mujahid</p>
            <p className="banner__date">September 10, 2021</p>
          </div>
        </div>
      </div>
      <div className="banner__arrows">
        <i
          className="fa fa-long-arrow-left banner__arrow"
          aria-hidden="true"
        ></i>
        <i
          className="fa fa-long-arrow-right banner__arrow"
          aria-hidden="true"
        ></i>
      </div>
    </header>
  );
}

export default Banner;
