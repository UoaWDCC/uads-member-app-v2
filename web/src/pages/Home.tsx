import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import uadslogo from "../assets/UADS Brown logo.svg";
import tsujiri from "../assets/example-tsujiri-logo.png";
import placeholder from "../assets/placeholder.png";
import donut from "../assets/donut.png";
import cake from "../assets/cake.png";
import chocolate from "../assets/chocolate.png";
import cupcake from "../assets/cupcake.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  return (
    <div className="min-h-screen flex flex-col h-auto bg-light-pink items-center">
      {children}
      <img src={uadslogo} className="colour w-2/5" />
      <div className="flex flex-col z-10 w-7/12">
        <p className="text-center text-xl font-bold text-brown font-body">
          University of Auckland
        </p>
        <h1 className=" text-center text-5xl font-bold text-brown font-sans">
          Dessert Society
        </h1>
        <p className=" text-center text-xl font-bold text-pink font-body ">
          Where dessert lovers go to celebrate the art of making and eating
          desserts
        </p>
      </div>
      <div className="flex-1 bg-gradient-to-b from-light-pink to-pink w-full">
        {/** socials */}
      </div>
    </div>
  );
}

function Sponsor({ images }: { images: string[] }) {
  return (
    <>
      <div className="pb-20  h-1/5  bg-pink relative z-0">
        <div className="flex flex-col  gap-10 z-10">
          <h1 className="  text-center font-bold pt-10 text-light-pink font-raleway text-6xl">
            Supported by our Sponsors
          </h1>
          <SponsorLogoSlider images={images} />
          <PinkButton linkto="/sponsors" buttontext="See our sponsors" />
        </div>

        {/** TODO: replace all images as inconsistent */}
        <img src={donut} className="absolute bottom-0 right-1/4 -z-10" />
        <img src={cake} className="absolute  top-0 -z-10" />
        <img src={cupcake} className="absolute top-5 right-10 -z-10" />
        <img src={chocolate} className="absolute bottom-10 -z-10" />
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
        <button>
          <div className="flex items-center justify-center h-80">
            <img className="object-contain" src={image} />
          </div>
        </button>
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
      <div className="flex flex-col gap-10 h-screen bg-brown content-center">
        <h1 className="p-10 text-center text-6xl font-bold text-light-pink font-raleway">
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
      <div className="flex flex-row flex-nowrap justify-between  m-10">
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
      <NavLink to="/events">
        <button>
          <div className="bg-white h-500 gap-10 rounded-3xl w-11/12">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full rounded-3xl rounded-b-none"
                src={image}
              ></img>
            </div>
            <div className="flex flex-row justify-evenly m-5 pb-5">
              <div className="justify-start pl-1">
                <h3 className="text-center text-pink text-lg font-raleway">
                  {month}
                </h3>
                <h2 className="text-center font-bold text-black text-3xl font-raleway">
                  {date}
                </h2>
              </div>
              <div className="pl-1 text-center grow-0">
                {/* eventdesc not centered on card need to fix */}
                <h2 className="text-center font-bold text-black text-xl font-raleway">
                  {eventname}
                </h2>
                <p className="text-black text-sm font-raleway">{eventdesc}</p>
              </div>
            </div>
          </div>
        </button>
      </NavLink>
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
