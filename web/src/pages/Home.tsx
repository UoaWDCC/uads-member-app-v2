import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import uadslogo from "../assets/UADS Brown logo.svg";
import cookies from "../assets/cookies.svg";
import creamcup from "../assets/cupcake.svg";
import donutChocolate from "../assets/donut_chocolate.svg";
import tsujiri from "../assets/example-tsujiri-logo.png";
import icecreamWhiteCup from "../assets/icecream_white.svg";
import icecream from "../assets/iceream_cone.svg";
import sundae from "../assets/sundae.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import EventCard, { EventType } from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//TODO: Get actual info from db or cms
const sponsorsDummyData: string[] = [tsujiri, tsujiri, tsujiri, tsujiri, tsujiri, tsujiri, tsujiri, tsujiri];

// Temp events data
const eventsData: EventType[] = [
	{
		id: 1,
		date: "4",
		month: "April",
		title: "Meet and Greet",
		description: "Come and meet your fellow peers and connect with each other",
	},
	{
		id: 2,
		date: "5",
		month: "May",
		title: "Event 2",
		description: "Event 2 Description",
	},
	{
		id: 3,
		date: "17",
		month: "June",
		title: "June Party",
		description: "UADS Party in June",
	},
	{
		id: 4,
		date: "6",
		month: "July",
		title: "Event 4",
		description: "Description for Event 4",
	},
	{
		id: 5,
		date: "6",
		month: "August",
		title: "Event 5",
		description: "Description for Event 5",
	},
];
export default function Home() {
	const [displayedEvents] = useState<EventType[]>(eventsData);

	return (
		<>
			<div className="h-screen flex flex-col">
				<Navbar />
				<Landing />
			</div>
			<Sponsor images={sponsorsDummyData} />

			<EventSection events={displayedEvents} />

			<SignupSection />
			<Footer />
		</>
	);
}

function Landing() {
	const [isSmallerScreen, setIsSmallerScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallerScreen(window.innerWidth <= 768); // Adjust threshold as needed
		};

		// Initial call to handleResize to set initial state
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex flex-col flex-grow bg-light-pink items-center relative z-0">
			<img src={sundae} className={`absolute top-40 left-12 scale-100 opacity-50 -rotate-12 mt-24 ${isSmallerScreen && "hidden"}`} />

			<img src={creamcup} className={`absolute top-40 right-0 scale-75 opacity-50 rotate-12 mt-8 ${isSmallerScreen && "hidden"}`} />

			<img src={uadslogo} className="colour w-2/5 z-10 mt-11" />

			<div className=" z-10 w-7/12 ">
				<p className="text-center text-xl lg:text-4xl font-bold text-brown">University of Auckland</p>
				<h1 className=" text-center text-5xl lg:text-8xl font-bold text-brown pb-4">Dessert Society</h1>
				<p className=" text-center text-xl lg:text-4xl font-bold text-pink ">
					Where dessert lovers go to celebrate the art of making and eating desserts
				</p>
			</div>
			<div className="grow w-full bg-gradient-to-b from-light-pink via-light-pink to-pink" />
		</div>
	);
}

function Sponsor({ images }: { images: string[] }) {
	const [isSmallerScreen, setIsSmallerScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallerScreen(window.innerWidth <= 768); // Adjust threshold as needed
		};

		// Initial call to handleResize to set initial state
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="flex flex-col gap-10 pb-20 bg-pink relative z-10 overflow-hidden">
			<img src={cookies} className={`absolute z-0 right-2 h-80 ${isSmallerScreen && "hidden"}`} />
			<img src={icecream} className={`absolute z-0 h-80 ${isSmallerScreen && "top-1/4 h-44 left-1/2 transform -translate-x-1/2"}`} />
			<img src={donutChocolate} className={`absolute z-0 right-2 bottom-2 h-80 ${isSmallerScreen && "left-1/2 transform -translate-x-1/2 "}`} />
			<img src={icecreamWhiteCup} className={`absolute z-0 left-2 bottom-2 h-80 ${isSmallerScreen && "hidden"}`} />
			<h1 className=" p-10 text-center text-6xl font-bold text-light-pink font-raleway z-10">Supported by our Sponsors</h1>
			<SponsorLogoSlider images={images} />
			<PinkButton linkto="/sponsors" buttontext="See our sponsors" />
		</div>
	);
}

function SponsorLogoSlider({ images }: { images: string[] }) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					speed: 1000,
					autoplaySpeed: 2000,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
					autoplaySpeed: 2000,
				},
			},
		],
	};

	return (
		<div className="h-80 container self-center -mx-10">
			<Slider {...settings}>
				{images.map((image) => (
					<SponsorCard key={"logo:" + image} image={image} />
				))}
			</Slider>
		</div>
	);
}

interface SponsorCardProps {
	image: string;
	sponsor?: string;
}

function SponsorCard({ image }: SponsorCardProps) {
	return (
		<>
			<NavLink to="/sponsors" className="flex justify-center mx-10">
				<div className="flex items-center justify-center h-80">
					<img className="object-contain" src={image} />
				</div>
			</NavLink>
		</>
	);
}

function SignupSection() {
	return (
		<div className="h-fit bg-pink space-y-10 p-12">
			<h1 className="text-center text-6xl font-bold text-light-pink font-raleway">Join UADS Today!</h1>
			<SignUpButton linkto="/signup" buttontext="Join" />
		</div>
	);
}

//TODO: Get actual info from db or cms
function EventSlider({ events }: { events: EventType[] }) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 2000,
		autoplaySpeed: 4000,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					speed: 1000,
					autoplaySpeed: 2000,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
					autoplaySpeed: 2000,
				},
			},
		],
	};

	return (
		<div className="container self-center -mx-10">
			<Slider {...settings}>
				{events.map((event) => (
					<div key={event.id}>
						<div className="flex justify-center">
							<EventCard event={event} />
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

function EventSection({ events }: { events: EventType[] }) {
	return (
		<div className="relative flex flex-col gap-10 pb-20 bg-brown overflow-hidden">
			<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40rem] text-light-brown font-raleway font-bold opacity-30 overflow-hidden text-nowrap">
				UADS
			</h1>
			<h1 className=" p-10 text-center text-6xl font-bold text-light-pink font-raleway">Our Upcoming Events</h1>
			<EventSlider events={events} />
			<PinkButton linkto="/events" buttontext="See More Events" />
		</div>
	);
}

interface PinkButtonProps {
	linkto: string;
	buttontext: string;
}

function PinkButton({ linkto, buttontext }: PinkButtonProps) {
	return (
		<>
			<div className="relative text-center z-10">
				<NavLink to={linkto}>
					<button className="bg-light-pink p-5 rounded-2xl text-brown font-bold text-2xl font-raleway">{buttontext}</button>
				</NavLink>
			</div>
		</>
	);
}

function SignUpButton({ linkto, buttontext }: PinkButtonProps) {
	return (
		<>
			<div className="text-center">
				<NavLink to={linkto}>
					<button className="bg-light-pink p-5 rounded-2xl text-brown font-bold text-5xl font-raleway">{buttontext}</button>
				</NavLink>
			</div>
		</>
	);
}
