import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FeaturedProject from "./components/sections/featured/FeaturedProject";
import Hero from "./components/sections/Hero/Hero";
import PersonalProject from "./components/sections/PersonalProject";
import Projects from "./components/sections/projects/Projects";

import Services from "./components/sections/Services";

function App() {
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <Services />
        <About />
        <PersonalProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
