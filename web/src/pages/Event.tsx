import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import cupcake from "../assets/cupcake.svg";
import EventCard from "../components/EventCard";
import axios from "axios";
import { EventType } from "../utils/FrontendTypes";
import { Loader } from "@mantine/core";
import { motion } from "framer-motion";
import { cardVariant, parentVariant } from "@utils/AnimationUtils";

export default function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState<EventType[]>([]);
  const [displayedEvents, setDisplayedEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events/`);
        setEvents(response.data);
        setDisplayedEvents(response.data);
      } catch (error) {
        console.error("Error fetching event data", error);
      } finally {
        setLoading(false);
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

      <div className="max-w-screen min-h-screen bg-light-pink py-8 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.15 }}
          className="w-full h-auto mb-10 flex flex-col"
        >
          <div className="flex justify-between items-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown"
              data-testid="eventsTitle"
            >
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
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-10">
            <Loader size="lg" color="blue" />
          </div>
        ) : displayedEvents.length > 0 ? (
          <motion.div
            variants={parentVariant}
            initial="hidden"
            animate="show"
            className="w-full h-auto flex flex-wrap justify-center gap-6"
          >
            {displayedEvents.map((event, index) => (
              <motion.div variants={cardVariant} key={index} className="flex justify-center">
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-2xl sm:text-3xl text-black font-bold">
            Sorry, no events found for "{searchQuery}"
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}
