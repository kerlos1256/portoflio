import React, { FC, useEffect, useState } from "react";
import ProjectCard from "../partails/ProjectCard";
const Work: FC<{ projects: CardType[] }> = ({ projects }) => {
  const [cardHovered, setCardHovered] = useState<number>();

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
          <div
            key={i}
            onMouseOver={() => setCardHovered(i)}
            onMouseLeave={() => setCardHovered(undefined)}
            className="inline-block"
          >
            <ProjectCard card={card} hovered={cardHovered === i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

export interface CardType {
  id: number;
  image: string;
  name: string;
  url: string;
}
