const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10">
      {/* Logo */}
      <img src="/logo.png" alt="Data Snake Logo" className="h-40 mb-6" />

      {/* Título */}
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        Bienvenido a <span className="text-white">Data Snake</span>
      </h1>
      <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-10">
        Explora nuestros análisis, dashboards y estrategias basadas en datos.
      </p>

      {/* Visión y Misión */}
      <div className="max-w-3xl bg-gray-800 text-white rounded-lg shadow-lg p-6 space-y-6 text-left">
        {/* Visión */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">🌟 Visión</h2>
          <p className="text-gray-300 leading-relaxed">
            Ser un referente global en el análisis de datos, reconocido por la excelencia, compromiso y capacidad para ayudar a personas y organizaciones de todo el mundo a tomar decisiones estratégicas basadas en datos.
            <br /><br />
            Buscamos inspirar, capacitar y acompañar a quienes desean comenzar su camino en el mundo de los datos, poniendo siempre al cliente en el centro de nuestra atención.
          </p>
        </div>

        {/* Misión */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">🎯 Misión</h2>
          <p className="text-gray-300 leading-relaxed">
            Brindar soluciones innovadoras y personalizadas en análisis de datos que permitan a emprendimientos, negocios y empresas optimizar su información, ordenar sus datos y tomar decisiones inteligentes con confianza.
            <br /><br />
            En data.snake no sos un cliente más; sos parte fundamental de nuestro equipo, y trabajamos siempre disponibles y comprometidos con tus objetivos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
