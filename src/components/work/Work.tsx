import "./Work.css";
import esg from "../../assets/images/esg.png";
import forms from "../../assets/images/forms.png";
import dashboard from "../../assets/images/dashboard.png";
import weather from "../../assets/images/weather.png";
import data from "./work.json";
import { WorkInterface } from "../../models/models";

let imageMap = {
  esg: esg,
  forms: forms,
  dashboard: dashboard,
  weather: weather,
};

const workData: WorkInterface[] = data.Work;
const projectData: WorkInterface[] = data.Personal;

function Work() {
  return (
    <div className="pt-40 work-container pl-[5em]">
      <div>
        <div className="text-3xl font-semibold text-[#83C3B3]">
          Professional Work
        </div>
        <div className="mt-4">
          <span className="text-base">QiO Technologies</span>
          <br />
          <span className="text-sm font-light"> 2021 - present</span>
        </div>
        <div className="work-project mt-8">
          {workData.map((ed: WorkInterface, index: number) => {
            return (
              <div key={index} className="mb-16">
                <div className="project-wrapper flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 p-8">
                  <div className="flex-shrink-0">
                    <img
                      src={imageMap[ed.image]}
                      className="w-full md:w-80 h-auto rounded-3xl"
                      alt={ed.title}
                    />
                  </div>
                  <div className="md:max-w-[50%] flex flex-col justify-between">
                    <div className="font-bold text-xl">{ed.title}</div>
                    <div className="py-4">{ed.desc}</div>
                    <div>
                      {ed.stack.map((es: string, stackIndex: number) => (
                        <span
                          key={stackIndex}
                          className="mr-4 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#32CD32_0%,#000000_70%,#32CD32_100%)]" />
                          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            {es}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="personal-project my-40">
        <div className="text-3xl font-semibold text-[#83C3B3]">
          Personal Projects
        </div>
        {projectData.map((ed: WorkInterface, index: number) => {
          return (
            <div key={index} className="mb-16">
              <div className="project-wrapper flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 p-8">
                <div className="flex-shrink-0">
                  <img
                    src={imageMap[ed.image]}
                    className="w-full md:w-80 h-auto rounded-3xl"
                    alt={ed.title}
                  />
                </div>
                <div className="md:max-w-[50%] flex flex-col justify-between">
                  <div className="font-bold text-xl">{ed.title}</div>
                  <div className="py-4">{ed.desc}</div>
                  <div>
                    {ed.stack.map((es: string, stackIndex: number) => (
                      <span
                        key={stackIndex}
                        className="mr-4 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#32CD32_0%,#000000_70%,#32CD32_100%)]" />
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          {es}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
