import { render, screen } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";

/*
 * Test suite to test if the elements in the Home Page are rendered correctly
 */
describe("Home Page Rendering", () => {
	it("Should display the Home page title", () => {
		// Render the About component in a simulated DOM
		render(<Home />);

		const message = screen.getByText(/Home Page/i);

		expect(message).toBeInTheDocument();
	});
});
