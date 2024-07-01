import React from "react";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import avatar from "../../assets/images/avatar_2.png";
import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container h-screen flex flex-col md:flex-row items-center justify-evenly w-full pl-[5em]">
      <div className="md:w-3/5 pl-[2em]">
        <div className="text-5xl mb-4 text-white">Hi, there</div>
        <TypewriterEffectSmooth
          words={[
            {
              text: "I am",
              className: "text-white text-6xl",
            },
            {
              text: "Kanishk",
              className: "text-[#83C3B3] text-8xl",
            },
          ]}
        />
        <div className="text-4xl font-bold mt-4 text-white">
          Front-End Developer
        </div>
        <div className="text-2xl mt-2 text-gray-300">
          I craft user experiences with a beautiful blend of code and creativity
        </div>
      </div>
      <div className="flex justify-center">
        <img src={avatar} alt="Myself" className="w-3/5 md:w-3/5" />
      </div>
    </div>
  );
};

export default Welcome;
