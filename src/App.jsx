import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./constants/home";
import Search from "./pages/search";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
