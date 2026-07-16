# BuildKit — Premium Field Journal

This is the selected Field Journal direction developed into a dedicated, responsive homepage system. The approved design is now integrated into the production Next.js application.

## Figma source

The editable design system and finished screens live in the [BuildKit Field Journal Figma file](https://www.figma.com/design/aN8YUZffeq1Y6e8IX8cgvN).

- Desktop homepage: node `31:2` at 1,920px
- Mobile homepage: node `43:2` at 390px
- Foundations: 66 local variables, 20 text styles, and 4 effect styles
- Reusable system: desktop and mobile headers, buttons, folios, availability marks, product artifacts, field notes, case studies, and method rows

`figma-state.json` is the durable node and token ledger. Temporary HTML capture frames are removed after comparison; the committed capture hook remains available for future code-to-design refreshes.

## Review

Open `index.html` for the framed desktop/mobile review. Open `site.html` for the clean page.

Keyboard shortcuts in the review shell:

- `D` — desktop
- `M` — mobile
- `N` — toggle design notes

## Premium design thesis

The premium signal comes from editorial composition, generous scale, restrained materials, bespoke proof artifacts, and exact hierarchy. It does not rely on bright accents, glass effects, gradient type, or decorative card walls.

### Type

- Newsreader — display, case-study theses, editorial notes
- Instrument Sans — interface, navigation, body copy
- IBM Plex Mono — folios, states, provenance, measurement

### Core palette

- Ink paper `#0a0b09`
- Raised paper `#10120e`
- Warm ink `#ece6da`
- Secondary ink `#c8c0b3`
- Aged brass `#aa9367`
- Quiet sage `#879587`

### Responsive floor

- Large desktop canvas grows to 1,980px rather than shrinking into the center of an ultra-wide display.
- Reading copy remains width-controlled while display typography and proof artifacts expand.
- Mobile retains the editorial hierarchy; it does not simply turn desktop cards into a vertical pile.
- Informational body text stays at or above 14px on mobile; microcopy is reserved for labels and provenance.

## Production integration

The design was approved and promoted into production on July 15, 2026.

- Homepage composition: `src/app/page.tsx`
- Shared navigation and footer: `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- Typography and metadata: `src/app/layout.tsx`
- Shared Field Journal visual system: `site.css`, imported by the root layout
- Shared Tailwind tokens: `tailwind.config.ts`

Existing `/deals`, `/go`, `/book`, `/services`, `/projects`, `/websites`, and `/contact` routes remain intact.
