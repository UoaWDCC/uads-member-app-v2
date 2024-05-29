import Navbar from "../Components/Navbar";
import cupcake from "../assets/cupcake.svg";
import EventCard from "../Components/EventCard";

export default function Event() {
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
              className="w-full h-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-5"
              placeholder="Search Events.."
            />
          </div>
        </div>
        

        <EventCard />
        
      </div>
    </>
  );
}
