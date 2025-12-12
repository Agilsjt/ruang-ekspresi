import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import nextIcon from "../../assets/icons/next-icon.png";
import prevIcon from "../../assets/icons/prev-icon.png";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

type Project = {
  category: string;
  title: string;
  description: string;
  teamMembers: TeamMember[];
  image: string;
  demoLink?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="relative max-w-8xl mx-auto">
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hover:scale-110 transition-transform duration-300"
        aria-label="Previous project"
      >
        <img 
          src={prevIcon} 
          alt="Previous" 
          className="w-9 h-9"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hover:scale-110 transition-transform duration-300"
        aria-label="Next project"
      >
        <img 
          src={nextIcon} 
          alt="Next" 
          className="w-9 h-9"
        />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full">
              <ProjectCard
                category={project.category}
                title={project.title}
                description={project.description}
                teamMembers={project.teamMembers}
                image={project.image}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}