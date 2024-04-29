import { NavLink } from "react-router-dom";
import placeholder from "../assets/placeholder.png"
import tsujiri from "../assets/tsujiri.jpeg"

export default function Home() {
  return (
    <>
      <Landing>
        <p className="h-20 w-full bg-red-50">Placeholder navbar</p>
      </Landing>

      <Sponsor/>

      <EventSection />

      <ExampleComponent />

      
    </>
  );
}


function Sponsor() {
  return (
    <div className="w-screen h-80 bg-orange-500">
      <h1 className=" text-center text-3xl font-bold text-gray-900">
        Sponsors
      </h1>
      <SponsorGroups />
      <SponsorsButton />
      
    </div>
  );
}

function SponsorGroups() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-center gap-5">
        <SponsorCard1 />
        <SponsorCard2 />
        <SponsorCard3 />
      </div>
    </>
  );
}

function SponsorCard1() {
  return (
    <>
      <div className="h-1/2 bg-white flex flex-col rounded-3xl gap-10 max-w-s mx-10 max-h-">
        <img className="max-w-full overflow-hidden rounded-3xl justify-self-start" src={tsujiri}></img>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start px-5">
          <h2 className="text-center">Tsujiri</h2>
          </div>
          <div className="flex flex-col justify-between content-start mx-10">

          </div>
        </div>
      </div>
    </>
  );
}

function SponsorCard2() {
  return (
    <>
      <div className="h-1/2 bg-white flex flex-col rounded-3xl gap-10 max-w-s mx-10 max-h-">
        <img className="max-w-full overflow-hidden rounded-3xl justify-self-start" src={tsujiri}></img>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start px-5">
          <h2 className="text-center">Waffler's</h2>
          </div>
          <div className="flex flex-col justify-between content-start mx-10">

          </div>
        </div>
      </div>
    </>
  );
}

function SponsorCard3() {
  return (
    <>
      <div className="h-1/2 bg-white flex flex-col rounded-3xl gap-10 max-w-s mx-10 max-h-">
        <img className="max-w-full overflow-hidden rounded-3xl justify-self-start" src={tsujiri}></img>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start px-5">
          <h2 className="text-center">Mighty Hotdog</h2>
          </div>
          <div className="flex flex-col justify-between content-start mx-10">

          </div>
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


function EventSection() {
  return (
    <>
      <div class="flex flex-col gap-10 h-screen bg-blue-500">
        <h1 className="p-10 text-center text-3xl font-bold">
          Our Events
        </h1>
        <EventGroups />
        <EventButton />
      </div>
    </>
  );
}

function EventGroups() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-center gap-5">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}

function EventCards() {
  return (
    <>
      <div className=" bg-white flex flex-col rounded-3xl gap-10 max-w-s mx-10 max-h-">
        <img className="max-w-full rounded-b-none overflow-hidden rounded-3xl justify-self-start" src={placeholder}></img>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start px-5">
            <h3 className="text-center">Mar</h3>
            <h2 className="text-center font-bold text-black">17</h2>
          </div>
          <div className="flex flex-col justify-between content-start mx-10">
            <h2 className="text-center font-bold text-black">Sparkle Gala Dinner</h2>
            <p className="text-center">Come and enjoy this dinner where our sponsors will be present</p>
          </div>
        </div>
      </div>
    </>
  );
}

function EventCard() {
  return (
    <>
      <div className="bg-white h-500 gap-10 rounded-3xl">
        <img className="max-w-full overflow-hidden rounded-3xl rounded-b-none" src={placeholder}></img>
        <div className="flex flex-row m-5">
          <div className="justify-start px-5">
            <h3 className="text-centre">Mar</h3>
            <h2 className="text-center font-bold text-black">17</h2>
          </div>
          <div>
            <h2 className="text-center font-bold text-black">Sparkle Gala Dinner</h2>
            <p className="text center">Come and enjoy this dinner where our sponsors will be present</p>
          </div>
          
        </div>
      </div>
    
    
    </>
  )
}

function EventButton() {
  return (
    <>
    <NavLink to="/events">
      <button className="bg-white" >See More Events</button>
    </NavLink>
    </>
  )
}

function SponsorsButton() {
  return (
    <>
    <NavLink to="/sponsors">
      <button className="bg-white" >See More Events</button>
    </NavLink>
    </>
  )
}