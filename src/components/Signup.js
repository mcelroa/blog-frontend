import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import get from "lodash/get";
import "../styles/signin.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData, {
        withCredentials: true,
      });
      if (response.status === 201) {
        navigate("/dashboard");
      }
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
            <h2>Sign Up</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-3">
                Sign Up
              </button>
            </form>
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
