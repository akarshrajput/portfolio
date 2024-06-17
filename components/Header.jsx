import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex items-center p-2">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
