import React, { useState, useEffect } from 'react';
import './Home.css';
import Banner from './Banner';
import Blog from './Blog';
import axios from './axios';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/');
      if (response.status === 200) {
        setBlogs(response.data.data);
      } else {
        setError(response.data.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="home">
      <Banner />
      <div className="home__blogs">
        {blogs?.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
