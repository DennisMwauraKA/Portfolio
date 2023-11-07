import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
