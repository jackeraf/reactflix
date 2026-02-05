import { describe, it, expect, afterEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import WishListPage from "../pages/WishListPage";
import {
  renderWithProviders,
  sampleMovies,
  createWishlist,
  clearWishlist,
} from "./test-utils";
import { Routes, Route } from "react-router-dom";
import { useWishlist } from "../store/wishlistStore";

afterEach(() => {
  localStorage.clear();
  useWishlist.setState({ items: [] });
});

describe("Home page", () => {
  it("renders hero and category carousels", () => {
    renderWithProviders(<HomePage />);

    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/The Ultimate Cinema/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulse-Pounding Action/i)).toBeInTheDocument();
    expect(screen.getByText(/Comedy Hits/i)).toBeInTheDocument();
    expect(screen.getByText(/Sci-Fi Journeys/i)).toBeInTheDocument();
  });
});

describe("Details page", () => {
  it("renders film data and add-to-wishlist updates store", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/movie/:id" element={<DetailPage />} />
      </Routes>,
      { route: "/movie/a1" }
    );

    expect(await screen.findByText(/Velocity Strike/i)).toBeInTheDocument();
    expect(screen.getByText(/Add to Wishlist/i)).toBeInTheDocument();

    const addBtn = screen.getByRole("button", { name: /add to wishlist/i });
    fireEvent.click(addBtn);

    expect(screen.getByRole("button", { name: /saved in wishlist/i })).toBeInTheDocument();
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    expect(saved.some((m: { id: string }) => m.id === "a1")).toBe(true);
  });
});

describe("Wishlist page", () => {
  it("shows heading and empty state when no items", () => {
    clearWishlist();
    useWishlist.setState({ items: [] });

    renderWithProviders(<WishListPage />);
    expect(screen.getByText(/My Wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/Your list is currently empty/i)).toBeInTheDocument();
  });

  it("renders saved films when wishlist has items", () => {
    createWishlist(sampleMovies);
    useWishlist.setState({ items: sampleMovies });

    renderWithProviders(<WishListPage />);

    expect(screen.getByText(/Velocity Strike/i)).toBeInTheDocument();
    expect(screen.getByText(/Wedding Crashers 2.0/i)).toBeInTheDocument();
  });
});
