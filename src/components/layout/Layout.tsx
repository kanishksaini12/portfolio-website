import { TracingBeam } from "../../ui/tracing-beam";
import AboutMe from "../aboutMe/AboutMe";
import Welcome from "../welcome/Welcome";
import "./Layout.css";

function Layout() {
  return (
    <TracingBeam className="px-6 ml-[5em]">
      <div className="section overflow-x-hidden">
        <Welcome />
      </div>
      <div className="section">
        <AboutMe />
      </div>
    </TracingBeam>
  );
}

export default Layout;
