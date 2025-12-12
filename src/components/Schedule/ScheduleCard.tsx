import { Clock } from "lucide-react";

type ScheduleCardProps = {
  session: string;
  time: string;
  description: string;
  gradient: string;
};

export default function ScheduleCard({
  session,
  time,
  description,
  gradient,
}: ScheduleCardProps) {
  return (
    <div
      className="rounded-[16px] p-4 shadow-md border-l-[3px] border-[#1864AB] flex gap-3 w-full max-w-[420px]"
      style={{
        background: gradient,
      }}
    >
      <div className="flex items-start pt-[26px]">
        <div className="bg-[#1864AB] rounded-full p-2 flex items-center justify-center flex-shrink-0">
          <Clock size={20} className="text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">{session}</h3>
        <span className="text-[#1864AB] font-medium text-base leading-tight">{time}</span>
        <p className="text-gray-700 text-[13px] leading-relaxed mt-0.5">{description}</p>
      </div>
    </div>
  );
}