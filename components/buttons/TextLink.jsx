import Link from "next/link";
import React from "react";

const TextLink = ({
  href = "",
  target = "",
  children = "",
  className = "",
}) => {
  return (
    <Link
      className={`${className} ${"hover:underline mr-2 underline-offset-2 text-sky-900 rounded-md"}`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default TextLink;
