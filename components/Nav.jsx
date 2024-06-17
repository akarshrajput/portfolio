import Link from "next/link";
import React from "react";
import NavLink from "./buttons/NavLink";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

const Nav = () => {
  return (
    <div className="ml-auto">
      <div className="font-medium flex items-center gap-1">
        <NavLink href="/contact">Skills</NavLink>
        <NavLink href="/contact">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/contact" target="_blank">
          <GithubLogo weight="bold" />
          Github
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
