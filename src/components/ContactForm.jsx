import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(); // 📌 Referencia al formulario
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lcx2sco",   // 📌 Reemplaza con tu Service ID de EmailJS
      "template_k86i9ak",  // 📌 Reemplaza con tu Template ID de EmailJS
      form.current,
      "2bFMh7YC8YIF6NRHo"    // 📌 Reemplaza con tu Public Key de EmailJS
    )
    .then(() => {
      setSubmitted(true);
      form.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((error) => console.error("Error al enviar mensaje:", error));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-primary mb-4">Contáctame</h2>
      {submitted ? (
        <p className="text-green-400">¡Mensaje enviado con éxito!</p>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            rows="4"
            required
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
