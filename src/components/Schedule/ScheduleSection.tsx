import ScheduleCard from "./ScheduleCard";
import ProgramCard from "./ProgramCard";
import { Calendar } from "lucide-react";
import carrerTalksIcon from "../../assets/icons/carrer-talks.png";
import extraClassesIcon from "../../assets/icons/extra-classes.png";
import projectWorkIcon from "../../assets/icons/project-work.png";
import mentoringIcon from "../../assets/icons/mentoring.png";

interface ScheduleSectionProps {
    id: string;
}

export default function ScheduleSection({ id }: ScheduleSectionProps) {
  const schedules = [
    {
      session: "Sesi Pagi",
      time: "09.00 - 12.00 WIB",
      description: "Workshop, Career Talks, dan Extra Classes intensif",
      gradient: "linear-gradient(135deg, #FFEB9C 0%, #A7F3D0 100%)",
    },
    {
      session: "Sesi Sore",
      time: "16.00 - 19.00 WIB",
      description: "Project Work, Mentoring, dan Collaboration Session",
      gradient: "linear-gradient(135deg, #FFEB9C 0%, #A7F3D0 100%)",
    },
  ];

  const programs = [
    {
      title: "Carrer Talks",
      description: "Sesi sharing dari praktisi industri dan alumni sukses",
      color: "#FEF08A",
      borderColor: "#F59E0B",
      iconSrc: carrerTalksIcon,
    },
    {
      title: "Extra Classes",
      description: "Kelas tambahan skill development dan workshop teknis",
      color: "#BBF7D0",
      borderColor: "#10B981",
      iconSrc: extraClassesIcon,
    },
    {
      title: "Project Work",
      description: "Mengerjakan project nyata dengan bimbingan mentor",
      color: "#BFDBFE",
      borderColor: "#1864AB",
      iconSrc: projectWorkIcon,
    },
    {
      title: "Mentoring",
      description: "Sesi konsultasi personal dengan mentor berpengalaman",
      color: "#FBB5C4",
      borderColor: "#EC4899",
      iconSrc: mentoringIcon,
    },
  ];

  return (
    <section id={id} className="w-full py-15 ">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Jadwal & <span className="text-[#1864AB]">Program Kegiatan</span>
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
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran
            dan pengembangan skill Setiap Sabtu
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar size={32} className="text-[#1864AB]" strokeWidth={2} />
            <h3 className="text-2xl font-bold text-[#1864AB]">Setiap Sabtu</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {schedules.map((schedule, index) => (
              <ScheduleCard
                key={index}
                session={schedule.session}
                time={schedule.time}
                description={schedule.description}
                gradient={schedule.gradient}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              color={program.color}
              borderColor={program.borderColor}
              iconSrc={program.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}