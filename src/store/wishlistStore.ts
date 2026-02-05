import { create } from "zustand";
import { isBrowser } from "../utils/isBrowser";

type Film = { id: string; title: string; poster_path: string; category?: string };
type FilmState = {
  items: Film[];
  add: (item: Film) => void;
  remove: (id: string) => void;
};

function normalizeItems(raw: unknown): Film[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => ({
    ...item,
    id: String((item as any)?.id ?? ""),
    title: (item as any)?.title ?? "",
    poster_path: (item as any)?.poster_path ?? "",
    category: (item as any)?.category,
  }));
}

const initialItems: Film[] = isBrowser()
  ? normalizeItems(JSON.parse(window.localStorage.getItem("wishlist") || "[]"))
  : [];

export const useWishlist = create<FilmState>((set, get) => ({
  items: initialItems,

  add: (film) => {
    const id = String(film.id);
    const items = [...get().items.filter((i) => i.id !== id), { ...film, id }];
    set({ items });
    isBrowser() && window.localStorage.setItem("wishlist", JSON.stringify(items));
  },

  remove: (id) => {
    const items = get().items.filter((i) => i.id !== String(id));
    set({ items });
    isBrowser() && window.localStorage.setItem("wishlist", JSON.stringify(items));
  },
}));
