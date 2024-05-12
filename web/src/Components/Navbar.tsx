import { NavLink } from "react-router-dom";
import logo from "../assets/UADS_Logo.svg"

export default function Navbar() {
  return (
    <nav className="flex items-center px-20 py-1 bg-[#B04F61] uppercase min-w-[900px] justify-between">
      <div>
        <img src={logo} alt="UADS_Logo"/>
      </div>
      <div className="w-[670px]"> 
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#E6C3BE]  hover:text-[#FCBA04] "
            }`
          }
        >
          <span className="px-3 text-2xl select-none text-transform: capitalize">Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#E6C3BE] hover:text-[#FCBA04] "
            }`
          }
        >
          <span className="px-3 text-2xl select-none text-transform: capitalize">About</span>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#E6C3BE] hover:text-[#FCBA04]"
            }`
          }
        >
          <span className="px-3 text-2xl select-none text-transform: capitalize">Events</span>
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04] "
              : "text-[#E6C3BE] hover:text-[#FCBA04]"
            }`
          }
        >
          <span className="px-3 text-2xl select-none text-transform: capitalize">Sponsors</span>
        </NavLink>
      </div>
      <div className="">
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
            ? "text-[#FCBA04] "
            : "text-[#E6C3BE]  hover:text-[#FCBA04] "
          }`
        }
      >
        <span className="px-1 text-2xl select-none text-transform: capitalize">Join</span>
      </NavLink>
      </div>
    </nav>
  );
}
