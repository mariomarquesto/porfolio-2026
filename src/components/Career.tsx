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
                <h4>Full Stack + IA</h4>
                <h5>Freelance / Consultoría</h5>
              </div>
              <h3>ACTUAL</h3>
            </div>
            <p>
              Desarrollo soluciones web full stack con integración de IA.
              React, Next.js, .NET Core, Node.js, MongoDB, MySQL, OpenAI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ejecutivo Ventas Consultivas</h4>
                <h5>Sector Tecnológico</h5>
              </div>
              <h3>2020–24</h3>
            </div>
            <p>
              Experiencia en ventas consultivas B2B, entendiendo necesidades del
              cliente y traduciéndolas en soluciones técnicas. Negociación y cierre.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Profesor de Música</h4>
                <h5>Independiente / Instituciones</h5>
              </div>
              <h3>2009–24</h3>
            </div>
            <p>
              Más de 15 años de experiencia docente. Paciencia, empatía,
              comunicación efectiva y capacidad para explicar conceptos complejos.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desarrollador Full Stack</h4>
                <h5>Proyectos Personales</h5>
              </div>
              <h3>2018-20</h3>
            </div>
            <p>
              Desarrollo de aplicaciones web con React, Next.js, Node.js,
              Express.js y bases de datos SQL/NoSQL. Construcción de APIs REST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;