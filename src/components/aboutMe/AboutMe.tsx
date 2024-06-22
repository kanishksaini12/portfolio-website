"use client";
import React from "react";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const about = `I am an enthusiastic and innovative front-end developer with over 3+ years of experience spanning multiple roles in software development.`;
  const secondary = `With a degree in Mathematics and Computer Science, I offer the perfect blend of analytical precision and technical expertise.`;

  return (
    <div className="w-full flex justify-center items-center h-full px-4 md:px-10">
      <div className="flex flex-col items-center md:flex-row justify-end w-full mt-24 md:mt-0">
        <div className="flex items-center md:w-2/5 h-full flex-wrap mt-12 md:mt-0 text-center md:text-left">
          <div className="text-6xl mb-[5rem] font-bold text-blue-500">
            About Me
          </div>
          <div className="text-white text-xl">
            <TextGenerateEffect words={about} />
            <br />
            <TextGenerateEffect words={secondary} />
          </div>
        </div>
        <div className="md:w-3/5 mt-12 md:mt-0 flex justify-center">
          <LampContainer className="w-full">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="mt-[-2em] bg-gradient-to-br from-gray-600 to-black bg-clip-text text-center text-transparent"
            >
              <span className="text-xl text-white">
                Angular React <br /> JavaScript TypeScript <br /> HTML CSS
                Tailwind CSS NodeJs
                <br /> Redux Ngrx E-charts RxJs
                <br />
                ... and many more
              </span>
            </motion.h1>
          </LampContainer>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
