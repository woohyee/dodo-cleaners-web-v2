// Event page — TapStamp loyalty program
function EventPage() {
  const [tweaks, update] = useTweaks();

const INK   = "#000000";
  const PAPER = "#FFFFFF";
  const MUTE  = "rgba(0,0,0,0.72)";
  const HAIR  = "rgba(0,0,0,0.14)";

  return (
    <>
      <SiteHeader active="event" logoVariant={tweaks.logoVariant} />

      {/* PAGE HERO */}
      <section style={{ borderBottom: `0.5px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px 90px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <a href="index.html" style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTE, textDecoration: "none", fontWeight: 500 }}>home</a>
            <span style={{ color: HAIR, fontSize: 11 }}>/</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: INK, fontWeight: 500 }}>tapstamp</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <h1 style={{
                fontFamily: "'Newsreader', serif",
                fontWeight: 400,
                fontSize: "clamp(64px, 8vw, 110px)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                margin: "0 0 36px 0",
                color: INK,
              }}>
                Tap<span style={{ fontStyle: "italic", fontWeight: 300 }}>Stamp</span>
              </h1>
              <p style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 22,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: INK,
                margin: "0 0 12px 0",
                maxWidth: 440,
              }}>
                Our digital loyalty program — now live in store.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 1.55,
                color: MUTE,
                margin: "0 0 40px 0",
                maxWidth: 400,
              }}>
                No card to carry. Just tap and collect.
              </p>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: MUTE,
                fontWeight: 500,
              }}>
                <div style={{ width: 28, height: 0.5, background: MUTE }} />
                In service since October 2025
              </div>
            </div>

            {/* NFC tap illustration */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{
                border: `0.5px solid ${INK}`,
                padding: "52px 48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
                maxWidth: 320,
                width: "100%",
              }}>
                {/* NFC tap icon */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke={INK} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {/* Phone */}
                  <rect x="20" y="10" width="24" height="40" rx="3" />
                  <line x1="28" y1="44" x2="36" y2="44" />
                  {/* NFC waves */}
                  <path d="M10 32 C10 24, 14 17, 20 13" strokeOpacity="0.4" />
                  <path d="M7 32 C7 22, 12 14, 20 9" strokeOpacity="0.25" />
                  <path d="M4 32 C4 20, 10 11, 20 6" strokeOpacity="0.12" />
                </svg>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Newsreader', serif", fontSize: 20, letterSpacing: "-0.01em", marginBottom: 8 }}>
                    Tap at the counter
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: MUTE, letterSpacing: "0.02em", lineHeight: 1.5 }}>
                    NFC-enabled phone required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ borderBottom: `0.5px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: INK }}>i —</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTE, fontWeight: 500 }}>How it works</span>
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: INK }}>
                Three steps, <span style={{ fontStyle: "italic", fontWeight: 300 }}>no app.</span>
              </h2>
            </div>
            <div style={{ borderTop: `0.5px solid ${INK}` }}>
              {[
                { n: "01", text: "Tap your phone on the NFC tag at the counter." },
                { n: "02", text: "On your first visit, register your name and mobile number once." },
                { n: "03", text: "Minimum $10 per visit to earn a stamp." },
              ].map((step) => (
                <div key={step.n} style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: 24,
                  padding: "36px 0",
                  borderBottom: `0.5px solid ${HAIR}`,
                  alignItems: "baseline",
                }}>
                  <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 300, fontSize: 16, color: MUTE }}>{step.n}.</span>
                  <span style={{ fontFamily: "'Newsreader', serif", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.4, color: INK }}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section style={{ borderBottom: `0.5px solid ${HAIR}`, background: INK, color: PAPER }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.7)" }}>ii —</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Rewards</span>
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: PAPER }}>
                Collect stamps, <span style={{ fontStyle: "italic", fontWeight: 300 }}>earn more.</span>
              </h2>
            </div>
            <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.25)" }}>
              {[
                { stamps: "5 stamps", reward: "5–20% off your cleaning" },
                { stamps: "30 stamps", reward: "VIP status: 10% off for 60 days" },
              ].map((r) => (
                <div key={r.stamps} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                  padding: "44px 0",
                  borderBottom: "0.5px solid rgba(255,255,255,0.12)",
                  alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Every</div>
                    <div style={{ fontFamily: "'Newsreader', serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1, color: PAPER }}>{r.stamps}</div>
                  </div>
                  <div style={{ fontFamily: "'Newsreader', serif", fontSize: 20, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.35, color: "rgba(255,255,255,0.85)" }}>
                    {r.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOOD TO KNOW */}
      <section style={{ borderBottom: `0.5px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: INK }}>iii —</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTE, fontWeight: 500 }}>Good to know</span>
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: INK }}>
                Simple, <span style={{ fontStyle: "italic", fontWeight: 300 }}>private.</span>
              </h2>
            </div>
            <div style={{ borderTop: `0.5px solid ${INK}` }}>
              {[
                "No app download required.",
                "No spam, no marketing messages.",
                "We only store your name and phone number.",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: 24,
                  padding: "32px 0",
                  borderBottom: `0.5px solid ${HAIR}`,
                  alignItems: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: "'Newsreader', serif", fontSize: 21, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.4, color: INK }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE CTA */}
      <section style={{ borderBottom: `0.5px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <p style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
              color: INK,
              maxWidth: 600,
            }}>
              Ask us at the counter <span style={{ fontStyle: "italic", fontWeight: 300 }}>to get started.</span>
            </p>
            <a href="contact.html" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "16px 28px",
              background: INK, color: PAPER,
              fontFamily: "'Inter', sans-serif", fontSize: 13,
              letterSpacing: "0.07em", textTransform: "uppercase",
              fontWeight: 500, textDecoration: "none",
              border: `1px solid ${INK}`,
              flexShrink: 0,
              transition: "background 160ms, color 160ms",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = PAPER; e.currentTarget.style.color = INK; }}
            onMouseLeave={e => { e.currentTarget.style.background = INK; e.currentTarget.style.color = PAPER; }}
            >
              Contact us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter logoVariant={tweaks.logoVariant} />
      <TweaksPanel tweaks={tweaks} update={update} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EventPage />);
