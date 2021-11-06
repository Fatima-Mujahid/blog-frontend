import React, { useState, useEffect } from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';
import axios from './axios';

function CreateForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const createHandler = (e) => {
    e.preventDefault();
    axios
      .post('/', { title, category, image, body })
      .then((response) => {
        setMessage(response.data.message);
        setTitle('');
        setCategory('');
        setImage('');
        setBody('');
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="form" onSubmit={createHandler}>
      <div className="form__inputFields">
        <span className="form__logo">BLOG</span>
        <h4 className="form__subheading">Create</h4>
        <h1 className="form__heading">Create New Blog</h1>
        <input
          className="form__input"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
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
          placeholder="Category"
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
          placeholder="Image"
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
          placeholder="Body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button className="form__button" type="submit">
          Create
        </button>
      </div>
      <img src="" alt="Blog" className="form__image" />
    </form>
  );
}

export default CreateForm;
