import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contacto</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Conectemos</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mario-marquesto"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Mario Marquesto
              </a>
            </p>
            <h4>Formación</h4>
            <p>
              Full Stack + IA — Especialización en integración de IA
            </p>
            <p>
              Ventas Consultivas — Negociación y entendimiento del negocio
            </p>
            <p>
              Profesor de Música — +15 años de experiencia docente
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mariomarquesto"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mario-marquesto"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Diseñado y Desarrollado <br /> por <span>Mario Marquesto</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;