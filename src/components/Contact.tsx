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
                href="mailto:mariomarquesto@gmail.com"
                data-cursor="disable"
              >
                mariomarquesto@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://aceite-app-two.vercel.app"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                ARN Lubricentro — demo en vivo
              </a>
            </p>
            <p>Abierto a propuestas: Tech Lead · Senior Software Engineer · AI Integration Specialist, 100% remoto.</p>
            <h4>Formación</h4>
            <p>
              Ingeniero en Sistemas de Información — UTN, Facultad Regional Tucumán (2012–2017)
            </p>
            <p>
              Ruta de Maestría en Cloud Computing &amp; DevOps — AWS y Microsoft Azure
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