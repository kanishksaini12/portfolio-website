import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const about = `I am enthusiastic and innovative front-end developer with over 3+ years of experience spanning multiple roles in software development.`;
  const secondary =
    "With a degree in Mathematics and Computer Science, I offer the perfect blend of analytical precision and technical expertise.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={targetRef}
      className="w-full flex justify-center items-center h-full"
    >
      {isVisible ? (
        <div className="flex flex-row justify-end w-full">
          <div className="w-[30em] flex-wrap mt-[12em]">
            <div className="text-6xl mb-[1em] font-bold text-blue-500">
              About Me
            </div>
            <div>
              <TextGenerateEffect
                words={about}
                className="text-white text-xl"
              />{" "}
              <br />
              <TextGenerateEffect
                words={secondary}
                className="text-white text-xl"
              />
            </div>
          </div>
          <div className="w-[50em]">
            <LampContainer>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-[-2em] bg-gradient-to-br from-gray-600 to-black bg-clip-text text-center"
              >
                <span className="text-xl">
                  Angular React <br /> JavaScript TypeScript <br /> HTML CSS
                  Tailwaind CSS NodeJs
                  <br /> Redux Ngrx E-charts RxJs
                  <br />
                  ... and many more
                </span>
              </motion.h1>
            </LampContainer>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AboutMe;
