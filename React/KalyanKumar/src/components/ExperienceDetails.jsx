import { Card, CardContent } from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CodeIcon from "@mui/icons-material/Code";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import "./ExperienceDetails.css";

const experienceData = [
  { id: 1, value: "3.5+", label: "Years Experience", icon: WorkOutlineIcon, type: "experience" },
  { id: 2, value: "3", label: "Enterprise Projects", icon: FolderOpenIcon, type: "projects" },
  { id: 3, value: "15+", label: "Technologies", icon: CodeIcon, type: "technologies_type" },
  { id: 4, value: "∞", label: "Learning Every Day", icon: AllInclusiveIcon, type: "learning" },
];

export const ExperienceDetails = () => {
  return (
    <section className="experience_details_section mt-4" id="about">
      {experienceData.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.id} className={`experience_card ${item.type}`}>
            <CardContent className="experience_card_content">
              <div className="experience_icon_container">
                <Icon className="experience_icon" />
              </div>

              <div className="experience_content">
                <span className="experience_value">{item.value}</span>
                <span className="experience_label"> {item.label} </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
};