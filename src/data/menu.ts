import type { Drink, DrinkCategory, MenuFilterOption } from '../types'
import { images } from './images'

export const categoryLabels: Record<DrinkCategory, string> = {
  hot: 'Hot Coffee',
  iced: 'Iced Coffee',
  'non-coffee': 'Non-Coffee',
}

export const menuFilters: MenuFilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'hot', label: categoryLabels.hot },
  { value: 'iced', label: categoryLabels.iced },
  { value: 'non-coffee', label: categoryLabels['non-coffee'] },
]

export const drinks: Drink[] = [
  {
    id: 'signature-latte',
    name: 'Forresta Signature Latte',
    price: 165,
    description: 'Our house espresso folded into silky steamed milk with rich botanical aromatics.',
    notes: 'Caramel, cocoa, toasted hazelnut',
    category: 'hot',
    image: images.signatureLatte,
    model: 'signature-latte',
  },
  {
    id: 'spanish-latte',
    name: 'Spanish Cold Latte',
    price: 175,
    description: 'Bold espresso over ice, rounded with sweet condensed milk.',
    notes: 'Toffee, sweet cream, dark cane sugar',
    category: 'iced',
    image: images.spanishLatte,
    model: 'spanish-latte',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: 185,
    description: 'Layers of vanilla milk, slow-pulled espresso, and buttery caramel.',
    notes: 'Vanilla, burnt sugar, butterscotch',
    category: 'iced',
    image: images.caramelMacchiato,
    model: 'caramel-macchiato',
  },
  {
    id: 'classic-americano',
    name: 'Classic Americano',
    price: 120,
    description: 'Double espresso lengthened with hot mountain water. Clean and bright.',
    notes: 'Dark cherry, cacao nib, citrus peel',
    category: 'hot',
    image: images.americano,
    model: 'classic-americano',
  },
  {
    id: 'iced-matcha-latte',
    name: 'Iced Matcha Green Latte',
    price: 180,
    description: 'Stone-ground green matcha whisked smooth over chilled dairy.',
    notes: 'Fresh garden matcha, white chocolate, botanical sweetness',
    category: 'non-coffee',
    image: images.matcha,
    model: 'iced-matcha-latte',
  },
  {
    id: 'mocha-espresso',
    name: 'Dark Mocha Espresso',
    price: 170,
    description: 'Rich dark chocolate and espresso under a velvet layer of milk.',
    notes: 'Bittersweet cocoa, roasted nut, velvety cream',
    category: 'hot',
    image: images.mocha,
    model: 'mocha-espresso',
  },
]
