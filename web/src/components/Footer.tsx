import { NavLink } from "react-router-dom";
import logo from "../assets/uads_logo.svg";
import Socials from "./Socials";

export default function Footer() {
	return (
		<div className="max-w-screen bg-pink px-10 py-4">
			<div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
				<div className="flex items-center space-x-4">
					<NavLink to={"/"}>
						<img src={logo} alt="UADS Logo" className="w-[183px] h-[64px]" />
					</NavLink>
					<p className="font-raleway text-light-pink font-bold">&copy; UADS 2024. All Rights Reserved</p>
				</div>
				<Socials background="bg-brown" hoverBackground="bg-light-pink" iconColor="text-light-pink" hoverIconColor="text-black" />
			</div>
		</div>
	);
}
