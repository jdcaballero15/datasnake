const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-md p-4 sm:p-6 md:p-6"
    >
      <img
        alt={title}
        src={image}
        className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base mb-4">{description}</p>

      {/* Botón Conocer más */}
      <span className="inline-block mt-auto text-sm font-semibold bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Conocer más →
      </span>
    </a>
  );
};

export default ProjectCard;
