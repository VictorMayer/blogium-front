import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promisse = axios.get("http://localhost:4000/posts");
    promisse.then((answer)=>{
      setPosts(answer.data);
      console.log(answer);
    });
    promisse.catch((answer)=>{
      console.log(answer.response);
    })
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
