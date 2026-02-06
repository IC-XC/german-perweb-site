import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import SignUp from "./pages/SignUp";
import FAQ from "./pages/FAQ";
import "./styles/pages.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
