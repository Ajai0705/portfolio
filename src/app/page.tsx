import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EasterEgg } from "@/components/EasterEgg";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <EasterEgg />
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Education />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
