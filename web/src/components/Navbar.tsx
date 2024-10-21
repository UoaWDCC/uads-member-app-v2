import { NavLink } from "react-router-dom";
import logo from "../assets/uads_logo.svg";
import brownBackground from "../assets/brownBackground.png";
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
  };

  return (
    <div className="max-w-screen h-24 bg-pink relative px-10">
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full h-auto flex justify-between items-center select-none">
          <NavLink to={"/"}>
            <img src={logo} alt="UADS Logo" className="w-[183px] h-[64px]" />
          </NavLink>
          {/* Navlinks */}
          <div className="hidden lg:flex justify-between text-2xl">
            {navlinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `font-raleway px-10 transition-all duration-300 font-bold ${
                    isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "
                  }`
                }
                to={link.link}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex text-2xl select-none relative h-full">
            <NavLink
              className={({ isActive }) =>
                `font-raleway w-[183px] py-2 flex justify-center px-4 transition-all duration-300 font-bold ${
                  isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "
                }`
              }
              to={"/signup"}
            >
              Join
            </NavLink>
          </div>

          {/* Hamburger button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={handleMenu}
              aria-label="openMenu"
              className="inline-flex items-center justify-center rounded-lg text-light-pink hover:text-yellow"
            >
              <FaBars size={30} color="pink" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full bg-pink pt-20 pb-4 z-10 flex flex-col items-center transform ${
          open ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <button
          type="button"
          onClick={handleMenu}
          aria-label="closeMenu"
          className="absolute top-7 right-10"
        >
          <FaTimes size={30} color="pink" />
        </button>

        <div className="absolute top-4 left-10">
          <NavLink to={"/"}>
            <img src={logo} alt="UADS Logo" className="w-[183px] h-[64px]" />
          </NavLink>
        </div>

        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              `block py-4 bg-pink font-raleway transition-all duration-300 font-bold ${
                isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "
              }`
            }
            to={link.link}
            onClick={() => setOpen(false)}
          >
            {link.title}
          </NavLink>
        ))}
        <NavLink
          className={({ isActive }) =>
            `block py-4 bg-pink font-raleway transition-all duration-300 font-bold ${
              isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "
            }`
          }
          to={"/signup"}
          onClick={() => setOpen(false)}
        >
          Join
        </NavLink>
      </div>

      <img src={brownBackground} alt="background" className="h-full absolute top-0 right-0" />
    </div>
  );
}
