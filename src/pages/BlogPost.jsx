import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const metaMatch = text.match(/---([\s\S]*?)---/);
        let meta = {};
        if (metaMatch) {
          metaMatch[1]
            .trim()
            .split("\n")
            .forEach((line) => {
              const [key, value] = line.split(":").map((s) => s.trim());
              meta[key] = value.replace(/['"]+/g, "");
            });
        }
        setMetadata(meta);
        const cleanText = text.replace(metaMatch[0], "").trim();
        setPost(cleanText);
      });
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg min-h-screen overflow-y-auto">
      {/* Imagen de portada */}
      {metadata.image && (
        <img src={metadata.image} alt={metadata.title} className="w-full h-60 object-cover rounded-md mb-6" />
      )}

      {/* Título del post */}
      <h1 className="text-3xl font-bold text-primary">{metadata.title}</h1>
      <p className="text-gray-400">{metadata.date} - {metadata.author}</p>

      {/* Contenido del post en Markdown */}
      <div className="mt-4 text-gray-300 leading-relaxed">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
