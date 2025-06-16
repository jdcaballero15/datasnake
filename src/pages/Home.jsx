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
           Ser la comunidad referente en análisis de datos en Latinoamérica, uniendo educación, calidad técnica y cercanía para transformar información en decisiones que impactan.
            <br /><br />
            Buscamos inspirar, capacitar y acompañar a quienes desean comenzar su camino en el mundo de los datos, poniendo siempre al cliente en el centro de nuestra atención.
          </p>
        </div>

        {/* Misión */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">🎯 Misión</h2>
          <p className="text-gray-300 leading-relaxed">
            En data.snake ayudamos a personas y negocios a entender, ordenar y dominar sus datos.Transformamos el caos en claridad, enseñando a leer la información con precisión para que cada decisión tenga fundamento
            <br /><br />
            Trabajamos con orden, compromiso y excelencia, porque creemos que los datos bien trabajados cambian realidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
