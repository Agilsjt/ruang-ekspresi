import ProjectCarousel from "./ProjectCarousel";

import projectImg1 from "../../assets/projects/project1.jpg";
import avatar1 from "../../assets/avatars/avatar1.jpg";

interface ProjectSectionProps {
    id: string;
}

export default function ProjectSection({ id }: ProjectSectionProps) {
  const projects = [
    {
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      teamMembers: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
      ],
      image: projectImg1,
      demoLink: "https://example.com",
    },
    {
      category: "Web Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      teamMembers: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
      ],
      image: projectImg1,
      demoLink: "https://example.com",
    },
    {
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      teamMembers: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: avatar1,
        },
      ],
      image: projectImg1,
      demoLink: "https://example.com",
    },
  ];

  return (
    <section id={id} className="w-full py-20"> 
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Showcase <span className="text-[#1864AB]">Student Projects</span>
          </h2>
          <p className="mx-auto text-center"
              style={{
                width: '469px',
                maxWidth: '100%',
                height: '62px',
                padding: '10px',
                opacity: 1,
                color:'#4B5563',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '0%',
                gap: '10px',
              }}>
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam
            program Ruang Ekspresi
          </p>
        </div>
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}