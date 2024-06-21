import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventCard, { EventType } from "../EventCard";

describe("Event Card Component", () => {
	const event: EventType = {
		id: 1,
		date: "4",
		month: "April",
		title: "Meet and Greet",
		description: "Come and meet your fellow peers and connect with each other",
	};

	it("Renders the EventCard component with correct details", () => {
		render(<EventCard event={event} />);

		expect(screen.getByText("4")).toBeInTheDocument();
		expect(screen.getByText("April")).toBeInTheDocument();
        expect(screen.getByText("Meet and Greet")).toBeInTheDocument();
        expect(screen.getByText("Come and meet your fellow peers and connect with each other")).toBeInTheDocument();
	});
});
