import { forrestaImages } from './forrestaImages'

export type ForrestaMenuCategory =
  | 'all'
  | 'sandwiches'
  | 'beverages'
  | 'bowls'
  | 'street-delicacies'

export interface ForrestaMenuItem {
  id: string
  name: string
  category: ForrestaMenuCategory
  categoryLabel: string
  description: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
  featured?: boolean
  badge?: string
}

export const menuCategories: { id: ForrestaMenuCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'sandwiches', label: 'Sandwiches & Bites' },
  { id: 'beverages', label: 'Drinks & Shakes' },
  { id: 'bowls', label: 'Rice Bowls' },
  { id: 'street-delicacies', label: 'Chaat & Street Food' },
]

export const verifiedMenuItems: ForrestaMenuItem[] = [
  {
    id: 'loaded-cheese-club',
    name: 'Loaded Cheese Club Sandwich & Fries',
    category: 'sandwiches',
    categoryLabel: 'Artisan Sandwiches',
    description:
      'Triple-layered grilled sandwich loaded with grated cheese and spiced vegetables, served with crispy fries.',
    highlights: ['Chef’s Signature', 'Triple-Layered', 'Crispy Golden Fries'],
    imageSrc: forrestaImages.find((img) => img.id === 'chef-service-tray')!.src,
    imageAlt: 'Loaded cheese club sandwich platter with golden french fries and beverages',
    featured: true,
    badge: 'Popular Choice',
  },
  {
    id: 'royal-kulhad-rabdi',
    name: 'Royal Earthen Kulhad Malai Rabdi',
    category: 'beverages',
    categoryLabel: 'Royal Kulhad & Shakes',
    description:
      'Thick chilled rabdi served in a traditional clay kulhad, topped with clotted malai and roasted pistachios.',
    highlights: ['Clay Terracotta Kulhad', 'Rich Clotted Malai', 'Roasted Pistachios'],
    imageSrc: forrestaImages.find((img) => img.id === 'kulhad-special')!.src,
    imageAlt: 'Traditional earthen kulhad topped with thick cream and chopped nuts',
    featured: true,
    badge: 'Heritage Special',
  },
  {
    id: 'bottled-shake-special',
    name: 'Signature Forresta Bottled Strawberry Shake',
    category: 'beverages',
    categoryLabel: 'Royal Kulhad & Shakes',
    description:
      'Chilled artisan strawberry shake sealed in Forresta’s signature glass bottle with a metallic gold seal.',
    highlights: ['Signature Glass Bottle', 'Gold Foil Sealed', 'Handcrafted In-House'],
    imageSrc: forrestaImages.find((img) => img.id === 'bottled-shake')!.src,
    imageAlt: 'Branded Forresta glass bottle filled with chilled strawberry shake',
    featured: true,
    badge: 'Bottled Fresh',
  },
  {
    id: 'herb-green-rice-bowl',
    name: 'Garden Herb & Spinach Rice Bowl',
    category: 'bowls',
    categoryLabel: 'Savory Rice Bowls',
    description:
      'Fragrant spinach herb rice tossed with sweet corn and served in a rich spiced makhani gravy.',
    highlights: ['Spinach & Herb Infusion', 'Sweet Corn', 'Spiced Makhani Sauce'],
    imageSrc: forrestaImages.find((img) => img.id === 'green-rice-bowl')!.src,
    imageAlt: 'Bowl of green herb rice surrounded by rich orange makhani sauce',
    badge: 'Fresh & Healthy',
  },
  {
    id: 'mexican-fiesta-rice',
    name: 'Mexican Fiesta Spiced Rice Bowl',
    category: 'bowls',
    categoryLabel: 'Savory Rice Bowls',
    description:
      'Seasoned rice tossed with sweet corn, kidney beans, and crisp tortilla chips over cream.',
    highlights: ['Spiced Bean & Corn Toss', 'Tomato Rose Garnish', 'Crispy Tortilla Chips'],
    imageSrc: forrestaImages.find((img) => img.id === 'mexican-rice')!.src,
    imageAlt: 'Dome of Mexican rice garnished with tomato rose and tortilla chips',
  },
  {
    id: 'pani-puri-chaat-platter',
    name: 'Royal Pani Puri & Chaat Delights',
    category: 'street-delicacies',
    categoryLabel: 'Chaat & Street Food',
    description:
      'Crisp puris filled with spiced potato and sprouts, served with spicy mint water and sweet tamarind chutney.',
    highlights: ['Crisp Puris', 'Mint & Tamarind Waters', 'Authentic Street Flavor'],
    imageSrc: forrestaImages.find((img) => img.id === 'culinary-spread')!.src,
    imageAlt: 'Platter of pani puri with chutney bowl and sandwich accompaniments',
    badge: 'Guest Favorite',
  },
  {
    id: 'crispy-stuffed-batons',
    name: 'Triple-Layered Crispy Paneer Batons',
    category: 'sandwiches',
    categoryLabel: 'Artisan Sandwiches',
    description:
      'Golden crispy batons layered with soft paneer, spiced potato filling, and fresh mint chutney.',
    highlights: ['Triple Layered', 'Mint & Tamarind Dips', 'Golden Crunch'],
    imageSrc: forrestaImages.find((img) => img.id === 'stuffed-batons')!.src,
    imageAlt: 'Close-up of golden sliced paneer bread pakora batons with chutney',
  },
  {
    id: 'mango-chocolate-frappes',
    name: 'Tropical Mango Breeze & Chocolate Frappes',
    category: 'beverages',
    categoryLabel: 'Royal Kulhad & Shakes',
    description:
      'Velvety chilled frappes made with tropical mango puree and rich Dutch chocolate shavings.',
    highlights: ['Tropical Mango Puree', 'Dutch Chocolate Shavings', 'Chilled to Perfection'],
    imageSrc: forrestaImages.find((img) => img.id === 'chef-service-tray')!.src,
    imageAlt: 'Chilled takeaway cups of mango frappe and chocolate coolers',
  },
]
