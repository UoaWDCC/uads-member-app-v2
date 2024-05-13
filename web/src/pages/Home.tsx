import { NavLink } from "react-router-dom";
// import Slider from "react-slick";
import uadslogo from "../assets/UADS Brown logo.svg";
import tsujiri from "../assets/example-tsujiri-logo.png";
import placeholder from "../assets/placeholder.png";
import icecream from "../assets/dessert-svgrepo-com 1.png";
import creamcup from "../assets/cream-cup-dessert-svgrepo-com 1.svg";
import donut from "../assets/donut.png";
import cake from "../assets/cake.png";
import chocolate from "../assets/chocolate.png";
import cupcake from "../assets/cupcake.png";
import React, { useState, useEffect } from 'react';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <div className="min-h-screen flex flex-col  h-auto bg-gradient-to-b from-light-pink via-light-pink to-pink items-center relative">
      {children}
      
      <img src={icecream} className={`absolute top-15 left-12 scale-75 opacity-50 -rotate-12 mt-24 ${isSmallerScreen && 'hidden'}`}/>
      
      <img src={creamcup} className={`absolute right-0 scale-50 opacity-50 rotate-12 mt-8 ${
          isSmallerScreen && 'hidden'
        }`} />
      
      <img src={uadslogo} className="colour w-2/5  mt-11" />
      
      <div className=" z-10 mt-[-10px] w-7/12 ">
      <p className="text-center text-xl font-bold text-brown">University of Auckland</p>
      <h1 className=" text-center text-5xl font-bold text-brown ">Dessert Society</h1>
      <p className=" text-center text-xl font-bold text-pink ">Where dessert lovers go to celebrate the art of making and eating desserts</p>
      </div>

    </div>
  );
}

function Sponsor({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-10 h-screen pb-20 bg-pink">
      <h1 className="  text-center text-3xl font-bold pt-10 text-neutral-100">
        Supported by our Sponsors
      </h1>
      <SponsorGroups />
      <PinkButton linkto="/sponsors" buttontext="See our sponsors" />
    </div>
  );
}

function SponsorGroups() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-center gap-[2.75rem]">
        <SponsorCard 
        image={tsujiri} 
        sponsor="tsujiri"/>
        <SponsorCard 
        sponsor="tsujiri"
        image={tsujiri} />
        <SponsorCard
        sponsor="tsujiri"
        image={tsujiri} />
      </div>
    </>
  );
}

// function SponsorLogoSlider({ images }: { images: string[] }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 4000,
//     centerPadding: "0px",
//   };

//   return (
//     <div className="h-80 container self-center -mx-10">
//       <Slider {...settings}>
//         {images.map((image) => (
//           <SponsorCard key={"logo:" + image} image={image} />
//         ))}
//       </Slider>
//     </div>
//   );
// }

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
    <div className="flex flex-col gap-10 h-fit bg-pink space-y-10 p-10">
      <h1 className="p-10 text-center text-6xl font-bold text-light-pink font-raleway">
        Join UADS Today!
      </h1>
      <PinkButton linkto="/signup" buttontext="Sign Up Now" />
    </div>
  );
}

function EventSection() {
  return (
    <>
      <div className="h-auto bg-brown content-center">
        <h1 className="z-0 text-9xl font-raleway text-gray opacity-35 font-extrabold">
          UADS
          </h1>
        <h1 className=" p-10 text-center text-6xl font-bold text-light-pink font-raleway">
          Our Upcoming Events
        </h1>
        {/* event group cards not centered */}
        <EventGroups />

        <PinkButton linkto="/events" buttontext="See More Events" />
      </div>
    </>
  );
}

function EventGroups() {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 m-10 lg:m-5 lg:flex-row xl:flex-nowrap xl:flex-row lg:m-10">
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
  return (
    <>
      <div className="bg-pink rounded-3xl m-auto lg:w-4/5 w-3/4"> {/* Adjust width for medium screens */}
        <div className="h-2/6 overflow-hidden">
          <img
            className="w-auto rounded-3xl rounded-b-none"
            src={image}
            alt="Event"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly m-5 pb-5">
          <div className="justify-start pl-1 bg-white">
            <h3 className="text-center text-gray text-lg font-raleway">
              {month}
            </h3>
            <h2 className="text-center font-bold text-black text-3xl font-raleway">
              {date}
            </h2>
          </div>
          <div className="pl-1 text-center md:text-left md:pl-0 m-0"> {/* Adjust alignment for medium screens */}
            <h2 className="text-center md:text-left font-bold text-light-pink text-xl font-raleway truncate">
              {eventname}
            </h2>
            <p className="text-light-pink text-sm font-raleway truncate">{eventdesc}</p>
          </div>
        </div>
      </div>
    </>
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