import Layout from './_components/Layout';
import Hero from './_components/Hero';
import About from './_components/About';
import Skills from './_components/Skills';
import Experience from './_components/Experience';
import Projects from './_components/Projects';
import Education from './_components/Education';
import Contact from './_components/Contact';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Layout>
  );
}
