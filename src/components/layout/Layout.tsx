import { TracingBeam } from "../../ui/tracing-beam";
import Welcome from "../welcome/Welcome";

function Layout() {
  return (
    <TracingBeam className="px-6 ml-[5em]">
      <div className="w-full overflow-hidden">
        <Welcome />
      </div>
    </TracingBeam>
  );
}

export default Layout;
