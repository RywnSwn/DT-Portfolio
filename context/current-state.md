# Current State

**Last updated:** 2026-09-29

## Project
**Book Chess Board.** A chess board that looks like a hardcover book on a shelf.

**Redesign (2026-09-25):** the book cover is now a **static case** (it doesn't open). The chess board folds in half and **slides into the case** like a book into a slipcase. The board will have a **built-in hinge** (type TBD).

## Phase
Design + early prototyping. A prototype of the cover case exists: the dimensions are accurate, but it has no engraving or grooves yet.

## What's done
- Design brief written: `project/design-brief.md`
- Predesign notes on hinge placement and board sizing: `project/predesign-notes.md`
- Hinge Test 1 (print-in-place knuckle hinge in Fusion 360): `process-log/hinge-test-1.md`
- Cover Prototype 1: laser cut plywood case with a living hinge spine, accurate dimensions, no engraving or grooves. Photos in `process-log/2026-09-25-cover-prototype-1.md`, measurements TBD.

## Key facts
- Hinge: goes on the folding board now. The old plan was a mortised hinge between two covers, so check if it still fits the redesign.
- Fold line: between columns 4 and 5, so each cover is 4 squares wide
- Target closed size: about 30 to 35 cm tall, like a hardcover book
- Time budget: 9 weeks total (2 hinge, 2 cover, 1 storage and board, 3 pieces and assembly, 1 testing)
- Cover is laser cut plywood, even though wood is crossed out in the design brief materials list (brief needs updating)
- Materials still open: magnets? real hinges?
- Printing lesson from the name tag: check for parts that won't stick or will fuse before printing, especially the board hinge

## Website
A first version of the portfolio site now exists in `website/`. Plain HTML, CSS and JS, no framework. Style is meant to look basic and a little amateur on purpose, with semantic HTML and accessibility (skip link, aria-current on nav, alt text on every image, labelled nav toggle) done properly underneath. Pulls in real content from `project/`, `process-log/`, `side-projects/` and `brainstorms/`. Not hosted yet.

## Lessons carried into the chess board
- From the name tag: design with the printer's weak points in mind. Check for unsupported or floating parts, especially on the board hinge.

## Next steps
1. Add cover measurements to the repo
2. Model the cover case in Fusion 360 from the measurements, then add engraving and grooves there
3. Pick the square size, then work out board and cover dimensions
4. Choose knuckle gap tolerance (0.2 to 0.4 mm per side) and print hinge test 2
5. Fill in the blanks in the design brief
6. Turn on GitHub Pages for the website (repo settings, not something a chat session can do on its own)
7. Keep the website pages updated as the project itself moves forward
8. Writeups, one project at a time: trash holder is done. Next: phone stand, iPhone dummy, then the book chess board. The phone stand and a name tag were intro exercises to learn Fusion 360, so their writeups can be short (focus on what they taught). Intro exercise writeup is in `past-work/fusion-intro-exercises.md`. The name tag has no photos in the repo yet (files were lost). Ask the user the questions below, then update the project's notes file and its website page.
9. Trash holder: user prints the tub, second clamp and 2 screws next, then sends zipped photos and how the fit went

## Writeup questions (intro exercises: phone stand, name tag)
1. What did the teacher ask for?
2. What Fusion 360 tools or skills did it teach?
3. Did the first print come out right? What went wrong?
4. What did you learn that you used later?

## Writeup questions (design cycle)
Ask these for each project. Short answers are fine, gaps are fine.
1. The problem: when did you notice you needed it?
2. First idea: what did you picture first, did it change?
3. Why this approach instead of others?
4. Measuring: what did you measure first, or did you guess?
5. Modeling: what software, roughly how long?
6. Printing/making: did the first attempt work? anything break, not fit, sag?
7. Parts: what was bought or reused vs made?
8. Using it: does it work day to day? anything annoying?
9. If you made it again: what would you change?

## Open questions
- Where do the pieces go now that the cover doesn't open? (old plan: inside the covers)
- How much clearance between the folded board and the inside of the case so it slides smoothly?
- Gaussian splat the cover? Suggested: not for the plain prototype. Maybe splat the finished piece for the portfolio website.
- Square size? (drives every other dimension)
- What kind of built-in hinge for the board? (living hinge like the spine? printed knuckle hinge?)
- Design brief gaps: Success Criteria 2.2 to 2.4 and the Inspiration section are empty
