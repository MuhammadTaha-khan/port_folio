import AboutMe from './components/Aboutme';
import ContactForm from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/hero';
import ProjectSection from './components/Myprojects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonial';
import Vediosr from './components/Vediosr'; 
import Descproject from './components/Descproject'; 

export default function Home() {
  return (
    <main>

      <Hero /> 
      <Descproject/>
      <Skills/>
      <Vediosr/>
      <Experience/>
      <AboutMe/>
      <Testimonials/>
      <ProjectSection/>
      <ContactForm/>
    </main>
  );
}
