import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Gallery from "../components/Inquiries";
import Pricing from "../components/Pricing"; // <-- new
import Contact from "../components/Contact";

import Map from "../components/Map";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PortfolioPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Pricing />
      <Projects />
      <Gallery />
      <Contact />
      <Map />

    </main>
  );
}
