/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-secondary py-10 px-4 flex items-center justify-center">
      <Card className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <CardBody>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/asserts/arjuman.png"
                alt="Profile Picture"
                className="rounded-full"
                width={150}
                height={150}
                objectFit="cover"
              />
              <h2 className="text-3xl font-bold text-gray-800 mt-4">
                Arjuman Jesmin
              </h2>
              <p className="text-gray-600 mt-2">Full-Stack Developer</p>
              <div className="flex mt-4 space-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=100010975053237"
                  passHref
                >
                  <FaFacebookF size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/arjuman-jesmin-1154a3240/"
                  passHref
                >
                  <FaLinkedinIn size={24} />
                </Link>
                <Link href="https://github.com/ArjumanJesmin" passHref>
                  <FaGithub size={24} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About Me
              </h3>
              <p className="text-gray-600 mb-4">
                Hello! I'm Arjuman Jesmin, a passionate Full-Stack Developer
                with a strong foundation in both frontend and backend
                technologies. I thrive on creating seamless and efficient web
                applications that provide exceptional user experiences. My
                expertise spans across a diverse set of tools and frameworks,
                ensuring I can tackle a wide range of projects with precision
                and creativity.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Skills:</strong> <br />
                <strong>Frontend:</strong> JavaScript, TypeScript, React, Redux,
                Next.js <br />
                <strong>Backend:</strong> MongoDB, Mongoose, PostgreSQL, Prisma,
                GraphQL <br />
                <strong>Databases:</strong> RDBMS, MongoDB
              </p>
              <p className="text-gray-600 mb-4">
                With a robust understanding of modern web development practices,
                I am dedicated to delivering high-quality, scalable solutions.
                My goal is to continually grow as a developer and to contribute
                to innovative projects that make a difference. Feel free to
                explore my portfolio to see some of the exciting projects I've
                worked on. Let's connect and create something amazing together!
              </p>
              <Link href="/contactUs" passHref>
                <Button className="bg-customPurple text-white hover:bg-blue-600 mt-4">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutPage;
