import { AboutSection } from "@/features/about/about-section";
import { ApplicationsSection } from "@/features/applications/applications-section";
import { ContactTerminal } from "@/features/contact/contact-terminal";
import { ExperienceTimeline } from "@/features/experience/experience-timeline";
import { ExtrasSection } from "@/features/extras/extras-section";
import { GameSection } from "@/features/games/game-section";
import { Hero } from "@/features/hero/hero";
import { ProjectsShowcase } from "@/features/projects/projects-showcase";
import { SkillsConstellation } from "@/features/skills/skills-constellation";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsConstellation />
      <ProjectsShowcase />
      <GameSection />
      <ApplicationsSection />
      <ExperienceTimeline />
      <ExtrasSection />
      <ContactTerminal />
    </main>
  );
}
