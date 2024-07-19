import { EventCardProps } from "../utils/FrontendTypes";
import background from "../assets/placeholder.png";

export default function EventCard({ event }: EventCardProps) {
  // const{ name, date, description, image } = event;

  return (
    <>
      <div className="flex rounded-b-3xl overflow-hidden relative">
        <div className="grid grid-cols-4 ">
          <div className="col-span-4 ">
            <img className="object-cover rounded-t-xl" src={background}></img>
          </div>
          <div className="bg-white p-7 text-black">
            <h1>test</h1>
          </div>
          <div className="col-span-3 bg-pink text-light-pink">
            <h1>test</h1>
          </div>
        </div>
      </div>
    </>
  );
}
