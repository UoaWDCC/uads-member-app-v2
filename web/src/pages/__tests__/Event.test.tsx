import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Event from "../Event";
import cupcake from "../../assets/cupcake.svg";

const eventsData = [
	{
		id: 1,
		date: "4",
		month: "April",
		title: "Meet and Greet",
		description: "Come and meet your fellow peers and connect with each other",
	},
	{
		id: 2,
		date: "5",
		month: "May",
		title: "Event 2",
		description: "Event 2 Description",
	},
];

/*
 * Test suite to test if the elements in the Event Page are rendered correctly
 */
describe("Event Page", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Event />
			</MemoryRouter>
		);
	});

	it("Should render 'Events' section with correct title and image", () => {
		const eventsTitle = screen.getByTestId("eventsTitle");
		expect(eventsTitle).toBeInTheDocument();

		const cupcakeImage = screen.getByAltText(/Cupcake/i);
		expect(cupcakeImage).toBeInTheDocument();
		expect(cupcakeImage).toHaveAttribute("src", cupcake);
	});

	it("Should render event cards based on initial data", () => {
		eventsData.forEach((event) => {
			const eventTitle = screen.getByText(event.title);
			expect(eventTitle).toBeInTheDocument();
		});
	});

	it("Should filter events based on search query", () => {
		const searchInput = screen.getByPlaceholderText("Search Events..");
		expect(searchInput).toBeInTheDocument();

		// Simulate typing in the search input
		// For example, search for "Meet"
		fireEvent.change(searchInput, { target: { value: "Meet" } });

		// Verify that only "Meet and Greet" event is displayed
		expect(screen.getByText("Meet and Greet")).toBeInTheDocument();
		expect(screen.queryByText("June Party")).not.toBeInTheDocument();
	});

	it("Should display message when no events match the search query", () => {
		const searchInput = screen.getByPlaceholderText("Search Events..");
		expect(searchInput).toBeInTheDocument();

		// Simulate typing in the search input
		// For example, search for "asdf"
		fireEvent.change(searchInput, { target: { value: "asdf" } });

		// Verify that the "Sorry, no events found" message is displayed
		expect(screen.getByText('Sorry, no events found for "asdf"')).toBeInTheDocument();
	});

});
