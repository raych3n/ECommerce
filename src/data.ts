export type Product = {
  id: number;
  name: string;
  brand: string;
  cushion: 'Maximum' | 'Balanced' | 'Responsive';
  surface: 'Road' | 'Trail';
  price: number;
  description: string;
  image: string;
};

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Clifton 10", brand: "Hoka", cushion: "Maximum", surface: "Road", price: 180, description: "Engineered with a 40mm stack height of ultra-responsive foam to keep your feet cool over long distances.", image: "/Clifton10.avif" },
  { id: 2, name: "XT-6 Expanse", brand: "Salomon", cushion: "Responsive", surface: "Trail", price: 160, description: "High-performance trail running shoe featuring a quick-lace system and maximum stability chassis.", image: "/XT-6.webp" },
  { id: 3, name: "Endorphin Speed 4", brand: "Saucony", cushion: "Balanced", surface: "Road", price: 140, description: "Your reliable daily trainer with a perfect balance of comfort and energy return.", image: "/EndorphinSpeed4.webp" },
  { id: 4, name: "Mafate X", brand: "Hoka", cushion: "Maximum", surface: "Trail", price: 190, description: "Maximum protection for ultra-marathon distances on rugged trails.", image: "/MafateX.avif" }
];