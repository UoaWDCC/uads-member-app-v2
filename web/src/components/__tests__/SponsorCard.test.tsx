import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SponsorCard from "../SponsorCard";
import placeholder from "../../assets/placeholder.png";
import { SponsorType } from "../../utils/FrontendTypes";

const sponsors: SponsorType[] = [
	{
		name: "Sponsor 1",
		description: "Sponsor 1 Description",
		image: placeholder,
	},
	{
		name: "", // Missing Name
		description: "Sponsor 2 Description",
		image: placeholder,
	},
	{
		name: "Sponsor 3",
		description: "", // Missing Description
		image: placeholder,
	},
];

describe("Sponsor Card Component", () => {
	it("Renders the SponsorCard component with correct details", () => {
		render(<SponsorCard sponsor={sponsors[0]} />);

		expect(screen.getByText("Sponsor 1")).toBeInTheDocument();
		expect(screen.getByText("Sponsor 1 Description")).toBeInTheDocument();
	});

    it("Missing name for a sponsor is not rendered", () => {
		render(<SponsorCard sponsor={sponsors[1]} />);

		expect(screen.queryByText("Sponsor 2")).not.toBeInTheDocument();
		expect(screen.getByText("Sponsor 2 Description")).toBeInTheDocument();
	});

    it("Missing name for a sponsor is not rendered", () => {
		render(<SponsorCard sponsor={sponsors[2]} />);

		expect(screen.getByText("Sponsor 3")).toBeInTheDocument();
		expect(screen.queryByText("Sponsor 3 Description")).not.toBeInTheDocument();
	});
});
