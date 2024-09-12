"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next</li>
        <li>Redux</li>
        <li>GraphQL</li>
        <li>Electron</li>
        <li>Node</li>
        <li>Express</li>
        <li>Prisma</li>
        <li>SQLite</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer - E-Solution</li>
        <li>Software Engineer - Attributy.</li>
        <li>Software Engineer - Incodeks</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Mitrovica "Isa Boletini"</li>
        <li>Full Stack Developer - Hoxton Academy</li>
        <li>React the Complete Guide - Udemy </li>
        <li>Web Development - dreambig</li>
        <li>Basic Rules of Cyber Hygene - CRDF Global</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me-section.gif"
          alt="About"
          className="rounded-lg bg-orange-200 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-400 hover:ease-in-out hover:scale-105 hover:transform hover:transition-all duration-1000"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            HTML, CSS, JavaScript, React, React Native, Next, Redux, GraphQL,
            Electron, Node, Express, Prisma, SQLite, Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applciations.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {""}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              Experience{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
