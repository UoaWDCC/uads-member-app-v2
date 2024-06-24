import donut from "../assets/half_donut_jelly.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import SponsorCard, { SponsorType } from "../components/SponsorCard";
import placeholder from "../assets/download.jpg";

const sponsorData: SponsorType[] = [
{
name: "Sponsor 1",
description: "Sponsor 1 Description",
image: placeholder,
},
{
name: "Sponsor 2",
description: "Sponsor 2 Description",
image: placeholder,
},
{
name: "Sponsor 3",
description: "Sponsor 3 Description",
image: placeholder,
},
];

export default function Sponsor() {
const [searchQuery, setSearchQuery] = useState("");
const [displayedSponsors, setDisplayedSponsors] = useState<SponsorType[]>(sponsorData);

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const query = e.target.value.toLowerCase();
setSearchQuery(query);

// Filter sponsorData based on the search query
const filteredSponsors = sponsorData.filter((sponsor) =>
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