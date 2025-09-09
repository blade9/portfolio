import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div id="about"><AboutSection/> </div>
      <div id="projects"><ProjectsSection /></div>
      <div id="skills"><SkillsSection /></div>
    
    </main>
  );
}
