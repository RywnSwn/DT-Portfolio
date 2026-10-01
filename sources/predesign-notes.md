# Predesign Considerations: Hinge & Board Sizing

Notes on how professional designers think through the hinge/fold mechanism before committing to dimensions. Feeds into the Design Requirements section of the design brief.

## Hinge Placement: Inside vs Outside

- **Outside-mounted (surface hinge)**: visible, easier to install, but the pivot axis sits above the wood surface. Closing the book flat leaves a wedge-shaped gap at the spine unless the meeting edges are chamfered/rounded to clear the hinge barrel.
- **Inside/mortised (recessed into the edge, like a real book spine)**: hinge is hidden, panels close flush with no gap, and it can open a full flat 180°. Requires routing/chiseling a precise mortise so the hinge knuckle sits exactly on the line where the two panel surfaces meet.

**Decision: mortised/inside hinge**: needed for a clean book-spine look and a fully flat open position.

## The Gap Problem

A hinge pivots around an axis with some radius (the knuckle/barrel diameter). If that axis isn't positioned exactly at the surface plane where the two panels meet:
- Pivot recessed too shallow → gap between panels when closed.
- Pivot recessed too deep → panels can't open a full 180°, they bind/hit each other.

**Rule**: mortise depth on each panel = half the hinge's closed thickness (half the knuckle diameter), cut equally into both panels, so the pivot line sits precisely at the meeting seam. This is a real, calculable number based on the specific hinge purchased, not guesswork.

## Fold Angle

Target: full flat 180° open (board lies flat, not propped at an angle).
Requires:
- Exact mortise depth (per above).
- Inner corners of each panel near the hinge either square or very slightly relieved (small chamfer) so they don't collide swinging past ~170°.

## How This Drives Board Size

- The fold line should fall exactly on a square boundary of the 8x8 grid (between column 4 and column 5), never through the middle of a square.
- Each cover panel = 4 columns wide (not 4.5).
- Each cover's width = (4 x square size) + small structural margin at the hinge edge (for the mortise) + border margin on the outer side edge. No border along the hinge edge itself, since that's the shared spine line.
- Each cover's height = (8 x square size) + top border + bottom border.
- Closed-book footprint = cover width x cover height x (2x panel thickness + hinge barrel thickness). Check this against the target "looks like a hardcover book" size (~30-35cm tall).

## Design Order (working backward)

1. Pick square size first, based on comfortable piece size.
2. This fixes the full open board dimensions (8 x square size, both directions).
3. This fixes each cover panel's size.
4. Check the resulting closed-book footprint against the target book proportions.
5. Only then determine mortise depth, based on the specific hinge hardware selected.
