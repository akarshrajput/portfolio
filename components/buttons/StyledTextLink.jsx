import Link from "next/link";
import React from "react";

const StyledTextLink = ({
  href = "",
  target = "",
  children = "",
  className = "",
}) => {
  return (
    <Link
      className={`${className} ${"bg-sky-100 px-2 rounded-full text-sm text-sky-700"}`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default StyledTextLink;
