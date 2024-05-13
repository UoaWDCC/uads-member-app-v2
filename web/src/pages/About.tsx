import Socials from "@components/Socials";
import icecream from "../assets/ice-cream.svg";

export default function About() {
	return (
		<>
			<div className="max-w-screen h-auto bg-light-pink ">
				<div className="w-full h-[500px] px-20 flex justify-between mt-20 items-center">
					<div className="w-[760px] h-96 text-brown font-bold">
						<h1 className="text-3xl mb-10">About Us</h1>
						<p>
							Welcome to the sweetest corner of the University of Auckland – the Dessert Society!
						</p>
						<br />
						<p>
							Whether you're a baker, connoisseur, or simply love sweets, you'll find a home with
							us.
						</p>
						<br />
						<p>
							Explore classic recipes to innovative creations through our events, workshops, and
							gatherings. Join us on a delightful journey through dessert-making, from perfect bakes
							to annual dessert crawls.
						</p>
						<br />
						<p>
							No matter your skill level or background, everyone is welcome at the University of
							Auckland Dessert Society!
						</p>
						<br />
					</div>

					<div className="w-80 h-80 rounded-full bg-pink flex justify-center items-center mt-10">
						<img className="transform -rotate-45 absolute w-[500px] h-[500px]" src={icecream} alt="ice-cream photo" />
					</div>
				</div>

				<div className="w-full h-auto bg-pink text-light-pink flex flex-col items-center pt-8">
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
					<div className="w-full h-auto flex justify-between items-center my-10">
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
					</div>

					<div className="w-full h-auto flex justify-between items-center my-10">
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
						<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer">
							<h1 className="w-full h-full flex justify-center items-center opacity-0 hover:text-light-pink hover:opacity-100">Kai</h1>
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center">
					<Socials />
				</div>
			</div>
		</>
	);
}
