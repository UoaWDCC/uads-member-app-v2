import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventCard, { EventType } from "../EventCard";
import eventBackground from "../../assets/event.jpg";

describe("Event Card Component", () => {
	const event: EventType = {
		name: "Event 1",
		date: "2024-01-01",
		description: "Event 1 Description",
		image: eventBackground,
	};

	it("Renders the EventCard component with correct details", () => {
		render(<EventCard event={event} />);

		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("January")).toBeInTheDocument();
		expect(screen.getByText("Event 1")).toBeInTheDocument();
		expect(screen.getByText("Event 1 Description")).toBeInTheDocument();
	});
});
