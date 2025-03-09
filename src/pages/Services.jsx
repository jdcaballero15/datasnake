import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Análisis de datos a medida",
    description: "¿Qué dicen tus datos? Nosotros lo descubrimos. Analizamos ventas, clientes, tráfico web o lo que necesites con SQL y estadísticas avanzadas. Te entregamos insights únicos (ej. ‘el 60% de tus ventas vienen de un solo canal’) en tiempo récord.",
  },
  {
    title: "Creación de dashboards",
    description: "Visualiza tu negocio en un vistazo. Creamos dashboards en Power BI o Google Data Studio: gráficos claros, tendencias al instante, datos listos para compartir. Rápido y a tu medida, para que tomes el control sin complicaciones.",
  },
  {
    title: "Consultoría personalizada",
    description: "¿No sabes por dónde empezar? Te guiamos paso a paso o lo hacemos por ti. Desde entender tus métricas hasta usar datos para decisiones grandes, somos tu socio accesible. Aprende o déjalo en nuestras manos.",
  },
  {
    title: "Limpieza de datos",
    description: "Datos desordenados no sirven. Usamos Python (pandas) y SQL para eliminar errores, duplicados y huecos. En poco tiempo, tu información queda impecable, lista para análisis que sí funcionan.",
  },
  
  {
    title: "Estrategias para impulsar tu negocio",
    description: "Datos sin acción no valen. Diseñamos estrategias ganadoras: optimiza inventario, ajusta campañas, encuentra oportunidades ocultas. Ejemplo: Una tienda cortó stock muerto y ganó un 15% más en un mes.",
  },
];

const Services = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-primary font-bold">Nuestros Servicios</h1>
      <p className="mt-2 text-gray-400">Ofrecemos soluciones avanzadas basadas en datos para impulsar tu negocio.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
