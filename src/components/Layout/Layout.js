import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
