import { strings } from "@/constants/strings";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Statement from "@/components/statement";
import Showcase from "@/components/showcase";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Toolkit from "@/components/toolkit";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        {strings.a11y.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Statement />
        <Showcase />
        <Projects />
        <Experience />
        <Toolkit />
      </main>
      <Contact />
    </>
  );
}
