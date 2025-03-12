import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center sm:text-left">
          Contacto
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6 text-center sm:text-left">
          ¿Tienes alguna pregunta o consulta? ¡Envíame un mensaje y estaré encantado de ayudarte!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
