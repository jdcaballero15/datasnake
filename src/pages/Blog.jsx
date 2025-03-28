import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Lista de posts
    setPosts([
      {
        title: "¿Qué es el Análisis de Datos?",
        date: "2024-03-02",
        image: "/blog/analisis-datos-1.png",
        summary: "Descubre cómo el análisis de datos puede optimizar tu negocio y mejorar la toma de decisiones.",
        link: "/blog/analisis-datos",
      },
      {
        title: "Habilidades Técnicas en el Análisis de Datos",
        date: "2025-03-28",
        image: "/blog/habilidades-1.png", // asegurate de que exista esta imagen
        summary: "Explora cómo Python, SQL y herramientas de visualización como Power BI y Tableau se combinan para crear un análisis de datos efectivo.",
        link: "/blog/habilidades-tecnicas", // debe coincidir con el nombre del .md
      },
    ]);
  }, []);

  return (
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center sm:text-left">
          Blog 📚
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-8 text-center sm:text-left max-w-3xl">
          Explora nuestros artículos sobre análisis y visualización de datos.
        </p>

        {/* Contenedor de tarjetas de blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition p-5 rounded-lg shadow-md flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300 text-sm sm:text-base flex-grow">{post.summary}</p>
              <Link
                to={post.link}
                className="mt-4 inline-block text-sm font-semibold bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition self-start"
              >
                Leer más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
