import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventCard from "../EventCard";
import eventBackground from "../../assets/event.jpg";
import { EventType } from "../../utils/FrontendTypes";

// Gets the current date
const currentDate = new Date().toISOString().split("T")[0];

const events: EventType[] = [
	{
		name: "Event 1",
		date: "2024-01-01", // Past Event
		description: "Event 1 Description",
		image: eventBackground,
	},
	{
		name: "Event 2",
		date: "2099-12-30", // Upcoming Event
		description: "Event 2 Description",
		image: eventBackground,
	},
	{
		name: "Event 3",
		date: currentDate, // Event Today
		description: "Event 3 Description",
		image: eventBackground,
	},
	{
		name: "", // Missing Name
		date: "2024-01-01",
		description: "Missing Name Event Description",
		image: eventBackground,
	},
	{
		name: "Event 5",
		date: "", // Missing Date
		description: "Missing Date Event Description", 
		image: eventBackground,
	},
	{
		name: "Event 6",
		date: "2024-01-01",
		description: "", // Missing Description
		image: eventBackground,
	},
	{
		name: "Event 7",
		date: "2024-01-01",
		description: "Missing Image Event Description", 
		image: "", // Missing Image
	},
];

describe("Event Card Component", () => {
	it("Renders the EventCard component with correct details", () => {
		render(<EventCard event={events[0]} />);

		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("January")).toBeInTheDocument();
		expect(screen.getByText("Event 1")).toBeInTheDocument();
		expect(screen.getByText("Event 1 Description")).toBeInTheDocument();
	});

	it("Displays 'Passed' status for a past event", () => {
		render(<EventCard event={events[0]} />);

		expect(screen.getByText("Passed")).toBeInTheDocument();
	});

	it("Displays 'Upcoming Event' status for an upcoming event", () => {
		render(<EventCard event={events[1]} />);

		expect(screen.getByText("Upcoming Event")).toBeInTheDocument();
	});

	it("Displays 'Happening Today' status for an event happening today", () => {
		render(<EventCard event={events[2]} />);

		const currentMonth = new Date().toLocaleString("default", { month: "long" });
		const currentDay = new Date().getDate().toString();

		expect(screen.getByText("Happening Today")).toBeInTheDocument();
		expect(screen.getByText("Event 3")).toBeInTheDocument();
		expect(screen.getByText("Event 3 Description")).toBeInTheDocument();
		expect(screen.getByText(currentMonth)).toBeInTheDocument();
		expect(screen.getByText(currentDay)).toBeInTheDocument();
	});

	it("Missing name for an event is not rendered", () => {
		render(<EventCard event={events[3]} />);

		expect(screen.getByText("Missing Name Event Description")).toBeInTheDocument();
		expect(screen.queryByText("Event 4")).not.toBeInTheDocument();
	});

	it("Missing date for an event is not rendered", () => {
		render(<EventCard event={events[4]} />);

		expect(screen.getByText("Event 5")).toBeInTheDocument();
		expect(screen.getByText("Missing Date Event Description")).toBeInTheDocument();
		expect(screen.getByText("Invalid Date")).toBeInTheDocument();
		expect(screen.queryByText("January")).not.toBeInTheDocument();
	});

	it("Missing description for an event is not rendered", () => {
		render(<EventCard event={events[5]} />);

		expect(screen.getByText("Event 6")).toBeInTheDocument();
		expect(screen.queryByText("Event 6 Description")).not.toBeInTheDocument();
	});

	it("Missing image for an event is not rendered", () => {
		render(<EventCard event={events[6]} />);

		expect(screen.getByText("Event 7")).toBeInTheDocument();
		expect(screen.getByText("Missing Image Event Description")).toBeInTheDocument();
		const imageElement = screen.getByAltText("Background Image");
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute("src", "");
	});
});
