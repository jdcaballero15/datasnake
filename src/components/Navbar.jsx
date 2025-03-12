import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("✅ Navbar cargado correctamente");

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 🔹 Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Data Snake" className="h-10 w-10 block" />
          <h1 className="text-xl font-bold text-primary">Data Snake</h1>
        </div>

        {/* 🔹 Menú Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/about" className="hover:text-primary">Sobre Mí</Link>
          <Link to="/services" className="hover:text-primary">Servicios</Link>
          <Link to="/projects" className="hover:text-primary">Proyectos</Link>
          <Link to="/contact" className="hover:text-primary">Contacto</Link>
        </div>

        {/* 🔹 Redes sociales Desktop */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.instagram.com/data.snake" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} className="text-white hover:text-pink-500" />
          </a>
          <a href="https://github.com/jdcaballero15" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} className="text-white hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/juan-diego-caballero-8871b72b2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} className="text-white hover:text-blue-500" />
          </a>
        </div>

        {/* 🔹 Botón hamburguesa Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* 🔹 Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4 border-t border-gray-700">
          <Link to="/" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/blog" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Sobre Mí</Link>
          <Link to="/services" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/projects" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Proyectos</Link>
          <Link to="/contact" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>Contacto</Link>

          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/data.snake" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-white hover:text-pink-500" />
            </a>
            <a href="https://github.com/jdcaballero15" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="text-white hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/juan-diego-caballero-8871b72b2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="text-white hover:text-blue-500" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
