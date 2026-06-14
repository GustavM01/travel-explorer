import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import SideNav from "./ui/SideNav/SideNav";
import Saved from "./pages/Saved";
import Compare from "./pages/Compare";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="layout">
        <SideNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
