import { NavLink } from "react-router-dom";
import logo from "../assets/UADS_Logo.svg";
import topRight from "../assets/topright.png";
import BackgroundSVG from "../assets/sin.svg";
import joinImage from "../assets/joinimage.svg";

export default function Navbar() {
	return (
		<div className="max-w-screen h-24 bg-pink relative px-10">
			<div className="relative z-10 flex justify-center items-center h-full">
				<div className="w-full h-auto flex justify-between items-center">
					<img src={logo} alt="UADS Logo" />

					<div className="flex justify-between w-[40rem] text-2xl select-none">
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

					<div className="text-2xl select-none relative h-full">
						<NavLink to="/signup" className={({ isActive }) => `font-raleway py-2 px-4 transition-all duration-300 font-bold ${isActive ? "text-yellow" : "text-light-pink  hover:text-yellow "}`}>
							Join
						</NavLink>
					</div>
				</div>
			</div>

			<img src={topRight} alt="background" className="h-full absolute top-0 right-0" />
		</div>
	);
}
