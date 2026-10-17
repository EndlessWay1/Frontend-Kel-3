export interface Recipe {
  id: number;
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
  generalIngredients: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Nasi Liwet Teri & Petai Rice Cooker",
    category: "sunda",
    method: "rice-cooker",
    categoryLabel: "Khas Sunda",
    methodLabel: "Rice Cooker",
    image: "/recipes/pictures/Foto 1.jpg",
    time: "35-45 menit",
    servings: "3-4 porsi",
    source: "BrilioFood",
    description:
      "Nasi liwet khas Sunda dengan bumbu serai dan daun salam, serta taburan teri goreng dan petai.",
    generalIngredients: [
      "Beras",
      "Ikan Teri",
      "Petai",
      "Bawang Merah & Putih",
      "Cabai Keriting",
      "Serai & Daun Salam",
    ],
  },
  {
    id: 2,
    title: "Nasi Liwet Dandang Daun Jeruk",
    category: "sunda",
    method: "tradisional",
    categoryLabel: "Khas Sunda",
    methodLabel: "Tradisional",
    image: "/recipes/pictures/Foto 2.jpg",
    time: "45 menit",
    servings: "3-4 porsi",
    source: "Yummy App",
    description:
      "Nasi liwet yang dikukus dengan dandang tradisional, harum daun jeruk dengan tekstur nasi yang pulen.",
    generalIngredients: [
      "Beras",
      "Ikan Teri",
      "Cabai Rawit Utuh",
      "Bawang Merah & Putih",
      "Daun Jeruk & Salam",
      "Serai & Lengkuas",
    ],
  },
  {
    id: 3,
    title: "Nasi Liwet Sunda Original & Lauk Komplit",
    category: "sunda",
    method: "rice-cooker",
    categoryLabel: "Khas Sunda",
    methodLabel: "Rice Cooker",
    image: "/recipes/pictures/Foto 3.jpg",
    time: "40 menit",
    servings: "4-5 porsi",
    source: "Liputan6",
    description:
      "Resep nasi liwet Sunda dengan lauk lengkap: ayam goreng, tahu, tempe, lalapan, dan cocolan sambal terasi.",
    generalIngredients: [
      "Beras Pulen",
      "Teri Medan",
      "Petai",
      "Ayam Goreng & Tahu Tempe",
      "Sambal Terasi & Lalapan",
      "Serai & Lengkuas",
    ],
  },
  {
    id: 4,
    title: "Nasi Liwet Teri Santan Gurih",
    category: "sunda",
    method: "tradisional",
    categoryLabel: "Khas Sunda",
    methodLabel: "Tradisional",
    image: "/recipes/pictures/Foto 4.jpg",
    time: "45 menit",
    servings: "3-4 porsi",
    source: "IDN Times",
    description:
      "Nasi liwet gurih dengan santan kelapa dan rempah lengkuas, dilengkapi taburan teri medan goreng.",
    generalIngredients: [
      "Beras",
      "Santan Kental",
      "Teri Medan",
      "Daun Salam & Serai",
      "Lengkuas",
      "Bawang Merah & Putih",
    ],
  },
  {
    id: 8,
    title: "Nasi Liwet Solo Ayam Areh & Labu Siam",
    category: "solo",
    method: "rice-cooker",
    categoryLabel: "Khas Solo",
    methodLabel: "Rice Cooker",
    image: "/recipes/pictures/Foto 8.jpg",
    time: "60 menit",
    servings: "4-5 porsi",
    source: "IDN Times",
    description:
      "Nasi liwet khas Solo dengan nasi gurih bersantan, disajikan bersama suwiran ayam areh dan sayur labu siam.",
    generalIngredients: [
      "Beras & Santan",
      "Ayam Suwir Areh",
      "Sayur Labu Siam",
      "Air Kelapa & Gula Merah",
      "Kemiri & Lengkuas",
    ],
  },
  {
    id: 9,
    title: "Nasi Liwet Solo Komplit Pincuk Daun",
    category: "solo",
    method: "tradisional",
    categoryLabel: "Khas Solo",
    methodLabel: "Tradisional",
    image: "/recipes/pictures/Foto 9.jpeg",
    time: "75 menit",
    servings: "5 porsi",
    source: "Diah Didi's Kitchen",
    description:
      "Nasi liwet komplit khas Solo di pincuk daun pisang, lengkap dengan suwiran opor ayam, telur pindang, sayur labu siam, dan kuah areh.",
    generalIngredients: [
      "Beras Gurih Santan",
      "Ayam Opor Ingkung",
      "Telur Pindang",
      "Sayur Labu Siam & Ebi",
      "Areh Santan Kuning & Putih",
    ],
  },
];
