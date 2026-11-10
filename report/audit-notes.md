# Audit working notes — www.final.edu.tr (10 Nov 2026)

Facts collected in the browser, to be confirmed by the screenshots.

## Part A
- **A1** `http://final.edu.tr` → `301 Moved Permanently` → `https://final.edu.tr/` → `https://www.final.edu.tr/`. Served through Cloudflare. Padlock: check the certificate is valid and who issued it.
- **A2** URLs to score:
  1. `https://www.final.edu.tr/ufu-iletisim` — passes all 5
  2. `https://www.final.edu.tr/m-11-ogrenciler/a-367-akademik-takvim` — has internal codes (`m-11`, `a-367`), less readable
  3. `https://www.final.edu.tr/ufu-7-akademik/o-4-enstituler/f-6-lisansustu-egitim-ogretim-enstitusu-leoe` — long, 3 levels of codes
  4. `https://www.final.edu.tr/search?q=zzzqqq` — one query parameter, fine
  5. `https://aday.final.edu.tr/yataygecisTC` — uppercase letters, words joined with no hyphen
  - Also: some menu links still point to `http://` (e.g. `http://mail.final.edu.tr/`, `http://www.final.edu.tr/.../a-33-neden-ufu#`). Image file names contain `[` `]`, e.g. `slider-2jpg[1788954786].jpg`.
- **A3** Home document: `GET`, `200`, `text/html; charset=UTF-8`. About 70 requests. Page "load" event at about **31 s**. Transferred about **23 MB**. Biggest files: two news photos, **7.6 MB** and **7.3 MB** (`/images/haber/...jpg`), slider images about 0.9–1 MB each, footer background PNG 0.9 MB. Fetch/XHR: Google Analytics `collect` request (third party). Trackers: Google Tag Manager, Google Analytics, two Facebook Pixels.
- **A4** `/no-such-page-123` → **status 200** and a **completely empty page** (0 bytes): a soft 404, and the visitor sees a blank white screen with no menu and no way back.
- **A5** Main document `Cache-Control: no-store, no-cache, must-revalidate` → never stored, downloaded fresh on every visit. Image and `/js/ufu.js`: `Cache-Control: max-age=14400` → browser may reuse them for 4 hours without asking again.
- **A6** Raw HTML (Ctrl+U) is about 47 KB and already contains the menus, news titles and footer text (about 6,700 characters of text) → **server-rendered** (PHP-style page; jQuery only adds the slider and lightbox).
- **A7** Title: "Uluslararası Final Üniversitesi" (same on every page tested). Meta description: just the name again, "Uluslararası Final Üniversitesi". Canonical: **missing**. `lang` on `<html>`: **missing/empty**. `<h1>` count: **0** on the home page. No `rel="sponsored"`/`ugc` (no ads or comments). Uses `jquery-latest.min.js` from code.jquery.com.

## Part B
- **B2** Search "zzzqqq" → page heading "Arama Sonuçları", then "Sonuç" and nothing else. No "nothing found" message, no suggestion of what to try next.
- **B4/B5** Contact form `/ufu-iletisim` (name, e-mail, subject, message + reCAPTCHA, "Gönder" button):
  - Labels say "(Zorunlu)" (required) but no field has `required` and there is no JavaScript check, so the browser shows no error before sending.
  - Every label has `for="example-text-input"` (a template leftover) and **all four fields share the same `id="names"`** → no label is tied to its field; clicking a label does not move the cursor. Screen readers do not hear a field name.
  - E-mail field is `type="text"`, not `type="email"`.
  - Safe test: leave **all fields empty and the reCAPTCHA unticked**, then press Gönder once.
- **B6** No "skip to content" link: the first links on the page are WEBMAIL, ÖBS, LMS…
