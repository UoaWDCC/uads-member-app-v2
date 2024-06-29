import donut from "../assets/half_donut_jelly.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import SponsorCard from "../components/SponsorCard";
import axios from "axios";
import { SponsorType } from "../utils/FrontendTypes";
import apiURL from "../utils/urls";

export default function Sponsor() {
	const [searchQuery, setSearchQuery] = useState("");
	const [sponsors, setSponsors] = useState<SponsorType[]>([]);
	const [displayedSponsors, setDisplayedSponsors] = useState<SponsorType[]>([]);

	useEffect(() => {
		async function fetchSponsors() {
			try {
				const response = await axios.get(`${apiURL}/api/sponsors/`);
				setSponsors(response.data);
				setDisplayedSponsors(response.data);
			} catch (error) {
				console.error("Error fetching sponsor data", error);
			}
		}
		fetchSponsors();
	}, []);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		setSearchQuery(query);

		// Filter sponsorData based on the search query
		const filteredSponsors = sponsors.filter((sponsor) =>
			sponsor.name.toLowerCase().includes(query)
		);
		setDisplayedSponsors(filteredSponsors);
	};

	return (
		<>
			<Navbar />

			<div className="max-w-screen h-auto bg-light-pink py-8 px-4 sm:px-8">
				<div className="w-full h-auto mb-10 flex flex-col">
					<div className="flex justify-between items-center">
						<h1
							className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown"
							data-testid="eventsTitle"
						>
							Our Sponsors
						</h1>

						<div className="items-end">
							<img className="h-16 sm:h-20 md:h-24" src={donut} alt="Donut" />
						</div>
					</div>

					<div className="w-full flex justify-center">
						<input
							type="text"
							className="w-full h-12 py-2 border border-gray-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink px-4 sm:px-5"
							placeholder="Search Sponsors..."
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>
				</div>

				<div className="w-full h-auto flex flex-wrap justify-center gap-6">
					{displayedSponsors.length > 0 ? (
						displayedSponsors.map((sponsor, index) => (
							<div key={index} className="flex justify-center">
								<SponsorCard sponsor={sponsor} />
							</div>
						))
					) : (
						<p className="text-2xl sm:text-3xl text-black font-bold">
							Sorry, no sponsor found for "{searchQuery}"
						</p>
					)}
				</div>
			</div>

			<Footer />
		</>
	);
}