import { memo } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Project.css";

const projects = [
  { title: "Supplier", img: "/projects/project1.webp" },
  { title: "Supplier", img: "/projects/project2.webp" },
  { title: "Trader", img: "/projects/project3.webp" },
  { title: "Manufacturer", img: "/projects/project4.webp" },
  { title: "Manufacturer", img: "/projects/project5.webp" },
  { title: "Manufacturer", img: "/projects/project6.webp" },
  { title: "Service Provider", img: "/projects/project7.webp" },
  { title: "Manufacturer", img: "/projects/project8.webp" },
  { title: "Trader", img: "/projects/project9.webp" },
  { title: "Service Provider", img: "/projects/project10.webp" },
  { title: "Trader", img: "/projects/project11.webp" },
  { title: "Manufacturer", img: "/projects/project12.webp" },
  { title: "Manufacturer", img: "/projects/project13.webp" },
  { title: "Manufacturer", img: "/projects/project14.webp" },
  { title: "Service Provider", img: "/projects/project15.webp" },
];

// ✅ Memoized project card
const ProjectCard = memo(({ project }) => (
  <div className="project-card">
    <img src={project.img} alt={project.title} loading="lazy" />
    <div className="project-title fs-5" style={{ color: "#2548BD" }}>
      {project.title}
    </div>
  </div>
));

// ✅ Generic column (auto-duplicates sequence for smooth loop)
const ProjectColumn = ({ sequence, direction }) => {
  const doubled = sequence.concat(sequence); // ensures infinite scroll loop
  return (
    <div className="vertical-scroll-wrapper">
      <div className={`vertical-scroll scroll-${direction}`}>
        {doubled.map((p, i) => (
          <ProjectCard key={`${direction}-${i}`} project={p} />
        ))}
      </div>
    </div>
  );
};

const Project = () => {
  // left: original order
  const leftSeq = projects;
  // right: reversed + rotated to look different
  const rightSeq = [...projects].reverse().slice(3).concat([...projects].reverse().slice(0, 3));

  return (
    <div className="container-fluid py-4">
      <div className="row align-items-center">
        {/* ─── scrolling columns ─── */}
        <div className="col-md-7 mb-4 mb-md-0 d-flex gap-3 order-2 order-md-1">
          <ProjectColumn sequence={leftSeq} direction="down" />
          <ProjectColumn sequence={rightSeq} direction="up" />
        </div>

        {/* ─── right-side copy & CTA ─── */}
        <div className="col-md-5 order-1 order-md-2">
          <h2 className="fw-bold mb-3" style={{ color: "#2548BD" }}>
            Our Work Speaks for Itself
          </h2>
          <div className="d-flex gap-2 mb-3">
            <span className="triangle triangle-blue" />
            <span className="triangle triangle-gray" />
            <span className="triangle triangle-lightgray" />
          </div>
          <p className="mb-3">
            We craft exceptional <strong>Web designs</strong> and{" "}
            <strong>SEO strategies</strong> that turn clicks into customers.
          </p>
          <p className="mb-3">
            From sleek landing pages to full-scale ecommerce, our builds attract,
            engage, and convert.
          </p>
          <p className="mb-4">
            Brands in <strong>education</strong>, <strong>healthcare</strong>, and{" "}
            <strong>real estate</strong> trust us to boost visibility and revenue{" "}
            <i className="text-primary font-bold"> — explore our few wins </i>
          </p>
          <div className="d-flex justify-content-center justify-content-md-start mb-3">
            <Link to="/Contact">
              <button className="nav-btn">Schedule An Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
