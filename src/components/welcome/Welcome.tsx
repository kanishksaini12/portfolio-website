import React from "react";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import { Vortex } from "../../ui/vortex";
import myself from "../../assets/images/myself_2.png";
import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={500}
      particleCount={500}
      baseHue={0}
      className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
    >
      <div className="welcome-container h-screen flex flex-col md:flex-row items-center justify-evenly w-full">
        <div className="md:w-3/5">
          <div className="text-5xl mb-4 text-white">Hi, there</div>
          <TypewriterEffectSmooth
            words={[
              {
                text: "I am",
                className: "text-white text-6xl",
              },
              {
                text: "Kanishk",
                className: "text-blue-500 text-7xl",
              },
            ]}
          />
          <div className="text-4xl font-bold mt-4 text-yellow-400">
            Front-End Developer
          </div>
          <div className="text-2xl mt-2 text-gray-300">
            I craft user experiences with a beautiful blend of code and
            creativity
          </div>
        </div>
        <div className="flex justify-center">
          <img src={myself} alt="Myself" className="w-3/5 md:w-3/5" />
        </div>
      </div>
    </Vortex>
  );
};

export default Welcome;
