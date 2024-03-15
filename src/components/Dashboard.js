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
    <div>
      {/* Header */}
      <div className="mb-5 mt-5 d-flex justify-content-center">
        <h2 className="display-4">Posts</h2>
      </div>
      {/* End Header */}

      {/* Posts */}
      <div className="d-flex flex-column mb-3 px-5">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
      {/* End Posts */}

      {/* Footer */}
      <div className="d-flex justify-content-center">
        <Link to="/createPost">
          <button className="btn btn-primary">Create Post</button>
        </Link>
      </div>
      {/* End footer */}
    </div>
  );
}
