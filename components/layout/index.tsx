import Nav from "./Nav";
import React, { FC } from "react";
import Footer from "./Footer";

const index: FC = ({ children }) => {
  return (
    <div className="container mx-auto relative font-Roboto text-white">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default index;
