import { NavLink } from "react-router-dom";
import logo from "../assets/UADS_Logo.svg";
import topRight from "../assets/topright.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Sponsors",
    link: "/sponsors",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div className="max-w-screen h-24 bg-pink relative px-10">
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full h-auto flex justify-between items-center select-none">
          <NavLink to={"/"}>
            <img src={logo} alt="UADS Logo" />
          </NavLink>
          {/* Navlinks */}
          <div className="justify-between text-2xl hidden lg:block">
            {navlinks.map((link, index) => (
              <NavLink key={index} className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`} to={link.link}>
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="text-2xl select-none relative h-full hidden lg:block">
            <NavLink className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`} to={"/signup"}>
              Join
            </NavLink>
          </div>
          {/* Hamburger button */}
          <div className="-mr-2 lg:hidden z-0">
            <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-lg text-light-pink hover:text-yellow">
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Mobile Menu */}
          {open ? (
            <div className="lg:hidden">
              <div className="box-100% pt-40 space-y-1 z-100 ">
                {navlinks.map((link, index) => (
                  <NavLink key={index} className={({ isActive }) => `block px-3 py-1 bg-pink font-raleway transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`} to={link.link}>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <img src={topRight} alt="background" className="h-full absolute top-0 right-0" />
    </div>
  );
}
