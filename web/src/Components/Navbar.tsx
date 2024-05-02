import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center px-25 p-5 bg-[#E6C3BE] uppercase space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-bold py-2 px-4 transition-all duration-300 ml-4 ${
            isActive
              ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
              : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-bold py-2 px-4 transition-all duration-300 ${
            isActive
              ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
              : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          `font-bold py-2 px-4 transition-all duration-300 ${
            isActive
              ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
              : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        Events
      </NavLink>
      <NavLink
        to="/sponsors"
        className={({ isActive }) =>
          `font-bold py-2 px-4 transition-all duration-300 ${
            isActive
              ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
              : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        Sponsors
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `font-bold py-2 px-4 transition-all duration-300 ${
            isActive
              ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
              : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        Signup
      </NavLink>
    </nav>
  );
}
