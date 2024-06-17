import React from "react";
import TextLink from "./buttons/TextLink";
import Image from "next/image";
import HighlightText from "./texts/HighlightText";
import { FadersHorizontal, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { NeonGradientCard } from "./magicui/neongradientcard";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 border-dashed border-stone-500 rounded-md">
        <div className="font-medium">
          <NeonGradientCard>
            <p>
              <Image
                src="/akarshrajput.jpg"
                className="size-36 my-1 rounded-sm"
                width={1000}
                height={1000}
              />
              <mark className="bg-transparent text-4xl text-stone-600">H</mark>
              i, My name is <TextLink href="/about">Akarsh Rajput</TextLink>. I
              am doing BTech in Computer Science and Engineering{" "}
              <TextLink href="/about">[CSE]</TextLink> from Lovely Professional
              University [2022-26].
            </p>

            <HighlightText className="text-stone-600 my-2">
              CGPA : 8.50 / 10.00
            </HighlightText>
            <p>
              I am a Professional full-stack developer with experience in
              real-world projects. I am expert in <TextLink>Next.js</TextLink>,{" "}
              <TextLink>React</TextLink>, <TextLink>Node.js</TextLink>,{" "}
              <TextLink>MongoDB</TextLink>, <TextLink>PostgreSQL</TextLink>,
              <TextLink>Supabase</TextLink> and{" "}
              <TextLink className="after:content-['_↗']">many more</TextLink>,
            </p>

            <ul>
              <li>
                Backend - <TextLink>RestAPIs</TextLink>,{" "}
                <TextLink>Next.js server-side API</TextLink>,{" "}
                <TextLink>Express</TextLink>, <TextLink>MongoDB</TextLink>,{" "}
                <TextLink>PostgreSQL</TextLink>, <TextLink>Supabase</TextLink>,{" "}
                <TextLink>Security</TextLink>...
              </li>
              <li>
                Frontend - <TextLink>[Next.js] server-side rendering</TextLink>,{" "}
                <TextLink>[React] client-side rendering using APIs</TextLink>,{" "}
                <TextLink>Redux</TextLink>,{" "}
                <TextLink>[Jade] template engine</TextLink>,{" "}
                <TextLink></TextLink>, <TextLink>Security</TextLink>, ...
              </li>
            </ul>
          </NeonGradientCard>
        </div>
        <div className="font-medium border-l-4 pl-2 border-stone-200">
          <h1 className="flex underline underline-offset-2 items-center gap-2 mb-1 text-lg font-semibold">
            Skills <FadersHorizontal weight="fill" className="size-5" />
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="flex gap-1 items-center">
              <p className="font-semibold">Programming Languages</p>
              <p>:</p>
              <p className="border-l-4 border-r border-y text-sky-800 bg-sky-100 border-sky-600 py-1 px-2 rounded-s">
                C, C++, Java, Python and JavaScript
              </p>
            </li>
            <li className="flex gap-1">
              <div>
                <p className="font-semibold ">Frameworks</p>
              </div>
              <p>:</p>
              <p className="border-l-4 border-r border-y text-sky-800 bg-sky-100 border-sky-600 py-1 px-2 rounded-s">
                Next.js, React, Node.js, RestAPIs, Express, HTML, CSS,
                TailwindCSS, SpringBoot, Jade, Web Design(UI/UX), Web
                development
              </p>
            </li>
            <li className="flex gap-1 items-center">
              <p className="font-semibold">Databases</p>
              <p>:</p>
              <p className="border-l-4 border-r border-y text-sky-800 bg-sky-100 border-sky-600 py-1 px-2 rounded-s">
                MongoDB, Supabase, PostgreSQL and Oracle SQL
              </p>
            </li>
          </ul>
          <h1 className="flex underline underline-offset-2 mt-4 items-center gap-2 mb-1 text-lg font-semibold">
            Social Links <FadersHorizontal weight="fill" className="size-5" />
          </h1>
          <p className="flex flex-wrap gap-2">
            <TextLink>LinkedIn</TextLink>
            <TextLink>GitHub</TextLink>
            <TextLink>Twitter[X]</TextLink>
            <TextLink>Instagram</TextLink>
            <TextLink>OpenMinder</TextLink>
            <TextLink>LeetCode</TextLink>
            <TextLink>CodeForces</TextLink>
            <TextLink>Code360</TextLink>
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
