import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Mi trayectoria <span>&</span>
          <br /> experiencia
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack + IA & Cloud</h4>
                <h5>Freelance / Consultoría / Stefanini</h5>
              </div>
              <h3>ACTUAL</h3>
            </div>
            <p>
              Desarrollo de software y despliegues productivos con .NET Core, C#, Node.js 24, React, Next.js, Vercel, Azure y flujos avanzados con Inteligencia Artificial y n8n.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desarrollador Full Stack & Software Engineer</h4>
                <h5>Proyectos Web y Empresariales</h5>
              </div>
              <h3>2018–2025</h3>
            </div>
            <p>
              Diseño e implementación de arquitecturas web escalables, despliegues en la nube, APIs REST robustas y optimización de bases de datos SQL/NoSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ingeniería en Sistemas de Información</h4>
                <h5>UTN</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Graduado como Ingeniero en Sistemas, consolidando bases sólidas en arquitectura de software, gestión de proyectos y desarrollo tecnológico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;