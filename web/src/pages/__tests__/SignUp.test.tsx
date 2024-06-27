import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*
 * Test suite to test if the elements in the SignUp Page are rendered correctly
 */
describe("SignUp Page Rendering", () => {
	it("Should display the SignUp page title", () => {
		// Render the SignUp component in a simulated DOM
		render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		const message = screen.getByText(/Join Us Now/i);

		expect(message).toBeInTheDocument();
	});
});
