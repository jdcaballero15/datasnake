import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Análisis de Ventas y Efectividad  de Empleados con PowerBi",
    description: "Desarrollé un dashboard interactivo en Power BI basado en datos de ventas, optimizando el análisis con DAX para calcular KPIs clave como porcentaje de ventas, unidades vendidas y productos más vendidos. Con filtros dinámicos por fecha y vendedor, esta herramienta facilita la toma de decisiones estratégicas basadas en datos.",
    image: "/projects/dashboardVentas.png",
    link: "https://github.com/jdcaballero15/Analisis_Venta_Efectividad_Empleados_PowerBi", // Enlace vacío por ahora
  },
  {
    title: "Análisis poblacional global 📈🌍",
    description: "Este dashboard interactivo permite analizar la población mundial a través de visualizaciones dinámicas, mostrando datos clave como esperanza de vida, mortalidad y distribución poblacional. Gracias al uso de mapas, matrices y segmentaciones, es posible explorar la información de manera intuitiva y detallada.Uno de los hallazgos más relevantes es la baja esperanza de vida en África (61,29 años) en comparación con Europa (78,70) y América (75,83), reflejando desigualdades en calidad de vida y acceso a la salud. Este análisis muestra cómo los datos pueden aportar insights valiosos para comprender mejor el mundo. 🚀",
    image: "/projects/dashboardPoblacion.png",
    link: "https://github.com/jdcaballero15/Analsis_Informacion_Poblacional_PowerBI",
  },
  {
    title: "Explorando la Calidad de Vida a Nivel Global con Power BI 🌍📊",
    description: "Este análisis interactivo permite comparar la calidad de vida en diferentes países y continentes, considerando factores clave como poder adquisitivo, seguridad, atención médica y costo de vida. A partir de un dataset de Kaggle, los datos fueron procesados en Python con Pandas y visualizados en Power BI mediante mapas coropléticos, segmentaciones dinámicas y métricas calculadas en DAX.Uno de los hallazgos más interesantes es que Luxemburgo lidera en calidad de vida, mientras que Afganistán se encuentra en la posición más baja, evidenciando grandes desigualdades entre regiones. Este proyecto refuerza cómo el análisis de datos permite obtener insights valiosos sobre el mundo en el que vivimos. 🚀",
    image: "/projects/dashboardCalidadeVida.png",
    link: "https://github.com/jdcaballero15/Analisis_Comparativo_Calidad_Vida_PowerBI",
  },
];

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-primary font-bold">Proyectos</h1>
      <p className="mt-2 text-gray-400">Aquí están algunos de los proyectos en los que he trabajado.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

