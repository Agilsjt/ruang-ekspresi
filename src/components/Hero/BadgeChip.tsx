type BadgeChipProps = {
  label: string;
  color: string; // Hex color code
};

export default function BadgeChip({ label, color }: BadgeChipProps) {
  return (
    <div
      className="px-5 py-2 rounded-full text-sm font-medium text-gray-700"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
}