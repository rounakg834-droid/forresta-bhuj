export interface ForrestaNavLink {
  id: string
  label: string
  href: string
  number: string
}

export const forrestaNavLinks: ForrestaNavLink[] = [
  { id: 'home', label: 'Home', href: '#home', number: '01' },
  { id: 'story', label: 'Our Story', href: '#story', number: '02' },
  { id: 'experience', label: 'Experience', href: '#experience', number: '03' },
  { id: 'menu', label: 'Menu', href: '#menu', number: '04' },
  { id: 'gallery', label: 'Gallery', href: '#gallery', number: '05' },
  { id: 'visit', label: 'Visit Us', href: '#visit', number: '06' },
]

export const forrestaInfo = {
  brandName: 'FORRESTA',
  city: 'BHUJ',
  state: 'Gujarat, India',
  fullTitle: 'FORRESTA BHUJ',
  tagline: 'Fresh & Healthy • Garden Café & Kitchen',
  subtagline: 'An Oasis of Taste, Architecture & Botanical Serenity',
  location: {
    venue: 'HIMS Business Park',
    street: 'Airport Road',
    city: 'Bhuj',
    state: 'Gujarat',
    country: 'India',
    formattedAddress: 'HIMS Business Park, Airport Road, Bhuj, Gujarat, India',
    mapsUrl: 'https://maps.google.com/?q=HIMS+Business+Park+Airport+Road+Bhuj+Gujarat',
  },
  timings: {
    hours: '11:00 AM – 11:30 PM',
    days: 'Open All 7 Days',
    mealService: 'Lunch, High Tea & Dinner Garden Dining',
  },
  contact: {
    phoneDisplay: '+91 (0) 2832 FORRESTA',
    phoneHref: 'tel:+919876543210',
    email: 'hello@forrestacafe.in',
    instagramHandle: '@forresta_bhuj',
    instagramUrl: 'https://www.instagram.com/',
  },
  highlights: [
    {
      title: 'Open-Air Garden Terrace',
      description: 'Dine under star-lit night skies surrounded by fragrant frangipani trees and warm designer lanterns.',
    },
    {
      title: 'Fresh & Healthy Kitchen',
      description: 'Crafted with premium wholesome ingredients, honoring authentic flavors with contemporary flair.',
    },
    {
      title: 'Botanical Architectural Design',
      description: 'Bespoke sculptural lighting, warm textured limewash stucco, and intimate plush leather booths.',
    },
    {
      title: 'Royal Kulhad & Artisan Shakes',
      description: 'Signature terracotta kulhad creations alongside custom-bottled chilled café beverages.',
    },
  ],
}
