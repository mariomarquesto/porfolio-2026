import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>¡Hola! Soy</h2>
            <h1>
              MARIO ANÍBAL
              <br />
              <span>FRANCISCO</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Tech Lead &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full Stack</div>
              <div className="landing-h2-2">.NET & IA</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Marquestó</div>
              <div className="landing-h2-info-1">Software</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;