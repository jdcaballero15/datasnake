/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A3E0", // Azul futurista basado en tu logo
        background: "#0D1117", // Fondo oscuro estilo tech
      },
    },
  },
  plugins: [],
};
