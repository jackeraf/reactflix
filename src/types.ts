export enum Category {
  ACTION = "ACTION",
  COMEDY = "COMEDY",
  SCIFI = "SCIFI",
}

export interface Film {
  id: string;
  title: string;
  imageUrl: string;
  year: string;
  rating: string;
  description: string;
  director: string;
  runtime: string;
  category: Category;
}
