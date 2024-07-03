"use client";
import React, { useState } from "react";

interface TechCardProps {
  title: string;
  icon: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({ title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-36 h-36 flex flex-col items-center justify-center p-4 border rounded-lg shadow-md bg-primary transition-transform duration-300 transform-gpu hover:translate-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <p className="text-white font-bold">{title}</p> : icon}
    </div>
  );
};

export default TechCard;
