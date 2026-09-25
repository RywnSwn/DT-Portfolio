# Instructions for AI chats

This repo is the memory for my Design Technology (DT) portfolio. Every new chat starts with no memory, so the context lives here in plain files. Treat it like a simple RAG system: read the right files first, then answer, then write back what changed.

## 1. Read before doing anything
1. `context/current-state.md`: where the project is right now. Always read this.
2. `context/index.md`: map of every file with keywords. Use it to find and read only the files you need for the task.
3. `context/session-log.md`: skim the last few entries to see what happened recently.

## 2. Write back before the chat ends
If anything changed in the chat (new idea, decision, test result, file added):
- Update `context/current-state.md` so it stays true. Replace old info, don't pile it on.
- Add a decision to `context/decisions.md` if one was made (newest at the top).
- Add a short entry to `context/session-log.md` (newest at the top).
- Add any new file to `context/index.md` with a one-line summary and keywords.
- Commit with a clear message.

## Rules
- **Never use em dashes** in any file or reply. Use commas, colons, periods or brackets instead.
- Keep writing short and plain. Bullet points over long paragraphs.
- Don't invent measurements, decisions or results. If something is unknown, write "TBD" or put it in Open questions.
- Photos go in `assets/<topic>/`. Notes that show a photo link to it with a relative path.
- File names: lowercase with hyphens. Dated notes start with `YYYY-MM-DD-`.

## About me
- Student at ISY (International School Yangon), Myanmar, starting 9th grade
- DT class, final project is the Book Chess Board
- Tools I use: Fusion 360, 3D printing, school workshop resources
- I like random side projects and making lots of kinds of files
