import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MovieCard from "../components/MovieCard";
import { renderWithProviders } from "./test-utils";
import { Category } from "../types";

const film = {
  id: "a1",
  title: "Velocity Strike",
  imageUrl: "https://picsum.photos/seed/velocity/800/1200",
  year: "2024",
  rating: "8.4",
  description: "Action film.",
  director: "Marcus Vane",
  runtime: "124 min",
  category: Category.ACTION,
};

describe("MovieCard", () => {
  it("renders film title, year and rating", () => {
    renderWithProviders(<MovieCard film={film} />);

    expect(screen.getByText("Velocity Strike")).toBeInTheDocument();
    expect(screen.getByText(/2024 • 8.4 IMDB/)).toBeInTheDocument();
  });

  it("links to the movie detail page", () => {
    renderWithProviders(<MovieCard film={film} />);

    const link = screen.getByRole("link", { name: /velocity strike/i });
    expect(link).toHaveAttribute("href", "/movie/a1");
  });

  it("renders poster image with correct alt", () => {
    renderWithProviders(<MovieCard film={film} />);

    const img = screen.getByRole("img", { name: "Velocity Strike" });
    expect(img).toHaveAttribute("src", film.imageUrl);
  });
});
