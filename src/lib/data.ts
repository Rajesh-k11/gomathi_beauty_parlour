export const BRAND = {
  name: 'Gomathi Bridal Studio',
  tagline: 'Where Beauty Meets Elegance',
  phone: '+91 95007 42955',
  whatsapp: '919500742955',
  email: 'gomathibridal@gmail.com',
  address: '2/145 , Gomathi beauty parlour, Amman Nagar, Pudhuchatram , Namakkal',
  instagram: 'https://www.instagram.com/gomathibridal',
  facebook: 'https://www.facebook.com/gomathibridal',
  googleMaps: 'https://maps.google.com/?q=Coimbatore,TamilNadu',
  workingHours: 'Mon – Sun: 8:00 AM – 9:00 PM',
  established: '2010',
} as const;

export const SERVICES = [
  { id: 'bridal-engagement-makeup', title: 'Bridal & Engagement Makeup', description: 'A stunning single-session look for your wedding or engagement — long-lasting, photogenic, and crafted for your most special day.', icon: '💄', category: 'Makeup', duration: '3–4 hours', startingPrice: 6500 },
  { id: 'party-makeup', title: 'Party Makeup', description: 'Glamorous and polished looks for receptions, family functions, and special occasions.', icon: '✨', category: 'Makeup', duration: '1–2 hours', startingPrice: 3500 },
  { id: 'hair-styling', title: 'Hair Styling', description: 'From traditional bridal updos to modern blowouts, our stylists create flawless looks.', icon: '👑', category: 'Hair', duration: '1–2 hours', startingPrice: 1500 },
  { id: 'facials-skincare', title: 'Facials & Skincare', description: 'Nourishing facials and skin treatments to prep your skin for the big day and beyond.', icon: '🌸', category: 'Skincare', duration: '60–90 min', startingPrice: 1200 },
  { id: 'mehndi', title: 'Bridal Mehndi', description: 'Intricate and beautiful henna designs, from traditional to contemporary bridal patterns.', icon: '🌿', category: 'Bridal', duration: '2–4 hours', startingPrice: 2000 },
  { id: 'threading', title: 'Threading', description: 'Precise eyebrow shaping and facial threading for perfectly groomed, defined brows.', icon: '🪷', category: 'Grooming', duration: '15–30 min', startingPrice: 50 },
  { id: 'waxing', title: 'Waxing', description: 'Smooth, long-lasting full-body waxing for silky skin that feels and looks beautifully clean.', icon: '✦', category: 'Grooming', duration: '30–60 min', startingPrice: 200 },
];

export const PACKAGES = [
  {
    id: 'silver', name: 'Silver', subtitle: 'Everyday Elegance', price: 8500, isFeatured: false,
    services: ['Bridal Makeup (Foundation)', 'Simple Hair Styling', 'Basic Mehndi Design', 'Saree Draping', 'Threading & Cleanup'],
    note: 'Perfect for intimate ceremonies', badge: null,
  },
  {
    id: 'gold', name: 'Gold', subtitle: 'The Complete Bridal Experience', price: 15000, isFeatured: true,
    services: ['Premium Airbrush Bridal Makeup', 'Elaborate Hair Styling + Extensions', 'Full-Hand Mehndi Design', 'Saree Draping (Any Style)', 'Pre-Bridal Facial Package (3 sessions)', 'Engagement Day Makeup', 'Makeup Touch-up Kit'],
    note: 'Our most popular bridal package', badge: 'Most Popular',
  }
  // {
  //   id: 'platinum', name: 'Platinum', subtitle: 'The Luxury Bridal Journey', price: 25000, isFeatured: false,
  //   services: ['HD / Airbrush Bridal Makeup', 'Couture Hair Styling & Accessories', 'Bridal Mehndi (Both Hands & Feet)', 'Saree Draping + Blouse Styling', 'Complete Pre-Bridal Package (6 sessions)', 'Reception & Engagement Makeup', 'Party Makeup for 2 Events', 'Dedicated Bridal Artist on Wedding Day', 'Complimentary Skincare Consultation'],
  //   note: 'The ultimate luxury bridal experience', badge: 'Premium',
  // },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Priya Rajan', location: 'Chennai', rating: 5, review: 'Gomathi Madam made me look absolutely stunning on my wedding day. Her attention to detail and understanding of what I wanted was incredible. I received so many compliments on my makeup!', service: 'Bridal Makeup', date: 'March 2024' },
  { id: 2, name: 'Kavitha Suresh', location: 'Coimbatore', rating: 5, review: 'The Gold Bridal Package was worth every rupee. My pre-bridal facials were done with such care, and on the wedding day, the makeup lasted from morning till midnight without touching up.', service: 'Gold Bridal Package', date: 'January 2024' },
  { id: 3, name: 'Meera Chandran', location: 'Erode', rating: 5, review: 'The mehndi design they created for me was breathtaking. So many guests asked who did my mehndi. The team is professional, warm, and made me feel so special throughout.', service: 'Bridal Mehndi', date: 'February 2024' },
  { id: 4, name: 'Divya Muthukumar', location: 'Tirupur', rating: 5, review: 'I was nervous about my engagement makeup but they listened to exactly what I wanted. Natural, glowing, and absolutely beautiful. Will definitely book the Platinum Package for my wedding!', service: 'Engagement Makeup', date: 'April 2024' },
  { id: 5, name: 'Anitha Venkatesh', location: 'Coimbatore', rating: 5, review: 'Been coming here for years for regular facials and threading. The quality is always consistent and the atmosphere is so peaceful. A true gem of a studio!', service: 'Regular Client', date: 'May 2024' },
  { id: 6, name: 'Saranya Krishnan', location: 'Salem', rating: 5, review: 'The Platinum Package was an absolute dream. Having a dedicated artist throughout the wedding events felt so luxurious. My makeup looked flawless in every single photograph.', service: 'Platinum Package', date: 'June 2024' },
];

