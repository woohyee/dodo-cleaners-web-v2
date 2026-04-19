// Contact page — working form (client-side)
function ContactPage() {
  const [tweaks, update] = useTweaks();
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", service: "Wet Cleaning", message: "" });
  const [state, setState] = React.useState("idle"); // idle | sending | sent

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setState("sending");
    setTimeout(() => setState("sent"), 700);
  };

  return (
    <>
      <SiteHeader active="contact" logoVariant={tweaks.logoVariant} />
      <section className="page-hero">
        <div className="container">
          <div className="crumb">
            <a href="index.html" style={{ textDecoration: "none" }}>home</a>
            <span className="sep">/</span>
            <span>contact</span>
          </div>
          <h1>Come <span style={{ fontStyle: "italic", fontWeight: 300 }}>say hello.</span></h1>
          <p className="lede">
            Walk in, call, or leave us a note — we'll get back within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.72)", marginBottom: 32 }}>Visit</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <InfoBlock label="Address">2500 Appleby Line, E1<br />Burlington, ON</InfoBlock>
                <InfoBlock label="Phone"><a href="tel:9053159995" style={{ textDecoration: "none" }}>905-315-9995</a></InfoBlock>
                <InfoBlock label="Email"><a href="mailto:hello@dodocleaners.ca" style={{ textDecoration: "none" }}>hello@dodocleaners.ca</a></InfoBlock>
                <InfoBlock label="Hours">
                  <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", rowGap: 6, fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                    <span style={{ color: "rgba(0,0,0,0.72)" }}>Mon–Fri</span><span>9:30–18:00</span>
                    <span style={{ color: "rgba(0,0,0,0.72)" }}>Saturday</span><span>10:00–15:00</span>
                    <span style={{ color: "rgba(0,0,0,0.72)" }}>Sunday</span><span>Closed</span>
                  </div>
                </InfoBlock>
              </div>
            </div>

            <div>
              <div className="eyebrow" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.72)", marginBottom: 32 }}>Leave a note</div>
              {state === "sent" ? (
                <div style={{ border: "0.5px solid #000", padding: "48px 36px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Newsreader', serif", fontSize: 32, letterSpacing: "-0.02em", marginBottom: 12 }}>
                    Thank you, <span style={{ fontStyle: "italic", fontWeight: 300 }}>{form.name.split(" ")[0] || "friend"}.</span>
                  </div>
                  <p style={{ color: "rgba(0,0,0,0.8)", margin: 0 }}>We'll be in touch shortly at {form.phone}.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="field">
                    <label>Your name</label>
                    <input type="text" value={form.name} onChange={handle("name")} required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div className="field">
                      <label>Phone</label>
                      <input type="tel" value={form.phone} onChange={handle("phone")} required />
                    </div>
                    <div className="field">
                      <label>Email (optional)</label>
                      <input type="email" value={form.email} onChange={handle("email")} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Service</label>
                    <select value={form.service} onChange={handle("service")}>
                      {SERVICES.map((s) => <option key={s.key}>{s.name}</option>)}
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Tell us about the item</label>
                    <textarea value={form.message} onChange={handle("message")} placeholder="Fabric, size, any stains or concerns…" />
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button className="btn" type="submit" disabled={state === "sending"}>
                      {state === "sending" ? "Sending…" : "Send message"}
                      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter logoVariant={tweaks.logoVariant} />
      <TweaksPanel tweaks={tweaks} update={update} />
    </>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.72)", marginBottom: 8, fontWeight: 500 }}>{label}</div>
      <div style={{ fontFamily: "'Newsreader', serif", fontSize: 20, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{children}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
