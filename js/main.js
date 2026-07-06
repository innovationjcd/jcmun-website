/* ============================================================
   JCMUN — Site Scripts
   ------------------------------------------------------------
   EDIT HERE: conference date for the countdown timer.
   Format: year, month name, day, time (24h), timezone offset.
   ============================================================ */

// JCMUN 4 begins with delegate registration: Friday 20 Nov 2026, 2:00 PM (Dubai)
const CONFERENCE_DATE = new Date("2026-11-20T14:00:00+04:00");

/* ---------- Countdown timer (home page) ---------- */
function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const now = new Date();
  let diff = CONFERENCE_DATE - now;

  if (diff <= 0) {
    el.innerHTML = '<p class="count-live">JCMUN is happening now — welcome, delegates!</p>';
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const units = { days, hours, minutes, seconds };
  for (const [key, value] of Object.entries(units)) {
    const numEl = el.querySelector(`[data-unit="${key}"]`);
    if (numEl) numEl.textContent = String(value).padStart(2, "0");
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      siteNav.classList.contains("open") ? "true" : "false"
    );
  });
}

/* ---------- Committee type filters (committees page) ---------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const committeeCards = document.querySelectorAll(".committee-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.filter;
    committeeCards.forEach((card) => {
      const show = type === "all" || card.dataset.type === type;
      card.style.display = show ? "" : "none";
    });
  });
});

/* ---------- Contact form (opens the visitor's email app) ---------- */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("#cf-name").value.trim();
    const email = contactForm.querySelector("#cf-email").value.trim();
    const message = contactForm.querySelector("#cf-message").value.trim();

    const to = "munsecretariat@jumeirahcollege.com";
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

/* ---------- Footer year ---------- */
document.querySelectorAll(".footer-year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
