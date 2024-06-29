import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import About from "../About";
import icecream from "../../assets/ice-cream.svg";
import placeholder from "../../assets/placeholder.png";
import { ExecType } from "../../utils/FrontendTypes";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const mockExecs: ExecType[] = [
	{
		name: "Exec 1",
		role: "President",
		image: placeholder,
	},
	{
		name: "Exec 2",
		role: "Vice-President",
		image: placeholder,
	},
	{
		name: "Exec 3",
		role: "Treasurer",
		image: placeholder,
	},
];

// Helper function to change viewport size
const setViewport = (width: number) => {
	window.innerWidth = width;
	window.dispatchEvent(new Event("resize"));
};

/*
 * Test suite to test if the elements in the About Page are rendered correctly
 */
describe("About Page", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockExecs });

		render(
			<MemoryRouter>
				<About />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("Should render 'About Us' section", () => {
		const aboutTitle = screen.getByText(/About Us/i);
		expect(aboutTitle).toBeInTheDocument();

		const introText = screen.getByText(/Welcome to the sweetest corner/i);
		expect(introText).toBeInTheDocument();
	});

	it("Should render ice cream photo", () => {
		const iceCreamImage = screen.getByAltText(/ice-cream photo/i);
		expect(iceCreamImage).toBeInTheDocument();
		expect(iceCreamImage).toHaveAttribute("src", icecream);
	});

	it("Should render 'Exec Team' section", () => {
		const execTitle = screen.getByText(/The Executive Team/i);
		expect(execTitle).toBeInTheDocument();
	});

	it("Should display execs fetched from API", async () => {
		await waitFor(() => {
			mockExecs.forEach((exec) => {
				const execName = screen.getAllByText(exec.name);
				// Exec name is displayed twice in the About page
				expect(execName).toHaveLength(2);

				
				const execRole = screen.getAllByText(exec.role);
				// Exec role is displayed twice in the About page
				expect(execRole).toHaveLength(2);
			});
		});
	});
});


describe("Responsive Design", () => {
	beforeEach(async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockExecs });

		render(
			<MemoryRouter>
				<About />
			</MemoryRouter>
		);

		await waitFor(() => expect(axios.get).toHaveBeenCalled());
	});

	it("About section renders correctly for small screens (sm and Phone)", () => {
		setViewport(640);

		const aboutSection = screen.getByTestId("aboutSection");
		expect(aboutSection).toHaveClass("w-full");
		expect(aboutSection).toHaveClass("mb-10");
	});

	it("About section renders correctly for medium and above screens (md, lg, xl, 2xl)", () => {
		setViewport(768);

		const aboutSection = screen.getByTestId("aboutSection");
		expect(aboutSection).toHaveClass("md:w-1/2");
		expect(aboutSection).toHaveClass("md:mb-0");
	});

	it("Should resize ice cream photo correctly for small screens (sm and Phone)", () => {
		setViewport(640);

		const icecreamPhoto = screen.getByTestId("icecreamPhoto");
		expect(icecreamPhoto).toHaveClass("w-52 h-52");
	});

	it("Should resize ice cream photo correctly for medium and above screens (md, lg, xl, 2xl)", () => {
		setViewport(768);

		const icecreamPhoto = screen.getByTestId("icecreamPhoto");
		expect(icecreamPhoto).toHaveClass("md:h-80 md:w-80");
	});

	it("Should display 1 column for exec titles in extra small screens (Phone view)", async () => {
		setViewport(639);

		const execTitle = await screen.findAllByTestId("execTitleContainer", {}, { timeout: 5000 });
		execTitle.forEach((title) => {
			expect(title).toHaveClass("w-full");
		});
	});

	it("Should display 2 columns for exec titles in small screens (sm)", async () => {
		setViewport(640);

		const execTitle = await screen.findAllByTestId("execTitleContainer", {}, { timeout: 5000 });
		execTitle.forEach((title) => {
			expect(title).toHaveClass("sm:w-1/2");
		});
	});

	it("Should display 3 columns for exec titles in medium screens (md)", async () => {
		setViewport(768);

		const execTitle = await screen.findAllByTestId("execTitleContainer", {}, { timeout: 5000 });
		execTitle.forEach((title) => {
			expect(title).toHaveClass("md:w-1/3");
		});
	});

	it("Should display 4 columns for exec titles in large and above screens (lg, xl, 2xl)", async () => {
		setViewport(1024);

		const execTitle = await screen.findAllByTestId("execTitleContainer", {}, { timeout: 5000 });
		execTitle.forEach((title) => {
			expect(title).toHaveClass("lg:w-1/4");
		});
	});

	it("Should display 1 column for exec cards in extra small screens (Phone view)", async () => {
		setViewport(639);

		const execCards = await screen.findAllByTestId("execCardContainer", {}, { timeout: 5000 });
		execCards.forEach((card) => {
			expect(card).toHaveClass("w-full");
		});
	});

	it("Should display 2 columns for exec cards in small screens (sm)", async () => {
		setViewport(640);

		const execCards = await screen.findAllByTestId("execCardContainer", {}, { timeout: 5000 });
		execCards.forEach((card) => {
			expect(card).toHaveClass("sm:w-1/2");
		});
	});

	it("Should display 3 columns for exec cards in medium screens (md)", async () => {
		setViewport(768);

		const execCards = await screen.findAllByTestId("execCardContainer", {}, { timeout: 5000 });
		execCards.forEach((card) => {
			expect(card).toHaveClass("md:w-1/3");
		});
	});

	it("Should display 4 columns for exec cards in large and above screens (lg, xl, 2xl)", async () => {
		setViewport(1024);

		const execTitle = await screen.findAllByTestId("execTitleContainer", {}, { timeout: 5000 });
		execTitle.forEach((title) => {
			expect(title).toHaveClass("lg:w-1/4");
		});
	});
});

