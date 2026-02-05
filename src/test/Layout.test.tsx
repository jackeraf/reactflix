import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "../routes/Layout";
import { renderWithProviders } from "./test-utils";
import { Routes, Route } from "react-router-dom";

describe("Layout", () => {
  it("renders header with logo and nav links", () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Page content</div>} />
        </Route>
      </Routes>,
      { route: "/" }
    );

    expect(screen.getByRole("link", { name: /ReactFlix/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
  });

  it("renders outlet content", () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Page content</div>} />
        </Route>
      </Routes>,
      { route: "/" }
    );

    expect(screen.getByText("Page content")).toBeInTheDocument();
  });

  it("logo links to home", () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>,
      { route: "/" }
    );

    const logo = screen.getByRole("link", { name: /ReactFlix/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  it("wishlist link points to /wishlist", () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={null} />
        </Route>
      </Routes>,
      { route: "/" }
    );

    const wishlistLink = screen.getByRole("link", { name: /Wishlist/i });
    expect(wishlistLink).toHaveAttribute("href", "/wishlist");
  });
});
