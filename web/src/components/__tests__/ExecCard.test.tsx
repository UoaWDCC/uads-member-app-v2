import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExecCard, { ExecDataType } from "../ExecCard";

describe("Exec Card Component", () => {
	const exec: ExecDataType = {
		name: "Kai Hirafune",
		role: "President",
	};

    it("Renders the ExecCard component with correct name and role", () => {
        render(<ExecCard exec={exec} />);
        
        expect(screen.getByText("Kai Hirafune")).toBeInTheDocument();
        expect(screen.getByText("President")).toBeInTheDocument();
      });
});
