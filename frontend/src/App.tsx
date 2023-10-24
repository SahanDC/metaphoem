import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="Search" element={<Search />} />
          <Route path="Add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
