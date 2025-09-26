import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic';
import SplashCursor from '../SplashCursor/SplashCursor';
import './AppMain.css';

function AppMain() {
  return (
    <div className="AppMain">
      <SplashCursor />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackgroundMusic />
      </div>
  );
}

export default AppMain;