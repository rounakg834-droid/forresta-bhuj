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
  { id: 'all', label: 'All Specialties' },
  { id: 'sandwiches', label: 'Artisan Sandwiches & Bites' },
  { id: 'beverages', label: 'Royal Kulhad & Shakes' },
  { id: 'bowls', label: 'Savory Rice Bowls' },
  { id: 'street-delicacies', label: 'Chaat & Street Delicacies' },
]

export const verifiedMenuItems: ForrestaMenuItem[] = [
  {
    id: 'loaded-cheese-club',
    name: 'Loaded Cheese Club Sandwich & Golden Fries',
    category: 'sandwiches',
    categoryLabel: 'Artisan Sandwiches',
    description:
      'Multi-layered grilled club sandwich generously heaped with freshly grated cheese, stuffed with spiced vegetables, and served with hot crispy golden French fries.',
    highlights: ['Chef’s Signature', 'Triple-Layered', 'Served with Crispy Fries'],
    imageSrc: forrestaImages.find((img) => img.id === 'chef-service-tray')!.src,
    imageAlt: 'Loaded cheese club sandwich platter with golden french fries and beverages',
    featured: true,
    badge: 'Popular Choice',
  },
  {
    id: 'royal-kulhad-rabdi',
    name: 'Royal Earthen Kulhad Malai Rabdi / Lassi',
    category: 'beverages',
    categoryLabel: 'Royal Kulhad & Shakes',
    description:
      'Served in a rustic clay kulhad, this thick, chilled traditional beverage is topped with a rich layer of clotted malai, crushed green pistachios, and roasted almond slivers.',
    highlights: ['Clay Terracotta Kulhad', 'Rich Clotted Malai', 'Pistachio & Almond Garnish'],
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
      'Chilled artisan shake sealed in Forresta’s signature glass bottle with a metallic gold cap and brand seal. Smooth, refreshing, and crafted fresh.',
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
      'Steamed fragrant rice infused with spinach and aromatic garden herbs, tossed with golden sweet corn kernels and served in a creamy spiced tomato-makhani sauce.',
    highlights: ['Herb & Spinach Infusion', 'Golden Sweet Corn', 'Velvety Spiced Sauce'],
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
      'Flavorful Mexican spiced rice tossed with red kidney beans, sweet corn, and bell peppers, crowned with a tomato rose and paired with crispy tortilla chips over cream.',
    highlights: ['Spiced Bean & Corn Toss', 'Tomato Rose Garnish', 'Crispy Tortilla Chips'],
    imageSrc: forrestaImages.find((img) => img.id === 'mexican-rice')!.src,
    imageAlt: 'Dome of Mexican rice garnished with tomato rose and tortilla chips',
  },
  {
    id: 'pani-puri-chaat-platter',
    name: 'Royal Pani Puri & Chaat Delights',
    category: 'street-delicacies',
    categoryLabel: 'Chaat & Street Delicacies',
    description:
      'Crisp golden puris filled with savory potato-sprout filling and fine sev, served with sweet date-tamarind chutney, spicy green mint water, and accompaniments.',
    highlights: ['Crisp Hollow Puris', 'Tamarind & Mint Chutneys', 'Authentic Street Flavor'],
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
      'Golden fried finger batons layered with soft paneer, spicy green chutney, and spiced potato filling, coated in a crisp gram-flour batter and served with dips.',
    highlights: ['Triple Layered', 'Mint & Tamarind Dips', 'Golden Crunch'],
    imageSrc: forrestaImages.find((img) => img.id === 'stuffed-batons')!.src,
    imageAlt: 'Close-up of golden sliced paneer bread pakora batons with chutney',
  },
  {
    id: 'mango-chocolate-frappes',
    name: 'Tropical Mango Breeze & Iced Chocolate Frappes',
    category: 'beverages',
    categoryLabel: 'Royal Kulhad & Shakes',
    description:
      'Thick, velvety chilled frappes served in domed takeaway cups: luscious tropical mango puree smoothie and decadent iced Dutch chocolate topped with chocolate shavings.',
    highlights: ['Tropical Alphonso Mango', 'Rich Dark Chocolate Shavings', 'Chilled to Perfection'],
    imageSrc: forrestaImages.find((img) => img.id === 'chef-service-tray')!.src,
    imageAlt: 'Chilled takeaway cups of mango frappe and chocolate coolers',
  },
]
