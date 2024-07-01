import { useEffect, useState } from "react";
import { TracingBeam } from "../../ui/tracing-beam";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/Navbar";
import Welcome from "../welcome/Welcome";
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
    <div className="flex flex-col min-h-screen">
      <Navbar active={active} setActive={setActive} />
      <TracingBeam className="">
        <div id="home" className="w-full h-screen overflow-x-hidden">
          <Welcome />
        </div>
        <div id="about" className="w-full h-screen">
          <AboutMe />
        </div>
        <div id="work" className="w-full h-full">
          <Work />
        </div>
        <div id="contact" className="w-full h-screen">
          <Contact />
        </div>
      </TracingBeam>
    </div>
  );
}

export default Layout;
