import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Event from "../Event";
import cupcake from "../../assets/cupcake.svg";
import eventBackground from "../../assets/event.jpg";
import { EventType } from "../../utils/FrontendTypes";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockEvents: EventType[] = [
	{
		name: "Meet and Greet",
		date: "2024-01-01",
		description: "Meet and Greet Description",
		image: eventBackground,
	},
	{
		name: "Event 2",
		date: "2024-01-02",
		description: "Event 2 Description",
		image: eventBackground,
	},
];

/*
 * Test suite to test if the elements in the Event Page are rendered correctly
 */
describe("Event Page", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockEvents });

		render(
			<MemoryRouter>
				<Event />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should render 'Events' section with correct title and image", () => {
		const eventsTitle = screen.getByTestId("eventsTitle");
		expect(eventsTitle).toBeInTheDocument();

		const cupcakeImage = screen.getByAltText(/Cupcake/i);
		expect(cupcakeImage).toBeInTheDocument();
		expect(cupcakeImage).toHaveAttribute("src", cupcake);
	});

	it("Should display events fetched from API", async () => {
		await waitFor(() => {
			mockEvents.forEach((event) => {
				const eventName = screen.getByText(event.name);
				expect(eventName).toBeInTheDocument();

				const eventDescription = screen.getByText(event.description);
				expect(eventDescription).toBeInTheDocument();
			});
		});
	});

	it("Should filter events correctly based on search input", async () => {
		const searchInput = screen.getByPlaceholderText("Search Events...");

		// Simulate user typing 'Meet' in the search input
		await waitFor(() => {
			fireEvent.change(searchInput, { target: { value: "Meet" } });
		});

		// Ensure only 'Meet and Greet' event is displayed
		expect(screen.getByText("Meet and Greet")).toBeInTheDocument();
		expect(screen.queryByText("Event 2")).not.toBeInTheDocument();
	});

	it("Should display message when no events match the search query", async () => {
		const searchInput = screen.getByPlaceholderText("Search Events...");

		// Simulate user typing 'Workshop' in the search input using fireEvent.change
		await waitFor(() => {
			fireEvent.change(searchInput, { target: { value: "workshop" } });
		});

		// Ensure message is displayed
		expect(screen.getByText('Sorry, no events found for "workshop"')).toBeInTheDocument();
	});
});
