export const SERVICES = [
  {
    id: "bridal-engagement-makeup",
    title: "Bridal & Engagement Makeup",
    description:
      "A stunning single-session look for your most important day — whether it's your wedding or engagement. Crafted to be long-lasting, photogenic, and deeply personal.",
    icon: "Sparkles",
    duration: "3–4 hrs",
    startingPrice: "₹6,500",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    description:
      "Glamorous evening and party looks tailored for receptions, sangeet, and festive occasions.",
    icon: "Star",
    duration: "1–2 hrs",
    startingPrice: "₹3,500",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Intricate bridal updos, cascading waves, and traditional hairdos adorned with flowers and accessories.",
    icon: "Crown",
    duration: "1–2 hrs",
    startingPrice: "₹1,500",
  },
  {
    id: "facials",
    title: "Facials & Skincare",
    description:
      "Luxurious pre-bridal facial treatments using premium products to achieve a radiant, camera-ready complexion.",
    icon: "Leaf",
    duration: "60–90 mins",
    startingPrice: "₹1,200",
  },
  {
    id: "mehndi",
    title: "Mehndi",
    description:
      "Intricate bridal mehndi designs — from traditional patterns to contemporary fusion — for hands and feet.",
    icon: "Flower2",
    duration: "2–4 hrs",
    startingPrice: "₹2,000",
  },
  {
    id: "threading",
    title: "Threading",
    description:
      "Precise eyebrow shaping and facial threading for perfectly groomed, defined brows and smooth skin.",
    icon: "Scissors",
    duration: "15–30 mins",
    startingPrice: "₹50",
  },
  {
    id: "waxing",
    title: "Waxing",
    description:
      "Smooth, long-lasting full-body waxing for silky skin that feels and looks beautifully clean.",
    icon: "Sparkles",
    duration: "30–60 mins",
    startingPrice: "₹200",
  },
];

export const PACKAGES = [
  {
    id: "silver",
    name: "Silver",
    subtitle: "Graceful Beginnings",
    price: "₹15,000",
    popular: false,
    includes: [
      "Bridal Makeup (HD)",
      "Hair Styling",
      "Saree / Dupatta Draping",
      "Eyebrow Threading",
      "1 Trial Makeup Session",
    ],
    note: "Perfect for intimate weddings and ceremonies.",
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "The Complete Bridal",
    price: "₹28,000",
    popular: true,
    includes: [
      "Bridal Makeup (Airbrush HD)",
      "Elaborate Hair Styling",
      "Saree / Dupatta Draping",
      "Bridal Mehndi (Both Hands & Feet)",
      "Pre-Bridal Facial (2 sessions)",
      "Full Body Waxing",
      "2 Trial Makeup Sessions",
      "Reception / Engagement Makeup",
    ],
    note: "Our most loved package — chosen by 70% of our brides.",
  }
  // {
  //   id: "platinum",
  //   name: "Platinum",
  //   subtitle: "The Royal Experience",
  //   price: "₹48,000",
  //   popular: false,
  //   includes: [
  //     "Bridal Makeup (Premium Airbrush)",
  //     "Royal Bridal Hair Styling",
  //     "Saree / Lehenga Draping",
  //     "Bridal Mehndi — Full Design",
  //     "Complete Pre-Bridal Skincare Package",
  //     "Full Body Waxing & Bleach",
  //     "Unlimited Trial Sessions",
  //     "Makeup for All Events (Mehendi, Sangeet, Reception)",
  //     "Dedicated Stylist on Wedding Day",
  //   ],
  //   note: "An exclusive end-to-end bridal journey.",
  // },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Suresh",
    role: "Bride, December 2023",
    content:
      "Gomathi aunty made me feel like an absolute queen on my wedding day. The makeup lasted through the entire reception without a touch-up. Every detail was perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Deepa Ramesh",
    role: "Bride, March 2024",
    content:
      "I was nervous about my bridal makeup, but the team understood exactly what I wanted. The mehndi design was stunning — everyone complimented it at the function.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Kavitha Krishnan",
    role: "Bride, January 2024",
    content:
      "The pre-bridal facials transformed my skin. By my wedding day I was glowing. The Gold package was absolutely worth every rupee — professional, caring, and skilled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Anitha Balaji",
    role: "Bride, October 2023",
    content:
      "The team is so warm and calming. On my wedding morning I was anxious, but they made the whole experience so comfortable. My photographs turned out absolutely beautiful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
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
