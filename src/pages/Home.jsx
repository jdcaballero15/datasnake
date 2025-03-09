const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src="/logo.png" alt="Data Snake Logo" className="h-40 mb-6" /> {/* Logo más grande */}
      <h1 className="text-3xl text-primary font-bold">Bienvenido a Data Snake</h1>
      <p className="mt-2 text-gray-400">
        Explora nuestros análisis, dashboards y estrategias basadas en datos.
      </p>
    </div>
  );
};

export default Home;
