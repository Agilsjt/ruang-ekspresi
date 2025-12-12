type NavLinkProps = {
  label: string;
  href: string;
};

export default function NavLink({ label, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-[#374151] hover:text-[#1864AB] transition-colors text-sm font-medium"
    >
      {label}
    </a>
  );
}
