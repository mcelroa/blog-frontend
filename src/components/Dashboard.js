import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return <div>Dashboard</div>;
}
