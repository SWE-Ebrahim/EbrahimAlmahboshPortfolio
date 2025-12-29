// frontend/src/app/page.jsx
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <Hero />
      <About />
      <ProjectsSection/>
      <Education/>
      <Contact/>
      <Footer/>
      {/* You can add other sections here later */}
    </main>
  );
}