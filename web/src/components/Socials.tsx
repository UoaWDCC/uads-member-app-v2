import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { SocialType, SocialsProps } from "../utils/FrontendTypes";
import apiURL from "../utils/urls";

export default function Socials({ background, hoverBackground, iconColor, hoverIconColor }: SocialsProps) {
	const [socials, setSocials] = useState<SocialType[]>([]);

	useEffect(() => {
		async function fetchSocials() {
			try {
				const response = await axios.get(`${apiURL}/api/socials/`);
				setSocials(response.data);
			} catch (error) {
				console.error("Error fetching social data", error);
			}
		}

		fetchSocials();
	}, []);

	const renderIcon = (name: string) => {
		switch (name) {
			case "Facebook":
				return <FaFacebookF className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="facebookLogo" />;
			case "Instagram":
				return <FaInstagram className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="instagramLogo" />;
			case "Discord":
				return <FaDiscord className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="discordLogo" />;
			case "TikTok":
				return <FaTiktok className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="tiktokLogo" />;
			case "Email":
				return <IoMdMail className={`${iconColor} group-hover:${hoverIconColor}`} data-testid="emailLogo" />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="w-80 flex justify-between items-center" data-testid="socialsComponent">
				{socials.slice(0, -1).map((social, index) => (
					<div key={index} className={`w-10 h-10 ${background} rounded-full hover:${hoverBackground} cursor-pointer group`}>
						<Link
							to={social.name === "Email" ? `mailto:${social.link}` : social.link}
							target="_blank"
							aria-label={social.name}
							className="w-full h-full flex justify-center items-center"
						>
							{renderIcon(social.name)}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
