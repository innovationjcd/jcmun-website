# JCMUN Website — Content Request Checklist

Everything the website needs from the JCMUN team, with exactly where each item goes.
File-naming and folder instructions are for whoever adds them to the code.

## 1. Branding (affects every page)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 1 | Official JCMUN logo | Best format: SVG. Otherwise a high-res transparent PNG (at least 500×500 px) | Replace `assets/logo.svg` (keep the filename). If it's a PNG, name it `logo.png` and tell the web team to update the image tags |
| 2 | Official brand color codes | Exact hex codes if a brand guide exists (currently using colors sampled from the JC crest) | `css/styles.css` (top of file) |
| 3 | Official fonts (if any) | Only if JCMUN has designated fonts; otherwise we keep Playfair Display + Inter | `css/styles.css` |

## 2. Conference basics (used across several pages)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 4 | Conference session name/year | e.g. "JCMUN 2027 · Annual Conference" | `index.html` hero badge |
| 5 | Conference theme/slogan | The quote shown under the title | `index.html` hero |
| 6 | Exact conference dates AND start time | Needed for both display and the countdown timer | `index.html` hero, `registration.html` timeline, and `js/main.js` (`CONFERENCE_DATE`) |
| 7 | Venue: school name, address, city | | `index.html` hero, `about.html`, `contact.html` "Find Us", `resources.html` logistics |
| 8 | Official contact email(s) | General enquiries + registration enquiries (can be the same address) | `contact.html`, `js/main.js` (contact form) |
| 9 | Social media URLs | Instagram (required), TikTok / YouTube / others (optional — unused icons will be removed) | `contact.html` + footer of every page |

## 3. Home page (`index.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 10 | Secretary-General welcome letter | 2–3 paragraphs, warm and delegate-facing, plus the SG's full name | "A Note from the Secretary-General" section |
| 11 | Secretary-General photo | Portrait orientation (4:5), at least 800 px wide, good lighting | Save as `assets/team/sg.jpg` |
| 12 | Conference stats | Expected number of delegates, committees, schools, days | Stats band (currently shows 300+ / 8 / 20+ / 3 as placeholders) |

## 4. About page (`about.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 13 | History of JCMUN | ~2 paragraphs: founding year, growth, milestones | "Our Story" section |
| 14 | Mission statement | 2–4 sentences | "Our Mission" section |
| 15 | Values | One line each for the four values (currently: Diplomacy, Inclusivity, Excellence, Global Citizenship — replace or keep) | "Our Values" section |
| 16 | Host school blurb | 1 paragraph about Jumeirah College and its role, plus a Google Maps link if wanted | "Our Host School" section |

## 5. Committees page (`committees.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 17 | Final committee list | For EACH committee: full name, type (General Assembly / Specialized / Crisis), topic title, and a 3–5 sentence topic description (mention if beginner-friendly or advanced) | One expandable card per committee |
| 18 | Background guide PDFs | One per committee, when ready (can come later) | Save in `assets/docs/`, named like `bg-disec.pdf`, `bg-who.pdf`, etc. |

## 6. Secretariat page (`secretariat.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 19 | Full team list | Every person's full name + exact title, grouped: Executive Secretariat (SG, DSG, DG…), Under-Secretaries-General, Committee Directors | Team grids, organized by role |
| 20 | Headshots for every team member | Square crop (1:1), at least 600×600 px, consistent style/background if possible | Save in `assets/team/`, named `firstname-lastname.jpg` |

## 7. Registration page (`registration.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 21 | Individual delegate registration form link | Google Form URL | "Delegate Registration Form" button |
| 22 | School delegation registration form link | Google Form URL (or note if delegations register by email) | "Delegation Registration Form" button |
| 23 | Fees | Amounts + currency for: early bird individual, regular individual, per-delegate delegation rate, faculty advisors | Fees table |
| 24 | What fees include | e.g. lunches, materials, certificates | Fees section intro line |
| 25 | All key dates | Registration opens, early bird deadline, final deadline, allocations release date | Registration timeline |

## 8. Resources page (`resources.html`)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 26 | Conference schedule | PDF (or text to display on the page), when finalized | Save as `assets/docs/schedule.pdf` |
| 27 | Rules of Procedure / Delegate Handbook | PDF | Save as `assets/docs/rules-of-procedure.pdf` |
| 28 | Dress code | A standard western-business-attire text is already written — confirm it or send edits | "Dress Code" section |
| 29 | Logistics details | Check-in time & location, parking/drop-off info, lunch arrangements | "Venue & Logistics" section |
| 30 | First-timers note | Short encouraging paragraph + any beginner resource links (optional) | "First Time at MUN?" section |

## 9. Photos (optional, but makes a big difference)

| # | Item | Details | Where it goes |
|---|------|---------|---------------|
| 31 | 5–10 high-quality photos from past conferences | Landscape, at least 1600 px wide — debate shots, gavel shots, group photos. Used for hero backgrounds and the About page | Save in `assets/photos/` |

---

**Format notes for whoever collects this:**
- Text: a Google Doc or Word doc organized by the numbers above is perfect.
- Images: JPG or PNG. Don't screenshot photos out of Instagram — ask for the originals.
- PDFs: final versions only; they'll be publicly downloadable.
- Items 18, 26, and 27 can arrive later — the site already shows "Coming Soon" for them.
