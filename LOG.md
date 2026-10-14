# Log

One short entry per session. Newest at the top. Only add, never rewrite old entries.

## 2026-10-14 (2)
- Did: user said the v2 site looks too good and reads as AI made. Made a "hand coded student" home page draft as an artifact. First draft had a checkerboard background and mini chess board logo, user said no: chess is only the current project, not the whole site. Second draft: plain grey, orange DT box logo, ruler ticks
- Did: wrote a detailed plan and prompt with the full design spec, then built the home page in a new folder `work/website-v5/` (`index.html`, `style.css`). Old site untouched and still live. Checked at 1280px and 375px, no sideways scroll, all images load
- Decided: v5 goes in its own folder, home page first, other pages only after the user approves it
- Did: user said the centered floating box looks AI made. Made v5 full width: header, nav and footer span the screen, main column on the left, sidebar on the right (right now note, other projects), stacks on phones. Saved as a rule
- Did: removed the orange tilted DT logo box from the header (user: AI vibes). Header is now just the title and subtitle over the ruler ticks
- Did: built the other 4 v5 pages (Book Chess Board, Side Projects, Tutorials, Brainstorm) with 4 subagents in parallel, after writing the shared CSS first so they did not clash. Checked: no text lost (word diff vs old pages, only the plan's "N weeks" became week ranges), all images load, no sideways scroll at 375px, chapter tabs, Previous/Next, arrow keys and #self-eval-2 work
- Did: switched GitHub Pages to `work/website-v5` (workflow copy path). Image paths changed to `images/...` for the live build. Added meta descriptions, canonical links, Open Graph tags, `sitemap.xml`, `robots.txt`, `<time>` dates, labelled sections, the "right now" note as an aside with a heading, width/height on all images, arrows hidden from screen readers. Darkened the orange to pass contrast (4.0 to 5.3). Checked: no code comments, no em dashes, audit clean on all 5 pages (alts, headings, landmarks, ids, skip link)
- Decided: v5 is the live site, v2 look rule replaced in RULES
- Did: added the Google Search Console verification file `work/website-v5/googlebdcb4a83493c9265.html` (do not edit or delete it, Google checks it)
- Did: user said sub pages were just one long scroll. Gave them the home page's modular layout: title row, main column plus 320px sidebar, short sections side by side (`.cols`), chess Brief and What's Next as bordered boxes (`.boxes`), 9 week plan in the chess page sidebar, trash holder Testing and Next steps in the sidebar, Name Tag in the Tutorials sidebar, brainstorm photo in the sidebar. Galleries 2 per row on phones. Word diff shows no text lost, audit clean
- Did: added Bear Fix to the Side Projects page (before/after Blender screenshots, triangle counts, how I did it, STL links, credit that the model is the classmate's). Side Projects sidebar is now a list of projects with status tags
- Did: user found the text hard to read. Switched body font to Atkinson Hyperlegible Next and notes/dates to Atkinson Hyperlegible Mono (Google Fonts), headings stay Georgia. Body 17px, bigger captions and tags
- Did: put the user's first name on the site so it can be found on Google: titles "... | Ryan's DT Portfolio", header "Ryan's DT Portfolio", home description starts with "Ryan's". First name only, no full name
- Next: user reads through every page and rewrites text in their own voice. Verify in Search Console, submit sitemap, request indexing. Decide what to do with the old `work/website/`

## 2026-10-14
- Did: tried two new websites (v3 chess colours with a fold board, v4 simple green). User didn't like either. Both deleted, the bookshelf site (v2) is back in `work/website/` and the workflow publishes it again, same as before today
- Did: added trash holder Fusion screenshots (v1, the cover, the 2 screws) to `sources/images/trash-holder/`, the writeup and the Side Projects page. v1 is one clamp with a ring the bag goes through, inner ring held by supports, screw to tighten
- Next: screws designed or downloaded (credit if downloaded)? Printed yet? Then cover measurements

## 2026-10-13 (2)
- Did: redesigned the Book Chess Board web page. It was one long scroll (about 5900px), now it shows one chapter at a time with bookmark tabs: The Idea, The Brief, Hinge, Cover, What's Next. Previous/Next "turn the page" buttons, arrow keys work on the tabs, links like #self-eval-2 open the right chapter
- Did: Brief is now a grid of small cards, predesign facts are numbered cards, photos sit beside the text, self-evaluations are sticky notes, cover redesign shown as Before and After cards, small animation of the board sliding into the case. No text was removed
- Next: user checks the new page, then cover measurements

## 2026-10-13
- Did: made the whole website an editable artifact (text only edits, "Copy my edits" export) and the DT rubric an editable artifact
- Did: fixed the home page book. Hover now swings the cover open smoothly (the old idle peek animation made it snap), book bobs gently, removed the pawn from the middle
- Did: user edited index.html (chapter numbers, card text). Reordered cards to chapters 1 to 4, swapped the card list for plain links in a grid, renamed Past Work to Tutorial Projects and Brainstorm to My Brainstorming Paper (page titles and h1), nav spine for Past Work now says Tutorials
- Next: user sends rubric wording and site edits back, then apply them. Cover measurements

## 2026-10-08
- Did: website v2 redesign. Bookshelf nav (links are book spines), checkerboard strips, CSS drawn chess book on home that opens on hover, chapter cover cards, 9 week plan bar on the Book Chess Board page, paper card sections, polaroid photo galleries, side by side Brainstorm layout. Phone layout checked at 375px
- Did: fixed live site photos. Pages workflow now builds `_site` with `sources/images` copied to `images/`
- Decided: look target is "about one month of freeCodeCamp CSS", original and themed instead of bland. Replaces the "basic and a little amateur" rule
- Next: turn on GitHub Pages, add Bear Fix to Side Projects page, cover measurements

## 2026-10-02 (2)
- Did: logged helping a classmate fix a bear toy model in Blender. Before/after screenshots and both STL files saved, writeup in `work/side-projects/bear-fix.md`
- Next: add the Blender steps used and the classmate's name if they want credit. Then cover measurements

## 2026-10-02
- Did: added GitHub Actions workflow `.github/workflows/pages.yml` that publishes `work/website` to GitHub Pages on every push to `main`
- Decided: deploy with the Actions source (not "deploy from branch") because the site lives in a subfolder
- Next: set Settings > Pages > Source to GitHub Actions, check the live site, then cover measurements

## 2026-10-01
- Did: switched the repo to the project-rag layout. `context/` became `RULES.md`, `STATE.md`, `LOG.md`, `IDEAS.md`. Brief, predesign notes, brainstorm and photos moved to `sources/`. Writeups and website moved to `work/`. All links fixed
- Decided: decisions now live in LOG entries ("Decided:") and IDEAS tags, no separate decisions file
- Next: cover measurements

## 2026-09-29
- Did: Book Chess Board design story started (`work/chess-board/design-story.md`). Idea came from a TikTok of board games that fold into books. Living hinge pattern made by Mr Yetihad
- Did: wrote up past work (name tag, phone stand, iPhone dummy) and the trash holder design process (v1 to v2)
- Did: built website v1 (plain HTML/CSS/JS), not hosted yet
- Decided: website stays basic and a little amateur on purpose, accessibility done properly. Host on GitHub Pages, not Google Sites. Stop quizzing with question lists
- Next: cover measurements, board model, print trash holder parts

## 2026-09-25
- Did: turned the repo into a context system, added cover prototype and trash holder photos
- Decided: redesign. Cover is now a static case and the folding board slides in (first version was too advanced). Board gets a built-in hinge
- Decided: all commits straight to `main`, `CLAUDE.md` is protected
- Next: cover measurements

## Before 2026-09-25 (rebuilt from git history)
- Did: brainstorm (2026-08-25), design brief, predesign notes, Hinge Test 1, past project photos
- Decided: Book Chess Board as final project. Mortised hinge for a flush book spine. Fold line between columns 4 and 5
