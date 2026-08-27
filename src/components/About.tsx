import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Sobre Mí</h3>
        <p className="para">
          Soy Ingeniero en Sistemas graduado en la UTN (2017) con más de 9 años de experiencia en desarrollo de software, combinando un sólido background técnico con visión de negocios (exejecutivo de ventas consultivas). Me especializo en arquitecturas robustas y escalables con .NET Core, C#, Node.js, React y bases de datos complejas para sectores críticos.
        </p>
        <p className="para">
          Integro soluciones inteligentes con IA (OpenAI, RAG) y automatización avanzada de flujos mediante n8n. Mi experiencia previa como docente y profesor de música aporta una comunicación clara, liderazgo técnico efectivo y enfoque estructurado en cada proyecto.
        </p>
      </div>
    </div>
  );
};

export default About;