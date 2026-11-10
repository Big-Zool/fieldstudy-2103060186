# Challenge fix — an accessible, validated contact form

A small React + Vite project that rebuilds the idea of the contact form at
https://www.final.edu.tr/ufu-iletisim in my own way. It does **not** copy the site's code, text or images, and it does not send anything.

## The problem (evidence B4, B5, B7)

On the real contact page:

- No label is tied to its field. All four fields share `id="names"` and every label says `for="example-text-input"`, so clicking a label does not move the cursor and screen readers hear no field name. **[B5]**
- Fields are marked "(Zorunlu)" in text only: no `required`, no checks, and the e-mail box is `type="text"`. Pressing "Gönder" sends an empty form with no message, so I could not test it safely. **[B4]**
- Lighthouse accessibility score for the page: **65/100**, with "Form elements do not have associated labels" flagged for 4 fields. **[B7]**

## The fix

- Each field has its own `id` and a `<label htmlFor>` tied to it.
- One **Zod** schema (`src/schema.js`) holds all the rules: name ≥ 2 letters, a real e-mail address, subject ≥ 3 letters, message 10–2000 characters.
- On submit with problems: a summary box lists every problem as a link to its field and receives focus; each field shows its own message underneath, with `aria-invalid` and `aria-describedby` pointing to it.
- What the visitor typed is kept. A message disappears as soon as that field becomes valid.
- `lang="en"`, one `h1`, a meta description and a visible focus outline.

## Before and after

| Measure | Before (real page) | After (this fix) |
|---|---|---|
| Lighthouse accessibility (12.8.2, mobile mode) | **65** — `../evidence/B7-lighthouse-contact.png` | **100** — `measurements/after-lighthouse.png` (+ `.html`) |
| Clicking a label moves the cursor into the field | No — `../evidence/B5-labels-and-required.png` | Yes |
| Error messages on an incomplete submit | None; the form would be sent | Summary + one message per field — `measurements/after-errors.png` |
| Typed text kept after an error | Not tested safely | Yes ("Ali" stays in the name box) |

Both Lighthouse runs used the same tool, version and mode on 10 November 2026.

## One design decision

**Errors appear next to each field, plus one summary at the top that receives focus — not as a pop-up alert.**
A pop-up disappears once closed, so the visitor must remember every problem. Messages beside the fields stay visible while the visitor fixes them. The focused summary means keyboard and screen-reader users hear immediately how many problems there are, and each link jumps straight to the field to fix.

## Run it

```bash
npm install
npm run dev
```

`npm run build` then `npm run preview` serves the production build on http://localhost:4173.
