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

      <EventSection />

      <SignupSection />
    </>
  );
}

function Landing({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-pink-200 to-pink-800 items-center gap-10">
      {children}
      <h1 className=" text-center text-3xl font-bold text-gray font-raleway">
        Home page
      </h1>
      <img src={uadslogo} className="colour" />
    </div>
  );
}

function Sponsor() {
  return (
    <div className="flex flex-col gap-10 h-500 pb-20 bg-pink">
      <h1 className=" text-center text-6xl font-bold pt-10 text-light-pink font-raleway">
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

interface SponsorCardProps {
  image: string;
  sponsor: string;
}

function SponsorCard({ image, sponsor }: SponsorCardProps) {
  return (
    <>
   <NavLink to="/sponsors">
        <button>
          <div className="bg-white h-500 gap-20 rounded-3xl ">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full rounded-3xl rounded-b-none"
                src={image}
              ></img>
            </div>
            <div className="flex flex-row ">
              <div className="justify-start pl-1 text-center grow-0 pb-3 ml-3 text-xl text-yellow-900">
                <h3 className="text-center font-bold font-raleway">{sponsor} </h3>
              </div>
            
            </div>
            {/* <div className="pb-5">
            <ReadMoreButton linkto="/sponsors" buttontext="Read more"/>
            </div> */}
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
      <div className="flex flex-col gap-10 h-screen bg-gray content-center">
        <h1 className="p-10 text-center text-6xl font-bold text-light-pink font-raleway">
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
                <p className="text-black text-sm font-raleway">
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
          <button className="bg-light-pink p-5 rounded-2xl text-gray font-bold text-2xl font-raleway">
            {buttontext}
          </button>
        </NavLink>
      </div>
    </>
  );
}
