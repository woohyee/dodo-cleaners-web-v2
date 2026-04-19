// Thin single-stroke line icons for services — 1.25px, geometric, matches logo.
// 48x48 viewBox.
const ICON_STROKE = 1.25;

const IconWrap = ({ children, size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth={ICON_STROKE}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

// Wet Cleaning — water droplet + gentle swirl
const IconWetClean = ({ size }) => (
  <IconWrap size={size}>
    <path d="M24 8 C 18 16, 14 22, 14 28 A 10 10 0 0 0 34 28 C 34 22, 30 16, 24 8 Z" />
    <path d="M20 28 C 22 30, 26 30, 28 27" />
  </IconWrap>
);

// Shirt & Casual Wear — shirt outline
const IconShirt = ({ size }) => (
  <IconWrap size={size}>
    <path d="M14 12 L 18 9 L 24 13 L 30 9 L 34 12 L 38 16 L 34 20 L 34 39 L 14 39 L 14 20 L 10 16 Z" />
    <path d="M20 11 C 21 14, 27 14, 28 11" />
  </IconWrap>
);

// Bedding & Comforters — folded layers
const IconBedding = ({ size }) => (
  <IconWrap size={size}>
    <rect x="8" y="14" width="32" height="8" rx="1" />
    <rect x="8" y="24" width="32" height="8" rx="1" />
    <path d="M12 18 L 16 18 M12 28 L 16 28" />
    <path d="M32 34 L 38 34" />
  </IconWrap>
);

// Leather & Suede — jacket with long sleeves
const IconLeather = ({ size }) => (
  <IconWrap size={size}>
    {/* left sleeve */}
    <path d="M14 14 L6 20 L6 36 L14 36" />
    {/* right sleeve */}
    <path d="M34 14 L42 20 L42 36 L34 36" />
    {/* body */}
    <path d="M14 10 L19 8 L24 13 L29 8 L34 10 L34 36 L14 36 Z" />
    {/* lapels */}
    <path d="M19 8 L22 18" />
    <path d="M29 8 L26 18" />
    {/* center zip line */}
    <line x1="24" y1="18" x2="24" y2="36" />
  </IconWrap>
);

// Curtain & Carpet — curtain folds
const IconCurtain = ({ size }) => (
  <IconWrap size={size}>
    <path d="M10 10 L 38 10" />
    <path d="M14 10 C 14 20, 12 30, 14 40" />
    <path d="M20 10 C 20 20, 18 30, 20 40" />
    <path d="M26 10 C 26 20, 28 30, 26 40" />
    <path d="M32 10 C 32 20, 34 30, 32 40" />
  </IconWrap>
);

// Alteration & Custom Care — scissors
const IconAlteration = ({ size }) => (
  <IconWrap size={size}>
    <circle cx="14" cy="34" r="4" />
    <circle cx="14" cy="14" r="4" />
    <path d="M17 32 L 38 11" />
    <path d="M17 16 L 38 37" />
    <path d="M24 24 L 28 22" />
  </IconWrap>
);

// Wedding Gown Preservation — fitted bodice + flared skirt + straps
const IconGown = ({ size }) => (
  <IconWrap size={size}>
    {/* hanger */}
    <path d="M24 6 C24 6, 28 8, 28 10 C28 11.5, 26 12, 24 12 C22 12, 20 11.5, 20 10 C20 8, 24 6 24 6 Z" />
    <line x1="24" y1="6" x2="24" y2="4" />
    {/* straps */}
    <path d="M20 12 L18 17" />
    <path d="M28 12 L30 17" />
    {/* bodice — fitted rectangle */}
    <path d="M18 17 L18 26 L30 26 L30 17 Z" />
    {/* waist seam */}
    <line x1="17" y1="26" x2="31" y2="26" />
    {/* flared A-line skirt */}
    <path d="M18 26 L10 44 L38 44 L30 26 Z" />
    {/* skirt layering hint */}
    <path d="M20 32 L13 44" strokeOpacity="0.35" />
    <path d="M28 32 L35 44" strokeOpacity="0.35" />
  </IconWrap>
);

// Shoes Care — single shoe profile
const IconShoe = ({ size }) => (
  <IconWrap size={size}>
    <path d="M8 30 L 8 24 L 14 22 L 18 16 L 24 20 L 32 24 L 38 26 C 40 27, 40 30, 38 31 L 10 31 C 8 31, 8 31, 8 30 Z" />
    <path d="M14 22 L 18 28" />
    <path d="M24 20 L 26 26" />
  </IconWrap>
);

Object.assign(window, {
  IconWetClean,
  IconShirt,
  IconBedding,
  IconLeather,
  IconCurtain,
  IconAlteration,
  IconGown,
  IconShoe,
});
