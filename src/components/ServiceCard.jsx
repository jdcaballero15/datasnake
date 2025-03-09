const ServiceCard = ({ title, description }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  