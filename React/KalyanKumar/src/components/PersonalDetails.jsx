import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./PersonalDetails.css";

export const PersonalDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="personal-details mt-4" id="contact">
      <div className="personal_info">
        <div className="connect_section">
          <h3 className="connect_title">Let's Connect</h3>
          <p className="connect_description">
            {" "}
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about tech!{" "}
          </p>
        </div>

        <div className="contact_details">
          <div className="contact_item">
            <EmailOutlinedIcon className="contact_icon" />
            <a href="mailto:yourmail@gmail.com">kaligotakalyankumar1433@gmail.com</a>
          </div>

          <div className="contact_item">
            <PhoneOutlinedIcon className="contact_icon" />
            <a href="tel:+919100194353">+91 9100194353</a>
          </div>

          <div className="contact_item">
            <LocationOnOutlinedIcon className="contact_icon" />
            <span>Hyderabad, India</span>
          </div>
        </div>

        <div className="opportunities_section">
          <span className="opportunities_label">
            Available for opportunities as
          </span>
          <span className="opportunity_role">Java Full Stack Engineer</span>
          <span className="opportunity_role">Frontend Developer</span>
        </div>

        <div className="hire_me_section">
          <a href="mailto:KaligotaKalyanKumar1433@gmail.com?subject=Job Opportunity - Kalyan Kumar" className="hire_me_btn">
            <SendOutlinedIcon className="hire_icon" />
            Hire Me
            <SendOutlinedIcon className="hire_icon right" />
          </a>
        </div>
      </div>

      <div className="personal_footer">
        <span className="copyright_text">
          © {new Date().getFullYear()} Kalyan Kumar. All rights reserved.
        </span>
        <span className="built_with">
          Built with
          <FavoriteIcon className="heart_icon" />
          using React & CSS
        </span>
      </div>

      <button
        className="scroll_top_btn"
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpwardIcon />
      </button>
    </section>
  );
};
