# Walk2Lead Landing Page — Project Context

## What this is
A single-page marketing/landing website for **Walk2Lead Robotics Tech Quest**, a CSR project funded by **Walkaroo Foundation** and executed end-to-end by **De' Lead International** (the implementation team and owner of this site). Academic partners: DIET Malappuram, DIET Kozhikode, DIET Kannur.

**Business goal:** convert corporate/CSR decision-makers (CSR heads, HR heads, founders' offices — companies with a 2% CSR obligation under Companies Act §135) into leads for De' Lead International. The page sells *proof and de-risked execution*, not robotics. Primary CTA: "Partner with us for your CSR project" → contact form / WhatsApp / email.

## Stack & structure
- Plain static site: single `index.html` with inline CSS/JS (no framework, no build step). Deploys anywhere (Vercel drag-drop or GitHub import).
- `assets/` — optimized photos (max 1600px, q78), logos, pattern.
- Git remote (owner-provided): `https://github.com/WizzyMinds-Organization/Walk2Lead.git`
- Source material lives in the parent folder `Walk2Lead/`:
  - `01 Brand Assets/` — original `Walk2Lead Logo.svg`, `Pattern Ref/` (robotics line-art SVG backgrounds)
  - `02 Documents/` — `Walk 2 Lead Robotics Tech Quest.pdf` (31-page program deck: THE source of truth for quotes, phases, schools, jury, projects) and a Kozhikode verification report draft
  - `03 Media/Media Main/` — 97 curated photos (image1–97); `03 Media/Media If Needed/` — raw photos/videos by district/school (17 .MOV files)

## Brand system (derived from the logo)
- Fonts: Fraunces (display serif, matches the wordmark) + Inter (body), via Google Fonts
- Colors: magenta `#750649` (primary, from De' Lead / logo "L"), red `#FF0000` in logo (UI accent uses `#e8272c`, sparingly), ink `#221e21`, cream `#faf7f4`, line `#e6dcd3`
- `assets/pattern.svg` (self-opacified robotics line art) used as section background texture; invert(1) on dark sections
- `walk2lead-logo.svg` (light bg) / `walk2lead-logo-white.svg` (dark bg, generated variant)
- Avoid clip-art/cartoon images from Media Main (image17–37 are icons/illustrations from an old doc); real ground photos only

## Key facts (verified against the program PDF)
- Program: 3-month, 52-hour, ~26 sessions/school, Classes 6 & 7, government schools in rural/coastal Kerala; Arduino kits, sensors, coding, AI-assisted building; two-stage selection (~30 students/school); school expos → district Innovators Expo with external jury; real-time monitoring portal
- Phases: P1 Kinalur GUPS, Kozhikode (1 school, 48 students) · P2 Malappuram & Kozhikode (16, 480) · P3 Kannur (3, 90) · P4 **currently running** Kozhikode/Malappuram/Wayanad (24, 705)
- Totals used on page: 44 schools, 1,300+ students (= families), 4 districts
- Student projects featured: waste-collecting river boat, medicine delivery robot, urine bag fill alert
- Leadership: inaugurations by Minister Muhammed Riyas, MLAs P.K. Kunhalikkutty, K.T. Jaleel, Aryadan Shoukat, U.A. Latheef; District Sub Collector Malappuram inaugurated district expo
- Jury: Rony K. Roy (Kerala Startup Mission), Ram Kamal Manoj (TechTop), Nisha Subramaniam (SSVM International), Harikrishnan M
- Video section embeds the YouTube uploads playlist `UUypZI3srbEiurNzDOdC3olw` (channel @Deleadinternational)

## ⚠️ Unresolved placeholders — fix before production
1. **WhatsApp + phone**: `+91 99999 99999` everywhere (wa.me link in CTA, tel: link) — placeholder
2. **Email**: `info@deleadinternational.com` (in CTA + form mailto handler) — unconfirmed guess
3. **Sub-Education Districts metric**: shows "12+" — INVENTED placeholder, owner must supply real count
4. **Quote attribution**: featured quote credited to Mr. V. Noushad (MD, Walkaroo Foundation); PDF page 8 layout was ambiguous between him and Dr. Sumitra Binu (CSR Head, Walkaroo) — confirm with owner
5. Contact form currently opens a prefilled mailto; swap to a Formspree/backend endpoint when available
6. Owner may supply specific YouTube video links to replace the playlist embed; testimonial videos (Sumithra, Noushad, Arjun, Sabari, DIET heads) planned but not yet available — text quotes used meanwhile

## Conventions
- Keep it single-file; inline CSS/JS in index.html
- `.reveal` class + IntersectionObserver for scroll animations; counters via `data-count`/`data-suffix`
- Indian number formatting (`toLocaleString('en-IN')`)
- Tone: confident, outcome-driven, corporate-facing ("CSR that ships"); no jargon, no clip art
