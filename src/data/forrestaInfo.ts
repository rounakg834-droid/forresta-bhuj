export interface ForrestaNavLink {
  id: string
  label: string
  href: string
  number: string
}

export const forrestaNavLinks: ForrestaNavLink[] = [
  { id: 'home', label: 'Home', href: '#home', number: '01' },
  { id: 'about', label: 'About', href: '#about', number: '02' },
  { id: 'experience', label: 'Experience', href: '#experience', number: '03' },
  { id: 'gallery', label: 'Gallery', href: '#gallery', number: '04' },
  { id: 'menu', label: 'Menu', href: '#menu', number: '05' },
  { id: 'contact', label: 'Visit', href: '#contact', number: '06' },
]

export const forrestaInfo = {
  brandName: 'FORRESTA',
  city: 'BHUJ',
  state: 'Gujarat, India',
  fullTitle: 'FORRESTA BHUJ',
  tagline: 'Fresh & Wholesome • Garden Café',
  subtagline: 'A Botanical Garden Café & Kitchen',
  location: {
    venue: 'HIMS Business Park',
    street: 'Airport Road',
    city: 'Bhuj',
    state: 'Gujarat',
    country: 'India',
    formattedAddress: 'HIMS Business Park, Airport Road, Bhuj, Gujarat',
    mapsUrl: 'https://maps.google.com/?q=HIMS+Business+Park+Airport+Road+Bhuj+Gujarat',
  },
  timings: {
    hours: '11:00 AM – 11:30 PM',
    days: 'Open Daily',
    mealService: 'Lunch, High Tea & Dinner',
  },
  contact: {
    phoneDisplay: '+91 2832 FORRESTA',
    phoneHref: 'tel:+919876543210',
    email: 'hello@forrestacafe.in',
    instagramHandle: '@forresta_bhuj',
    instagramUrl: 'https://www.instagram.com/',
  },
  highlights: [
    {
      title: 'Open-Air Terrace',
      description: 'Dine under open skies surrounded by flowering trees and warm lanterns.',
    },
    {
      title: 'Fresh & Wholesome',
      description: 'Made to order with fresh, quality ingredients.',
    },
    {
      title: 'Botanical Ambience',
      description: 'Textured walls, ambient lighting, and comfortable booths.',
    },
    {
      title: 'Artisanal Drinks',
      description: 'Signature clay kulhad drinks and chilled bottled shakes.',
    },
  ],
}
