import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { SineWaveBackground } from "../components/SinWaveBackground";
import { Navbar } from "../components/Navbar";
import { Prelude } from "../components/Prelude";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* Theme toggle */ }
        <ThemeToggle /> 

        { /* Background Effects */ }
        <SineWaveBackground /> 

        { /* Navbar */ }
        {/* <Navbar />  */}

        { /* Main Content */ } 
        <main>
            <HeroSection /> 
            <Prelude /> 
            <AboutSection /> 
            {/* <SkillsSection /> */}
            <ProjectsSection />
            <ContactSection />
        </main>

        { /* Footer */ } 
        {/* <Footer />  */}
    </div> 
}; 