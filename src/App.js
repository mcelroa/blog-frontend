// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/createPost" element={<CreatePost />} />
      {/* Add more Route components for other routes */}
    </Routes>
  );
}

export default App;
