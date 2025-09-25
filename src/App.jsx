import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/category";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />

          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
