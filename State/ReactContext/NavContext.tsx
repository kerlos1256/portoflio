import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

export const NavCtx = createContext<{
  Route: string;
  setRoute: Dispatch<SetStateAction<string>>;
}>({
  Route: "Home",
  setRoute: () => {},
});

const NavContext: FC = ({ children }) => {
  const [Route, setRoute] = useState("Home");

  return (
    <NavCtx.Provider value={{ Route, setRoute }}>{children}</NavCtx.Provider>
  );
};

export default NavContext;
