// Pricing detail page — grouped by category
function PricingPage() {
  const [tweaks, update] = useTweaks();
  const groups = [
    { key: "tops",      title: "i. Tops" },
    { key: "bottoms",   title: "ii. Bottoms & Alterations" },
    { key: "formal",    title: "iii. Formal & Outerwear" },
    { key: "household", title: "iv. Household" },
  ];
  return (
    <>
      <SiteHeader active="pricing" logoVariant={tweaks.logoVariant} />
      <section className="page-hero">
        <div className="container">
          <div className="crumb">
            <a href="index.html" style={{ textDecoration: "none" }}>home</a>
            <span className="sep">/</span>
            <span>pricing</span>
          </div>
          <h1>Straightforward <span style={{ fontStyle: "italic", fontWeight: 300 }}>pricing.</span></h1>
          <p className="lede">
            No surprises. These are our <span className="italic">base prices</span> — exceptional fabrics, unusual sizes, or heavy stains may adjust slightly, and we'll always tell you first.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {groups.map((g) => (
            <div className="price-group" key={g.key}>
              <div className="price-section-title">{g.title}</div>
              <div className="price-table" style={{ borderTop: "none" }}>
                {PRICING[g.key].map((p, i) => (
                  <div className="price-row" key={p.name}>
                    <span className="price-num">{pad2(i + 1)}</span>
                    <span className="price-name">{p.name}</span>
                    <span className="price-note">{p.note}</span>
                    <span className="price-value">${p.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="price-footnote">Base prices. May vary by fabric and size. Tax not included.</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <div className="eyebrow" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.72)", marginBottom: 20 }}>Drop-off</div>
              <h3 className="serif" style={{ fontSize: 28, margin: 0, letterSpacing: "-0.015em" }}>
                Visit us anytime during <span style={{ fontStyle: "italic", fontWeight: 300 }}>opening hours.</span>
              </h3>
              <p style={{ marginTop: 20, color: "rgba(0,0,0,0.8)", maxWidth: 420 }}>
                2500 Appleby Line, E1 · Burlington ON
              </p>
            </div>
            <div>
              <div className="eyebrow" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.72)", marginBottom: 20 }}>Not listed?</div>
              <h3 className="serif" style={{ fontSize: 28, margin: 0, letterSpacing: "-0.015em" }}>
                Call for a <span style={{ fontStyle: "italic", fontWeight: 300 }}>quote.</span>
              </h3>
              <p style={{ marginTop: 20, color: "rgba(0,0,0,0.8)" }}>
                <a href="tel:9053159995" style={{ textDecoration: "none" }}>905-315-9995</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter logoVariant={tweaks.logoVariant} />
      <TweaksPanel tweaks={tweaks} update={update} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<PricingPage />);
