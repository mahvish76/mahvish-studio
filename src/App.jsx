import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FeaturedProject from "./components/sections/featured/FeaturedProject";
import Hero from "./components/sections/Hero/Hero";
import PersonalProject from "./components/sections/PersonalProject";
import Projects from "./components/sections/projects/Projects";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function App() {
  const transitionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end start"],
  });

  const projectY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100vh", "0vh"]
  );
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <About />
        <PersonalProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
