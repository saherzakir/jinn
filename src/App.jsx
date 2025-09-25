import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WomenCategory from "./pages/womenCategory";
import MenCategory from "./pages/menCategory";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women-collections" element={<WomenCategory />} />
          <Route path="/men-collections" element={<MenCategory />} />

          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
