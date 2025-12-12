import { ExternalLink } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  teamMembers: TeamMember[];
  image: string;
  demoLink?: string;
};

export default function ProjectCard({
  category,
  title,
  description,
  teamMembers,
  image,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-[#FEF7F9] rounded-3xl p-18 md:p-22 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center min-h-[600px]">
      <div className="space-y-6 flex flex-col h-full">
        <div className="flex-1 space-y-6">
          <span className="inline-block px-5 py-2 bg-blue-100 text-[#374151] rounded-full text-sm font-medium">
            {category}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>

          <p className="font-medium text-[#374151] leading-relaxed text-sm md:text-sm">
            {description}
          </p>

          <div>
            <p className="text-sm font-semibold text-gray-800 mb-4">
              Tim Pembuat :
            </p>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {member.name}
                    </p>
                    <p className="text-xs text-[#374151]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {demoLink && (
          <div className="mt-auto">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1864AB] text-white rounded-lg font-medium hover:bg-[#154a7d] transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center lg:justify-center h-full">
        <img
          src={image}
          alt={title}
          className="rounded-[20px] shadow-xl w-full max-w-[559px] h-auto lg:w-[559px] lg:h-[411px] object-cover border-[2px] border-[#EC4899]"
        />
      </div>
    </div>
  );
}