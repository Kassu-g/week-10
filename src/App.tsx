import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyContainer from "./components/MyContainer";
import About from "./components/About";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";


const App: React.FC = () => {
  return (
    <Router>
      {/* Header is displayed on all pages */}
      <Header />
      
      {/* Define application routes */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<MyContainer />} />
        
        {/* About Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;


