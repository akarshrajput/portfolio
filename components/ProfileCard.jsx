"use client";
import React from "react";
import { NeonGradientCard } from "./magicui/neongradientcard";
import TextLink from "./buttons/TextLink";
import HighlightText from "./texts/HighlightText";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="z-10">
      <NeonGradientCard>
        <div className="z-20">
          <p>
            <Image
              src="/akarshrajput.jpg"
              className="size-36 my-1 rounded-sm"
              width={1000}
              height={1000}
            />
            <mark className="bg-transparent text-4xl text-stone-600">H</mark>
            i, My name is <TextLink href="/about">Akarsh Rajput</TextLink>. I am
            doing BTech in Computer Science and Engineering{" "}
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
              <TextLink>[Jade] template engine</TextLink>, <TextLink></TextLink>
              , <TextLink>Security</TextLink>, ...
            </li>
          </ul>
        </div>
      </NeonGradientCard>
    </div>
  );
};

export default ProfileCard;
