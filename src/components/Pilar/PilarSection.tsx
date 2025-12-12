import PilarCard from "./PilarCard";
import ideationIcon from "../../assets/icons/ideation.png";
import creationIcon from "../../assets/icons/creation.png";
import collaborationIcon from "../../assets/icons/collaboration.png";
import guidanceIcon from "../../assets/icons/guidance.png";

interface PilarSectionProps {
  id: string;
}
export default function PilarSection({ id }: PilarSectionProps) {
  const pilars = [
    {
      title: "Ideation",
      description:
        "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      color: "#FEF08A",
      iconSrc: ideationIcon,
      iconSize: "w-8 h-10",
    },
    {
      title: "Creation",
      description:
        "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      color: "#BBF7D0",
      iconSrc: creationIcon,
    },
    {
      title: "Collaboration",
      description:
        "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      color: "#BFDBFE",
      iconSrc: collaborationIcon,
    },
    {
      title: "Guidance & Support",
      description:
        "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      color: "#FBB5C4",
      iconSrc: guidanceIcon,
    },
  ];

  return (
    <section id={id} className="w-full py-20"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Empat Pilar <span className="text-[#1864AB]">Ruang Ekspresi</span>
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
                gap: '10px'
              }}>
            komprehensif yang dirancang untuk mengembangkan potensi 
            kreatif mahasiswa melalui pendekatan holistik
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '40px' }}>
            {pilars.map((pilar, index) => (
              <PilarCard
                key={index}
                title={pilar.title}
                description={pilar.description}
                color={pilar.color}
                iconSrc={pilar.iconSrc}
                iconSize={pilar.iconSize}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}