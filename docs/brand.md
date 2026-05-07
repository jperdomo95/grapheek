# Beeanie English — Brand & Style Guide

## Colors

All colors are defined as Tailwind v4 theme tokens in
[`app/globals.css`](../app/globals.css). Use the utilities — never paste raw
hex values into components.

| Token             | Hex       | Use                                         |
| ----------------- | --------- | ------------------------------------------- |
| purple            | `#3e2b85` | Primary canvas — body background            |
| purple-ink        | `#2e1a47` | Deep sections (services, testimonials)      |
| purple-footer     | `#32236f` | Footer bar                                  |
| orange            | `#f68b1f` | CTAs, accents, link hovers                  |
| orange-hover      | `#ff8800` | Hover state for `bg-orange` buttons         |
| amber             | `#f6921e` | Eyebrow text above section headlines        |
| lilac             | `#9d8ed1` | Subtle highlights (currently unused)        |
| surface-soft      | `#f5f3fc` | Light card backgrounds (light variant)      |
| surface-alt-tint  | `#ede9f9` | Alternate light surfaces                    |

Shadows: `shadow-card` (light surfaces) and `shadow-card-on-dark` (cards on
the purple canvas). Card corners use `rounded-card` (16px).

## Typography

- **Family**: Poppins, loaded via `next/font/google`. Weights `400 500 600 700 800`.
- **Display headlines**: extrabold (`font-extrabold`), tight leading.
- **Eyebrows**: small caps, letter-spaced (`uppercase tracking-[0.18em]`),
  amber color.
- **Body**: 400/500. Use `text-white/85` for body copy on the purple canvas
  to reduce contrast and avoid eye strain.

## Logo

- File: `public/beeanienglish.png`.
- Minimum width 80px.
- Never recolor or apply effects.
- Always present on a purple or white background.

## Voice

Warm, encouraging, bilingual-aware. Examples lifted from current copy:
"safe place for English", "fun way", "speak with confidence",
"You're not alone on this journey".

Avoid: stiff corporate language, hard-sell language, gendered pronouns when
addressing students.

## Contact channels

- Instagram: [`@beeanienglish`](https://www.instagram.com/beeanienglish?igsh=MTdmNG5rZXg0d295eg==)
- WhatsApp: `+58 412 827 0380`
- Email: `beeanienglish@gmail.com`

These are mirrored in `lib/brand.ts` — update both if any change.
