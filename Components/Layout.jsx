import React from "react";
//Components
import { Header } from "./";
import { Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
