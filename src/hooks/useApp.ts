import { MOCK_FILMS } from "../constants";
import { useWishlist } from "../store/wishlistStore";
import { Film } from "../types";

export function useApp() {
  const { items, add, remove } = useWishlist();

  const addToWishlist = (film: Film) => {
    add({
      id: String(film.id),
      title: film.title,
      poster_path: film.imageUrl,
      category: film.category,
    });
  };

  const removeFromWishlist = (id: string | number) => {
    remove(String(id));
  };

  const isInWishlist = (id: string | number): boolean => {
    return items.some((item) => item.id === String(id));
  };

  const wishlist: Film[] = items.map((item) => {
    const full = MOCK_FILMS.find((f) => f.id === item.id);
    if (full) return full;

    return {
      id: String(item.id),
      title: item.title,
      imageUrl: item.poster_path,
      year: "",
      rating: "",
      description: "",
      director: "",
      runtime: "",
      category: (item.category as any) ?? "ACTION",
    } as Film;
  });

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
}
