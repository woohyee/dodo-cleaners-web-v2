// Shared header + footer for all pages.
const NAV = [
  { label: "home", href: "index.html", key: "home" },
  { label: "services", href: "services.html", key: "services" },
  { label: "pricing", href: "pricing.html", key: "pricing" },
  { label: "event", href: "event.html", key: "event" },
  { label: "contact", href: "contact.html", key: "contact" },
];

function SiteHeader({ active = "home", logoVariant = "character" }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Wordmark markSize={34} variant={logoVariant} />
        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={"nav-link" + (active === item.key ? " is-active" : "")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ logoVariant = "character" }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Wordmark markSize={32} variant={logoVariant} />
          <p className="footer-tag">
            Professional wet cleaning.<br />Burlington, Ontario.
          </p>
        </div>
        <div className="footer-col">
          <div className="footer-label">Hours</div>
          <ul className="footer-list">
            <li><span>Mon–Fri</span><span>9:30–18:00</span></li>
            <li><span>Saturday</span><span>10:00–15:00</span></li>
            <li><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-label">Visit</div>
          <ul className="footer-list">
            <li><a href="tel:9053159995">905-315-9995</a></li>
            <li>2500 Appleby Line, E1<br />Burlington, ON</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 dodo cleaners</span>
        <span className="dot">·</span>
        <span>Burlington</span>
        <span className="dot">·</span>
        <span>Ontario</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, NAV });
