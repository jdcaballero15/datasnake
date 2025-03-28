import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-10">
      <p className="text-sm">&copy; 2024 Data Snake - Todos los derechos reservados.</p>

      {/* 🔹 Redes Sociales en el Footer */}
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.instagram.com/data.snake" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="text-white hover:text-pink-500" />
        </a>
        <a href="https://github.com/jdcaballero15" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/juan-diego-caballero-8871b72b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-white hover:text-blue-500" />
        </a>
        <a href="https://www.tiktok.com/@data.snake?_t=ZM-8v2sQiNbF6E&_r=1" target="_blank" rel="noopener noreferrer">
          <SiTiktok size={24} className="text-white hover:text-pink-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
