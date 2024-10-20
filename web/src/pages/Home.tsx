import { NavLink } from "react-router-dom";
import uadslogo from "../assets/uads_logo_brown.svg";
import creamcup from "../assets/cupcake.svg";
import sundae from "../assets/sundae.svg";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import SponsorCard from "../components/SponsorCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { EventType, SponsorType } from "../utils/FrontendTypes";

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [sponsors, setSponsors] = useState<SponsorType[]>([]);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events/`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching event data", error);
      }
    }
    async function fetchSponsors() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/sponsors/`);
        setSponsors(response.data);
      } catch (error) {
        console.error("Error fetching sponsor data", error);
      }
    }

    fetchSponsors();
    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-screen bg-light-pink px-5 lg:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <img
            src={sundae}
            alt="Sundae Image"
            className="hidden md:block transform -rotate-12 opacity-50"
          />
          <div className="w-full h-auto flex flex-col justify-center items-center font-bold font-raleway text-center py-10 md:py-20">
            <img src={uadslogo} alt="UADS Logo" className="w-96" />
            <h3 className="text-3xl text-brown">University of Auckland</h3>
            <h1 className="text-7xl text-brown">Dessert Society</h1>
            <br />
            <h3 className="text-3xl text-pink">
              Where dessert lovers go to celebrate the art of eating and making desserts
            </h3>
            <br />
            <Socials
              background="bg-brown"
              hoverBackground="bg-pink"
              iconColor="text-light-pink"
              hoverIconColor="text-white"
            />
          </div>
          <img
            src={creamcup}
            alt="Cupcake Image"
            className="transform hidden md:block rotate-12 opacity-50"
          />
        </div>
      </div>

      <div className="max-w-screen h-auto flex flex-col items-center py-4 px-5 md:px-10 lg:px-40 bg-pink">
        <h1 className="text-4xl text-light-pink font-bold font-raleway text-center">
          Supported by our Sponsors
        </h1>

        <div className="w-full h-auto">
          <Carousel
            slideSize={mobile ? "100%" : "auto"}
            slideGap="sm"
            align={mobile ? "center" : "start"}
            slidesToScroll={1}
            dragFree
            withIndicators
            loop
          >
            {sponsors.map((sponsor, index) => (
              <Carousel.Slide key={index} className="my-8">
                <SponsorCard sponsor={sponsor} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <NavLink
          to="/sponsors"
          className="group flex justify-center items-center bg-light-pink hover:bg-brown py-2 px-5 rounded-xl"
        >
          <p className="text-2xl text-brown font-bold font-raleway group-hover:text-light-pink">
            See More Sponsors
          </p>
        </NavLink>
      </div>

      <div className="max-w-screen h-auto flex flex-col items-center py-4 px-5 md:px-10 lg:px-40 bg-brown">
        <h1 className="text-4xl text-light-pink font-bold font-raleway text-center">
          Our Exciting Events
        </h1>

        <div className="w-full h-auto">
          <Carousel
            slideSize={mobile ? "100%" : "auto"}
            slideGap="sm"
            align={mobile ? "center" : "start"}
            slidesToScroll={1}
            dragFree
            withIndicators
            loop
          >
            {events.map((event, index) => (
              <Carousel.Slide key={index} className="my-8">
                <EventCard event={event} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <NavLink
          to="/events"
          className="group flex justify-center items-center bg-light-pink hover:bg-pink py-2 px-5 rounded-xl"
        >
          <p className="text-2xl text-brown font-bold font-raleway group-hover:text-light-pink">
            See More Events
          </p>
        </NavLink>
      </div>

      <div className="max-w-screen py-10 flex flex-col justify-center items-center bg-light-pink">
        <h1 className="text-4xl text-brown font-bold font-raleway">Join UADS Today!</h1>

        <NavLink
          to="/signup"
          className="flex justify-center items-center bg-pink hover:bg-brown py-2 px-16 my-5 rounded-xl"
        >
          <p className="text-2xl text-light-pink font-bold font-raleway">Join</p>
        </NavLink>
      </div>

      <Footer />
    </>
  );
}
