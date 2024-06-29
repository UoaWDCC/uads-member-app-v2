import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import cupcake from "../assets/cupcake.svg";
import EventCard from "../components/EventCard";
import axios from "axios";
import { EventType } from "../utils/FrontendTypes";
import apiURL from "../utils/urls";

export default function Event() {
	const [searchQuery, setSearchQuery] = useState("");
	const [events, setEvents] = useState<EventType[]>([]);
	const [displayedEvents, setDisplayedEvents] = useState<EventType[]>([]);

	useEffect(() => {
		async function fetchEvents() {
			try {
				const response = await axios.get(`${apiURL}/api/events/`);
				setEvents(response.data);
				setDisplayedEvents(response.data);
			} catch (error) {
				console.error("Error fetching event data", error);
			}
		}
		fetchEvents();
	}, []);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		setSearchQuery(query);

		// Filter events based on the search query
		const filteredEvents = events.filter((event) => event.name.toLowerCase().includes(query));
		setDisplayedEvents(filteredEvents);
	};

	return (
		<>
			<Navbar />

			<div className="max-w-screen h-auto bg-light-pink py-8 px-4 sm:px-8">
				<div className="w-full h-auto mb-10 flex flex-col">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown" data-testid="eventsTitle">
							Events
						</h1>

						<div className="items-end">
							<img className="h-16 sm:h-20 md:h-24" src={cupcake} alt="Cupcake" />
						</div>
					</div>

					<div className="w-full flex justify-center">
						<input
							type="text"
							className="w-full h-12 py-2 border border-gray-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink px-4 sm:px-5"
							placeholder="Search Events..."
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>
				</div>

				<div className="w-full h-auto flex flex-wrap justify-center gap-6">
					{displayedEvents.length > 0 ? (
						displayedEvents.map((event, index) => (
							<div key={index} className="flex justify-center">
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
