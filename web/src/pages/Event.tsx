import EventCard from "../components/EventCard";
import { EventType } from "../utils/FrontendTypes";

export default function Event() {
  return (
    <>
      <div className="max-w-screen h-auto bg-light-pink py-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown">
          Events Page
        </h1>
        <div className="flex flex-col md:flex-row gap-x-16 p-5 sm:gap-y-16 ">
          <div className="w-full md:w-1/3 text-center">
            {/*  fix small padding issue  */}
            <EventCard
              event={{
                name: "test",
                date: "test",
                description: "test",
                image: "test",
              }}
            />
          </div>
          <div className="w-full md:w-1/3 text-center">
            <EventCard
              event={{
                name: "test",
                date: "test",
                description: "test",
                image: "test",
              }}
            />
          </div>
          <div className="w-full md:w-1/3 text-center">
            <EventCard
              event={{
                name: "test",
                date: "test",
                description: "test",
                image: "test",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
