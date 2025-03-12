import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lcx2sco",     // ✅ Tu Service ID
        "template_k86i9ak",    // ✅ Tu Template ID
        form.current,
        "2bFMh7YC8YIF6NRHo"    // ✅ Tu Public Key
      )
      .then(() => {
        setSubmitted(true);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => console.error("Error al enviar mensaje:", error));
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Contáctame</h2>

        {submitted ? (
          <p className="text-green-400 text-center text-lg">¡Mensaje enviado con éxito!</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows="5"
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-3 rounded hover:bg-blue-600 transition text-center"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
