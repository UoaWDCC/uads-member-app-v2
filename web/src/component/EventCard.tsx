interface EventCardProps {
  image: string;
  eventname: string;
  eventdesc: string;
  month: string;
  date: string;
}

export default function EventCard({
  image,
  eventname,
  eventdesc,
  month,
  date,
}: EventCardProps) {
  console.log(image);
  return (
    <div className=" mx-10 flex flex-col h-80 bg-white rounded-3xl overflow-hidden relative z-10">
      <img
        src={image}
        className="flex object-cover h-full w-full absolute z-0 blur-sm"
      />
      <div className="flex overflow-hidden h-56 relative justify-center ">
        <img src={image} className="flex object-contain z-10" />
      </div>
      <div className="flex flex-row w-full z-10 grow">
        <div className="flex flex-col w-1/6 p-4 bg-white justify-center items-center text-black">
          <h1>{month}</h1>
          <h1 className="font-bold">{date}</h1>
        </div>
        <div className="flex flex-col p-4 bg-pink w-full text-light-pink">
          <h1 className="font-bold">{eventname}</h1>
          <h1 className="text-xs xl:text-base overflow-hidden text-ellipsis">
            {eventdesc}
          </h1>
        </div>
      </div>
    </div>
  );
}
