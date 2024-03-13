import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts", {
          withCredentials: true,
        });
        setPosts(response.data);
      } catch (error) {
        console.error(error.response.data.msg);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <h2>Posts</h2>

        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}

        <Link to="/createPost">
          <button>Create Post</button>
        </Link>
      </div>
    </>
  );
}
