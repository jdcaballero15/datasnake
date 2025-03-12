const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white text-center">
      <div className="max-w-3xl w-full">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Data Snake Logo"
          className="h-32 sm:h-40 mx-auto mb-6"
        />

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4">
          Bienvenido a <span className="text-white">Data Snake</span>
        </h1>

        {/* Descripción */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Explora nuestros análisis, dashboards y estrategias basadas en datos.
        </p>
      </div>
    </section>
  );
};

export default Home;
