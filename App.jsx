import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Villages from "./pages/Villages";
import Contact from "./pages/Contact";
import Heritage from "./pages/Heritage";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/villages" element={<Villages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
