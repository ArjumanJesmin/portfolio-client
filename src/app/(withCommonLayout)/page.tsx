import HeroSection from "../components/homePage/HeroSection";

import Project from "../components/homePage/Project";
import RecentBlogs from "../components/homePage/RecentBlogs";
import MySkills from "./MySkills/page";
import ContactForm from "./contactUs/ContactForm/ContactForm";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Project />
      <MySkills />
      <ContactForm />
      <RecentBlogs />
    </div>
  );
};

export default HomePage;
