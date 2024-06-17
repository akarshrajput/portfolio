import { ArrowLineRight, TrendUp } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import TextLink from "./buttons/TextLink";
import BaseLink from "./buttons/BaseLink";

const Rank = () => {
  return (
    <div className="font-medium border-l-4 border-stone-600 pl-2 ">
      <h1 className="flex underline underline-offset-2 items-center gap-2 mb-1 text-lg font-semibold">
        Ranks on various coding platforms{" "}
        <TrendUp weight="fill" className="size-5" />
      </h1>
      <RankComponent />
    </div>
  );
};

const RankComponent = () => {
  return (
    <ul className="flex flex-col gap-2  p-2">
      <li className="flex gap-2">
        <div className="border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
          <BaseLink className="mb-1">Leetcode</BaseLink>
          <p>Solved : 70 [42 Easy, 23 Medium, 3 Hard]</p>
          <p>Rank : 113,450 in world</p>
        </div>
      </li>

      <li className="flex gap-2">
        <div className="border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
          <BaseLink className="mb-1">CodeForces</BaseLink>
          <p>Solved : 70 [42 Easy, 23 Medium, 3 Hard]</p>
          <p>Rank : 113,450 in world</p>
        </div>
      </li>

      <li className="flex gap-2">
        <div className="border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
          <BaseLink className="mb-1">Code360</BaseLink>
          <p>Solved : 70 [42 Easy, 23 Medium, 3 Hard]</p>
          <p>Rank : 113,450 in world</p>
        </div>
      </li>
    </ul>
  );
};

export default Rank;
