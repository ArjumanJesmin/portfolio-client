import { Sunset } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary h-80">
      <div className="container">
        <div className="text-white pt-12 pb-8">
          <Sunset size={80} className="mx-auto" />
        </div>
        <div className="flex justify-center items-center gap-8 text-white">
          <p>Service</p>
          <p>Work</p>
          <p>Skills</p>
          <p>Experience</p>
          <p>Blog</p>
        </div>
        <div className="text-center pt-6 text-customPurple">
          <p>@ 2024 All Rights Reserver By Theme</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
