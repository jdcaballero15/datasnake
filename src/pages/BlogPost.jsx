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
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
        {/* 🔹 Imagen de portada */}
        {metadata.image && (
          <img
            src={metadata.image}
            alt={metadata.title}
            className="w-full h-60 sm:h-72 object-cover rounded-md mb-6"
          />
        )}

        {/* 🔹 Título del post */}
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{metadata.title}</h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6">
          {metadata.date} {metadata.author && `- ${metadata.author}`}
        </p>

        {/* 🔹 Contenido Markdown con estilo de imágenes */}
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <img
                {...props}
                className="max-w-full md:max-w-md h-auto mx-auto my-4 rounded-lg shadow-md"
                alt={props.alt}
              />
            ),
          }}
          className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed prose-p:mb-4"
        >
          {post}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
