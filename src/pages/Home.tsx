import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import PilarSection from "../components/Pilar/PilarSection";
import ScheduleSection from "../components/Schedule/ScheduleSection";
import ProjectSection from "../components/Projects/ProjectsSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import Footer from "../components/Footer/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection id="home" /> 
      <PilarSection id="pilar" />
      <ScheduleSection id="schedule" />
      <ProjectSection id="project" />
      <TestimonialsSection id="testimonials" />
      <Footer id="contact" />
    </>
  );
}