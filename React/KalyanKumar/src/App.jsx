import { HomeSection } from './components/HomeSection';
import { MainContent } from './components/MainContent';
import { ExperienceDetails } from './components/ExperienceDetails';
import { SkillsAndProjects } from './components/SkillsAndProjects';
import { PersonalDetails } from './components/PersonalDetails';

import './App.css'
import { ProjectsDetails } from './components/ProjectsDetails';

function App() {

  return (
    <div className="home_section">
      <HomeSection />
      <MainContent />
      <ExperienceDetails />
      <SkillsAndProjects />
      <ProjectsDetails />
      <PersonalDetails />
    </div>
  )
}

export default App
