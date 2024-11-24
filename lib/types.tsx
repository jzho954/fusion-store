export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    sale?: boolean; // Optional field, since not all products may be on sale
  };
  
  export type Recipe = {
    id: number;
    name: string;
    description: string;
    imageUrl?: string; // Optional if some recipes don't have images
  };