export interface ForrestaImage {
  id: string
  title: string
  caption: string
  category: 'terrace' | 'interior' | 'culinary' | 'beverage' | 'ceremony'
  categoryLabel: string
  src: string
  width: number
  height: number
  aspectRatio: number
  spanClass?: string
}

// All real café photographs located inside public/assets/images/forrestabhuJ IMAGE/
const BASE_PATH = `${import.meta.env.BASE_URL}assets/images/forrestabhuJ IMAGE`

function makeUrl(fileName: string): string {
  return encodeURI(`${BASE_PATH}/${fileName}`)
}

export const forrestaImages: ForrestaImage[] = [
  {
    id: 'terrace-night',
    title: 'Open-Air Garden Terrace',
    caption: 'Evening dining beneath illuminated frangipani trees and warm geometric lanterns',
    category: 'terrace',
    categoryLabel: 'Garden Terrace',
    src: makeUrl('caption.jpg'),
    width: 1100,
    height: 1100,
    aspectRatio: 1,
    spanClass: 'col-span-2 row-span-2',
  },
  {
    id: 'exterior-facade',
    title: 'Grand Night Facade',
    caption: 'The illuminated entrance of Forresta Café at HIMS Business Park, Airport Road, Bhuj',
    category: 'terrace',
    categoryLabel: 'Architecture',
    src: makeUrl('Screenshot 2026-11-13 194703.png'),
    width: 582,
    height: 1032,
    aspectRatio: 0.56,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'storefront-entrance',
    title: 'Illuminated Storefront & Logo',
    caption: 'Official backlit FORRESTA signage with distinctive botanical typography',
    category: 'terrace',
    categoryLabel: 'Storefront',
    src: makeUrl('Screenshot 2026-11-13 193958.png'),
    width: 773,
    height: 1042,
    aspectRatio: 0.74,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'interior-alcove',
    title: 'Textured Dining Alcove',
    caption: 'Limewash stucco walls, sculptural branch lighting, and fluted marble tables',
    category: 'interior',
    categoryLabel: 'Interiors',
    src: makeUrl('images.jpg'),
    width: 447,
    height: 447,
    aspectRatio: 1,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'botanical-lamp',
    title: 'Sculptural Leaf Lamp & Arched Mirror',
    caption: 'Organic leaf-inspired metal sculpture with soft glowing orb lights',
    category: 'interior',
    categoryLabel: 'Interiors',
    src: makeUrl('Screenshot 2026-11-13 194137.png'),
    width: 793,
    height: 1046,
    aspectRatio: 0.76,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'bar-sculpture',
    title: 'Artisan Counter & Heron Sculpture',
    caption: 'Warm under-counter cove lighting with bespoke metal artwork and teak seating',
    category: 'interior',
    categoryLabel: 'Interiors',
    src: makeUrl('Screenshot 2026-11-13 194125.png'),
    width: 778,
    height: 1042,
    aspectRatio: 0.75,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'booth-dining',
    title: 'Spacious Lounge Banquettes',
    caption: 'Curved tan leather booth seating and polished marble surfaces for groups',
    category: 'interior',
    categoryLabel: 'Interiors',
    src: makeUrl('Screenshot 2026-11-13 194546.png'),
    width: 587,
    height: 1032,
    aspectRatio: 0.57,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'bistro-tables',
    title: 'Intimate Café Seating',
    caption: 'Round fluted bistro tables nestled under ambient wall sconces',
    category: 'interior',
    categoryLabel: 'Interiors',
    src: makeUrl('Screenshot 2026-11-13 194538.png'),
    width: 577,
    height: 1037,
    aspectRatio: 0.56,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'grand-opening',
    title: 'Grand Inauguration Celebration',
    caption: 'Ceremonial ribbon cutting with family elders and traditional kalash coconut blessings',
    category: 'ceremony',
    categoryLabel: 'Our Story',
    src: makeUrl('Screenshot 2026-11-13 194206.png'),
    width: 1037,
    height: 1043,
    aspectRatio: 0.99,
    spanClass: 'col-span-2 row-span-2',
  },
  {
    id: 'chef-service-tray',
    title: 'Chef’s Gourmet Service Tray',
    caption: 'Loaded cheese club sandwiches, golden french fries, mango frappes, and chocolate coolers',
    category: 'culinary',
    categoryLabel: 'Culinary Highlights',
    src: makeUrl('Screenshot 2026-11-13 194814.png'),
    width: 1045,
    height: 590,
    aspectRatio: 1.77,
    spanClass: 'col-span-2 row-span-1',
  },
  {
    id: 'culinary-spread',
    title: 'Grand Forresta Café Spread',
    caption: 'Chaat delights with crisp puri, stuffed grilled sandwiches, and signature beverages',
    category: 'culinary',
    categoryLabel: 'Culinary Highlights',
    src: makeUrl('Screenshot 2026-11-13 194622.png'),
    width: 585,
    height: 1043,
    aspectRatio: 0.56,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'kulhad-special',
    title: 'Royal Earthen Kulhad Rabdi / Lassi',
    caption: 'Chilled rich beverage in authentic terracotta topped with clotted malai and pistachios',
    category: 'beverage',
    categoryLabel: 'Signatures',
    src: makeUrl('Screenshot 2026-11-13 194724.png'),
    width: 587,
    height: 1057,
    aspectRatio: 0.56,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'bottled-shake',
    title: 'Signature Forresta Bottled Beverage',
    caption: 'Chilled artisanal strawberry shake in a branded glass bottle with gold foil seal',
    category: 'beverage',
    categoryLabel: 'Signatures',
    src: makeUrl('Screenshot 2026-11-13 194611.png'),
    width: 587,
    height: 1032,
    aspectRatio: 0.57,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'green-rice-bowl',
    title: 'Garden Herb & Spinach Rice Bowl',
    caption: 'Fragrant green herb rice with sweet corn in a creamy spiced reduction',
    category: 'culinary',
    categoryLabel: 'Savory Mains',
    src: makeUrl('Screenshot 2026-11-13 194605.png'),
    width: 583,
    height: 1038,
    aspectRatio: 0.56,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'mexican-rice',
    title: 'Mexican Spiced Fiesta Rice',
    caption: 'Aromatic bean and corn spiced rice topped with tomato rose carving and tortilla crisps',
    category: 'culinary',
    categoryLabel: 'Savory Mains',
    src: makeUrl('Screenshot 2026-11-13 194616.png'),
    width: 587,
    height: 1030,
    aspectRatio: 0.57,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'stuffed-batons',
    title: 'Triple-Layered Crispy Batons',
    caption: 'Crisp golden paneer & spiced potato batons served with fresh mint and date-tamarind chutneys',
    category: 'culinary',
    categoryLabel: 'Fresh Bites',
    src: makeUrl('Screenshot 2026-11-13 194630.png'),
    width: 587,
    height: 1037,
    aspectRatio: 0.57,
    spanClass: 'col-span-1 row-span-2',
  },
]

// Quick lookups for dedicated sections
export const heroImage = forrestaImages.find((img) => img.id === 'terrace-night')!
export const exteriorImage = forrestaImages.find((img) => img.id === 'exterior-facade')!
export const storefrontImage = forrestaImages.find((img) => img.id === 'storefront-entrance')!
export const openingImage = forrestaImages.find((img) => img.id === 'grand-opening')!
export const chefTrayImage = forrestaImages.find((img) => img.id === 'chef-service-tray')!
export const kulhadImage = forrestaImages.find((img) => img.id === 'kulhad-special')!
export const bottledShakeImage = forrestaImages.find((img) => img.id === 'bottled-shake')!
