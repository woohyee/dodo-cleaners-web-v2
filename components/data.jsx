// Shared data for services and pricing
const SERVICES = [
  { key: "wet",       name: "Wet Cleaning",              desc: "Gentle, eco-friendly care.",                     icon: "IconWetClean",   tag: "Signature" },
  { key: "shirt",     name: "Shirt & Casual Wear",       desc: "Thorough cleaning and perfect ironing.",         icon: "IconShirt",      tag: "Everyday" },
  { key: "bedding",   name: "Bedding & Comforters",      desc: "Fresh and clean, large items welcome.",          icon: "IconBedding",    tag: "Household" },
  { key: "leather",   name: "Leather & Suede",           desc: "Professional care, like new.",                   icon: "IconLeather",    tag: "Specialty" },
  { key: "curtain",   name: "Curtain & Carpet",          desc: "Professionally washed, refreshed.",              icon: "IconCurtain",    tag: "Household" },
  { key: "alter",     name: "Alteration & Custom Care",  desc: "Tailoring and alterations.",                     icon: "IconAlteration", tag: "Tailor" },
  { key: "gown",      name: "Wedding Gown Preservation", desc: "Expert cleaning and long-term care.",            icon: "IconGown",       tag: "Specialty" },
  { key: "shoe",      name: "Shoes Care",                desc: "Professional cleaning and care.",                icon: "IconShoe",       tag: "Specialty" },
];

const PRICING = {
  tops: [
    { name: "Shirt",            price: 5.99,  note: "Hand-finished, pressed" },
    { name: "Blouse",           price: 9.95,  note: "Silk, cotton, blends" },
  ],
  bottoms: [
    { name: "Pants",            price: 10.95, note: "Crease pressed" },
    { name: "Pants Hemming",    price: 15.00, note: "Alteration service" },
  ],
  formal: [
    { name: "Suit (2 piece)",   price: 26.95, note: "Jacket + trousers" },
    { name: "Dress",            price: 19.50, note: "Standard length" },
    { name: "Coat",             price: 22.95, note: "Wool, cashmere, blends" },
  ],
  household: [
    { name: "Comforter",        price: 33.95, note: "Queen / King" },
  ],
};

const PRICING_FLAT = [
  { name: "Shirt",            price: 5.99,  note: "Hand-finished, pressed" },
  { name: "Pants",            price: 10.95, note: "Crease pressed" },
  { name: "Suit (2 piece)",   price: 26.95, note: "Jacket + trousers" },
  { name: "Blouse",           price: 9.95,  note: "Silk, cotton, blends" },
  { name: "Dress",            price: 19.50, note: "Standard length" },
  { name: "Coat",             price: 22.95, note: "Wool, cashmere, blends" },
  { name: "Comforter",        price: 33.95, note: "Queen / King" },
  { name: "Pants Hemming",    price: 15.00, note: "Alteration service" },
];

function pad2(n) { return String(n).padStart(2, "0"); }

Object.assign(window, { SERVICES, PRICING, PRICING_FLAT, pad2 });
