// Tweaks panel for dodo cleaners
// Exposes: headline variant (A/B/C), type scale, logo style

const HEADLINES = {
  A: {
    top: "Clothes,",
    bottom: "carefully kept.",
    sub: "We wet clean what others dry clean — solvent-free, gentler on fabrics.",
  },
  B: {
    top: "Wet cleaning,",
    bottom: "done properly.",
    sub: "We wet clean what others dry clean — solvent-free, gentler on fabrics.",
  },
  C: {
    top: "Gentle on fabric.",
    bottom: "Serious about finish.",
    sub: "We wet clean what others dry clean — solvent-free, gentler on fabrics.",
  },
};

const TYPE_SCALES = {
  compact:   { hero: 72,  section: 44, body: 15 },
  default:   { hero: 92,  section: 56, body: 16 },
  editorial: { hero: 120, section: 72, body: 17 },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "C",
  "typeScale": "default",
  "logoVariant": "character"
}/*EDITMODE-END*/;

function useTweaks() {
  const [tweaks, setTweaks] = React.useState(() => {
    try {
      const stored = localStorage.getItem("dodo_tweaks");
      if (stored) return { ...TWEAK_DEFAULTS, ...JSON.parse(stored) };
    } catch (e) {}
    return TWEAK_DEFAULTS;
  });

  const update = React.useCallback((patch) => {
    setTweaks((prev) => {
      const next = { ...prev, ...patch };
      try { localStorage.setItem("dodo_tweaks", JSON.stringify(next)); } catch (e) {}
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch (e) {}
      return next;
    });
  }, []);

  // Apply type scale as CSS variables on <html>
  React.useEffect(() => {
    const s = TYPE_SCALES[tweaks.typeScale] || TYPE_SCALES.default;
    const root = document.documentElement;
    root.style.setProperty("--hero-size", s.hero + "px");
    root.style.setProperty("--section-size", s.section + "px");
    root.style.setProperty("--body-size", s.body + "px");
  }, [tweaks.typeScale]);

  return [tweaks, update];
}

function TweaksPanel({ tweaks, update }) {
  const [editMode, setEditMode] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setEditMode(true);
      if (e.data.type === "__deactivate_edit_mode") setEditMode(false);
    };
    window.addEventListener("message", handler);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", handler);
  }, []);

  if (!editMode) return null;

  return (
    <div className="tweaks-panel" data-open={open ? "true" : "false"}>
      <button className="tweaks-head" onClick={() => setOpen(!open)}>
        <span className="tweaks-title">Tweaks</span>
        <span className="tweaks-chev">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="tweaks-body">
          <div className="tweak-group">
            <div className="tweak-label">Headline</div>
            <div className="tweak-seg">
              {Object.keys(HEADLINES).map((k) => (
                <button
                  key={k}
                  className={"tweak-pill" + (tweaks.headline === k ? " is-on" : "")}
                  onClick={() => update({ headline: k })}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="tweak-sample">
              "{HEADLINES[tweaks.headline].top} {HEADLINES[tweaks.headline].bottom}"
            </div>
          </div>

          <div className="tweak-group">
            <div className="tweak-label">Type scale</div>
            <div className="tweak-seg">
              {Object.keys(TYPE_SCALES).map((k) => (
                <button
                  key={k}
                  className={"tweak-pill" + (tweaks.typeScale === k ? " is-on" : "")}
                  onClick={() => update({ typeScale: k })}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="tweak-group">
            <div className="tweak-label">Dodo mark</div>
            <div className="tweak-seg">
              {["minimal", "character", "perched"].map((k) => (
                <button
                  key={k}
                  className={"tweak-pill" + (tweaks.logoVariant === k ? " is-on" : "")}
                  onClick={() => update({ logoVariant: k })}
                >
                  <DodoMark size={20} variant={k} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { HEADLINES, TYPE_SCALES, useTweaks, TweaksPanel, TWEAK_DEFAULTS });
