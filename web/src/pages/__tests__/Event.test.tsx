import { render, screen } from "@testing-library/react";
import Event from "../Event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*
 * Test suite to test if the elements in the Event Page are rendered correctly
 */
describe("Event Page Rendering", () => {
	it("Should display the Event page title", () => {
		// Render the Event component in a simulated DOM
		render(
			<MemoryRouter>
				<Event />
			</MemoryRouter>
		);

		const message = screen.getByText(/Events Page/i);

		expect(message).toBeInTheDocument();
	});
});
