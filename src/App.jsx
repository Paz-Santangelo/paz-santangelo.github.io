import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Cursor from "./components/Cursor/Cursor";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ResumeNew from "./components/Resume/ResumeNew";
import Preloader from "./components/Pre";
import { useLenis } from "./hooks/useLenis";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [load, upadateLoad] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Cursor />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div className="theme-toggle-mobile">
          <ThemeToggle />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<ResumeNew />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
