// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more Route components for other routes */}
    </Routes>
  );
}

export default App;
