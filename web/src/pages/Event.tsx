import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import cupcake from "../assets/cupcake.svg";
import { EventType } from "../components/EventCard";
import EventCard from "../components/EventCard";

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

export default function Event() {
	const [searchQuery, setSearchQuery] = useState("");
	const [displayedEvents, setDisplayedEvents] = useState<EventType[]>(eventsData);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		setSearchQuery(query);

		// Filter eventsData based on the search query
		const filteredEvents = eventsData.filter((event) => event.title.toLowerCase().includes(query));
		setDisplayedEvents(filteredEvents);
	};

	return (
		<>
			<Navbar />

			<div className="max-w-screen h-auto bg-light-pink py-8 px-4 sm:px-8">
				<div className="w-full h-auto mb-10 flex flex-col">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown" data-testid="eventsTitle">Events</h1>

						<div className="items-end">
							<img className="h-16 sm:h-20 md:h-24" src={cupcake} alt="Cupcake" />
						</div>
					</div>

					<div className="w-full flex justify-center">
						<input type="text" className="w-full h-12 py-2 border border-gray-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink px-4 sm:px-5" placeholder="Search Events.." value={searchQuery} onChange={handleSearchChange} />
					</div>
				</div>

				<div className="w-full h-auto flex flex-wrap justify-center gap-6">
					{displayedEvents.length > 0 ? (
						displayedEvents.map((event) => (
							<div key={event.id} className="flex justify-center">
								<EventCard event={event} />
							</div>
						))
					) : (
						<p className="text-2xl sm:text-3xl text-black font-bold">Sorry, no events found for "{searchQuery}"</p>
					)}
				</div>
			</div>

			<Footer />
		</>
	);
}
