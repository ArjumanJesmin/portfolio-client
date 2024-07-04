import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <Card className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                blandit arcu in lacus fermentum, at ultrices lacus eleifend.
                Aenean nec risus nec urna sollicitudin facilisis. Nullam nec
                justo neque.
              </p>
              <p className="text-gray-600 mb-4">
                Duis euismod justo sit amet arcu consequat, at dapibus metus
                ullamcorper. Aliquam erat volutpat. Integer et magna in massa
                vulputate tincidunt. Curabitur ac dui sit amet dolor pharetra
                consequat.
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
