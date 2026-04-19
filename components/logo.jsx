// dodo cleaners logo mark
// One unified composition: dodo holding a shirt hanger with its wing — they connect.

function DodoMark({ size = 28, stroke = 1.4, variant = "character" }) {

  const paths = {

    // character: dodo + shirt as ONE connected illustration
    // 48×48 viewBox. Bird left-center, shirt right — wing connects to hanger.
    character: (
      <>
        {/* ── BODY — egg-shaped, upright ── */}
        <ellipse cx="17" cy="33" rx="9" ry="11" />

        {/* ── HEAD ── */}
        <circle cx="17" cy="18" r="5.5" />

        {/* ── BEAK — short hooked, bulb tip ── */}
        <path d="M21.5 16.5 C25 15.5, 27 17, 26 18.5 C25 19.5, 23 19, 21.5 18" />
        <circle cx="27" cy="15.8" r="1.1" />

        {/* ── EYE ── */}
        <circle cx="19" cy="16.5" r="1.5" />
        <circle cx="19.3" cy="16.2" r="0.5" fill="currentColor" stroke="none" />

        {/* ── LEFT WING — small flipper ── */}
        <path d="M9 30 C7 27, 7 33, 9 34" />

        {/* ── RIGHT WING — raised, connects to hanger rod ── */}
        <path d="M24 28 C27 25, 30 24, 32 24" />

        {/* ── HANGER ── */}
        {/* hook */}
        <path d="M36 18 C36 16, 38 15, 39 16 C40 17, 39 18, 38 18.5" />
        {/* rod — spans from wing contact point */}
        <path d="M28 24 C30 22, 34 21, 36 21 C38 21, 42 22, 44 25" />

        {/* ── SHIRT ── */}
        {/* collar */}
        <path d="M32 25 L36 28 L40 25" />
        {/* left sleeve */}
        <path d="M28 25 L26 28.5 L28 31 L31 29.5" />
        {/* right sleeve */}
        <path d="M44 25 L46 28.5 L44 31 L41 29.5" />
        {/* body */}
        <path d="M31 25 L31 40 L41 40 L41 25" />
        {/* hem */}
        <path d="M31 40 C33 41.5, 39 41.5, 41 40" />

        {/* ── FEET ── */}
        <path d="M13 44 L12 47 M12 47 L10 47 M12 47 L14 47" />
        <path d="M20 44 L20 47 M20 47 L18 47 M20 47 L22 47" />
      </>
    ),

    // minimal: just the bird, clean and simple
    minimal: (
      <>
        <ellipse cx="24" cy="32" rx="10" ry="12" />
        <circle cx="24" cy="17" r="6" />
        <path d="M29 15.5 C33 14.5, 35 16.5, 34 18.5 C33 20, 31 19.5, 29 18.5" />
        <circle cx="35.5" cy="14.5" r="1.2" />
        <circle cx="26" cy="15.5" r="1.6" />
        <circle cx="26.3" cy="15.2" r="0.55" fill="currentColor" stroke="none" />
        <path d="M14 29 C12 26, 12 33, 14 34" />
        <path d="M34 29 C36 26, 36 33, 34 34" />
        <path d="M19 44 L18 47 M18 47 L16 47 M18 47 L20 47" />
        <path d="M29 44 L29 47 M29 47 L27 47 M29 47 L31 47" />
      </>
    ),

    // perched: side profile, tail fan
    perched: (
      <>
        <ellipse cx="22" cy="32" rx="10" ry="12" />
        <circle cx="20" cy="17" r="6" />
        <path d="M25 15 C29 14, 32 16, 31 18 C30 19.5, 28 19, 26 18" />
        <circle cx="32.5" cy="14" r="1.2" />
        <circle cx="21.5" cy="15" r="1.7" />
        <circle cx="21.8" cy="14.7" r="0.55" fill="currentColor" stroke="none" />
        <path d="M12 29 C10 26, 10 33, 12 34" />
        <path d="M30 28 C33 26, 34 30, 32 31" />
        <path d="M31 34 C35 32, 36 36, 33 36" />
        <path d="M31 37 C34 36, 35 39, 32 39" />
        <path d="M17 44 L16 47 M16 47 L14 47 M16 47 L18 47" />
        <path d="M27 44 L27 47 M27 47 L25 47 M27 47 L29 47" />
      </>
    ),
  };

  // character variant needs a wider canvas
  const vbox    = variant === "character" ? "0 0 50 50" : "0 0 48 50";
  const svgW    = variant === "character" ? size * 1.04 : size;
  const svgH    = size;

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={vbox}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[variant] || paths.character}
    </svg>
  );
}

function Wordmark({ markSize = 28, stackGap = 1, letterSpacing = "-0.02em", variant = "character" }) {
  return (
    <a href="index.html" style={{
      display: "inline-flex", alignItems: "center",
      gap: 10, color: "currentColor", textDecoration: "none",
    }}>
      <DodoMark size={markSize} variant={variant} />
      <span style={{
        fontFamily: "'Newsreader', serif",
        fontWeight: 400,
        fontSize: markSize * 0.9,
        lineHeight: 1,
        letterSpacing,
        whiteSpace: "nowrap",
      }}>
        dodo cleaners
      </span>
    </a>
  );
}

Object.assign(window, { DodoMark, Wordmark });
