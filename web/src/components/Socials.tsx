import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Socials() {
	return (
		<>
			<div className="w-80 flex justify-between items-center" data-testid="socialsComponent">
				<div className="w-10 h-10 bg-brown rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.facebook.com/uoadessertsociety" target="_blank" aria-label="Facebook" className="w-full h-full flex justify-center items-center">
						<FaFacebookF className="text-light-pink group-hover:text-black" data-testid="facebookLogo" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank" aria-label="Instagram" className="w-full h-full flex justify-center items-center">
						<FaInstagram className="text-light-pink group-hover:text-black" data-testid="instagramLogo" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://discord.gg/dFuwHuU8FT" target="_blank" aria-label="Discord" className="w-full h-full flex justify-center items-center">
						<FaDiscord className="text-light-pink group-hover:text-black" data-testid="discordLogo" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1" target="_blank" aria-label="TikTok" className="w-full h-full flex justify-center items-center">
						<FaTiktok className="text-light-pink group-hover:text-black" data-testid="tiktokLogo" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="mailto:uoadessertsociety@gmail.com" target="_blank" aria-label="Email" className="w-full h-full flex justify-center items-center">
						<IoMdMail className="text-light-pink group-hover:text-black" data-testid="emailLogo" />
					</Link>
				</div>
			</div>
		</>
	);
}
