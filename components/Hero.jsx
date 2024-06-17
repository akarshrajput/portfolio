import React from "react";
import TextLink from "./buttons/TextLink";
import Image from "next/image";
import HighlightText from "./texts/HighlightText";
import { FadersHorizontal, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { NeonGradientCard } from "./magicui/neongradientcard";
import BaseLink from "./buttons/BaseLink";
import ProfileCard from "./ProfileCard";

const Hero = () => {
  return (
    <div>
      <div className="grid font-medium grid-cols-2  gap-2 border-dashed border-stone-500 rounded-md">
        <ProfileCard />
        <div className="border-l-4 z-10 font-medium border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
          <h1 className="flex underline underline-offset-2 items-center gap-2 mb-1 text-lg font-semibold">
            Skills <FadersHorizontal weight="fill" className="size-5" />
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="flex gap-2 border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
              <p className="font-semibold">Programming Languages</p>
              <p>:</p>
              <p className="">C, C++, Java, Python and JavaScript</p>
            </li>
            <li className="flex gap-2 border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
              <div>
                <p className="font-semibold ">Frameworks</p>
              </div>
              <p>:</p>
              <p className="">
                Next.js, React, Node.js, RestAPIs, Express, HTML, CSS,
                TailwindCSS, SpringBoot, Jade, Web Design(UI/UX), Web
                development
              </p>
            </li>
            <li className="flex gap-2 border-l-4 border-r border-y text-stone-800 bg-white border-stone-400 p-2 rounded-md">
              <p className="font-semibold">Databases</p>
              <p>:</p>
              <p className="">MongoDB, Supabase, PostgreSQL and Oracle SQL</p>
            </li>
          </ul>
          <h1 className="flex underline underline-offset-2 mt-4 items-center gap-2 mb-1 text-lg font-semibold">
            Social Links <FadersHorizontal weight="fill" className="size-5" />
          </h1>
          <p className="flex flex-wrap gap-2">
            <BaseLink className="bg-sky-800">LinkedIn</BaseLink>
            <BaseLink className="bg-sky-800">GitHub</BaseLink>
            <BaseLink className="bg-sky-800">Twitter[X]</BaseLink>
            <BaseLink className="bg-sky-800">Instagram</BaseLink>
            <BaseLink className="bg-sky-800">OpenMinder</BaseLink>
            <BaseLink className="bg-sky-800">LeetCode</BaseLink>
            <BaseLink className="bg-sky-800">CodeForces</BaseLink>
            <BaseLink className="bg-sky-800">Code360</BaseLink>
          </p>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  return;
};

export default Hero;
