import React, { useState, useEffect } from 'react';
import './Form.css';
import { Link, useHistory } from 'react-router-dom';
import axios from './axios';

function EditForm(props) {
  const blog = props.location.state.blog;
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [image, setImage] = useState(blog.image);
  const [body, setBody] = useState(blog.body);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/${blog?._id}`, { title, category, image, body })
      .then((response) => {
        setMessage(response.data.message);
        setTitle('');
        setCategory('');
        setImage('');
        setBody('');
        history.push(`/blogs/${blog?._id}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="form" onSubmit={updateHandler}>
      <div className="form__inputFields">
        <span className="form__logo">BLOG</span>
        <h4 className="form__subheading">Edit</h4>
        <h1 className="form__heading">Edit Blog</h1>
        <input
          className="form__input"
          type="text"
          name="title"
          id="title"
          value={title}
          autoComplete="off"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          name="category"
          id="category"
          value={category}
          autoComplete="off"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          name="image"
          id="image"
          value={image}
          autoComplete="off"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <textarea
          className="form__input"
          name="body"
          id="body"
          rows="7"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button className="form__button" type="submit">
          Update
        </button>
      </div>
      <img src="" alt="Blog" className="form__image" />
    </form>
  );
}

export default EditForm;
