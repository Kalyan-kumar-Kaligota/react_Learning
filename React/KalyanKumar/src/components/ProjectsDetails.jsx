import { useRef } from "react";
import "./ProjectsDetails.css";

export const ProjectsDetails = () => {
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "CheapCaribbean",
      description:
        "Enterprise travel booking platform with multi-brand architecture.",
      technologies: ["Angular", "TypeScript"],
      image: "https://beachfinder.cheapcaribbean.com/images/BrowseEverything.png",
      liveUrl: "https://beachfinder.cheapcaribbean.com/",
    },
    {
      title: "Beach Bound",
      description:
        "Vacation booking platform with personalized travel experiences.",
      technologies: ["Angular", "NgRx"],
      image: "https://beachfinder.beachbound.com/images/Browse_Everything.png",
      liveUrl: "https://beachfinder.beachbound.com/",
    },
    {
      title: "Employee Management",
      description:
        "Full-stack application for managing employees and operations.",
      technologies: ["Java", "Spring Boot"],
      image: "https://trisept.widen.net/content/4bftyzffyk",
    },
    {
      title: "AI Shelly",
      description:
        "AI-powered travel assistant for helping users discover and plan vacations.",
      technologies: ["React", "AI"],
      image: "https://algv.widen.net/content/89jef3x3jo/webp/?q=80",
      liveUrl: "https://ai.cheapcaribbean.com/",
    },
  ];

  const scrollProjects = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = 535;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects_details_container mt-4" id="projects">
      <div className="projects_details_header">
        <span className="projects_icon">▣</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects_carousel_wrapper">
        <button className="carousel_button carousel_left" onClick={() => scrollProjects("left")} aria-label="Previous projects"> ‹ </button>

        <div className="projects_carousel" ref={carouselRef}>
          {projects.map((project) => (
            <div className="project_card" key={project.title}>
              <div className="project_image_wrapper">
                <img src={project.image} alt={project.title} className="project_image"/>
              </div>

              <div className="project_content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project_technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project_actions">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project_live_button"> ↗ Live </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel_button carousel_right" onClick={() => scrollProjects("right")} aria-label="Next projects"> › </button>
      </div>

      <button className="view_all_projects">View All Projects <span>→</span></button>
    </section>
  );
};
