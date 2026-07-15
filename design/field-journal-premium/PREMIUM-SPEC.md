# Premium Field Journal — implementation spec

## Product promise

Within the first screen, a serious visitor should understand that Kruz can take an ambiguous software problem from product judgment through interface, implementation, and proof.

## Visual principles

1. **Editorial, not nostalgic.** Journal structure comes from folios, margins, captions, and pacing—not fake paper, handwriting, or vintage props.
2. **Quiet materials.** Near-black ink, warm bone text, aged brass, and sage status color create depth without brightness.
3. **Proof gets the largest surface.** Every selected case has a bespoke product artifact and a clear constraint/response narrative.
4. **One strong serif.** Newsreader carries the human voice. Instrument Sans keeps the functional layer contemporary.
5. **Detail earns attention.** Micro labels are for provenance and state only; all core reading content remains comfortably sized.

## Page anatomy

1. Sticky practice header
2. Editorial hero + current Orbit field note
3. Practice proof ribbon
4. Three deep selected-work cases
5. Four-step method ledger
6. Operating principles note
7. Builder statement + capabilities
8. Direct contact close

## Reusable production components

- `PracticeHeader`
- `SectionFolio`
- `CaseStudy`
- `ProductArtifact`
- `MethodLedgerRow`
- `AvailabilityMark`
- `EditorialButton`

## Accessibility and motion

- Text carrying information targets WCAG AA contrast.
- Native links and buttons retain visible focus treatment in production.
- Motion is progressive enhancement and is removed by `prefers-reduced-motion`.
- Navigation is keyboard operable and closes with Escape.
- Decorative interface studies have descriptive labels; no meaning depends on decoration alone.
