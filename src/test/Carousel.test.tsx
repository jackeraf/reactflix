import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Carousel from "../components/Carousel";
import { renderWithProviders } from "./test-utils";
import { Category } from "../types";

const films = [
  {
    id: "a1",
    title: "Velocity Strike",
    imageUrl: "https://picsum.photos/seed/velocity/800/1200",
    year: "2024",
    rating: "8.4",
    description: "",
    director: "",
    runtime: "",
    category: Category.ACTION,
  },
  {
    id: "a2",
    title: "Iron Horizon",
    imageUrl: "https://picsum.photos/seed/horizon/800/1200",
    year: "2023",
    rating: "7.9",
    description: "",
    director: "",
    runtime: "",
    category: Category.ACTION,
  },
];

describe("Carousel", () => {
  it("renders section title", () => {
    renderWithProviders(<Carousel title="Pulse-Pounding Action" films={films} />);

    expect(screen.getByRole("heading", { name: /Pulse-Pounding Action/i })).toBeInTheDocument();
  });

  it("renders a card for each film", () => {
    renderWithProviders(<Carousel title="Action" films={films} />);

    expect(screen.getByText("Velocity Strike")).toBeInTheDocument();
    expect(screen.getByText("Iron Horizon")).toBeInTheDocument();
  });

  it("renders left and right scroll buttons", () => {
    renderWithProviders(<Carousel title="Action" films={films} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it("renders nothing when films array is empty", () => {
    renderWithProviders(<Carousel title="Empty Section" films={[]} />);

    expect(screen.getByRole("heading", { name: /Empty Section/i })).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
