// src/components/EnhancedReactHero.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const EnhancedReactHero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section style={styles.section}>
      {/* Particle Background */}
      <Particles
        id="react-particles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: {
              grab: { distance: 150, line_linked: { opacity: 0.5 } },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#61dafb" },
            links: {
              color: "#61dafb",
              distance: 120,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: { enable: true },
            move: { enable: true, speed: 1.5 },
            number: { value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        style={styles.particles}
      />

      {/* Content */}
      <div className="container" style={styles.contentWrapper}>
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h2 className="display-5 fw-bold">
              Why <span style={{ color: "#61dafb" }}>React</span> for Web Development?
            </h2>
            <p className="mt-3">
              CMS (Content Management System) lets you create, update, and manage your website content
              without touching code. Whether you’re a blogger, a business, or an e-commerce brand – React +
              CMS gives you full control and flexibility.
            </p>
            <ul className="list-unstyled mt-4">
              {["WordPress", "Shopify", "Joomla", "Drupal", "Custom-built CMS"].map((item, i) => (
                <li key={i} className="mb-2">
                  <span>✅</span> {item}
                </li>
              ))}
            </ul>
            <p className="fw-bold mt-3">
              Yeh website aapki digital army ban jaati hai – ready to attract, engage, and convert.
            </p>
          </div>

          {/* React Logo */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div style={styles.logoWrapper}>
              <svg
                viewBox="0 0 841.9 595.3"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                style={styles.reactSVG}
              >
                <g fill="#61DAFB">
                  <circle cx="420.9" cy="296.5" r="45.7" />
                  <g stroke="#61DAFB" strokeWidth="30" fill="none">
                    <ellipse rx="190" ry="500" cx="420.9" cy="296.5" transform="rotate(0 420.9 296.5)" />
                    <ellipse rx="190" ry="500" cx="420.9" cy="296.5" transform="rotate(60 420.9 296.5)" />
                    <ellipse rx="190" ry="500" cx="420.9" cy="296.5" transform="rotate(120 420.9 296.5)" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    padding: "60px 0",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    overflow: "hidden",
    color: "#fff",
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 1,
  },
  logoWrapper: {
    position: "relative",
    animation: "float 6s ease-in-out infinite",
    filter: "drop-shadow(0 0 40px #61dafb)",
  },
  reactSVG: {
    animation: "spin 16s linear infinite",
    transition: "transform 0.3s ease-in-out",
  },
};

// Inject keyframes
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

svg:hover {
  transform: scale(1.1);
}
`;
document.head.appendChild(styleSheet);

export default EnhancedReactHero;
