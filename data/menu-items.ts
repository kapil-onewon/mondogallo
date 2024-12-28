export interface MenuItem {
  images: string[];
  name: string;
  description: string;
  price: string;
}

export const menuItems: MenuItem[] = [
  {
    images: [
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    ],
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    price: "$16",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df",
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0",
    ],
    name: "Pasta Carbonara",
    description: "Spaghetti with eggs, pecorino cheese, guanciale, and black pepper",
    price: "$18",
  },
   {
    images: [
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    ],
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    price: "$16",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df",
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0",
    ],
    name: "Pasta Carbonara",
    description: "Spaghetti with eggs, pecorino cheese, guanciale, and black pepper",
    price: "$18",
  },
  // ... Update other items with multiple images similarly
];