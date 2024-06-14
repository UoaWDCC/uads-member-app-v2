import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
	it("Should render the logo", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const logo = screen.getByAltText(/UADS Logo/i);
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute("src", "/src/assets/uads_logo.svg");
	});

	it("Should render all navigation links", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const links = [
			{ title: "Home", href: "/" },
			{ title: "About", href: "/about" },
			{ title: "Events", href: "/events" },
			{ title: "Sponsors", href: "/sponsors" },
			{ title: "Join", href: "/signup" },
		];

		links.forEach((link) => {
			const navLink = screen.getByText(new RegExp(link.title, "i"));
			expect(navLink).toBeInTheDocument();
			expect(navLink).toHaveAttribute("href", link.href);
		});
	});

	it("Should render hamburger button in mobile view and display close button", () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		// Set viewport size to simulate mobile view
		window.innerWidth = 500;
		window.dispatchEvent(new Event("resize"));

		// Check if hamburger button is visible in mobile view
		const hamburgerButtonMobile = screen.getByRole("button", { name: /openMenu/i });
		expect(hamburgerButtonMobile).toBeVisible();

		// Click the hamburger button to open the mobile menu
		fireEvent.click(hamburgerButtonMobile);

		// Check if close menu button is visible after clicking the hamburger button
		const closeButtonMobile = screen.getByRole("button", { name: /closeMenu/i });
		expect(closeButtonMobile).toBeVisible();
	});
});
