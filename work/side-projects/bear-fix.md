# Side Project: Bear Fix (helping a classmate)

**Date added:** 2026-10-02
**Status:** Done. File fixed and sent back.

![Before: original model in Blender](../../sources/images/bear-fix/before.png)
![After: fixed model in Blender](../../sources/images/bear-fix/after.png)

## What happened
- A classmate had a toy model called "trash toy" (a bear figure) that was giving them trouble
- I fixed the file in Blender and gave it back

## Before and after
- Before: very detailed mesh, 86,730 triangles, 4.3 MB file. Had a weird flat artifact (stray shape) attached to the raised hand
- After: simplified low poly mesh, 3,356 triangles, 168 KB file. I removed the artifact connected to the hand and the bear is still recognisable

## How I did it
- Removed the artifact connected to the hand
- Remeshed it in Blender because I thought it would look better a little less poly
- Tried subdividing afterwards, but it looked terrible
- Could have sculpted it smooth instead, but that was a lot of work for a favour, so I skipped it
- Next time: subdivide, sculpt it smooth, then decimate again to bring the poly count back down

## Files
- `bear-fix/trash-toy-before.stl`: the original from my classmate
- `bear-fix/trash-toy-fixed.stl`: my fixed version

## TBD
- Exactly what was wrong with the original for their print (my guess from the screenshot: file too heavy plus the artifact)
- Exact setting and modifier: I think 0.25, but I don't remember if it was Decimate or Remesh
- Classmate's name, if they want to be credited
