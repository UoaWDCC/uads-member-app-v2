import backgroundImage from "../assets/event.jpg";

export interface EventType {
  id: number;
  date: string;
  month: string;
  title: string;
  description: string;
  status: 'upcoming' | 'past';
}

interface EventCardProps {
  event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
  const { date, month, title, description, status } = event;

  return (
    <>
      <div className="w-96 h-80 bg-pink rounded-3xl">
      <div className="h-3/5 rounded-t-3xl overflow-hidden relative group">
          <img src={backgroundImage} alt="Background Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {status === 'upcoming' ? 'Join Event' : 'Passed'}
          </div>
        </div>

        <div className="w-full h-2/5 flex bg-blue-200 rounded-b-3xl">
        <div className="w-1/4 h-auto bg-white rounded-bl-3xl flex flex-col justify-center items-center font-raleway text-black font-bold">
          <p className="text-xl">{month}</p>
          <p className="text-3xl">{date}</p>
        </div>

          <div className="bg-pink w-3/4 h-auto rounded-br-3xl py-5 px-5 text-light-pink relative">
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}


