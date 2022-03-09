import { Tooltip, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, FC, useEffect, useState } from "react";

interface NavLink {
  name: string;
  link: string;
}
const navlinks: NavLink[] = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "Stack",
    link: "/#stack",
  },
  {
    name: "Work",
    link: "/#work",
  },

  {
    name: "Contact",
    link: "/#contact",
  },
];

const Nav: FC = () => {
  const [Route, setRoute] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState<String>("");
  const [ready, setReady] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const sm = useMediaQuery("(min-width:639px)");
  useEffect(() => {
    window.addEventListener("load", () => {
      setReady(true);
    });
    const hash = window.location.hash;
    const route = window.location.pathname + hash;
    const validRoute = navlinks.findIndex((link) => link.link === route);
    if (validRoute > -1) {
      setRoute(navlinks[validRoute].name);
    }
  }, []);
  const checkValid = (state: boolean, sm: boolean) => {
    if (sm) return true;
    return state;
  };
  return (
    <nav className="p-4 sm:px-0 bg-DarkNavy flex justify-between items-center fixed container z-50 w-full">
      <div
        className={`${
          ready ? "-translate-y-0 opacity-1" : "-translate-y-full opacity-0"
        } transform transition-all duration-500`}
      >
        {/* logo */}
        <svg
          width="60"
          height="54"
          viewBox="0 0 60 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 37.2C6.32 37.5733 6.22667 37.9333 6.12 38.28C6.04 38.6267 6 38.92 6 39.16C6 39.7733 6.32 40.1333 6.96 40.24C7.62667 40.32 8.50667 40.36 9.6 40.36L8.88 43.76C7.86667 43.76 6.92 43.7333 6.04 43.68C5.16 43.6267 4.38667 43.4933 3.72 43.28C3.08 43.0667 2.57333 42.7333 2.2 42.28C1.82667 41.8533 1.64 41.2533 1.64 40.48C1.64 40.24 1.65333 39.9467 1.68 39.6C1.73333 39.2267 1.78667 38.8933 1.84 38.6L3.08 32.96C3.13333 32.7467 3.17333 32.52 3.2 32.28C3.22667 32.0133 3.24 31.7867 3.24 31.6C3.24 30.9867 3.04 30.48 2.64 30.08C2.24 29.6533 1.77333 29.4 1.24 29.32L1.88 26.32C2.68 26.1333 3.37333 25.8133 3.96 25.36C4.54667 24.9067 4.96 24.12 5.2 23L6.4 17.32C6.66667 16.0933 7.06667 15.1467 7.6 14.48C8.16 13.7867 8.82667 13.28 9.6 12.96C10.3733 12.6133 11.24 12.4 12.2 12.32C13.1867 12.24 14.24 12.2 15.36 12.2L14.64 15.6C14.0267 15.6 13.48 15.6133 13 15.64C12.5467 15.6667 12.16 15.7467 11.84 15.88C11.52 15.9867 11.2667 16.1733 11.08 16.44C10.8933 16.7067 10.7467 17.0667 10.64 17.52L9.36 23.36C9.2 24.1067 9.02667 24.7333 8.84 25.24C8.68 25.7467 8.49333 26.1733 8.28 26.52C8.06667 26.8667 7.81333 27.16 7.52 27.4C7.25333 27.64 6.92 27.8533 6.52 28.04C6.78667 28.2533 7.04 28.56 7.28 28.96C7.52 29.36 7.64 29.9067 7.64 30.6C7.64 30.92 7.61333 31.2667 7.56 31.64C7.50667 31.9867 7.44 32.3333 7.36 32.68L6.4 37.2Z"
            fill="white"
          />
          <path
            d="M54.32 18.64C54.4 18.24 54.48 17.88 54.56 17.56C54.64 17.24 54.68 16.9733 54.68 16.76C54.68 16.1733 54.3467 15.84 53.68 15.76C53.0133 15.6533 52.1467 15.6 51.08 15.6L51.84 12.2C52.8533 12.2 53.8 12.2267 54.68 12.28C55.56 12.3333 56.32 12.4667 56.96 12.68C57.6 12.8933 58.1067 13.2267 58.48 13.68C58.8533 14.1067 59.04 14.7067 59.04 15.48C59.04 15.72 59.0133 16.0267 58.96 16.4C58.9333 16.7467 58.8933 17.0667 58.84 17.36L57.64 23C57.5867 23.2133 57.5333 23.4533 57.48 23.72C57.4533 23.96 57.44 24.1733 57.44 24.36C57.44 24.9733 57.64 25.4933 58.04 25.92C58.44 26.32 58.9067 26.56 59.44 26.64L58.8 29.68C58 29.84 57.3067 30.1467 56.72 30.6C56.1333 31.0533 55.72 31.84 55.48 32.96L54.32 38.64C54.08 39.8667 53.68 40.8133 53.12 41.48C52.56 42.1733 51.88 42.68 51.08 43C50.3067 43.3467 49.4267 43.56 48.44 43.64C47.4533 43.72 46.4133 43.76 45.32 43.76L46.04 40.36C46.6533 40.36 47.1867 40.3467 47.64 40.32C48.12 40.2933 48.52 40.2267 48.84 40.12C49.16 39.9867 49.4133 39.7867 49.6 39.52C49.8133 39.2533 49.9733 38.8933 50.08 38.44L51.32 32.6C51.48 31.88 51.64 31.2667 51.8 30.76C51.9867 30.2533 52.1867 29.8267 52.4 29.48C52.64 29.1067 52.8933 28.8 53.16 28.56C53.4533 28.32 53.8 28.1067 54.2 27.92C53.9067 27.7067 53.64 27.4 53.4 27C53.16 26.6 53.04 26.0533 53.04 25.36C53.04 25.0133 53.0667 24.6667 53.12 24.32C53.2 23.9733 53.28 23.6267 53.36 23.28L54.32 18.64Z"
            fill="white"
          />
          <path d="M31.28 43L17.76 17.6H21.4L35.36 43H31.28Z" fill="white" />
          <path
            d="M38.92 34.64H34.16L27.4 26.36L37.28 18.08H41.96L32.52 26.36L38.92 34.64Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        onClick={() => setNavOpen((state) => !state)}
        className="cursor-pointer relative sm:hidden flex flex-col items-center gap-2"
      >
        <div
          className={`transition-all origin-bottom-right ${
            navOpen ? "-rotate-45" : ""
          } w-8 h-1 bg-white`}
        ></div>
        <div
          className={`transition-all origin-center ${
            navOpen ? "w-0" : "w-8"
          } h-1 bg-white`}
        ></div>
        <div
          className={`transition-all origin-top-right ${
            navOpen ? "rotate-45" : ""
          } w-8 h-1 bg-white`}
        ></div>
      </div>
      <ul
        className={`${
          navOpen ? "-translate-x-0" : " -translate-x-full"
        } flex flex-col sm:transform-none bg-DarkNavy transition-all duration-500 justify-center items-center absolute w-screen h-screen sm:static sm:h-auto sm:w-auto top-20 left-0  sm:flex-row gap-12 font-Roboto font-bold text-2xl`}
      >
        {/* nav links */}
        {navlinks.map(({ name, link }, i) => (
          <li
            onClick={() => {
              setRoute(name);
              if (!sm) {
                setNavOpen(false);
              }
            }}
            onMouseOver={() => setHoveredLink(name)}
            onMouseLeave={() => setHoveredLink("")}
            className={`${
              ready && checkValid(navOpen, sm)
                ? "translate-y-0 opacity-1"
                : "translate-y-1/2 opacity-0"
            } transition-all w-fit transform ease-in-out duration-500 flex flex-col items-center`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            key={i}
          >
            <div className="text-white">
              <Link href={link}>{name}</Link>
            </div>
            <span
              style={{ height: "0.125rem" }}
              className={`${
                Route === name
                  ? "w-full bg-DarkCyan"
                  : hoveredLink === name
                  ? "w-full opacity-100 bg-white"
                  : "w-0 opacity-0"
              } transition-all duration-300 origin-center rounded-xl w-full `}
            ></span>
          </li>
        ))}
      </ul>

      <Tooltip
        title="Github Profile"
        arrow
        className={`${
          ready ? "-translate-y-0 opacity-1" : "-translate-y-full opacity-0"
        } transform transition-all duration-500`}
      >
        <a
          href="https://github.com/kerlos1256"
          target="_blank"
          rel="noreferrer"
        >
          {/* github */}
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_62_59)">
              <path
                d="M40.988 0H0.0120117C0.00537783 0 0 0.00537783 0 0.0120117V40.988C0 40.9946 0.00537783 41 0.0120117 41H40.988C40.9946 41 41 40.9946 41 40.988V0.0120117C41 0.00537783 40.9946 0 40.988 0Z"
                fill="white"
              />
              <path
                d="M26.8261 39.959C27.9472 39.959 27.787 41.3203 27.787 41.3203H13.2128C13.2128 41.3203 13.0526 39.959 14.1737 39.959C15.2147 39.959 15.455 39.4785 15.455 38.998L15.3749 34.9941C9.68936 36.2754 8.48819 32.752 8.48819 32.752C7.52725 30.3496 6.246 29.7891 6.246 29.7891C4.32412 28.5078 6.32608 28.5078 6.32608 28.5078C8.40811 28.668 9.5292 30.5898 9.5292 30.5898C11.2909 33.7129 14.2538 32.832 15.455 32.3516C15.6151 30.9902 16.1757 30.1094 16.7362 29.5488C12.1718 29.0684 7.44717 27.3066 7.44717 19.459C7.44717 17.2168 8.24795 15.375 9.5292 13.9336C9.28897 13.4531 8.64834 11.3711 9.76944 8.56836C9.76944 8.56836 11.4511 8.00781 15.3749 10.6504C18.7382 9.68945 22.2616 9.68945 25.6249 10.6504C29.5487 8.00781 31.2304 8.56836 31.2304 8.56836C32.3515 11.3711 31.7108 13.4531 31.4706 13.9336C32.7519 15.375 33.5526 17.2168 33.5526 19.459C33.5526 27.3066 28.748 29.0684 24.1835 29.5488C24.9843 30.1895 25.6249 31.4707 25.6249 33.3926L25.5448 38.998C25.5448 39.4785 25.7851 39.959 26.8261 39.959Z"
                fill="#282C34"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_59">
                <rect width="41" height="41" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </Tooltip>
    </nav>
  );
};

export default Nav;
