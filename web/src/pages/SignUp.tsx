import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import apiURL from "../utils/urls";

export default function SignUp() {
	const [signUpFormLink, setSignUpFormLink] = useState<string>("");

	useEffect(() => {
		async function fetchSocials() {
			try {
				const response = await axios.get(`${apiURL}/api/socials/`);
				// Sign Up Link is the last index of the response body
				setSignUpFormLink(response.data[response.data.length - 1].link);
			} catch (error) {
				console.error("Error fetching social data", error);
			}
		}

		fetchSocials();
	}, []);

	return (
		<>
			<Navbar />

			<div className="max-w-screen h-auto bg-light-pink py-10 px-5 lg:px-40">
				<h1 className="text-4xl text-brown font-bold font-raleway">Join Us Now</h1>
				<div className="my-5 w-full h-screen border-4 border-solid border-pink rounded-lg overflow-hidden">
					<iframe src={signUpFormLink} width="100%" height="100%" data-testid="signUpForm">
						Loading…
					</iframe>
				</div>
			</div>

			<Footer />
		</>
	);
}
