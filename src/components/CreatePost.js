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
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card">
          <div className="card-body p-5 text-center">
            <h2>Create Post</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Title
                </label>

                <textarea
                  name="title"
                  id="title"
                  cols="30"
                  rows="5"
                  className="form-control"
                  ref={titleRef}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  name="content"
                  id="content"
                  cols="30"
                  rows="10"
                  ref={contentRef}
                  className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Create
              </button>
              <Link to="/dashboard">
                <button className="btn btn-secondary mt-3 mb-3">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
