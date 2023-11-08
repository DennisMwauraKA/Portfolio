import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import { motion, useInView, useAnimation } from "framer-motion";
function Wrapper() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls =useAnimation();
  useEffect(() => {
  if (isInView) {
    mainControls.start("visible")
  }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
      ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Nav />
        <HeroSection />
        <About />
        <Experience />
        <Contact />
      </motion.div>
    </div>
  );
}

export default Wrapper;

