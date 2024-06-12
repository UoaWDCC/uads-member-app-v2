import { render, screen } from "@testing-library/react";
import Sponsor from "../Sponsor";
import '@testing-library/jest-dom'

/*
 * Test suite to test if the elements in the Sponsor Page are rendered correctly 
 */
describe("Sponsor Page Rendering", () => {
	it("Should display the Sponsor page title", () => {
		// Render the Sponsor component in a simulated DOM
		render(<Sponsor />);

		const message = screen.getByText(/Sponsors Page/i);
		
		expect(message).toBeInTheDocument();
	});
});