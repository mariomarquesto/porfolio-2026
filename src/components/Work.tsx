import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "ARN Lubricentro — SaaS de Gestión Integral con IA",
    category: "Sistema de gestión para lubricentros y talleres",
    tools: "Next.js 14, TypeScript, Supabase (PostgreSQL + RLS), PWA, Vercel CI/CD, WhatsApp Cloud API",
    image: "/images/arn-lubricentro.png",
    link: "https://aceite-app-two.vercel.app",
    note: "Repo público: github.com/mariomarquesto/AceiteApp",
  },
  {
    title: "AgTech Enterprise Core Data & Analytics",
    category: "Sistema de Gestión y Monitoreo Agrícola",
    tools: ".NET Core, C#, PostgreSQL, Azure DevOps, Power BI",
    image: "/images/agtech.png",
    link: "#",
    note: "Código privado (NDA / Cliente corporativo)",
  },
  {
    title: "n8n AI Workflow Automation Pipeline",
    category: "Automatización Inteligente de Procesos y APIs",
    tools: "n8n, OpenAI API, LangChain, Node.js, Webhooks, Google Sheets",
    image: "/images/n8n-ai.png",
    link: "#",
    note: "Implementación corporativa confidencial",
  },
  {
    title: "Expo E-commerce & Inventory Mobile App",
    category: "Aplicación Móvil y Web Full Stack",
    tools: "React Native, Expo, Node.js, Express, MSSQL / PostgreSQL, JWT",
    image: "/images/ecommerce-mobile.png",
    link: "https://github.com/mariomarquesto/expo-ecommerce2",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mis <span>Proyectos</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Proyecto anterior"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Próximo proyecto"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tecnologías</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.note && (
                          <div className="carousel-note" style={{ marginTop: "8px", fontSize: "0.85rem", color: "#888", fontStyle: "italic" }}>
                            <span>{project.note}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;