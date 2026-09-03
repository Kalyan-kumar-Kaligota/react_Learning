import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DownloadIcon from "@mui/icons-material/Download";
import "./HomeSection.css";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export const HomeSection = () => {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("home");

  const handleThemeChange = (event, newTheme) => {
    if (newTheme !== null) {
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content ">
          <div className="tab__content">
            <div className="profileContent">
              <button className="profile_Logo">KK</button>
              <span className="profile_Name">Kalyan Kumar</span>
            </div>

            <div className="tabSection_links">
              {navLinks.map((link) => (
                <a key={link.href} href={`#${link.href}`}
                  className={`socialLink ${ activeTab === link.href ? "active" : "" }`}
                  onClick={() => setActiveTab(link.href)}> {link.label} </a>
              ))}
            </div>

            <div className="downloadContent_Section">
              <div className="day_Night_Mode">
                <ToggleButtonGroup
                  className="toggle_btn_group"
                  value={theme}
                  exclusive
                  onChange={handleThemeChange}
                  aria-label="theme"
                >
                  <ToggleButton value="light" className="toggle_btn">
                    {" "}
                    <LightModeIcon className="toggle_icon light" />{" "}
                  </ToggleButton>
                  <ToggleButton value="dark" className="toggle_btn">
                    {" "}
                    <DarkModeIcon className="toggle_icon dark" />{" "}
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div className="download_resume_section">
                <a
                  href="/kaligota_kalyan_kumar.docx"
                  download="kaligota_kalyan_kumar.docx"
                  className="download_CV"
                >
                  <DownloadIcon className="download_icon" />
                  Download Resume
                </a>

                <a
                  href="/kaligota_kalyan_kumar.docx"
                  download="kaligota_kalyan_kumar.docx"
                  className="download_btn"
                >
                  {" "}
                  <DownloadIcon className="download_icon" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
