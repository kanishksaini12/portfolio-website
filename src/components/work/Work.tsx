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
    <div className="pt-[10em]">
      <div>
        <div className="text-3xl font-semibold text-blue-500">
          Professional Work
        </div>
        <div className="mt-[1em]">
          <span className="text-base">QiO Technologies</span>
          <br />
          <span className="text-sm font-light"> 2019 - present</span>
        </div>
        <div className="work-project">
          {workData.map((ed: WorkInterface, index: number) => {
            return (
              <div key={index}>
                <div className="project-wrapper">
                  <div className="">
                    <img
                      src={imageMap[ed.image]}
                      className="w-[25em] h-[15em] rounded-3xl"
                    />
                  </div>
                  <div className="max-w-[50%] flex flex-col justify-between">
                    <div className="font-bold text-xl">{ed.title}</div>
                    <div className="py-4">{ed.desc}</div>
                    <div>
                      {ed.stack.map((es: string, index: number) => {
                        return (
                          <span
                            key={index}
                            className="mr-4 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                          >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              {es}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="personal-project my-[10em]">
        <div className="text-3xl font-semibold text-blue-500">
          Personal Projects
        </div>
        {projectData.map((ed: WorkInterface) => {
          return (
            <>
              <div className="project-wrapper">
                <div className="">
                  <img
                    src={imageMap[ed.image]}
                    className="w-[25em] h-[15em] rounded-3xl"
                  />
                </div>
                <div className="max-w-[50%] flex flex-col justify-between">
                  <div className="font-bold text-xl">{ed.title}</div>
                  <div className="py-4">{ed.desc}</div>
                  <div>
                    {ed.stack.map((es: string) => {
                      return (
                        <>
                          <span className="mr-4 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              {es}
                            </span>
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
