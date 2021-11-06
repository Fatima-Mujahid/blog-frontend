import React, { useState, useEffect } from 'react';
import './Detail.css';
import BlogDetail from './BlogDetail';
import Blog from './Blog';
import axios from './axios';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [error_, setError_] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/${id}`);
      if (response.status === 200) {
        setBlog(response.data.data);
      } else {
        setError(response.data.message);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/');
      if (response.status === 200) {
        setBlogs(response.data.data);
      } else {
        setError_(response.data.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="detail">
      <BlogDetail blog={blog} />
      <div className="detail__moreBlogs">
        <h2 className="detail__heading">More Blogs</h2>
        <div className="detail__blogs">
          {blogs?.map((blog) => (
            blog?._id != id && <Blog blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
