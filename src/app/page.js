import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NowSection from "@/components/NowSection";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Skills from "@/components/Skills";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import TrackRecord from "@/components/TrackRecord";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function HomePage() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-surface-light text-text-light transition-colors duration-500 dark:bg-surface-dark dark:text-text-dark">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <TrackRecord />
            <Skills />
            <NowSection />
          </main>
          <ScrollToTopButton />
          <Footer />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
