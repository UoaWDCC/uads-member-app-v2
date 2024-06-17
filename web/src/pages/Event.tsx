import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from 'react';
import cupcake from "../assets/cupcake.svg";
import EventCard, { EventType } from "../Components/EventCard";

const eventsData: EventType[] = [
  {
    id: 1,
    date: "4",
    month: "April",
    title: "Meet and Greet",
    description: "Come and meet your fellow peers and connect with each other",
    status: "past"
  },
  {
    id: 2,
    date: "5",
    month: "May",
    title: "Event 2",
    description: "Event 2 Description",
    status: "upcoming"
  },
  {
    id: 3,
    date: "6",
    month: "June",
    title: "June Party",
    description: "UADS Party in June",
    status: "upcoming"
  },
];

export default function Event() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = eventsData.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="max-w-screen h-auto bg-light-pink py-8 px-14">
        <div className="w-full h-auto my-10 flex flex-col ">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold font-raleway text-brown pt-10">Events</h1>

            <div className="items-end">
              <img className="" src={cupcake} alt="Cupcake" />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <input
              type="text"
              className="w-full h-16 py-2 border border-gray-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-5"
              placeholder="Search Events.."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="w-full h-auto flex justify-between">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard key={event.id} event={event} /> 
            ))
          ) : (
            <p className="text-3xl text-black font-bold">Sorry no events found</p>
          )}
        </div>
      </div>
    </>
  );
}