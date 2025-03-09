import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Lista de posts (puedes cargar más dinámicamente)
    setPosts([
      {
        title: "¿Qué es el Análisis de Datos?",
        date: "2024-03-02",
        image: "/blog/analisis-datos-1.png",
        summary: "Descubre cómo el análisis de datos puede optimizar tu negocio y mejorar la toma de decisiones.",
        link: "/blog/analisis-datos",
      },
      // Puedes agregar más posts aquí
    ]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-primary font-bold mb-4">Blog</h1>
      <p className="text-gray-400 mb-6">Explora nuestros artículos sobre análisis y visualización de datos.</p>

      {/* Contenedor de tarjetas de blog */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold text-primary">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className="text-gray-300 mt-2">{post.summary}</p>
            <Link to={post.link} className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
