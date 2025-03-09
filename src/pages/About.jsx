const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-4">Sobre Mí</h1>

      <p className="text-gray-300 leading-relaxed">
        Soy un <strong>estudiante avanzado de Ingeniería en Sistemas</strong> con un fuerte interés en 
        el análisis de datos, bases de datos y visualización de información. Lo que más me motiva de 
        este campo es la capacidad de <strong>transformar datos en conocimiento útil</strong> para la toma de decisiones.
      </p>

      <p className="text-gray-300 leading-relaxed mt-4">
        Uno de los aspectos que más me fascina del mundo IT es su <strong>constante evolución</strong>. 
        Siempre surgen nuevas tecnologías y tendencias, lo que nos desafía a mantenernos actualizados y en continuo aprendizaje.
      </p>

      {/* 🔹 Habilidades */}
      <h2 className="text-2xl font-semibold text-primary mt-6">📊 Habilidades clave:</h2>
      <ul className="list-disc list-inside text-gray-300 mt-2">
        <li>✔ <strong>Bases de datos:</strong> SQL, MySQL</li>
        <li>✔ <strong>Análisis y manipulación de datos:</strong> Python, Pandas, Jupyter Notebook</li>
        <li>✔ <strong>Visualización y reporting:</strong> Power BI</li>
      </ul>

      

      {/* 🔹 Conexiones */}
      <h2 className="text-2xl font-semibold text-primary mt-6">📢 Conectemos</h2>
      <p className="text-gray-300 leading-relaxed mt-2">
        ¡Siempre abierto a nuevas oportunidades y conexiones en el mundo del análisis de datos!
      </p>
    </div>
  );
};

export default About;
