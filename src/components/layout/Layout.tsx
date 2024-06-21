import { useEffect, useState } from "react";
import { TracingBeam } from "../../ui/tracing-beam";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/Navbar";
import Welcome from "../welcome/Welcome";
import "./Layout.css";
import Contact from "../contact/Contact";
import Work from "../work/Work";

function Layout() {
  const [active, setActive] = useState<string | null>("Home");

  useEffect(() => {
    if (active) {
      const a = active.toLowerCase();
      const id = document.getElementById(a as string);
      id?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setActive(null);
  }, [active]);

  return (
    <div>
      <div>
        <Navbar active={active} setActive={setActive} />
      </div>
      <TracingBeam className="px-6 ml-[5em]">
        <div id="home" className="section overflow-x-hidden">
          <Welcome />
        </div>
        <div id="about" className="section">
          <AboutMe />
        </div>
        <div id="work" className="w-full h-full">
          <Work />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </TracingBeam>
    </div>
  );
}

export default Layout;
