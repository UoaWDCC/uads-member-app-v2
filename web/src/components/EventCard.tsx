import backgroundImage from "../assets/event.jpg";

export interface EventType {
	id: number;
	date: string;
	month: string;
	title: string;
	description: string;
}

interface EventCardProps {
	event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
	const { date, month, title, description } = event;

	// Create a date object for the event
	const eventDate = new Date(`${month} ${date}, ${new Date().getFullYear()}`);
	const currentDate = new Date();

	// Determine if the event is upcoming, happening today, or past
	const isToday = eventDate.toDateString() === currentDate.toDateString();
	const isUpcoming = eventDate > currentDate;
	const statusText = isToday ? "Happening Today" : isUpcoming ? "Upcoming Event" : "Passed";

	return (
		<>
			<div className="w-96 flex flex-col bg-pink rounded-3xl overflow-hidden">
				<div className="relative h-3/5 group">
					<img src={backgroundImage} alt="Background Image" className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">{statusText}</div>
				</div>

				<div className="flex-grow flex rounded-b-3xl">
					<div className="w-1/3 bg-white rounded-bl-3xl flex flex-col justify-center items-center font-raleway text-black font-bold p-2">
						<p className="text-xl">{month}</p>
						<p className="text-3xl">{date}</p>
					</div>

					<div className="bg-pink w-2/3 rounded-br-3xl py-2 px-5 text-light-pink flex flex-col justify-center">
						<h4 className="font-bold text-xl">{title}</h4>
						<p className="text-md">{description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
