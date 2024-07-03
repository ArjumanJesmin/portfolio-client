import React from "react";

import { Database, Pyramid } from "lucide-react";
import TechCard from "@/app/components/homePage/TechCard";
import { RiNextjsFill } from "react-icons/ri";

import { SiTypescript, SiGraphql, SiRedux } from "react-icons/si";

const techIcons = [
  { icon: <Database size={48} color="#FFFFFF" />, title: "PostgreSQL" },
  { icon: <Pyramid size={48} color="#FFFFFF" />, title: "Prisma" },
  { icon: <SiRedux size={48} color="#FFFFFF" />, title: "Redux " },
  { icon: <SiGraphql size={48} color="#FFFFFF" />, title: "GraphQL" },
  { icon: <SiTypescript size={48} color="#FFFFFF" />, title: "TypeScript" },
  { icon: <RiNextjsFill size={48} color="#FFFFFF" />, title: "Nextjs" },
];

const MySkills = () => {
  return (
    <div className="my-12">
      <h2 className="text-center text-primary font-semibold text-3xl my-8">
        My Skills
      </h2>
      <p className="my-4 text-center">
        We put yours ideas and wishes in the form of a uniques web project that
        inspires you customers.
      </p>
      <div className="flex justify-center items-center my-14">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center max-w-screen-lg mx-auto">
          {techIcons.map((tech, index) => (
            <TechCard key={index} title={tech.title} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
