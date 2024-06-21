import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../../ui/typewriter-effect";
import "./Welcome.css";
import myself from "../../assets/images/myself_2.png";
import { Vortex } from "../../ui/vortex";

function Welcome() {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={500}
      particleCount={500}
      baseHue={180}
      className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
    >
      <div className="welcome-container h-[100vh]">
        <div className="w-[40em]">
          <div className="text-5xl">Hi, there</div>
          <div>
            <TypewriterEffectSmooth
              words={[
                {
                  text: "I am",
                  className: "text-white text-6xl",
                },
                {
                  text: "Kanishk",
                  className: "text-blue-500 text-8xl",
                },
              ]}
            />
          </div>
          <div className="text-4xl font-bold">Front-End developer</div>
          <div className="text-2xl">
            I craft user experience with beautiful blend of code and cretivity
          </div>
        </div>
        <div>
          <img src={myself} className="w-[35em]" />
        </div>
      </div>
    </Vortex>
  );
}

export default Welcome;
