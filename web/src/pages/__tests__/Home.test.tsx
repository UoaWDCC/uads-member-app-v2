import { render, screen, waitFor } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import eventBackground from "../../assets/event.jpg";
import placeholder from "../../assets/placeholder.png";
import { EventType, SponsorType } from "../../utils/FrontendTypes";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockEvents: EventType[] = [
	{
		name: "Event 1",
		date: "2024-01-01",
		description: "Event 1 Description",
		image: eventBackground,
	},
	{
		name: "Event 2",
		date: "2024-01-02",
		description: "Event 2 Description",
		image: eventBackground,
	},
	{
		name: "Event 3",
		date: "2024-01-03",
		description: "Event 3 Description",
		image: eventBackground,
	},
];

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
	{
		name: "Sponsor 3",
		description: "Sponsor 3 Description",
		image: placeholder,
	},
];

/*
 * Test suite to test if the elements in the Home Page are rendered correctly
 */
describe("Home Page Rendering", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockImplementation((url) => {
			if (url.includes("events")) {
				return Promise.resolve({ data: mockEvents });
			}
			if (url.includes("sponsors")) {
				return Promise.resolve({ data: mockSponsors });
			}
		});

		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should display the Home page title", () => {
		const message = screen.getByText(/Dessert Society/i);

		expect(message).toBeInTheDocument();
	});

	it("Should display events fetched from API", async () => {
		await waitFor(() => {
			mockEvents.forEach((event) => {
				const eventName = screen.getByText(event.name);
				expect(eventName).toBeInTheDocument();

				const eventDescription = screen.getByText(event.description);
				expect(eventDescription).toBeInTheDocument();
			});
		});
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
});
