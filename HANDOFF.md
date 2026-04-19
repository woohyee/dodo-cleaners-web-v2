# HANDOFF — dodo cleaners v2

Last session: 2026-04-19

## Status

- Repo: https://github.com/woohyee/dodo-cleaners-web-v2 (public, `main`)
- Vercel preview: https://dodo-cleaners-web-v2.vercel.app/ (auto-deploys from `main`)
- Production domain `dodocleaners.ca`: **still on old project** (`dodo-cleaners-web`). Cutover pending.
- Old project/repo (`dodo-cleaners-web`, Next.js): untouched, preserved for rollback.

## Pending (resume tomorrow)

1. **Porkbun email forwarding** — `hello@dodocleaners.ca` forwarding not delivering test mails. User waits ~24h for DNS / Porkbun to settle. If still broken: check Porkbun dashboard (MX records → `fwd1.porkbun.com` / `fwd2.porkbun.com`, forwarding entry active, destination confirmation email clicked).
2. **Contact form backend** — currently mocked in `components/contact.jsx` (shows "Thank you" but sends nothing). User rejected Formspree. Open options:
   - Resend + Vercel Serverless Function (`api/contact.js`) — user signs up at resend.com, shares API key
   - `mailto:` fallback — opens user's mail app with prefilled content
   - Remove form entirely, strengthen phone/visit CTAs
3. **Domain cutover** — after QA + contact form decision: Vercel → old project Remove `dodocleaners.ca` → new project Add `dodocleaners.ca`. Rollback = reverse.

## Today's work

- Imported Claude Design handoff bundle, reproduced static site (index + 4 sub-pages, React+Babel CDN).
- Init git, pushed to new GitHub repo `dodo-cleaners-web-v2`, Vercel project connected.
- Design tweaks: pure-black ink + higher-contrast mute text; clothesline 4+4 rows with per-row rope; narrower cards with `space-between`; hover swing amplified to opposite direction; overflow hidden both axes to kill hover-spawned scrollbar; 28px swing buffer padding so edge cards don't clip.
- Header: logo enlarged (mark 24 → 34), wordmark switched from stacked to single-line "dodo cleaners", nav links 13px/400 → 16px/500.
- Event page: TapStamp reward copy `5–10%` → `5–20%`.

## Commits today

```
897a2c9 Add swing buffer padding to clothesline wrapper
dbbf9e9 Bigger logo on single line and larger nav links
bd42391 Initial commit: dodo cleaners v2 landing page
```

## Context to load next session

- `components/home.jsx` — main landing, 8 sections, uses inline styles + `useMobile()` hook
- `components/contact.jsx` — mock form (line 8-13 is the fake submit)
- `styles/site.css` — design tokens: `--ink:#000`, `--paper:#FFF`, `--mute:rgba(0,0,0,0.72)`
