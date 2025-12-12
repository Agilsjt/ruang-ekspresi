import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 border-b border-gray-200 shadow-xl">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[45px] h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 h-11" />
          <div className="flex flex-col leading-tight">
            <span className="text-[#1864AB] font-light text-lg">ruang</span>
            <span className="text-[#1864AB] font-medium text-lg -mt-1">ekspresi</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10">
          <NavLink label="Home" href="#home" />
          <NavLink label="About" href="#pilar" />
          <NavLink label="Program" href="#schedule" />
          <NavLink label="Project" href="#project" />
          <NavLink label="Testimonials" href="#testimonials" />
          <NavLink label="Contact" href="#contact" />
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 border-b border-gray-200">
          <div className="flex flex-col gap-4 pt-2">
            <NavLink label="Home" href="#home" />
            <NavLink label="About" href="#pilar" />
            <NavLink label="Program" href="#schedule" />
            <NavLink label="Project" href="#project" />
            <NavLink label="Testimonials" href="#testimonials" />
            <NavLink label="Contact" href="#contact" />
          </div>
        </div>
      )}
    </nav>
  );
}