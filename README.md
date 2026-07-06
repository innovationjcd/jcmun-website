# JCMUN Website

A static website for the JCMUN conference — plain HTML, CSS, and JavaScript. No build step, no dependencies. Open `index.html` in a browser, or host the folder as-is on GitHub Pages, Netlify, or Vercel (all free).

## Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, countdown, quick links, SG welcome |
| `about.html` | About Us — history, mission, values, host school |
| `committees.html` | Committees — filterable, expandable cards |
| `secretariat.html` | Our Team — Secretariat + Directors, by role |
| `registration.html` | Registration — form links, fees, deadlines |
| `resources.html` | Delegate Prep — guides, schedule, RoP, dress code |
| `contact.html` | Contact — form, emails, socials |

## Where to put your content

Everything that needs replacing is marked with `[square brackets]` or an `<!-- EDIT: ... -->` comment in the HTML.

1. **Logo** — the official crest lives at `assets/logo.png` (keep the filename and any replacement updates everywhere).
2. **Brand colors & fonts** — edit the variables at the top of `css/styles.css` (`--green-900`, `--gold`, `--red`, `--black`, etc.). The palette follows the Jumeirah College crest: green, red, gold, and black. One change re-themes the whole site.
3. **Conference date (countdown)** — edit `CONFERENCE_DATE` at the top of `js/main.js`. Also update the dates shown in the hero on `index.html`.
4. **Registration form links** — in `registration.html`, replace the two `href="#"` buttons with your Google Form URLs.
5. **Team photos** — put photos in `assets/team/`, then in `secretariat.html` replace each placeholder `<div class="person-photo">…</div>` content with `<img src="assets/team/name.jpg" alt="Name">`.
6. **Background guides & PDFs** — put PDFs in `assets/docs/`. On `committees.html`, point each committee's guide link at its PDF and remove the `disabled` class. On `resources.html`, swap the "Coming Soon" pills for download links.
7. **Contact email** — appears in `contact.html` and once in `js/main.js` (the contact form).
8. **Social media** — Instagram/TikTok/YouTube URLs in `contact.html` and the footers.

## Adding or removing committees

Committee cards in `committees.html` are self-contained `<details class="committee-card">` blocks — copy one, edit the name/topic/description, and set `data-type` to `ga`, `spec`, or `crisis` (this controls the filter buttons and the badge color).

## Previewing locally

Double-click any `.html` file, or run a tiny server for a cleaner experience:

```bash
cd "JCMUN website"
python3 -m http.server 8000
# then open http://localhost:8000
```
