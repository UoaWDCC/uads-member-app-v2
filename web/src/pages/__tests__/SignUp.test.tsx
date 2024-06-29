import { render, screen, waitFor } from "@testing-library/react";
import SignUp from "../SignUp";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { SocialType } from "../../utils/FrontendTypes";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockSocials: SocialType[] = [
	{ name: "Facebook", link: "https://www.facebook.com/uoadessertsociety" },
	{ name: "Instagram", link: "https://www.instagram.com/uoadessertsociety/" },
	{ name: "Discord", link: "https://discord.gg/dFuwHuU8FT" },
	{ name: "TikTok", link: "https://www.tiktok.com/@uoadessertsociety?_t=8mQ3asFY7Pz&_r=1" },
	{ name: "Email", link: "uoadessertsociety@gmail.com" },
	{ name: "Sign Up Form", link: "https://docs.google.com/forms/d/e/1FAIpQLSek62CaGuEBxPexG06yTCAziVe2vWMVA9jHPC0uJTQdugK8rA/viewform?embedded=true" },
];

/*
 * Test suite to test if the elements in the SignUp Page are rendered correctly
 */
describe("SignUp Page Rendering", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockSocials });

		render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should display the SignUp page title", () => {
		const message = screen.getByText(/Join Us Now/i);
		expect(message).toBeInTheDocument();
	});

	it("Should fetch and display the sign-up form link in an iframe", async () => {
		await waitFor(() => {
			const iframe = screen.getByTestId("signUpForm");
			expect(iframe).toBeInTheDocument();
			expect(iframe).toHaveAttribute(
				"src",
				"https://docs.google.com/forms/d/e/1FAIpQLSek62CaGuEBxPexG06yTCAziVe2vWMVA9jHPC0uJTQdugK8rA/viewform?embedded=true"
			);
		});
	});
});
