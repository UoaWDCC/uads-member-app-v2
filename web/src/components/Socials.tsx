import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface SocialsProps {
    background: string;
    hoverBackground: string;
    iconColor: string;
    hoverIconColor: string;
}

export default function Socials({ background, hoverBackground, iconColor, hoverIconColor }: SocialsProps) {
	return (
		<>
			<div className="w-80 flex justify-between items-center" data-testid="socialsComponent">
				<div className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
					<Link to="https://www.facebook.com/uoadessertsociety" target="_blank" aria-label="Facebook" className="w-full h-full flex justify-center items-center">
						<FaFacebookF className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="facebookLogo" />
					</Link>
				</div>

				<div className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank" aria-label="Instagram" className="w-full h-full flex justify-center items-center">
						<FaInstagram className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="instagramLogo" />
					</Link>
				</div>

				<div className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
					<Link to="https://discord.gg/dFuwHuU8FT" target="_blank" aria-label="Discord" className="w-full h-full flex justify-center items-center">
						<FaDiscord className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="discordLogo" />
					</Link>
				</div>

				<div className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
					<Link to="https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1" target="_blank" aria-label="TikTok" className="w-full h-full flex justify-center items-center">
						<FaTiktok className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="tiktokLogo" />
					</Link>
				</div>

				<div className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
					<Link to="mailto:uoadessertsociety@gmail.com" target="_blank" aria-label="Email" className="w-full h-full flex justify-center items-center">
						<IoMdMail className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="emailLogo" />
					</Link>
				</div>
			</div>
		</>
	);
}
