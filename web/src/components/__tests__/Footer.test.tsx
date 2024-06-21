import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
	it("Should render the logo", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const logo = screen.getByAltText(/UADS Logo/i);
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute("src", "/src/assets/uads_logo.svg");
	});

	it("Should render the copyright text", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const copyrightText = screen.getByText(/© UADS 2024. All Rights Reserved/i);
		expect(copyrightText).toBeInTheDocument();
	});

	it("Should render the Socials component", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const socialsComponent = screen.getByTestId("socialsComponent");
		expect(socialsComponent).toBeInTheDocument();
	});

	it("Should display elements correctly on mobile view", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		// Set viewport size to simulate mobile view
		window.innerWidth = 500;
		window.dispatchEvent(new Event("resize"));

		const logo = screen.getByAltText(/UADS Logo/i);
		const copyrightText = screen.getByText(/© UADS 2024. All Rights Reserved/i);
		const socialsComponent = screen.getByTestId("socialsComponent");

		expect(logo).toBeVisible();
		expect(copyrightText).toBeVisible();
		expect(socialsComponent).toBeVisible();
	});

	it("Should display elements correctly on desktop view", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		// Set viewport size to simulate desktop view
		window.innerWidth = 1024;
		window.dispatchEvent(new Event("resize"));

		const logo = screen.getByAltText(/UADS Logo/i);
		const copyrightText = screen.getByText(/© UADS 2024. All Rights Reserved/i);
		const socialsComponent = screen.getByTestId("socialsComponent");

		expect(logo).toBeVisible();
		expect(copyrightText).toBeVisible();
		expect(socialsComponent).toBeVisible();
	});
});

