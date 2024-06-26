import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExecCard from "../ExecCard";
import execImage from "../../assets/placeholder.png"
import { ExecType } from "../../utils/FrontendTypes";

describe("Exec Card Component", () => {
	const exec: ExecType = {
		name: "Kai Hirafune",
		role: "President",
    image: execImage
	};

    it("Renders the ExecCard component with correct name and role", () => {
        render(<ExecCard exec={exec} />);
        
        expect(screen.getByText("Kai Hirafune")).toBeInTheDocument();
        expect(screen.getByText("President")).toBeInTheDocument();
      });
});
