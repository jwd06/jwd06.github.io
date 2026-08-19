**Theme:** dark

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#101010` | `--color-obsidian` | Page canvas, full-bleed dark background |
| Carbon | `#080808` | `--color-carbon` | Deepest surface level, hero band, and overlay backgrounds |
| Chalk | `#f3f3f3` | `--color-chalk` | Primary text, headings, and body copy on dark surfaces |
| Smoke | `#9c9c9c` | `--color-smoke` | Secondary muted text, captions, helper labels |
| Ash | `#c1c1c1` | `--color-ash` | Mid-weight borders, subtle dividers, tertiary text |
| Graphite | `#212121` | `--color-graphite` | Primary 1px border color for cards, grids, and section dividers — the structural line work |
| Iron | `#474747` | `--color-iron` | Secondary border and stroke detail |
| Signal White | `#ffffff` | `--color-signal-white` | Filled pill buttons (LET'S CHAT, START NOW), inverted text on light surfaces, icon strokes — the single high-contrast action color |
| Compass Gold | `#6f6759` | `--color-compass-gold` | Outlined icon strokes in service and portfolio sections — warm metallic against the cool dark |
| Card Slate | `#3b3d45` | `--color-card-slate` | Card and panel border accent on elevated sections |

## Tokens — Typography

### Aeonik — Primary typeface for everything — display headlines, body, buttons, links. Weight 400 across all sizes is signature: no bold shouting, authority through scale and tracking alone. · `--font-aeonik`
- **Substitute:** Inter, Satoshi, or General Sans
- **Weights:** 400, 700
- **Sizes:** 13px, 14px, 16px, 17px, 18px, 21px, 23px, 34px, 44px, 63px
- **Line height:** 0.95–1.43 (tight at display sizes, breathing at body)
- **Letter spacing:** -0.0110em at 63px, -0.0070em at 44px, default at body
- **OpenType features:** `'ss01' on, 'cv11' on`
- **Role:** Primary typeface for everything — display headlines, body, buttons, links. Weight 400 across all sizes is signature: no bold shouting, authority through scale and tracking alone.

### Input — Secondary typeface for meta text, labels, and small captions. Tighter tracking (-0.037em at 8px, -0.022em at 18px) gives it a utilitarian, almost monospace feel — used for status pills, section metadata, and fine print. · `--font-input`
- **Substitute:** IBM Plex Mono, JetBrains Mono, or Space Mono
- **Weights:** 400
- **Sizes:** 8px, 13px, 14px, 16px, 17px, 18px
- **Line height:** 1.20–1.54
- **Letter spacing:** -0.0370em, -0.0220em
- **Role:** Secondary typeface for meta text, labels, and small captions. Tighter tracking (-0.037em at 8px, -0.022em at 18px) gives it a utilitarian, almost monospace feel — used for status pills, section metadata, and fine print.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 2.69 | — | `--text-caption` |
| body | 16px | 1.25 | — | `--text-body` |
| heading-xs | 18px | 1.31 | — | `--text-heading-xs` |
| subheading | 21px | 0.95 | — | `--text-subheading` |
| heading-sm | 23px | 1.07 | — | `--text-heading-sm` |
| heading | 34px | 1.03 | — | `--text-heading` |
| heading-lg | 44px | 1.07 | -0.31px | `--text-heading-lg` |
| display | 63px | 1.05 | -0.69px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 4px |
| cards | 8px |
| icons | 99px |
| buttons | 9999px (pills) |
