import HeroSection from "../components/homePage/HeroSection";
import Project from "../components/homePage/Project";
import ContactForm from "./contactUs/ContactForm/ContactForm";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Project />
      <ContactForm />
    </div>
  );
};

export default HomePage;
