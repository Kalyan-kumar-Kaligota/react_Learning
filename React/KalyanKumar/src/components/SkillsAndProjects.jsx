import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import StorageIcon from "@mui/icons-material/Storage";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HubIcon from "@mui/icons-material/Hub";
import GitHubIcon from "@mui/icons-material/GitHub";
import SecurityIcon from "@mui/icons-material/Security";
import ApiIcon from "@mui/icons-material/Api";
import MemoryIcon from "@mui/icons-material/Memory";

import "./SkillsAndProjects.css";

const skillCategories = [
  {
    id: 1, title: "Frontend", type: "frontend",
    skills: [
      { name: "Angular", icon: CodeIcon }, { name: "React", icon: DataObjectIcon }, { name: "TypeScript", icon: CodeIcon },
      { name: "JavaScript", icon: JavascriptIcon },{ name: "HTML5 / CSS3", icon: HtmlIcon }, { name: "SCSS", icon: CodeIcon },
    ],
  },
  {
    id: 2, title: "Backend", type: "backend",
    skills: [
      { name: "Java", icon: CodeIcon }, { name: "Spring Boot", icon: DataObjectIcon }, { name: "REST APIs", icon: ApiIcon },
      { name: "Microservices", icon: HubIcon }, { name: "Spring Security", icon: SecurityIcon }, { name: "JWT / OAuth2", icon: SecurityIcon },
    ],
  },
  {
    id: 3, title: "Database & Tools", type: "database",
    skills: [
      { name: "MySQL", icon: StorageIcon }, { name: "Oracle SQL", icon: StorageIcon }, { name: "MS SQL Server", icon: StorageIcon },
      { name: "Git / GitHub", icon: GitHubIcon }, { name: "Docker", icon: MemoryIcon }, { name: "Azure / AWS", icon: CloudIcon },
    ],
  },
  {
    id: 4, title: "AI & Data", type: "ai",
    skills: [
      { name: "Python (Learning)", icon: CodeIcon }, { name: "Machine Learning", icon: PsychologyIcon }, { name: "Deep Learning", icon: PsychologyIcon },
      { name: "GenAI / LLMs", icon: PsychologyIcon }, { name: "RAG (Learning)", icon: HubIcon }, { name: "Vector DB (Learning)", icon: StorageIcon },
    ],
  },
];

export const SkillsAndProjects = () => {
  return (
    <div className="skills_projects_container mt-4">
      <section className="skills_container" id="skills">
        <div className="skills_heading">
          <CodeIcon className="skills_heading_icon" />
          <h2>Tech Arsenal</h2>
        </div>

        <div className="skills_categories">
          {skillCategories.map((category) => (
            <div className={`skill_category ${category.type}`} key={category.id}>
              <h3 className="skill_category_title">{category.title}</h3>
              <div className="skills_list">
                {category.skills.map((skill) => { const Icon = skill.icon;
                  return (
                    <div className="skill_item" key={skill.name}>
                      <div className="skill_icon_box">
                        <Icon className="skill_icon" />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="projects_container">
        <h2>Projects</h2>

        <div className="projects_timeline">
          <div className="project_item">
            <div className="project_dot"></div>

            <div className="current_project_card">
              <div className="project_header">
                <span className="project_date">Nov 2022 – Present</span>
                <span className="project_badge current">Current</span>
              </div>

              <h3>Software Engineer</h3>
              <p className="project_company">Motivity Labs Pvt Ltd</p>
              <p className="project_description"> Working on enterprise travel booking platforms (Cheap Caribbean, Beach Bound, Apple Vacations) </p>
            </div>
          </div>

          <div className="project_item">
            <div className="project_dot"></div>
            <div className="current_project_card">
              <div className="project_header">
                <h3>Backend Developer</h3>
                <span className="project_badge earlier">Earlier</span>
              </div>

              <p className="project_company">iVIS India Project</p>
              <p className="project_description">
                Developed secure REST APIs and authentication systems using Spring Boot
              </p>
            </div>
          </div>
        </div>

        <button className="view_experience" type="button">View Full Experience <span>→</span>
        </button>
      </div>
    </div>
  );
};
