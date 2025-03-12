const Services = () => {
  const services = [
    {
      title: "Análisis de datos a medida",
      description: "¿Qué dicen tus datos? Nosotros lo descubrimos. Analizamos ventas, clientes, tráfico web o lo que necesites con SQL y estadísticas avanzadas. Te entregamos insights únicos (ej. ‘el 60% de tus ventas vienen de un solo canal’) en tiempo récord.",
    },
    {
      title: "Creación de dashboards",
      description: "Visualiza tu negocio en un vistazo. Creamos dashboards en Power BI o Google Data Studio: gráficos claros, tendencias al instante, datos listos para compartir.",
    },
    {
      title: "Consultoría personalizada",
      description: "¿No sabes por dónde empezar? Te guiamos paso a paso o lo hacemos por ti. Desde entender tus métricas hasta usar datos para decisiones grandes.",
    },
    {
      title: "Limpieza de datos",
      description: "Datos desordenados no sirven. Usamos Python (pandas) y SQL para eliminar errores, duplicados y huecos. En poco tiempo, tu información queda impecable.",
    },
    {
      title: "Predicciones precisas",
      description: "¿Qué pasará mañana? Con Python y modelos estadísticos, predecimos tendencias: ventas futuras, demanda de stock, comportamiento de clientes.",
    },
    {
      title: "Estrategias para impulsar tu negocio",
      description: "Datos sin acción no valen. Diseñamos estrategias ganadoras: optimiza inventario, ajusta campañas, encuentra oportunidades ocultas.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl text-primary font-bold mb-4">Nuestros Servicios</h2>
      <p className="text-gray-400 mb-6">
        Ofrecemos soluciones avanzadas basadas en datos para impulsar tu negocio.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
