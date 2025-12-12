import BadgeChip from "./BadgeChip";
import heroImg from "../../assets/hero-image.jpg";

interface HeroSectionProps {
  id?: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (

    <section id={id} className="w-full pt-[100px] pb-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[47px]">
        <div className="w-full max-w-[1347px] h-[487px] rounded-[10px] p-[10px] grid grid-cols-1 md:grid-cols-2 gap-[10px] items-center">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-[2.1rem] md:text-[2.80rem] font-bold leading-tight text-[#374151]">
              <span className="text-[#1864AB]">RUANG EKSPRESI :</span> Wadah
              <br />
              kreatif & Kompetitif Mahasiswa
            </h1>

            <div className="flex flex-wrap gap-3 mt-8">
              <BadgeChip label="Ideation" color="#FEF08A" />
              <BadgeChip label="Creation" color="#BBF7D0" />
              <BadgeChip label="Collaboration" color="#BFDBFE" />
              <BadgeChip label="Guidance & Support" color="#FBB5C4" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end h-full items-center">
            <img
              src={heroImg}
              alt="Hero"
              className="rounded-2xl w-full max-w-xs md:max-w-md aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}