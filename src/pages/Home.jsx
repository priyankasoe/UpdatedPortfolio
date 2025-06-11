import { ThemeToggle } from "../components/ThemeToggle";
import { SineWaveBackground } from "../components/SinWaveBackground";
import { Prelude } from "../components/Prelude";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* Theme toggle */ }
        <ThemeToggle /> 

        { /* Background Effects */ }
        <SineWaveBackground /> 

        { /* Main Content */ } 
        <main>
            <HeroSection /> 
            <Prelude /> 
            <AboutSection /> 
            <ProjectsSection />
            <ContactSection />
        </main>

    </div> 
}; 