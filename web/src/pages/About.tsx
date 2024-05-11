import people from "../assets/people.jpg";
import discord from "../assets/discord.svg";
import email from "../assets/email.svg";
import fb from "../assets/facebook-app-symbol.svg";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tik-tok.svg";
import icecream from "../assets/ice-cream.svg";

export default function About() {
	return (
		<>
			<div className="max-w-screen h-full bg-light-pink">
				<div className="w-full h-96 px-20 flex justify-between mt-20">
					<div className="w-[760px] h-96 text-brown font-bold">
						<h1 className="text-3xl mb-10">About Us</h1>

						<p> Welcome to the sweetest corner of the University of Auckland – the Dessert Society!</p> <br />
						<p> Whether you're a baker, connoisseur, or simply love sweets, you'll find a home with us.   </p> <br />
						<p>Explore classic recipes to innovative creations through our events, workshops, and gatherings. Join us on a delightful journey through dessert-making, from perfect bakes to annual dessert crawls.</p> <br />
						<p>	No matter your skill level or background, everyone is welcome at the University of Auckland Dessert Society!</p> <br />

					</div>

					<div className="w-96 h-96 rounded-full bg-pink flex justify-center items-center">
						<img className="transform -rotate-45" src={icecream} alt="ice-cream photo" />
					</div>
				</div>

				<div className="w-full h-auto bg-pink text-light-pink mt-20 flex flex-col items-center">
					<h1 className="text-4xl font-bold">The Executive Team</h1>
					<div className="w-full h-auto flex px-20 justify-between">
						<div className="w-96 h-auto flex flex-col items-center justify-center py-10">
							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

						</div>
						<div className="w-96 h-auto flex flex-col items-center justify-center py-10">
							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

						</div>
						<div className="w-96 h-auto flex flex-col items-center justify-center py-10">
							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

							<h2 className="font-bold">President</h2>
							<p>Kai</p> <br />

						</div>
					</div>
				</div>

				<div className="w-full h-auto  flex flex-col px-20">
					<div className="w-full h-96 flex justify-between items-center ">
						<div className="w-48 h-48 bg-pink">
							
						</div>
						<div className="w-48 h-48 bg-pink">
							
						</div>
						<div className="w-48 h-48 bg-pink">
							
						</div>
						<div className="w-48 h-48 bg-pink">
							
						</div>
						<div className="w-48 h-48 bg-pink">
							
						</div>
						
					</div>

					<div className="w-full h-96 flex justify-between items-center">
						<div className = "w-48 h-48 bg-pink"></div>
						<div className = "w-48 h-48 bg-pink"></div>
						<div className = "w-48 h-48 bg-pink"></div>
						<div className = "w-48 h-48 bg-pink"></div>
						<div className = "w-48 h-48 bg-pink"></div>	
					</div>	

				</div>

			</div>
		</>
	)
}