# Walk2Lead Landing Page — Project Context

## What this is
A single-page marketing/landing website for **Walk2Lead Robotics Tech Quest**, a CSR programme **funded by Walkaroo Foundation** and **implemented end-to-end by De' Lead International**, a prominent, experienced CSR implementation team (designs the curriculum, trains the trainers, runs every phase). Academic partners DIET Malappuram, DIET Kozhikode and DIET Kannur provide official endorsement and school selection.

**⚠️ Framing rule — get this right everywhere:** the relationship is funder + implementer, not owner + vendor. Correct pattern (confirmed directly by the client): "Walk2Lead is funded by Walkaroo Foundation and implemented by De' Lead International." Two things NOT to do:
1. Don't write it vendor-style ("...and De' Lead was hired to execute/deliver it") — De' Lead should read as a prominent, established CSR implementation specialist, not a contractor.
2. Don't overcorrect into ownership language either ("De' Lead's own initiative", "De' Lead owns/created Walk2Lead") — an earlier pass did exactly this and the client corrected it back. De' Lead implements Walk2Lead; Walkaroo funds it. Both facts stay explicit, funder mentioned before or alongside implementer, never dropped.
This page will eventually live under De' Lead International's own website, so De' Lead is the subject/hero throughout (their logo, their team, their track record) — but "subject of the page" ≠ "owner of the programme." Keep the two separate.

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

## ⚠️ Still open
1. Contact form currently opens a prefilled mailto; swap to a Formspree/backend endpoint when available
2. Owner may supply specific YouTube video links to replace the playlist embed; testimonial videos (Sumithra, Noushad, Arjun, Sabari, DIET heads) planned but not yet available — text quotes used meanwhile

Resolved: WhatsApp/phone is `+91 80755 66081`; email is `info@deleadint.com`; sub-education districts metric is "10+"; featured quote confirmed attributed to Mr. V. Noushad, MD Walkaroo Foundation.

## Conventions
- Keep it single-file; inline CSS/JS in index.html
- `.reveal` class + IntersectionObserver for scroll animations; counters via `data-count`/`data-suffix`
- Indian number formatting (`toLocaleString('en-IN')`)
- Tone: confident, outcome-driven, corporate-facing ("CSR that ships"); no jargon, no clip art
