import { FileHtml } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Projects = () => {
  return (
    <div className="font-medium border-l-4 pl-2 border-stone-400">
      <h1 className="flex items-center gap-2 font-semibold">
        Projects <FileHtml weight="fill" className="size-5" />
      </h1>
    </div>
  );
};

export default Projects;
