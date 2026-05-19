export type HeroMoment = {
  text: string;
  start: number;
  end: number;
};

export type Product = {
  name: string;
  description: string;
  price: string;
  tastingNote: string;
};

export type ExperienceItem = {
  title: string;
  description: string;
};

export type InstagramShot = {
  title: string;
  caption: string;
  toneClassName: string;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Ritual", href: "#ritual" },
  { label: "Contact", href: "#contact" },
];

export const heroMoments: HeroMoment[] = [
  { text: "Awaken the Ritual", start: 0.1, end: 0.25 },
  { text: "Crafted From Aroma, Fire and Time", start: 0.35, end: 0.5 },
  { text: "Every Cup Holds a Story", start: 0.6, end: 0.75 },
  { text: "Coffee Meant To Be Shared", start: 0.85, end: 1 },
];

export const collectionProducts: Product[] = [
  {
    name: "Signature Espresso Blend",
    description:
      "Bold crema and dark-cacao body shaped for mornings that begin with intention.",
    price: "$ --",
    tastingNote: "Cacao • Black Cherry • Molasses",
  },
  {
    name: "Daily Ritual Roast",
    description:
      "A warm, balanced roast with caramel depth and silky finish for everyday ceremony.",
    price: "$ --",
    tastingNote: "Toffee • Hazelnut • Red Apple",
  },
  {
    name: "Midnight Arabica",
    description:
      "Velvet texture with floral lift and spiced sweetness made for long evening conversations.",
    price: "$ --",
    tastingNote: "Jasmine • Plum • Spiced Honey",
  },
];

export const ritualStoryParagraphs = [
  "In Yerevan, coffee is never rushed. It begins with aroma rising before sunrise, a quiet flame, and a measured pour that turns routine into ritual.",
  "At COFFEE TIME YEREVAN, every bean is selected for character, roasted for depth, and brewed for warmth that lingers long after the final sip.",
  "From shared tables to slow mornings at home, our craft honors the city’s coffee culture: elegant, generous, and made to bring people closer.",
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Carefully Selected Beans",
    description:
      "Seasonal lots chosen for distinctive origin, clean structure, and expressive aroma.",
  },
  {
    title: "Artisan Roasting",
    description:
      "Small-batch roasting tuned for sweetness, depth, and balanced complexity.",
  },
  {
    title: "Premium Brewing Ritual",
    description:
      "Precision methods and refined tools designed for elevated daily preparation.",
  },
  {
    title: "Crafted For Shared Moments",
    description:
      "Coffee experiences shaped for conversations, gatherings, and memorable mornings.",
  },
];

export const instagramShots: InstagramShot[] = [
  {
    title: "Morning Pour",
    caption: "First light, warm cup, quiet city.",
    toneClassName: "from-[#2A1810] via-[#5C341D] to-[#120B08]",
  },
  {
    title: "Espresso Ritual",
    caption: "Dense crema and a golden finish.",
    toneClassName: "from-[#5C341D] via-[#2A1810] to-[#120B08]",
  },
  {
    title: "Craft Table",
    caption: "Tools, texture, and craftsmanship.",
    toneClassName: "from-[#120B08] via-[#5C341D] to-[#C88A3D]",
  },
  {
    title: "Yerevan Mood",
    caption: "Shared stories over artisan cups.",
    toneClassName: "from-[#2A1810] via-[#120B08] to-[#5C341D]",
  },
  {
    title: "Roast Detail",
    caption: "Aromatic depth in every batch.",
    toneClassName: "from-[#120B08] via-[#2A1810] to-[#C88A3D]",
  },
  {
    title: "Evening Coffee",
    caption: "Slow nights, velvet body, warm glow.",
    toneClassName: "from-[#5C341D] via-[#120B08] to-[#2A1810]",
  },
];
