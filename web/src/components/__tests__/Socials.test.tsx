import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Socials from "../Socials";
import "@testing-library/jest-dom";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockSocials = [
	{ name: "Facebook", link: "https://www.facebook.com/uoadessertsociety" },
	{ name: "Instagram", link: "https://www.instagram.com/uoadessertsociety/" },
	{ name: "Discord", link: "https://discord.gg/dFuwHuU8FT" },
	{ name: "TikTok", link: "https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1" },
	{ name: "Email", link: "uoadessertsociety@gmail.com" },
	{ name: "Sign Up Form", link: "https://docs.google.com/forms/d/e/1FAIpQLSek62CaGuEBxPexG06yTCAziVe2vWMVA9jHPC0uJTQdugK8rA/viewform?embedded=true" },
];

describe("Socials Component", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockSocials });

		render(
			<MemoryRouter>
				<Socials background="bg-brown" hoverBackground="bg-light-pink" iconColor="text-light-pink" hoverIconColor="text-black" />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should render the Facebook icon and link correctly", async () => {
		const facebookLink = await screen.findByRole("link", { name: /facebook/i });
		expect(facebookLink).toBeInTheDocument();
		expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/uoadessertsociety");

		const facebookIcon = screen.getByTestId("facebookLogo");
		expect(facebookIcon).toBeInTheDocument();
	});

	it("Should render the Instagram icon and link correctly", async () => {
		const instagramLink = await screen.findByRole("link", { name: /instagram/i });
		expect(instagramLink).toBeInTheDocument();
		expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/uoadessertsociety/");

		const instagramIcon = screen.getByTestId("instagramLogo");
		expect(instagramIcon).toBeInTheDocument();
	});

	it("Should render the Discord icon and link correctly", async () => {
		const discordLink = await screen.findByRole("link", { name: /discord/i });
		expect(discordLink).toBeInTheDocument();
		expect(discordLink).toHaveAttribute("href", "https://discord.gg/dFuwHuU8FT");

		const discordIcon = screen.getByTestId("discordLogo");
		expect(discordIcon).toBeInTheDocument();
	});

	it("Should render the TikTok icon and link correctly", async () => {
		const tiktokLink = await screen.findByRole("link", { name: /tiktok/i });
		expect(tiktokLink).toBeInTheDocument();
		expect(tiktokLink).toHaveAttribute("href", "https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1");

		const tiktokIcon = screen.getByTestId("tiktokLogo");
		expect(tiktokIcon).toBeInTheDocument();
	});

	it("Should render the Email icon and link correctly", async () => {
		const emailLink = await screen.findByRole("link", { name: /email/i });
		expect(emailLink).toBeInTheDocument();
		expect(emailLink).toHaveAttribute("href", "mailto:uoadessertsociety@gmail.com");

		const emailIcon = screen.getByTestId("emailLogo");
		expect(emailIcon).toBeInTheDocument();
	});
});
