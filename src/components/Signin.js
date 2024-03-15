import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import get from "lodash/get";
import "../styles/signin.css";

export default function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/signin", formData, {
        withCredentials: true,
      });
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        get(error, "response.data.msg", error.message) || "An unknown error occurred.";
      setError(errorMessage);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card">
          <div className="card-body p-5 text-center">
            <h2>Sign In</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <input
                className="form-control"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary mt-3 mb-3">
                Sign In
              </button>
              <p>
                Don't have an account? <Link to="/">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
