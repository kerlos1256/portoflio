import React, { FC } from "react";
import ProjectCard from "../partails/ProjectCard";
const Work: FC<{ projects: ProjectType[] }> = ({ projects }) => {
  return (
    <section className=" flex flex-col gap-40" id="work">
      <div className="flex flex-col items-center">
        <div className="text-40">Work</div>
        <svg
          width="177"
          height="3"
          viewBox="0 0 177 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H177L171.575 3H5.42529L0 0Z" fill="white" />
        </svg>
      </div>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit,min(100%, 386px))",
        }}
        className="grid w-full justify-center gap-10"
      >
        {/* work cards */}
        {projects.map((card, i) => (
          <ProjectCard key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Work;

export interface ProjectType {
  _id: string;
  image: string;
  name: string;
  url: string;
  visiable: boolean;
}
