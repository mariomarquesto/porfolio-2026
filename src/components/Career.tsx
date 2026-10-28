import "./styles/Career.css";

const career = [
  {
    role: "Desarrollador Full Stack / Tech Lead",
    org: "Profesional independiente — Consultoría tecnológica",
    years: "2023–HOY",
    text: "Liderazgo técnico y desarrollo end-to-end de software a medida: .NET Core, C# y Node.js sobre MSSQL y PostgreSQL, con IA aplicada (RAG, LangChain, OpenAI) y automatización de procesos con n8n. La mayoría de los clientes trabaja bajo NDA; el proyecto público de referencia es ARN Lubricentro.",
  },
  {
    role: "Programador Full Stack / Desarrollador Backend",
    org: "Truckers Talent Inc",
    years: "2025",
    text: "APIs RESTful con autenticación y control de acceso por roles (JWT, RBAC), modelado y query tuning sobre bases de datos relacionales con grandes volúmenes, y pipelines de CI/CD en la nube.",
  },
  {
    role: "Full Stack Developer & Business Tech Lead",
    org: "Hostal WintukWatutu · Colombia, remoto",
    years: "2024",
    text: "Arquitectura y mantenimiento de la plataforma web del negocio, integrando herramientas orientadas a la conversión y alineando los requerimientos operativos con la solución técnica.",
  },
  {
    role: "Full Stack Developer / Tech Lead",
    org: "Infinity Devlab · .NET · Angular · React",
    years: "2017–2023",
    text: "Seis años con más de 50 clientes corporativos en LegalTech y AgTech. Lideré un equipo de 5+ ingenieros: APIs REST y microservicios, −40% de tiempo de respuesta en bases de datos por indexación y tuning, RBAC con IdentityServer4 y −60% de tiempo de despliegue con Azure DevOps y Docker.",
  },
];

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
          {career.map((item) => (
            <div className="career-info-box" key={item.org}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.org}</h5>
                </div>
                <h3>{item.years}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ingeniero en Sistemas de Información</h4>
                <h5>UTN — Facultad Regional Tucumán</h5>
              </div>
              <h3>2012–2017</h3>
            </div>
            <p>
              Nueve años de trayectoria desde la egresación, con foco en .NET Core, Node.js, bases de datos e IA aplicada. Además: ruta de Maestría en Cloud Computing &amp; DevOps (AWS y Azure).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;