import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExecCard from "../ExecCard";
import execImage from "../../assets/placeholder.png";
import { ExecType } from "../../utils/FrontendTypes";

const execs: ExecType[] = [
	{
		name: "Exec 1",
		role: "President",
		image: execImage,
	},
	{
		name: "", // Missing Name
		role: "Vice-President",
		image: execImage,
	},
	{
		name: "Exec 3",
		role: "", // Missing Role
		image: execImage,
	},
	{
		name: "Exec 4",
		role: "Treasurer",
		image: "", // Missing Image
	},
];

describe("Exec Card Component", () => {
	it("Renders the ExecCard component with correct name, role and image", () => {
		render(<ExecCard exec={execs[0]} />);

		expect(screen.getByText("Exec 1")).toBeInTheDocument();
		expect(screen.getByText("President")).toBeInTheDocument();

		// Check if background image is correctly applied
		const cardElement = screen.getByTestId("execCard");
		expect(cardElement).toHaveStyle(`backgroundImage: url(${execs[0].image})`);
	});

	it("Missing name for exec is not rendered", () => {
		render(<ExecCard exec={execs[1]} />);

		expect(screen.queryByText("Exec 2")).not.toBeInTheDocument();
		expect(screen.getByText("Vice-President")).toBeInTheDocument();

		// Check if background image is correctly applied
		const cardElement = screen.getByTestId("execCard");
		expect(cardElement).toHaveStyle(`backgroundImage: url(${execs[1].image})`);
	});

	it("Missing role for exec is not rendered", () => {
		render(<ExecCard exec={execs[2]} />);

		expect(screen.queryByText("Exec 3 Role")).not.toBeInTheDocument();
		expect(screen.getByText("Exec 3")).toBeInTheDocument();

		// Check if background image is correctly applied
		const cardElement = screen.getByTestId("execCard");
		expect(cardElement).toHaveStyle(`backgroundImage: url(${execs[2].image})`);
	});

	it("Missing image for exec is not rendered", () => {
		render(<ExecCard exec={execs[3]} />);

		expect(screen.getByText("Exec 4")).toBeInTheDocument();
		expect(screen.getByText("Treasurer")).toBeInTheDocument();

		// Check if background image is not present and url is empty
		const cardElement = screen.getByTestId("execCard");
		expect(cardElement).toHaveStyle(`backgroundImage: url(${execs[3].image})`);
	});
});
