import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Socials() {
	return (
		<>
			<div className="w-80 flex justify-between items-center">
				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.facebook.com/uoadessertsociety" target="_blank">
						<FaFacebookF className="text-light-pink group-hover:text-black" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<FaInstagram className="text-light-pink group-hover:text-black" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.instagram.com/uoadessertsociety/" target="_blank">
						<FaDiscord className="text-light-pink group-hover:text-black" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1" target="_blank">
						<FaTiktok className="text-light-pink group-hover:text-black" />
					</Link>
				</div>

				<div className="w-10 h-10 bg-brown flex justify-center items-center rounded-full hover:bg-light-pink cursor-pointer group">
					<Link to="mailto: uoadessertsociety@gmail.com" target="_blank">
						<IoMdMail className="text-light-pink group-hover:text-black" />
					</Link>
				</div>
			</div>
		</>
	);
}
