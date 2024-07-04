/* eslint-disable react/no-unescaped-entities */
"use client";
import GradientColor from "@/app/color/GradientColor";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import img from "@/app/asserts/arjuman.png";

const social = [
  {
    id: 1,
    link: "https://www.facebook.com/profile.php?id=100010975053237",
    icon: <Facebook />,
  },
  {
    id: 2,
    link: "https://github.com/ArjumanJesmin",
    icon: <Github />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/arjuman-jesmin-1154a3240/",
    icon: <Linkedin />,
  },
];

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center p-6 text-center lg:text-left light:bg-secondary min-h-screen">
      {/* Left side: Text and social links */}
      <div className="lg:w-2/3 flex flex-col font-bold text-xl justify-center items-center lg:items-start space-y-6">
        I am Arjuman Jesmin
        <motion.h3 className="py-3 text-xl" variants={childVariants}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
          >
            <GradientColor gradient="from-primary via-customPurple to-secondary">
              FULL Stack Developer
            </GradientColor>
          </motion.span>
        </motion.h3>
        <motion.p
          className="max-w-xl font-light text-gray-400"
          variants={childVariants}
        >
          Hello <span className="animate-pulse text-4xl">✋</span>, and welcome!
          I'm Arjuman Jesmin, a passionate Full Stack Web Developer. I
          specialize in crafting beautiful and functional websites that make a
          difference. With a knack for blending creativity with technical
          expertise, I bring ideas to life with seamless user experiences and
          robust solutions. Explore my work and let's create something amazing
          together!
        </motion.p>
        {/* social icons */}
        <motion.div
          className="flex justify-evenly py-10 text-3xl w-full md:w-1/3 lg:w-1/2"
          variants={childVariants}
        >
          {social.map(({ id, link, icon }) => (
            <Link
              href={link}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full p-3 text-customPurple duration-300  border border-customPurple hover:text-primary"
            >
              {icon}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Right side: Image  */}
      <motion.div
        className="lg:w-1/3 flex flex-col justify-center items-start space-y-3"
        variants={childVariants}
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src={img}
            alt="image"
            className="w-300 h-300 md:w-100 md:h-100 object-cover object-top bg-slate-400 dark:bg-gradient-to-b from-indigo-500 rounded-2xl rotate-10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
