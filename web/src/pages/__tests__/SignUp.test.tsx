import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";
import "@testing-library/jest-dom";

/*
 * Test suite to test if the elements in the SignUp Page are rendered correctly
 */
describe("SignUp Page Rendering", () => {
	it("Should display the SignUp page title", () => {
		// Render the About component in a simulated DOM
		render(<SignUp />);

		const message = screen.getByText(/Sign Up Page/i);

		expect(message).toBeInTheDocument();
	});
});
