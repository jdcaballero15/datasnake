import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  console.log("✅ Navbar cargado correctamente");  // <-- AGREGA ESTO

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      
      {/* 🔹 Logo y Nombre */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Data Snake" className="h-10 w-10 block" />
        <h1 className="text-xl font-bold text-primary">Data Snake</h1>
      </div>

      {/* 🔹 Menú de Navegación */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-primary">Inicio</Link>
        <Link to="/blog" className="hover:text-primary">Blog</Link>
        <Link to="/about" className="hover:text-primary">Sobre Mí</Link>
        <Link to="/services" className="hover:text-primary">Servicios</Link>
        <Link to="/projects" className="hover:text-primary">Proyectos</Link>
        <Link to="/contact" className="hover:text-primary">Contacto</Link>
      </div>

      {/* 🔹 Redes Sociales */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/data.snake" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="text-white hover:text-pink-500" />
        </a>
        <a href="https://github.com/jdcaballero15" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/juan-diego-caballero-8871b72b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-white hover:text-blue-500" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
