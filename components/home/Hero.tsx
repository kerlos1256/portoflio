import React, { FC } from "react";
import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { routeState } from "../../state/recoil/route";

const Hero: FC = () => {
  const setRoute = useSetRecoilState(routeState);
  return (
    <section id="home" className="">
      <div className="ml-16 my-40 flex flex-col gap-8">
        <div className="text-5xl leading-snug">
          Hi,
          <br />I{"'"}m Kerlos,
          <br />
          <span className="w-fit relative ">
            Fullstack
            <span className="w-full h-1 rounded left-0 absolute bottom-0 bg-DarkCyan"></span>
          </span>{" "}
          Web Developer <br />
          {"&"} UI UX Designer
        </div>
        <div className="flex gap-4 ml-16">
          {/* buttons */}
          <Button
            onClick={() => setRoute("/#work")}
            variant="contained"
            className="bg-DarkCyan hover:bg-opacity-90 hover:bg-DarkCyan border-black text-black"
          >
            Work
          </Button>
          <Button
            onClick={() => setRoute("/#contact")}
            className="hover:border-DarkCyan border-DarkCyan text-DarkCyan"
            variant="outlined"
          >
            Contact
          </Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
