import React from 'react';
import './Blog.css';
import blog from './images/room1.jpg';
import author from './images/person.jpg';
import { Link } from 'react-router-dom';

function Blog({ blog }) {
  return (
    <Link to={`/blogs/${blog?._id}`}>
      <div className="blog">
        <img className="blog__image" src={blog?.image} alt="Blog Title" />
        <h4 className="blog__category">{blog?.category}</h4>
        <h3 className="blog__title">{blog?.title}</h3>
        <p className="blog__body">{blog?.body}</p>
        <div className="blog__author">
          <img
            src={author}
            alt="Fatima Mujahid"
            className="blog__authorImage"
          />
          <div>
            <h4 className="blog__authorName">Fatima Mujahid</h4>
            <p className="blog__date">{blog?.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Blog;
