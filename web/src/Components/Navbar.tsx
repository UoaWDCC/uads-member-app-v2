import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center px-20 py-4 bg-[#E6C3BE] uppercase space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-inter font-semibold text-20px text-normal uppercase py-2 px-4 transition-all duration-300 ml-4 ${isActive
          ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
            : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        <span className="px-3 select-none">Home</span>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-inter font-semibold text-20px text-normal uppercase py-2 px-4 transition-all duration-300 ${isActive
          ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
            : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        <span className="px-3 select-none">About Us</span>
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          `font-inter font-semibold text-20px text-normal uppercase py-2 px-4 transition-all duration-300 ${isActive
          ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
            : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        <span className="px-3 select-none">Events</span>
      </NavLink>
      <NavLink
        to="/sponsors"
        className={({ isActive }) =>
          `font-inter font-semibold text-20px text-normal uppercase py-2 px-4 transition-all duration-300 ${isActive
          ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
            : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        <span className="px-3 select-none">Sponsors</span>
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `font-inter font-semibold text-20px text-normal uppercase py-2 px-4 transition-all duration-300 ${isActive
          ? "text-[#E6C3BE] bg-[#3D3D3F] rounded-full"
            : "text-[#3D3D3F] hover:bg-[#3D3D3F] hover:text-[#E6C3BE] hover:rounded-full"
          }`
        }
      >
        <span className="px-3 select-none">Sign Up</span>
      </NavLink>
    </nav>
  );
}
