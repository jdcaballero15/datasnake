const ProjectCard = ({ title, description, image, link }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-xl font-bold text-primary mt-4">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
        {link !== "#" ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary mt-3 inline-block hover:underline">
            Ver Proyecto →
          </a>
        ) : (
          <p className="text-gray-500 mt-3">Próximamente</p>
        )}
      </div>
    );
  };
  
  export default ProjectCard;
  
  