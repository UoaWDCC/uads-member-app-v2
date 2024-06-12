import { render, screen } from "@testing-library/react";
import About from "../About";
import '@testing-library/jest-dom'

/*
 * Test suite to test if the elements in the About Page are rendered correctly 
 */
describe("About Page Rendering", () => {
	it("Should display the About page title", () => {
		// Render the About component in a simulated DOM
		render(<About />);

		const message = screen.getByText(/About Us Page/i);
		
		expect(message).toBeInTheDocument();
	});
});
