import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Event from "../Event";
import cupcake from "../../assets/cupcake.svg";
//import eventBackground from "../../assets/event.jpg";

/*
const eventsData = [
	{
		name: "Meet and Greet",
		date: "2024-01-02",
		description: "Meet and Greet Description",
		image: eventBackground,
	},
	{
		name: "Event 2",
		date: "2024-01-01",
		description: "Event 2 Description",
		image: eventBackground,
	},
];
*/

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

	/*
	it("Should render event cards based on initial data", async () => {
		await waitFor(
			() => {
				const eventTitle = screen.getByText("Meet and Greet");
				expect(eventTitle).toBeInTheDocument();
			},
			{ timeout: 5000 }
		);
	});
	*/

	/*
	it("Should filter events based on search query", async () => {
		const searchInput = screen.getByPlaceholderText("Search Events...");
		expect(searchInput).toBeInTheDocument();

		// Simulate typing in the search input
		// For example, search for "Meet"
		fireEvent.change(searchInput, { target: { value: "Meet" } });

		// Verify that only "Meet and Greet" event is displayed
		await waitFor(
			() => {
				expect(screen.getByText("Meet and Greet")).toBeInTheDocument();
				expect(screen.queryByText("Event 2")).not.toBeInTheDocument();
			},
			{ timeout: 5000 }
		);
	});
	

	it("Should display message when no events match the search query", () => {
		const searchInput = screen.getByPlaceholderText("Search Events...");
		expect(searchInput).toBeInTheDocument();

		// Simulate typing in the search input
		// For example, search for "asdf"
		fireEvent.change(searchInput, { target: { value: "asdf" } });

		// Verify that the "Sorry, no events found" message is displayed
		expect(screen.getByText('Sorry, no events found for "asdf"')).toBeInTheDocument();
	});
	*/
});
