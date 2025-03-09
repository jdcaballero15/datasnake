import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-primary font-bold">Contacto</h1>
      <p className="mt-2 text-gray-400">
        ¿Tienes alguna pregunta o consulta? ¡Envíame un mensaje!
      </p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