export const GALLERY_IMAGES = [
  { id: 1, src: '/images/WhatsApp Image 2026-05-09 at 2.17.21 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 2, src: '/images/WhatsApp Image 2026-05-09 at 2.17.21 PM (2).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 3, src: '/images/WhatsApp Image 2026-05-09 at 2.17.22 PM (1).jpeg', alt: 'Hair Styling', category: 'Hair' },
  { id: 4, src: '/images/WhatsApp Image 2026-05-09 at 2.17.22 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 5, src: '/images/WhatsApp Image 2026-05-09 at 2.17.23 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 6, src: '/images/WhatsApp Image 2026-05-09 at 2.17.24 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 7, src: '/images/WhatsApp Image 2026-05-09 at 2.17.24 PM (2).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 8, src: '/images/WhatsApp Image 2026-05-09 at 2.17.24 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 9, src: '/images/WhatsApp Image 2026-05-09 at 2.17.25 PM (1).jpeg', alt: 'Engagement Makeup', category: 'Engagement' },
  { id: 10, src: '/images/WhatsApp Image 2026-05-09 at 2.17.25 PM.jpeg', alt: 'Engagement Makeup', category: 'Engagement' },
  { id: 11, src: '/images/WhatsApp Image 2026-05-09 at 2.17.26 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 12, src: '/images/WhatsApp Image 2026-05-09 at 2.17.26 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 13, src: '/images/WhatsApp Image 2026-05-09 at 2.17.27 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 14, src: '/images/WhatsApp Image 2026-05-09 at 2.17.27 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 15, src: '/images/WhatsApp Image 2026-05-09 at 2.17.28 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 16, src: '/images/WhatsApp Image 2026-05-09 at 2.17.28 PM (2).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 17, src: '/images/WhatsApp Image 2026-05-09 at 2.17.28 PM.jpeg', alt: 'Mehndi Design', category: 'Mehndi' },
  { id: 18, src: '/images/WhatsApp Image 2026-05-09 at 2.17.29 PM (1).jpeg', alt: 'Mehndi Design', category: 'Mehndi' },
  { id: 19, src: '/images/WhatsApp Image 2026-05-09 at 2.17.29 PM (2).jpeg', alt: 'Hair Styling', category: 'Hair' },
  { id: 20, src: '/images/WhatsApp Image 2026-05-09 at 2.17.29 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 21, src: '/images/WhatsApp Image 2026-05-09 at 2.17.30 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 22, src: '/images/WhatsApp Image 2026-05-09 at 2.17.30 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 23, src: '/images/WhatsApp Image 2026-05-09 at 2.17.31 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 24, src: '/images/WhatsApp Image 2026-05-09 at 2.17.31 PM.jpeg', alt: 'Hair Styling', category: 'Hair' },
  { id: 25, src: '/images/WhatsApp Image 2026-05-09 at 2.17.32 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 26, src: '/images/WhatsApp Image 2026-05-09 at 2.17.32 PM (2).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 27, src: '/images/WhatsApp Image 2026-05-09 at 2.17.32 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 28, src: '/images/WhatsApp Image 2026-05-09 at 2.17.33 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 29, src: '/images/WhatsApp Image 2026-05-09 at 2.17.33 PM (2).jpeg', alt: 'Party Makeup', category: 'Party' },
  { id: 30, src: '/images/WhatsApp Image 2026-05-09 at 2.17.33 PM (3).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 31, src: '/images/WhatsApp Image 2026-05-09 at 2.17.33 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 32, src: '/images/WhatsApp Image 2026-05-09 at 2.17.34 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 33, src: '/images/WhatsApp Image 2026-05-09 at 2.17.34 PM (2).jpeg', alt: 'Hair Styling', category: 'Hair' },
  { id: 34, src: '/images/WhatsApp Image 2026-05-09 at 2.17.34 PM (3).jpeg', alt: 'Engagement Makeup', category: 'Engagement' },
  { id: 35, src: '/images/WhatsApp Image 2026-05-09 at 2.17.34 PM (4).jpeg', alt: 'Hair Styling', category: 'Hair' },
  { id: 36, src: '/images/WhatsApp Image 2026-05-09 at 2.17.34 PM.jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 37, src: '/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (1).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 38, src: '/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (2).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
  { id: 39, src: '/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (3).jpeg', alt: 'Bridal Transformation', category: 'Bridal' },
];

export const STATS = [
  { value: '7+', label: 'Years of Excellence' },
  { value: '500+', label: 'Brides Beautified' },
  { value: '2+', label: 'Expert Artists' },
  { value: '4.5★', label: 'Average Rating' },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;
