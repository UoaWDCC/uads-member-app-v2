import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Socials from "../Socials";
import "@testing-library/jest-dom";

describe("Socials Component", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Socials background="bg-brown" hoverBackground="bg-light-pink" iconColor="text-light-pink" hoverIconColor="text-black" />
			</MemoryRouter>
		);
	});

	it("Should render the Facebook icon and link correctly", () => {
		const facebookLink = screen.getByRole("link", { name: /facebook/i });
		expect(facebookLink).toBeInTheDocument();
		expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/uoadessertsociety");

		const facebookIcon = screen.getByTestId("facebookLogo");
		expect(facebookIcon).toBeInTheDocument();
	});

	it("Should render the Instagram icon and link correctly", () => {
		const instagramLink = screen.getByRole("link", { name: /instagram/i });
		expect(instagramLink).toBeInTheDocument();
		expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/uoadessertsociety/");

		const instagramIcon = screen.getByTestId("instagramLogo");
		expect(instagramIcon).toBeInTheDocument();
	});

	it("Should render the Discord icon and link correctly", () => {
		const discordLink = screen.getByRole("link", { name: /discord/i });
		expect(discordLink).toBeInTheDocument();
		expect(discordLink).toHaveAttribute("href", "https://discord.gg/dFuwHuU8FT");

		const discordIcon = screen.getByTestId("discordLogo");
		expect(discordIcon).toBeInTheDocument();
	});

	it("Should render the TikTok icon and link correctly", () => {
		const tiktokLink = screen.getByRole("link", { name: /tiktok/i });
		expect(tiktokLink).toBeInTheDocument();
		expect(tiktokLink).toHaveAttribute("href", "https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1");

		const tiktokIcon = screen.getByTestId("tiktokLogo");
		expect(tiktokIcon).toBeInTheDocument();
	});

	it("Should render the Email icon and link correctly", () => {
		const emailLink = screen.getByRole("link", { name: /email/i });
		expect(emailLink).toBeInTheDocument();
		expect(emailLink).toHaveAttribute("href", "mailto:uoadessertsociety@gmail.com");

		const emailIcon = screen.getByTestId("emailLogo");
		expect(emailIcon).toBeInTheDocument();
	});
});