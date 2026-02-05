import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, type To } from "react-router-dom";
import { render } from "@testing-library/react";

export const sampleMovies = [
  { id: "a1", title: "Velocity Strike", poster_path: "https://picsum.photos/seed/velocity/800/1200", category: "ACTION" },
  { id: "c1", title: "Wedding Crashers 2.0", poster_path: "https://picsum.photos/seed/wedding/800/1200", category: "COMEDY" },
];

export function createWishlist(items: typeof sampleMovies = []) {
  localStorage.setItem("wishlist", JSON.stringify(items));
}

export function clearWishlist() {
  localStorage.setItem("wishlist", JSON.stringify([]));
}

export function renderWithProviders(
  ui: React.ReactElement,
  { route = "/" }: { route?: To } = {}
) {
  const qc = new QueryClient();
  return render(
    <QueryClientProvider client={qc}>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
}
