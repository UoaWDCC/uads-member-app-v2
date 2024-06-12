import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*
 * Test suite to test if the elements in the Home Page are rendered correctly
 */
describe("Home Page Rendering", () => {
	it("Should display the Home page title", () => {
		// Render the Home component in a simulated DOM
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		const message = screen.getByText(/Home Page/i);

		expect(message).toBeInTheDocument();
	});
});
