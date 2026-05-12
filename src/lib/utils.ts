import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Compatibility re-exports for existing components
export const STUDIO_CONFIG = {
  name: 'Gomathi Beauty Parlour',
  phone: '+91 95007 42955',
  whatsapp: '919500742955',
  email: 'gomathibridalstudio@gmail.com',
  address: '2/145 , Gomathi beauty parlour, Amman Nagar, Pudhuchatram , Namakkal',
  workingHours: 'Mon – Sun: 8:00 AM – 10:00 PM',
  instagram: 'https://www.instagram.com/gomathi_beauty_parlour',
};

export const WHATSAPP_BOOKING_URL = 'https://wa.me/919500742955?text=Hi%20Gomathi%20Beauty%20Parlour!%20I%20would%20like%20to%20book%20an%20appointment.';
