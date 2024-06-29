import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Sponsor from "../Sponsor";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import placeholder from "../../assets/placeholder.png";
import { SponsorType } from "../../utils/FrontendTypes";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockSponsors: SponsorType[] = [
	{
		name: "Sponsor 1",
		description: "Sponsor 1 Description",
		image: placeholder,
	},
	{
		name: "Sponsor 2",
		description: "Sponsor 2 Description",
		image: placeholder,
	},
];

/*
 * Test suite to test if the elements in the Sponsor Page are rendered correctly
 */
describe("Sponsor Page", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockSponsors });

		render(
			<MemoryRouter>
				<Sponsor />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should display the Sponsor page title", () => {

		const message = screen.getByText(/Our Sponsors/i);

		expect(message).toBeInTheDocument();
	});

	it("Should display sponsors fetched from API", async () => {
		await waitFor(() => {
			mockSponsors.forEach((sponsor) => {
				const sponsorName = screen.getByText(sponsor.name);
				expect(sponsorName).toBeInTheDocument();

				const sponsorDescription = screen.getByText(sponsor.description);
				expect(sponsorDescription).toBeInTheDocument();
			});
		});
	});

	it("Should filter sponsors correctly based on search input", async () => {
		const searchInput = screen.getByPlaceholderText("Search Sponsors...");

		// Simulate user typing 'Sponsor 1' in the search input
		await waitFor(() => {
			fireEvent.change(searchInput, { target: { value: "Sponsor 1" } });
		});

		// Ensure only 'Sponsor 1' is displayed
		expect(screen.getByText("Sponsor 1")).toBeInTheDocument();
		expect(screen.queryByText("Sponsor 2")).not.toBeInTheDocument();
	});

	it("Should display message when no sponsors match the search query", async () => {
		const searchInput = screen.getByPlaceholderText("Search Sponsors...");

		// Simulate user typing 'Workshop' in the search input using fireEvent.change
		await waitFor(() => {
			fireEvent.change(searchInput, { target: { value: "gong cha" } });
		});

		// Ensure message is displayed
		expect(screen.getByText('Sorry, no sponsor found for "gong cha"')).toBeInTheDocument();
	});
});
