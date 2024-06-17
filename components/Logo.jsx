import { ChefHat } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import StyledTextLink from "./buttons/StyledTextLink";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <ChefHat weight="fill" className="size-5" />
      <p className="font-semibold">Hi there,</p>
      <StyledTextLink href="/about">me</StyledTextLink>
      <StyledTextLink href="/about">full-stack developement</StyledTextLink>
      <StyledTextLink href="/about">my-acheivements</StyledTextLink>
    </div>
  );
};

export default Logo;
