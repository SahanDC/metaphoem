import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} index />
            <Route path="Search" element={<Search />} />
            <Route path="Add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;