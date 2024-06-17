import React from "react";

const HighlightText = ({ className, children }) => {
  return (
    <p
      className={`${className} ${"my-1 w-fit font-semibold bg-stone-200 px-2 rounded-full"}`}
    >
      {children}
    </p>
  );
};

export default HighlightText;
