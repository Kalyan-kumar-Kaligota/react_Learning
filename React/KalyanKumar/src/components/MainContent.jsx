import SendIcon from "@mui/icons-material/Send";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import PersonIcon from "@mui/icons-material/Person";

import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import profileImage from "../assets/profile_final.png";

import "./MainContent.css";

export const MainContent = () => {
  return (
    <section className="resume_content_container mt-4" id="resume_body">
      <div className="page_body_section">
        <div className="view_details_section">
          <div className="role_type_heading">
            <span className="role_content">Spring boot Angualar Developer</span>
          </div>
          <div className="name_section">
            <span className="hi_text">Hi I'm</span>
            <h1 className="name_text">Kaligota Kalyan Kumar</h1>
            <p className="designation_content">Angualar Full Stack Engineer</p>
          </div>
          <div className="description_section">
            <p className="describe_text">
              Building intelligent and scalable web applicaitons with
            </p>
            <span className="technologies">
              Angualar.React.Java.Spring Boot.SQL
            </span>
          </div>
          <div className="contact_section">
            <div className="view_work_section">
              <button className="viewMyWork" type="button">
                <WorkOutlineIcon className="btn_icon" /> View My Work
              </button>
            </div>
            <div className="contact_me_section">
              <button className="contact_btn" type="button">
                <SendIcon className="btn_icon" /> contact Me{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="profile_section">
          <div className="profile_image_content">
            <div className="image_section">
              <img
                src={profileImage}
                alt="Kalyan Kumar"
                className="profile_image"
              />
            </div>
          </div>

          <div className="years_of_Experience">
            <span className="experience">3.5+</span>
            <span className="experience-text">Years of Experience</span>
          </div>
        </div>

        <div className="about_me_section">
          <div className="about_heading">
            <PersonOutlineIcon className="about_heading_icon" />
            <h2 className="about_title">About Me</h2>
          </div>

          <div className="about_description">
            <p>
              Full Stack Developer with 3.5+ years of experience building, modernizing, and maintaining enterprise-scale web applications using Angular and Java Spring Boot. Specialized in Angular
              architecture, state management, performance optimization, REST APIs, and Microservices.
            </p>
          </div>

          <div className="about_skills">
            <div className="about_skill_item">
              <div className="skill_icon_wrapper">
                <CodeIcon className="skill_icon" />
              </div>
              <span>Angular & React Developer</span>
            </div>

            <div className="about_skill_item">
              <div className="skill_icon_wrapper">
                <DataObjectIcon className="skill_icon" />
              </div>
              <span>Java & Spring Boot Expert</span>
            </div>

            <div className="about_skill_item ai_skill">
              <div className="skill_icon_wrapper">
                <PsychologyIcon className="skill_icon" />
              </div>
              <span>AI & GenAI Learner</span>
            </div>

            <div className="about_skill_item ai_skill">
              <div className="skill_icon_wrapper">
                <TipsAndUpdatesIcon className="skill_icon" />
              </div>
              <span>Problem Solver</span>
            </div>
          </div>

          <div className="about_footer">
            <span className="footer_dot"></span>
            <span className="footer_text">
              Let's build something amazing together! 🚀
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
