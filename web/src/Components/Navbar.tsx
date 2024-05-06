import { NavLink } from "react-router-dom";
import logo from "../assets/UADS_Logo.svg"

export default function Navbar() {
  return (
    <nav className="flex items-center px-20 py-4 bg-[#E6C3BE] uppercase min-w-[900px] justify-between">
      <div className = "h-7 w-7">
        <img src={logo} alt="adi"/>
      </div>
      <div className="bg-black"> 
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#3D3D3F]  hover:text-[#FCBA04] "
            }`
          }
        >
          <span className="px-3 select-none text-transform: lowercase">Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#3D3D3F] hover:text-[#FCBA04] "
            }`
          }
        >
          <span className="px-3 select-none text-transform: lowercase">About Us</span>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04]"
              : "text-[#3D3D3F] hover:text-[#FCBA04]"
            }`
          }
        >
          <span className="px-3 select-none text-transform: lowercase">Events</span>
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({ isActive }) =>
            `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
              ? "text-[#FCBA04] "
              : "text-[#3D3D3F] hover:text-[#FCBA04]"
            }`
          }
        >
          <span className="px-3 select-none text-transform: lowercase">Sponsors</span>
        </NavLink>
      </div>
      <div className="bg-pink">
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive
            ? "text-[#FCBA04] "
            : "text-[#3D3D3F]  hover:text-[#FCBA04] "
          }`
        }
      >
        <span className="px-3 select-none text-transform: capitalize">Join</span>
      </NavLink>
      </div>
    </nav>
  );
}
