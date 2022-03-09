import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { ProjectType } from "../home/Work";
const ProjectCard: FC<{ card: ProjectType }> = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-[386px] h-[214px]"
    >
      <img className="w-full h-full object-cover" src={card.image} />
      <div
        className={`${
          hovered ? "opacity-100" : " opacity-0"
        } transition-opacity duration-500 absolute top-0 left-0 w-full h-full`}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-CardOverlay opacity-70"></div>
        <Link href={card.url}>
          <div
            onMouseOver={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            className={`${
              linkHovered ? "border-DarkCyan" : ""
            } border-2 transition-all duration-500 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[40px]`}
          >
            <div className="w-full h-full flex justify-center items-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Project Details
            </div>
            <div className="bg-CardOverlay opacity-70 top-0 left-0 w-full h-full absolute ">
              {/* overlay */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
