// Services detail page

const SVC_DETAIL_BODY = {
  wet:     "We wet clean what your label says dry clean only. Water-based, solvent-free — gentler on fabric, safer for delicate construction.",
  shirt:   "Everyday shirts and casual wear cleaned thoroughly and pressed to a crisp finish. Collars, cuffs, and creases — done properly.",
  bedding: "Duvets, comforters, blankets, and large household items. We handle the big pieces your home machine can't.",
  leather: "Professional cleaning and conditioning for leather and suede. Restores suppleness, removes surface soil, and protects the finish.",
  curtain: "Curtains and carpets washed with care — removing dust, odour, and accumulated wear, returned fresh and ready to hang.",
  alter:   "Hems, alterations, and custom adjustments. We tailor the fit so your clothes work for you — not the other way around.",
  gown:    "Expert cleaning followed by acid-free box preservation for long-term storage. Your gown, protected for the years ahead.",
  shoe:    "Professional cleaning and care for all footwear — leather, suede, fabric, and more. Cleaned, conditioned, and finished.",
};
function ServicesPage() {
  const [tweaks, update] = useTweaks();
  return (
    <>
      <SiteHeader active="services" logoVariant={tweaks.logoVariant} />
      <section className="page-hero">
        <div className="container">
          <div className="crumb">
            <a href="index.html" style={{ textDecoration: "none" }}>home</a>
            <span className="sep">/</span>
            <span>services</span>
          </div>
          <h1>Every piece, <span className="italic" style={{ fontStyle: "italic", fontWeight: 300 }}>its own care.</span></h1>
          <p className="lede">
            From daily shirts to a wedding gown you'll keep forever — we treat every garment to the <span className="italic">method it deserves.</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((svc, i) => {
            const Icon = window[svc.icon];
            return (
              <div className="svc-detail" key={svc.key}>
                <div className="n">{pad2(i + 1)}.</div>
                <div>
                  <div className="tag" style={{ marginBottom: 10 }}>{svc.tag}</div>
                  <h3>{svc.name}</h3>
                </div>
                <div className="body">{SVC_DETAIL_BODY[svc.key] || svc.desc}</div>
                <div className="icon-col"><Icon size={52} /></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <h2 className="section-title" style={{ maxWidth: 560 }}>
            Not sure where <span className="italic">yours fits?</span>
          </h2>
          <div style={{ display: "flex", gap: 16 }}>
            <a className="btn btn-ghost" href="contact.html">Ask us</a>
            <a className="btn" href="pricing.html">See pricing
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter logoVariant={tweaks.logoVariant} />
      <TweaksPanel tweaks={tweaks} update={update} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServicesPage />);
