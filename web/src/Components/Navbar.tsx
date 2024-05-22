import { NavLink } from "react-router-dom";
import logo from "../assets/UADS_Logo.svg";
import topRight from "../assets/topright.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [open, setOpen] = useState(false);
	return (
		<div className="max-w-screen h-24 bg-pink relative px-10">
			<div className="relative z-10 flex justify-center items-center h-full">
				<div className="w-full h-auto flex justify-between items-center">
					<img src={logo} alt="UADS Logo" />
					{/* Navlinks */}
          <div className=" justify-between w-[40rem] text-2xl select-none hidden lg:block">
						<NavLink to="/" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							Home
						</NavLink>
						<NavLink to="/about" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							About
						</NavLink>
						<NavLink to="/events" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							Events
						</NavLink>
						<NavLink to="/sponsors" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							Sponsors
						</NavLink>
					</div>
          
					<div className="text-2xl select-none relative h-full hidden lg:block">
						<NavLink to="/signup" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							Join
						</NavLink>
					</div>
          {/* Hamburger button */}   
          <div className="-mr-2 lg:hidden">
            <button type="button" onClick={() => {}} className="inline-flex items-center justify-center p-2
              rounded-lg text-light-pink hover:text-yellow">
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
				</div>
			</div>
			<img src={topRight} alt="background" className="h-full absolute top-0 right-0" />
		</div>
	);
}
