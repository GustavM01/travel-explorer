import { HashRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import SideNav from "./ui/SideNav/SideNav";
import Saved from "./pages/Saved";
import Compare from "./pages/Compare";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
