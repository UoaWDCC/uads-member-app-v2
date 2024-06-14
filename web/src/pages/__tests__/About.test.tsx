import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import About from "../About";
import icecream from "../../assets/ice-cream.svg";

/*
 * Test suite to test if the elements in the About Page are rendered correctly
 */
describe("About Page", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<About />
			</MemoryRouter>
		);
	});

	it("Should render 'About Us' section correctly", () => {
		// Check if 'About Us' title is rendered
		const aboutTitle = screen.getByText(/About Us/i);
		expect(aboutTitle).toBeInTheDocument();

		// Check if introductory text is rendered
		const introText = screen.getByText(/Welcome to the sweetest corner/i);
		expect(introText).toBeInTheDocument();
	});

	it("Should render ice cream photo", () => {
		const iceCreamImage = screen.getByAltText(/ice-cream photo/i);
		expect(iceCreamImage).toBeInTheDocument();
		expect(iceCreamImage).toHaveAttribute("src", icecream);
	});

	it("About section renders correctly for medium screens", () => {
		const aboutSection = screen.getByTestId("aboutSection");
		expect(aboutSection).toHaveClass("md:w-1/2");
		expect(aboutSection).toHaveClass("md:mb-0");

		expect(aboutSection).not.toHaveClass("lg:w-1/2");
	});
});
