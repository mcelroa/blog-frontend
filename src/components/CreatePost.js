import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        {
          title: titleRef.current.value,
          content: contentRef.current.value,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        const success = true;
        navigate("/dashboard", { state: success });
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <>
      <h2>Create Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" ref={titleRef} />
        <br />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" ref={contentRef} />
        <br />
        <button type="submit">Create</button>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
      </form>
    </>
  );
}
