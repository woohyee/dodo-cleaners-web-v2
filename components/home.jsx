// ─── dodo cleaners — single-page landing ───────────────────────────────────

const INK   = "#000000";
const PAPER = "#FFFFFF";
const MUTE  = "rgba(0,0,0,0.72)";
const HAIR  = "rgba(0,0,0,0.14)";

function useMobile() {
  const [mobile, setMobile] = React.useState(() => window.innerWidth <= 768);
  React.useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

// ── shared tiny helpers ──────────────────────────────────────────────────────

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Label({ children, muted }) {
  return (
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      fontWeight: 500,
      color: muted ? MUTE : INK,
    }}>{children}</span>
  );
}

// ── 1. HERO ──────────────────────────────────────────────────────────────────

function Hero({ logoVariant }) {
  const mob = useMobile();
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      borderBottom: `0.5px solid ${HAIR}`,
      position: "relative",
    }}>
      {/* Nav */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: PAPER,
        borderBottom: `0.5px solid ${HAIR}`,
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: mob ? "0 20px" : "0 48px",
          height: 76, display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>
          <Wordmark markSize={34} variant={logoVariant} />
          <nav style={{ display: mob ? "none" : "flex", gap: 40 }}>
            {[["Services","services.html"],["Pricing","pricing.html"],["Event","event.html"],["Contact","contact.html"]].map(([l,h]) => (
              <a key={l} href={h} style={{
                fontFamily:"'Inter',sans-serif", fontSize:16, fontWeight:500,
                color: INK, textDecoration:"none", opacity:.75,
                transition:"opacity 160ms",
              }}
              onMouseEnter={e=>e.target.style.opacity=1}
              onMouseLeave={e=>e.target.style.opacity=.75}
              >{l.toLowerCase()}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero body */}
      <div style={{
        flex: 1,
        maxWidth: 1280, margin: "0 auto", padding: mob ? "0 20px" : "0 48px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : "1.2fr 1fr",
        gap: mob ? 40 : 80,
        alignItems: "center",
        paddingTop: mob ? 48 : 80,
        paddingBottom: mob ? 60 : 100,
        padding: mob ? "48px 24px 60px" : undefined,
        boxSizing: "border-box",
      }}>
        {/* Left */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:48 }}>
            <div style={{ width:32, height:.5, background: INK }} />
            <Label muted>Burlington · Ontario · est. 2013</Label>
          </div>

          <h1 style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 400,
            fontSize: "clamp(52px, 6vw, 88px)",
            lineHeight: 0.97,
            letterSpacing: "-0.03em",
            margin: "0 0 36px 0",
            color: INK,
          }}>
            <span style={{ display:"block" }}>Gentle on</span>
            <span style={{ display:"block" }}>fabric.</span>
            <span style={{ display:"block", fontStyle:"italic", fontWeight:300 }}>Serious about</span>
            <span style={{ display:"block", fontStyle:"italic", fontWeight:300 }}>finish.</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            lineHeight: 1.55,
            color: INK,
            margin: "0 0 52px 0",
            maxWidth: 460,
          }}>
            We wet clean what your label says <em>dry clean only.</em>
          </p>

          <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
            <a href="#visit" style={{
              display:"inline-flex", alignItems:"center", gap:10,
              padding:"16px 28px",
              background: INK, color: PAPER,
              fontFamily:"'Inter',sans-serif", fontSize:13,
              letterSpacing:"0.07em", textTransform:"uppercase",
              fontWeight:500, textDecoration:"none",
              border:`1px solid ${INK}`,
              transition:"background 160ms ease, color 160ms ease",
            }}
            onMouseEnter={e=>{e.currentTarget.style.background=PAPER;e.currentTarget.style.color=INK;}}
            onMouseLeave={e=>{e.currentTarget.style.background=INK;e.currentTarget.style.color=PAPER;}}
            >Find us <Arrow /></a>

            <a href="tel:9053159995" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"15px 28px",
              background:"transparent", color: INK,
              fontFamily:"'Inter',sans-serif", fontSize:13,
              letterSpacing:"0.07em", textTransform:"uppercase",
              fontWeight:500, textDecoration:"none",
              border:`1px solid ${INK}`,
              transition:"background 160ms ease, color 160ms ease",
            }}
            onMouseEnter={e=>{e.currentTarget.style.background=INK;e.currentTarget.style.color=PAPER;}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=INK;}}
            >905-315-9995</a>
          </div>
        </div>

        {/* Right — info card */}
        <div style={{ position:"relative" }}>
          {/* "At a glance" notch label */}
          <div style={{
            position:"absolute", top:-9, left:28,
            background:PAPER, padding:"0 10px",
            fontFamily:"'Inter',sans-serif", fontSize:10,
            letterSpacing:"0.18em", textTransform:"uppercase",
            color: MUTE,
          }}>At a glance</div>
          <div style={{ border:`0.5px solid ${INK}`, padding:"40px 36px" }}>
            {[
              ["Address", "2500 Appleby Line E1\nBurlington, ON"],
              ["Mon–Fri", "9:30 – 18:00"],
              ["Saturday", "10:00 – 15:00"],
              ["Sunday", "Closed"],
              ["Phone", "905-315-9995"],
            ].map(([k,v], idx, arr) => (
              <div key={k} style={{
                display:"flex", justifyContent:"space-between",
                alignItems:"baseline", gap:24,
                padding:"18px 0",
                borderBottom: idx < arr.length-1 ? `0.5px solid ${HAIR}` : "none",
              }}>
                <span style={{
                  fontFamily:"'Inter',sans-serif", fontSize:11,
                  letterSpacing:"0.14em", textTransform:"uppercase",
                  color:MUTE, fontWeight:500, flexShrink:0,
                }}>{k}</span>
                <span style={{
                  fontFamily:"'Newsreader',serif", fontSize:18,
                  fontWeight:400, letterSpacing:"-0.01em",
                  textAlign:"right", whiteSpace:"pre-line",
                }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 2. TRUST BAR ─────────────────────────────────────────────────────────────

function TrustBar() {
  const mob = useMobile();
  const items = ["Est. 2013", "Solvent-free", "Hand-finished", "Burlington, ON"];
  return (
    <div style={{
      borderBottom: `0.5px solid ${HAIR}`,
    }}>
      <div style={{
        maxWidth:1280, margin:"0 auto", padding: mob ? "0 24px" : "0 48px",
        display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(4,1fr)", gap:0,
      }}>
        {items.map((item, i) => (
          <div key={item} style={{
            flex:1, padding:"22px 0",
            borderRight: i < items.length-1 ? `0.5px solid ${HAIR}` : "none",
            display:"flex", alignItems:"center", justifyContent:"center",
            gap:12,
          }}>
            <div style={{ width:4, height:4, borderRadius:"50%", background:INK, opacity:0.3 }} />
            <span style={{
              fontFamily:"'Inter',sans-serif", fontSize:12,
              letterSpacing:"0.16em", textTransform:"uppercase",
              fontWeight:500, color:INK,
            }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. WHY WET CLEAN ─────────────────────────────────────────────────────────

function WhyWetClean() {
  const mob = useMobile();
  const steps = [
    { n:"i.",   title:"Inspect",          body:"Every garment is examined for stains, weave, trim, and care labels before it ever meets water." },
    { n:"ii.",  title:"Wet clean",        body:"Computer-calibrated machines use precise temperature and gentle action — no solvents, ever." },
    { n:"iii.", title:"Finish by hand",   body:"Pressed, steamed, and shaped by our team — the quiet difference between clean and properly finished." },
  ];
  return (
    <section style={{ borderBottom:`0.5px solid ${HAIR}` }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mob ? "60px 20px" : "120px 48px" }}>
        {/* Head */}
        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "1fr 1.5fr", gap: mob ? 16 : 80, marginBottom: mob ? 48 : 96, alignItems:"end" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:15, color:INK }}>02 —</span>
            <Label muted>The Method</Label>
          </div>
          <h2 style={{ fontFamily:"'Newsreader',serif", fontWeight:400, fontSize:"clamp(36px,4vw,56px)", lineHeight:1.02, letterSpacing:"-0.025em", margin:0, color:INK }}>
            Why we <span style={{ fontStyle:"italic", fontWeight:300 }}>wet clean.</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap:0, borderTop:`0.5px solid ${INK}` }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding:`${mob ? "36px 0" : "52px 48px 52px 0"}`,
              borderRight: (!mob && i < 2) ? `0.5px solid ${HAIR}` : "none",
              paddingLeft: (!mob && i > 0) ? 48 : 0,
            }}>
              <div style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:40, lineHeight:1, color:INK, marginBottom:28 }}>{s.n}</div>
              <h3 style={{ fontFamily:"'Newsreader',serif", fontWeight:400, fontSize:26, letterSpacing:"-0.015em", margin:"0 0 14px 0", color:INK }}>{s.title}</h3>
              <p style={{ margin:0, fontSize:15, lineHeight:1.6, color:MUTE, maxWidth:300 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. SERVICES ──────────────────────────────────────────────────────────────

function Services() {
  const mob = useMobile();
  return (
    <section style={{ borderBottom:`0.5px solid ${HAIR}` }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mob ? "60px 20px" : "120px 48px" }}>
        {/* Head */}
        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "1fr 1.5fr", gap: mob ? 16 : 80, marginBottom: mob ? 48 : 80, alignItems:"end" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:15, color:INK }}>03 —</span>
            <Label muted>Services</Label>
          </div>
          <h2 style={{ fontFamily:"'Newsreader',serif", fontWeight:400, fontSize:"clamp(36px,4vw,56px)", lineHeight:1.02, letterSpacing:"-0.025em", margin:0, color:INK }}>
            What we <span style={{ fontStyle:"italic", fontWeight:300 }}>care</span> for.
          </h2>
        </div>

        {/* Clothesline */}
        <div style={{ overflowX: mob ? "auto" : "hidden", overflowY: "hidden", WebkitOverflowScrolling:"touch", paddingTop:6, paddingBottom:12 }}>
          <div style={{ position:"relative", minWidth: mob ? 640 : "unset", display:"flex", flexDirection:"column", gap: mob ? 48 : 72 }}>
            {[[0,4],[4,8]].map(([start,end]) => (
              <div key={start} style={{ position:"relative" }}>
                {/* Rope */}
                <div style={{ height:1, background:INK, margin:"0 20px", position:"relative" }}>
                  <div style={{ position:"absolute", top:-4, left:-4, width:9, height:9, border:`0.5px solid ${INK}`, borderRadius:"50%", background:PAPER }} />
                  <div style={{ position:"absolute", top:-4, right:-4, width:9, height:9, border:`0.5px solid ${INK}`, borderRadius:"50%", background:PAPER }} />
                </div>
                {/* Cards */}
                <div style={{ display:"grid", gridTemplateColumns: mob ? "repeat(4,1fr)" : "repeat(4, 200px)", justifyContent:"space-between", gap: mob ? 14 : 0 }}>
                  {SERVICES.slice(start,end).map((svc, j) => {
                    const i = start + j;
                    const Icon = window[svc.icon];
                    const strH = [22,32,16,28,22,34,18,26][i];
                    const tilt = [-1.2,0.8,-0.5,1.1,-0.9,0.6,-1.0,0.9][i];
                    return (
                      <a key={svc.key} href="services.html" style={{
                        display:"flex", flexDirection:"column", alignItems:"center",
                        textDecoration:"none", color:INK,
                        transform:`rotate(${tilt}deg)`,
                        transformOrigin:"50% 0",
                        transition:"transform 300ms cubic-bezier(.2,.8,.2,1)",
                      }}
                      onMouseEnter={e=>e.currentTarget.style.transform=`rotate(${tilt*-2.2}deg) translateY(-8px)`}
                      onMouseLeave={e=>e.currentTarget.style.transform=`rotate(${tilt}deg) translateY(0)`}
                      >
                        <div style={{ width:1, height:strH, background:"rgba(0,0,0,0.55)", flexShrink:0 }} />
                        <div style={{ display:"flex", gap:2, marginBottom:0 }}>
                          <div style={{ width:6, height:10, border:`0.5px solid ${INK}`, borderRadius:"1px 1px 2px 2px", background:PAPER }} />
                          <div style={{ width:6, height:10, border:`0.5px solid ${INK}`, borderRadius:"1px 1px 2px 2px", background:PAPER }} />
                        </div>
                        <div style={{
                          display:"flex", flexDirection:"column", gap:14,
                          minHeight:220, width:"100%",
                          padding:"20px 16px 18px",
                          background:PAPER, border:`0.5px solid ${INK}`,
                          boxSizing:"border-box", position:"relative",
                        }}>
                          <span style={{ position:"absolute", top:10, right:12, fontFamily:"'Newsreader',serif", fontStyle:"italic", fontSize:11, color:MUTE, fontWeight:300 }}>{pad2(i+1)}</span>
                          <span style={{ color:INK, display:"block", marginTop:4 }}><Icon size={28} /></span>
                          <span style={{ fontFamily:"'Newsreader',serif", fontSize:17, fontWeight:400, letterSpacing:"-0.015em", lineHeight:1.18 }}>{svc.name}</span>
                          <span style={{ fontSize:12.5, lineHeight:1.5, color:MUTE }}>{svc.desc}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop:52, display:"flex", justifyContent:"flex-end" }}>
          <a href="services.html" style={{
            display:"inline-flex", alignItems:"center", gap:10,
            padding:"14px 24px", background:"transparent", color:INK,
            fontFamily:"'Inter',sans-serif", fontSize:12,
            letterSpacing:"0.08em", textTransform:"uppercase",
            fontWeight:500, textDecoration:"none",
            border:`1px solid ${INK}`,
            transition:"background 160ms, color 160ms",
          }}
          onMouseEnter={e=>{e.currentTarget.style.background=INK;e.currentTarget.style.color=PAPER;}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=INK;}}
          >All services <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

// ── 5. PRICING ───────────────────────────────────────────────────────────────

function Pricing() {
  const mob = useMobile();
  return (
    <section style={{ borderBottom:`0.5px solid ${HAIR}` }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mob ? "60px 20px" : "120px 48px" }}>
        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "1fr 1.5fr", gap: mob ? 16 : 80, marginBottom: mob ? 48 : 80, alignItems:"end" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:15, color:INK }}>04 —</span>
            <Label muted>Pricing</Label>
          </div>
          <h2 style={{ fontFamily:"'Newsreader',serif", fontWeight:400, fontSize:"clamp(36px,4vw,56px)", lineHeight:1.02, letterSpacing:"-0.025em", margin:0 }}>
            Straightforward <span style={{ fontStyle:"italic", fontWeight:300 }}>pricing.</span>
          </h2>
        </div>

        <div style={{ borderTop:`0.5px solid ${INK}`, maxWidth:960 }}>
          {PRICING_FLAT.map((p, i) => (
            <div key={p.name} style={{
              display:"grid", gridTemplateColumns: mob ? "32px 1fr 80px" : "52px 1fr 220px 140px",
              alignItems:"baseline", padding:"24px 0",
              borderBottom:`0.5px solid ${HAIR}`,
              gap: mob ? 8 : 16,
            }}>
              <span style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:14, color:MUTE }}>{pad2(i+1)}</span>
              <span style={{ fontFamily:"'Newsreader',serif", fontSize: mob ? 18 : 24, fontWeight:400, letterSpacing:"-0.015em" }}>{p.name}</span>
              {!mob && <span style={{ fontSize:13, color:MUTE }}>{p.note}</span>}
              <span style={{ fontFamily:"'Newsreader',serif", fontSize: mob ? 18 : 24, fontWeight:400, textAlign:"right", fontVariantNumeric:"tabular-nums", letterSpacing:"-0.01em" }}>${p.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop:24, fontSize:12, color:MUTE, letterSpacing:"0.02em" }}>Base prices. May vary by fabric and size.</p>

        <div style={{ marginTop:48, display:"flex", justifyContent:"flex-end" }}>
          <a href="pricing.html" style={{
            display:"inline-flex", alignItems:"center", gap:10,
            padding:"14px 24px", background:"transparent", color:INK,
            fontFamily:"'Inter',sans-serif", fontSize:12,
            letterSpacing:"0.08em", textTransform:"uppercase",
            fontWeight:500, textDecoration:"none",
            border:`1px solid ${INK}`,
            transition:"background 160ms, color 160ms",
          }}
          onMouseEnter={e=>{e.currentTarget.style.background=INK;e.currentTarget.style.color=PAPER;}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=INK;}}
          >Full price list <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

// ── 6. BRAND STORY ───────────────────────────────────────────────────────────

function BrandStory() {
  const mob = useMobile();
  return (
    <section style={{ background:INK, color:PAPER, padding: mob ? "80px 0" : "140px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mob ? "0 20px" : "0 48px" }}>
        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "260px 1fr", gap: mob ? 32 : 80, alignItems:"start", maxWidth:1080 }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, paddingTop:12 }}>
            <div style={{ width:28, height:.5, background:"rgba(255,255,255,0.4)" }} />
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", fontWeight:500 }}>A note on our name</span>
          </div>
          <div style={{ maxWidth:620 }}>
            <p style={{ fontFamily:"'Newsreader',serif", fontSize:21, lineHeight:1.6, letterSpacing:"-0.01em", margin:"0 0 26px 0", color:"rgba(255,255,255,0.8)" }}>
              The dodo once lived on Mauritius, an island in the Indian Ocean. It was driven to extinction by humans in 1681.
            </p>
            <p style={{ fontFamily:"'Newsreader',serif", fontSize:21, lineHeight:1.6, letterSpacing:"-0.01em", margin:"0 0 48px 0", color:"rgba(255,255,255,0.8)" }}>
              The small things we do each day — what we use, what we pour out, what stays behind — these add up. We would like no other creature to disappear because of the quiet choices we made without thinking.
            </p>
            <p style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:38, lineHeight:1.2, letterSpacing:"-0.025em", margin:"0 0 52px 0", color:PAPER }}>
              That is why we wet clean.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", margin:0, paddingTop:32, borderTop:"0.5px solid rgba(255,255,255,0.15)" }}>
              dodo cleaners — 2500 Appleby Line E1, Burlington.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. VISIT US ──────────────────────────────────────────────────────────────

function VisitUs() {
  const mob = useMobile();
  return (
    <section id="visit" style={{ background:"#f7f7f6", borderBottom:`0.5px solid ${HAIR}` }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mob ? "60px 20px" : "120px 48px" }}>
        <div style={{ marginBottom: mob ? 48 : 80 }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:28 }}>
            <span style={{ fontFamily:"'Newsreader',serif", fontStyle:"italic", fontWeight:300, fontSize:15, color:INK }}>05 —</span>
            <Label muted>Find us</Label>
          </div>
          <h2 style={{ fontFamily:"'Newsreader',serif", fontWeight:400, fontSize:"clamp(40px,5vw,72px)", lineHeight:1.02, letterSpacing:"-0.03em", margin:0 }}>
            Come see us.
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 48 : 80, alignItems:"start" }}>
          {/* Map placeholder */}
          <div style={{
            border:`0.5px solid rgba(0,0,0,0.3)`,
            background:"rgba(0,0,0,0.04)",
            aspectRatio:"4/3",
            display:"flex", flexDirection:"column",
            alignItems:"center", justifyContent:"center",
            gap:16,
          }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={INK} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M24 8C17.4 8 12 13.4 12 20c0 10 12 20 12 20s12-10 12-20c0-6.6-5.4-12-12-12z"/>
              <circle cx="24" cy="20" r="4"/>
            </svg>
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTE, textAlign:"center", lineHeight:1.6 }}>
              2500 Appleby Line E1<br />Burlington, ON
            </span>
            <a href="https://maps.google.com/?q=2500+Appleby+Line+Burlington+ON" target="_blank" rel="noopener noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              marginTop:8,
              padding:"12px 22px",
              background:INK, color:PAPER,
              fontFamily:"'Inter',sans-serif", fontSize:12,
              letterSpacing:"0.08em", textTransform:"uppercase",
              fontWeight:500, textDecoration:"none",
              transition:"opacity 160ms",
            }}
            onMouseEnter={e=>e.currentTarget.style.opacity=.75}
            onMouseLeave={e=>e.currentTarget.style.opacity=1}
            >Get directions <Arrow /></a>
          </div>

          {/* Info */}
          <div>
            <div style={{ marginBottom:40 }}>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:MUTE, marginBottom:24, fontWeight:500 }}>Hours</div>
              {[["Mon–Fri","9:30–18:00"],["Saturday","10:00–15:00"],["Sunday","Closed"]].map(([d,t]) => (
                <div key={d} style={{ display:"grid", gridTemplateColumns:"120px 1fr", padding:"16px 0", borderBottom:`0.5px solid ${HAIR}`, gap:16, alignItems:"baseline" }}>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:MUTE }}>{d}</span>
                  <span style={{ fontFamily:"'Newsreader',serif", fontSize:20, letterSpacing:"-0.01em", fontWeight:400 }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:52, paddingTop:8 }}>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:MUTE, marginBottom:16, fontWeight:500 }}>Phone</div>
              <a href="tel:9053159995" style={{
                fontFamily:"'Newsreader',serif", fontSize:36,
                fontWeight:400, letterSpacing:"-0.02em",
                color:INK, textDecoration:"none",
                borderBottom:`0.5px solid ${INK}`,
                paddingBottom:2,
                transition:"opacity 160ms",
              }}
              onMouseEnter={e=>e.currentTarget.style.opacity=.6}
              onMouseLeave={e=>e.currentTarget.style.opacity=1}
              >905-315-9995</a>
            </div>

            <div style={{ paddingTop:4 }}>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:MUTE, marginBottom:16, fontWeight:500 }}>Address</div>
              <div style={{ fontFamily:"'Newsreader',serif", fontSize:22, lineHeight:1.35, letterSpacing:"-0.01em" }}>
                2500 Appleby Line E1<br />
                <span style={{ fontStyle:"italic", fontWeight:300 }}>Burlington, Ontario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 8. FOOTER ────────────────────────────────────────────────────────────────

function Footer({ logoVariant }) {
  const mob = useMobile();
  return (
    <footer style={{ background:PAPER, padding:"52px 0 44px" }}>
      <div style={{
        maxWidth:1280, margin:"0 auto", padding: mob ? "0 20px" : "0 48px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        gap:24, flexWrap:"wrap",
      }}>
        <Wordmark markSize={22} variant={logoVariant} />
        <div style={{
          display:"flex", alignItems:"center", gap:12,
          fontFamily:"'Inter',sans-serif", fontSize:12,
          letterSpacing:"0.06em", color:MUTE,
        }}>
          <span>© 2026 dodo cleaners</span>
          <span style={{ color:HAIR }}>·</span>
          <span>Burlington</span>
          <span style={{ color:HAIR }}>·</span>
          <span>Ontario</span>
        </div>
      </div>
    </footer>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────

function LandingPage() {
  const [tweaks, update] = useTweaks();
  return (
    <>
      <Hero logoVariant={tweaks.logoVariant} />
      <TrustBar />
      <WhyWetClean />
      <Services />
      <Pricing />
      <BrandStory />
      <VisitUs />
      <Footer logoVariant={tweaks.logoVariant} />
      <TweaksPanel tweaks={tweaks} update={update} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LandingPage />);
