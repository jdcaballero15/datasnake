const About = () => {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sobre Mí</h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
          Soy un <strong>estudiante avanzado de Ingeniería en Sistemas</strong> con un fuerte interés en 
          el análisis de datos, bases de datos y visualización de información. Lo que más me motiva de 
          este campo es la capacidad de <strong>transformar datos en conocimiento útil</strong> para la toma de decisiones.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          Uno de los aspectos que más me fascina del mundo IT es su <strong>constante evolución</strong>. 
          Siempre surgen nuevas tecnologías y tendencias, lo que nos desafía a mantenernos actualizados y en continuo aprendizaje.
        </p>

        {/* 🔹 Habilidades */}
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">📊 Habilidades clave:</h2>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-2 mb-6">
          <li>✔ <strong>Bases de datos:</strong> SQL, MySQL</li>
          <li>✔ <strong>Análisis y manipulación de datos:</strong> Python, Pandas, Jupyter Notebook</li>
          <li>✔ <strong>Visualización y reporting:</strong> Power BI</li>
        </ul>

        {/* 🔹 Conexiones */}
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">📢 Conectemos</h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          ¡Siempre abierto a nuevas oportunidades y conexiones en el mundo del análisis de datos!
        </p>
      </div>
    </section>
  );
};

export default About;
