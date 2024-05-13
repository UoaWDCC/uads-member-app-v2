import tiktokLogo from "../assets/tik-tok.svg";
import facebookLogo from "../assets/facebook-app-symbol.svg";
import instagramLogo from "../assets/insta.svg";
import discordLogo from "../assets/discord.svg";
import emailLogo from "../assets/email.svg";
import { Link } from "react-router-dom";

export default function Socials() {
	return (
		<>
			<div className="w-96 flex justify-between items-center pb-5">
				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-[#B04F61] hover:cursor-pointer">
					<Link to="https://www.facebook.com/uoadessertsociety" target="_blank">
						<img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-[#B04F61] hover:cursor-pointer">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-[#B04F61] hover:cursor-pointer">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<img src={discordLogo} alt="Discord" className="w-6 h-6" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-[#B04F61] hover:cursor-pointer">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<img src={tiktokLogo} alt="TikTok" className="w-6 h-6" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-[#B04F61] hover:cursor-pointer">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<img src={emailLogo} alt="Email" className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</>
	);
}
