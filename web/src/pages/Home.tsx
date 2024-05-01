import { NavLink } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
import tsujiri from "../assets/tsujiri.jpeg";
import uadslogo from "../assets/UADSLogo.svg";

export default function Home() {
  return (
    <>
      <Landing>
        <p className="h-20 w-full bg-red-50">Placeholder navbar</p>
      </Landing>

      <Sponsor />

      <SignupSection />

      <EventSection />

      <ExampleComponent />
    </>
  );
}

function Sponsor() {
  return (
    <div className="flex flex-col gap-10 h-screen bg-orange-500">
      <h1 className=" text-center text-3xl font-bold text-gray-900">
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
      <div className="flex flex-row flex-nowrap justify-center gap-20">
        <SponsorCard image={tsujiri} />
        <SponsorCard2 />
        <SponsorCard3 />
      </div>
    </>
  );
}

interface SponsorCardProps {
  image: string;
}

function SponsorCard({ image }: SponsorCardProps) {
  return (
    <>
      <div className="bg-white h-80 gap-10 rounded-3xl">
        <img
          className="max-w-full overflow-hidden rounded-3xl justify-self-start"
          src={image}
        />
        <div className="flex flex-row">
          <div className=" justify-start">
            <h2 className="text-center font-bold">Tsujiri</h2>
            <SponsorsButton />
          </div>
          <div className="flex flex-col justify-between content-start mx-10"></div>
        </div>
      </div>
    </>
  );
}

function SponsorCard2() {
  return (
    <>
      <div className="bg-white h-80 gap-10 rounded-3xl">
        <img
          className="max-w-full overflow-hidden rounded-3xl justify-self-start"
          src={tsujiri}
        ></img>
        <div className="flex flex-row">
          <div className=" justify-start">
            <h2 className="text-center font-bold">Tsujiri</h2>
            <SponsorsButton />
          </div>
          <div className="flex flex-col justify-between content-start mx-10"></div>
        </div>
      </div>
    </>
  );
}

function SponsorCard3() {
  return (
    <>
      <div className="bg-white h-80 gap-10 rounded-3xl">
        <img
          className="max-w-full overflow-hidden rounded-3xl justify-self-start"
          src={tsujiri}
        ></img>
        <div className="flex flex-row">
          <div className=" justify-start">
            <h2 className="text-center font-bold">Tsujiri</h2>
            <SponsorsButton />
          </div>
          <div className="flex flex-col justify-between content-start mx-10"></div>
        </div>
      </div>
    </>
  );
}

function Landing({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col h-screen bg-slate-500 items-center gap-10">
      {children}
      <h1 className=" text-center text-3xl font-bold text-gray-900">
        Home page
      </h1>
      <img src={uadslogo} className="colour" />
    </div>
  );
}

function ExampleComponent() {
  return (
    <div className="w-screen h-80 bg-orange-500">
      <h1 className=" text-center text-3xl font-bold text-gray-900">
        EXAMPLE COMPONENT
      </h1>
    </div>
  );
}

function SignupSection() {
  return (
    <div className="flex flex-col gap-10 h-fit bg-purple-800 space-y-10 p-10">
      <h1 className="p-10 text-center text-6xl font-bold text-pink-300">
        Join UADS Today!
      </h1>
      <PinkButton linkto="/signup" buttontext="Sign Up Now" />
    </div>
  );
}

function EventSection() {
  return (
    <>
      <div className="flex flex-col gap-10 h-screen bg-yellow-800 content-center">
        <h1 className="p-10 text-center text-3xl font-bold text-pink-300">
          Our Events
        </h1>
        <EventGroups />
        <PinkButton linkto="/events" buttontext="See More Events" />
      </div>
    </>
  );
}

function EventGroups() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between gap-5 m-10">
        <EventCard 
          image={placeholder}
          eventname="Sparkle Gala Dinner" 
          eventdesc="Come and enjoy this dinner where our sponsors will be present" 
          month="Mar" 
          date="17" />
        <EventCard 
          image={placeholder}
          eventname="Poopy Poo Poo" 
          eventdesc="Poopy poo likes poo but poo doesn't like poopy" 
          month="Sep" 
          date="9" />
        <EventCard 
          image={placeholder}
          eventname="Placeholder Event Name" 
          eventdesc="Placeholder word placeholder replacement poo word yes" 
          month="Jan" 
          date="22" />
      </div>
    </>
  );
}


interface EventCardProps {
  image:  string;
  eventname: string;
  eventdesc: string;
  month: string;
  date: string;
}
function EventCard({ image, eventname, eventdesc, month, date }: EventCardProps) {
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
                <h3 className="text-center text-pink-500 text-lg">
                  {month}
                  </h3>
                <h2 className="text-center font-bold text-black text-3xl">
                  {date}
                </h2>
              </div>
              <div className="pl-1 text-center grow-0">
                {/* eventdesc not centered on card need to fix */}
                <h2 className="text-center font-bold text-black text-xl">
                  {eventname}
                </h2>
                <p className="text-black text-sm">
                  {eventdesc}
                </p>
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
          <button className="bg-pink-300 p-5 rounded-2xl text-yellow-900 font-bold text-2xl">
            {buttontext}
          </button>
        </NavLink>
      </div>
    </>
  );
}

function SponsorsButton() {
  return (
    <NavLink to="/sponsors">
      <button className="bg-white">Read more</button>
    </NavLink>
  );
}
