export interface IngredientGroup {
  group: string;
  items: string[];
}

export interface Recipe {
  id: number | string;
  title: string;
  category: "sunda" | "solo";
  method: "rice-cooker" | "tradisional";
  categoryLabel: string;
  methodLabel: string;
  image: string;
  time: string;
  servings: string;
  source: string;
  description: string;
  generalIngredients?: string[];
  ingredients: IngredientGroup[];
  instructions: string[];
}
