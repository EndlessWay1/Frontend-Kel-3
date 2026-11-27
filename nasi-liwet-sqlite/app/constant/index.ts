type linkNavType = {
  id: number;
  target: string;
  name: string;
};

export const linkNav: linkNavType[] = [
  {
    id: 1,
    target: "/",
    name: "Home",
  },
  {
    id: 2,
    target: "/recipes",
    name: "Recipes",
  },
  {
    id: 4,
    target: "/profile",
    name: "Profile",
  },
  {
    id: 5,
    target: "/create-recipe",
    name: "Create Recipe",
  },
  {
    id: 6,
    target: "/admin",
    name: "Admin",
  },
  {
    id: 3,
    target: "/login",
    name: "Log in",
  },
];
