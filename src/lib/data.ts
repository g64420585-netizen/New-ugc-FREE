import crownImg from "@assets/ugc-1_1781887948454.png";
import visorImg from "@assets/ugc-2_1781887948632.png";
import wingsImg from "@assets/ugc-3_1781887948703.png";
import bladesImg from "@assets/ugc-4_1781887948765.png";
import skullImg from "@assets/ugc-5_1781887948815.png";
import collarImg from "@assets/ugc-6_1781887965185.png";

export type Rarity = "Legendary" | "Epic" | "Mythic" | "Rare" | "Uncommon";

export interface Item {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  rarity: Rarity;
  stock?: number;
  creator?: string;
}

export const items: Item[] = [
  { id: '1', name: "Royal Crimson Crown", price: "0", image: crownImg, tag: "Mythic", rarity: "Legendary", stock: 15, creator: "Vaulted" },
  { id: '2', name: "Scarlet Tech Visor", price: "0", image: visorImg, tag: "Limited", rarity: "Epic", stock: 120, creator: "CyberCore" },
  { id: '3', name: "Void Demon Wings", price: "0", image: wingsImg, tag: "Exclusive", rarity: "Mythic", stock: 3, creator: "AbyssWalker" },
  { id: '4', name: "Shadow Blades", price: "0", image: bladesImg, tag: "Trending", rarity: "Rare", stock: 850, creator: "NinjaArts" },
  { id: '5', name: "Inferno Skull Crown", price: "0", image: skullImg, tag: "New", rarity: "Legendary", stock: 45, creator: "Hellfire" },
  { id: '6', name: "Crimson Chain Collar", price: "0", image: collarImg, tag: "Popular", rarity: "Uncommon", stock: 1500, creator: "Gothique" }
];
