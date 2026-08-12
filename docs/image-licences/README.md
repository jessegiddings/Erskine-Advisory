# Image licences and sourcing

## Current state: placeholder plates

The images in `public/plates/` are **original SVG technical illustrations generated for
this site** — not photographs, not stock. They carry no third-party licence and exist so
the layout, duotone treatment, and motion ship complete while the photographic set from
`03-ART-DIRECTION.md` §3 is sourced. (The build sandbox's network policy blocks Unsplash,
Pexels, and Pixabay, so photo sourcing has to happen outside it.)

## Swapping in the real photographs

1. Source per the 14-image shot list in `03-ART-DIRECTION.md` §3 (Unsplash → Pexels →
   Pixabay, one paid frame for the hero if needed).
2. **Reject** any image containing a recognisable person or face, a readable company
   logo, a visible address, identifiable private property, a finished styled interior,
   or a sunset.
3. Save a screenshot of each photo's individual licence page into this directory, named
   to match the asset (e.g. `plate-01-rebar.licence.png`).
4. Export each photo ≤1800px wide, drop it in `src/assets/plates/`, and pass the import
   to the existing `<Plate>` component (it accepts image assets as well as path
   strings). The duotone/grain treatment is applied by the component — do not bake it
   into the files.
5. Hero (plate 01) only: keep it under ~180KB after AVIF and preload it in `Base.astro`.
6. Re-run the contrast check on any plate with type over it (see §9 of the art
   direction): if it fails 4.5:1, darken the scrim, never add a text shadow.

## The one rule (art direction §1)

No image may ever be captioned, positioned or implied as a project of the firm.
Captions are statements about the work, never locations. The footer carries the
permanent line: "Photography is illustrative. We do not publish client projects."
