import { NavLink } from "react-router-dom";
import uadslogo from "../assets/UADS Brown logo.svg";
import tsujiri from "../assets/example-tsujiri-logo.png";
import placeholder from "../assets/placeholder.png";
import icecream from "../assets/dessert-svgrepo-com 1.png";
import creamcup from "../assets/cream-cup-dessert-svgrepo-com 1.svg";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//TODO: Get actual info from db
const sponsorsDummyData: string[] = [
  tsujiri,
  tsujiri,
  tsujiri,
  tsujiri,
  tsujiri,
  tsujiri,
  tsujiri,
  tsujiri,
];

export default function Home() {
  return (
    <>
      <Landing>
        <p className="h-20 w-full bg-red-50">Placeholder navbar</p>
      </Landing>

      <Sponsor images={sponsorsDummyData} />

      <EventSection />

      <SignupSection />
    </>
  );
}

function Landing({ children }: { children: JSX.Element }) {
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
    <div className="min-h-screen flex flex-col  h-auto bg-gradient-to-b from-light-pink via-light-pink to-pink items-center relative">
      {children}

      <img
        src={icecream}
        className={`absolute top-15 left-12 scale-75 opacity-50 -rotate-12 mt-24 ${
          isSmallerScreen && "hidden"
        }`}
      />

      <img
        src={creamcup}
        className={`absolute right-0 scale-50 opacity-50 rotate-12 mt-8 ${
          isSmallerScreen && "hidden"
        }`}
      />

      <img src={uadslogo} className="colour w-2/5 z-10 mt-11" />

      <div className=" z-10 mt-[-10px] w-7/12 ">
        <p className="text-center text-xl font-bold text-brown">
          University of Auckland
        </p>
        <h1 className=" text-center text-5xl font-bold text-brown ">
          Dessert Society
        </h1>
        <p className=" text-center text-xl font-bold text-pink ">
          Where dessert lovers go to celebrate the art of making and eating
          desserts
        </p>
      </div>
    </div>
  );
}

function Sponsor({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-10 pb-20 bg-pink">
      <h1 className=" p-10 text-center text-6xl font-bold text-light-pink font-raleway">
        Supported by our Sponsors
      </h1>
      <SponsorLogoSlider images={images} />
      <PinkButton linkto="/sponsors" buttontext="See our sponsors" />
    </div>
  );
}

function SponsorGroups() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-center gap-[2.75rem]">
        <SponsorCard image={tsujiri} sponsor="tsujiri" />
        <SponsorCard sponsor="tsujiri" image={tsujiri} />
        <SponsorCard sponsor="tsujiri" image={tsujiri} />
      </div>
    </>
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
      <h1 className="text-center text-6xl font-bold text-light-pink font-raleway">
        Join UADS Today!
      </h1>
      <SignUpButton linkto="/signup" buttontext="Join" />
    </div>
  );
}

function EventSection() {
  return (
    <div className="flex flex-col gap-10 pb-20 bg-brown">
      <h1 className=" p-10 text-center text-6xl font-bold text-light-pink font-raleway">
        Our Upcoming Events
      </h1>
      <EventGroups />
      <PinkButton linkto="/events" buttontext="See More Events" />
    </div>
  );
}

function EventGroups() {
  return (
    <>
      <div className="flex justify-center p-10 gap-10 flex-row">
        <EventCard
          image={placeholder}
          eventname="Sparkle Gala Dinner"
          eventdesc="Come and enjoy this dinner where our sponsors will be present"
          month="Mar"
          date="17"
        />
        <EventCard
          image={placeholder}
          eventname="Poopy Poo Poo"
          eventdesc="Poopy poo likes poo but poo doesn't like poopy"
          month="Sep"
          date="9"
        />
        <EventCard
          image={placeholder}
          eventname="Placeholder Event Name"
          eventdesc="Placeholder word placeholder replacement poo word yes"
          month="Jan"
          date="22"
        />
      </div>
    </>
  );
}

interface EventCardProps {
  image: string;
  eventname: string;
  eventdesc: string;
  month: string;
  date: string;
}

function EventCard({
  image,
  eventname,
  eventdesc,
  month,
  date,
}: EventCardProps) {
  console.log(image);
  return (
    <div className="flex flex-col container h-80 bg-white rounded-3xl overflow-hidden relative z-10">
      <img
        src={image}
        className="flex object-cover h-full w-full absolute z-0 blur-sm"
      />
      <div className="flex overflow-hidden h-56 relative justify-center ">
        <img src={image} className="flex object-contain z-10" />
      </div>
      <div className="flex flex-row h-24 w-full z-10">
        <div className="flex flex-col w-1/6 p-4 bg-white justify-center items-center text-black">
          <h1>{month}</h1>
          <h1 className="font-bold">{date}</h1>
        </div>
        <div className="flex flex-col p-4 bg-pink w-full text-light-pink">
          <h1 className="font-bold">{eventname}</h1>
          <h1>{eventdesc}</h1>
        </div>
      </div>
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
      <div className="text-center">
        <NavLink to={linkto}>
          <button className="bg-light-pink p-5 rounded-2xl text-brown font-bold text-2xl font-raleway">
            {buttontext}
          </button>
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
          <button className="bg-light-pink p-5 rounded-2xl text-brown font-bold text-5xl font-raleway w-1/4">
            {buttontext}
          </button>
        </NavLink>
      </div>
    </>
  );
}
