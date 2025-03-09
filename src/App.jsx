import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // 🔹 IMPORTAR EL NAVBAR
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (

      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />  {/* 🔹 AGREGAR EL NAVBAR AQUÍ */}
        <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer /> 
      </div>
    
  );
}

export default App;






