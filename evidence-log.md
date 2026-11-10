# Evidence log (Appendix A)

Browser: Google Chrome 157.0.8103.39, desktop, Windows 11, fresh profile, DevTools docked right.
All captures on **10 November 2026**, local time. Each image has its capture time printed in a strip under the window.

| ID | File | What it shows | Time and date (10 Nov 2026) | Page address |
|---|---|---|---|---|
| A1 | evidence/A1-redirect.png | Typed http://final.edu.tr, landed on https://www.final.edu.tr | 08:11 | https://www.final.edu.tr |
| A1 | evidence/A1-certificate.png | Security panel: valid HTTPS, TLS 1.3, all resources secure | 08:20 | https://www.final.edu.tr |
| A2 | evidence/A2-long-url.png | Example of a long, coded URL | 08:20 | /ufu-7-akademik/o-4-enstituler/f-6-… |
| A3 | evidence/A3-network.png | Network summary: 64 requests, 24.0 MB, finish 9.61 s | 08:17 | https://www.final.edu.tr |
| A3 | evidence/A3-big-images.png | Sorted by size: 7.79 MB and 7.49 MB news photos | 08:18 | https://www.final.edu.tr |
| A3 | evidence/A3-document-headers.png | Document: GET, 200 OK, text/html | 08:18 | https://www.final.edu.tr |
| A3 | evidence/A3-fetch-xhr.png | Fetch/XHR: POST to Google Analytics, 204 | 08:18 | https://www.final.edu.tr |
| A4 | evidence/A4-missing-page.png | Blank white page for a missing address | 08:12 | /no-such-page-123 → /404 |
| A4 | evidence/A4-status-codes.png | 302 → /404 → 200 in the Network panel | 08:19 | /no-such-page-123 |
| A5 | evidence/A5-cache-document.png | Document Cache-Control: no-store, no-cache, must-revalidate | 08:18 | https://www.final.edu.tr |
| A5 | evidence/A5-cache-image.png | Image Cache-Control: max-age=14400 | 08:18 | /images/haber/img-6169jpg[…].jpg |
| A6 | evidence/A6-source.png | Raw HTML already contains news headlines and dates | 08:15 | view-source:https://www.final.edu.tr |
| A6 | evidence/A6-elements.png | Elements panel; html has no lang; title inside body | 08:14 | https://www.final.edu.tr |
| A7 | evidence/A7-seo-check.png | Console table: title, description, canonical, lang, h1 | 08:19 | https://www.final.edu.tr |
| B1 | evidence/B1-3g-01-at-2s.png … B1-3g-04-at-60s.png | Home page loading under "3G" at 2, 8, 20, 60 s | 08:23–08:24 | https://www.final.edu.tr |
| B2 | evidence/B2-empty-search.png | Search "zzzqqq": only the word "Sonuç" | 08:24 | /search?q=zzzqqq |
| B3 | evidence/B3-offline.png | Offline: Chrome's own no-internet page | 08:25 | /ufu-iletisim |
| B4 | evidence/B4-empty-search-submit.png | Empty search submitted: nothing happens, no message | 08:27 | /search?q=zzzqqq |
| B4/B5 | evidence/B5-labels-and-required.png | Contact fields: same id, labels not tied, none required | 08:26 | /ufu-iletisim |
| B6 | evidence/B6-keyboard-17-tabs-to-contact.png | Focus on "İLETİŞİM" after 17 Tabs | 08:32 | https://www.final.edu.tr |
| B6 | evidence/B6-keyboard-26-tabs-to-phone.png | Focus on the phone number after 26 more Tabs | 08:33 | /ufu-iletisim |
| B7 | evidence/B7-lighthouse-home.png / .html | Lighthouse Accessibility 63 | 08:30 | https://www.final.edu.tr |
| B7 | evidence/B7-lighthouse-contact.png / .html | Lighthouse Accessibility 65 | 08:30 | /ufu-iletisim |
| B8 | evidence/B8-vague-links.png | Console table of "DEVAMI", "Tr/En" and unnamed links | 08:33 | https://www.final.edu.tr |
