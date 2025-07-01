import React from "react";
import Projects from "./Projects";
import Technologies from "./component/Technologies";
import AdditionalTech from "./component/AdditionalTech";
import AboutMe from "./AboutMe";

export default function Main() {
  return (
    <>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="technologies">
        <Technologies></Technologies>
      </section>
      <section>
        <AdditionalTech></AdditionalTech>
      </section>
      <section id="aboutme">
        <AboutMe></AboutMe>
      </section>
    </>
  );
}
