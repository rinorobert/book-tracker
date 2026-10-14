# AI Prompt Record — Book Tracker

This log records the important user prompts used during development, their purpose, and the observed outcome. The prompt text below is taken from the actual development conversation; no prompts, test results, bugs, or fixes have been invented.

## 1. Initial planning

**Actual prompt text:** “I want to build a Book Tracker web app for an internship recruitment assessment.” The prompt requested a plain HTML, CSS, and JavaScript app using browser `localStorage`, with book creation, newest-first display, title/author search, status changes, and persistence. It asked for an implementation approach, recommended files, a `localStorage` explanation, and a step-by-step plan before any files were changed.

**Purpose:** Establish the proposed architecture and workflow before implementation.

**Outcome:** A dependency-free static-site approach was proposed, with staged implementation and GitHub Pages compatibility. No files were changed.

## 2. Corrective planning request

**Actual prompt text:** “Your plan is generally suitable, but revise it to follow the recruitment assessment instructions exactly.” The prompt required the filenames `index.html`, `style.css`, `app.js`, `PROMPTS.md`, and `README.md`; required an accurate prompt log; required incremental feature work with review/testing before each next feature; and required no files to be changed at that time.

**Purpose:** Align the initial plan with the assessment's naming and workflow requirements.

**Outcome:** The plan was revised to use the required filenames, include `PROMPTS.md`, and follow the requested incremental sequence. No files were changed.

## 3. Feature 1 — add and display books

**Actual prompt text:** “Your revised plan is approved. Implement Feature 1 only: add a book and display the list.” The prompt required only `index.html`, `style.css`, and `app.js`; Title, Author, and Status fields; `To read` as the default status; trimmed required-field validation; newest-first in-memory display; form clearing after success; and no persistence, search, status editing, documentation, commit, or push.

**Purpose:** Build the initial add-book interface and validated in-memory list.

**Outcome:** The three application files were created. Valid books were added with `unshift()` and displayed at the top; Title and Author were trimmed and validated. `node --check app.js` and `git diff --check` were run. No browser test result was claimed.

## 4. Feature 2 — localStorage persistence

**Actual prompt text:** “Implement the next feature in my Book Tracker: persist the book list using browser localStorage.” The prompt required loading saved books on page open, saving the complete list whenever a new book is added, retaining the existing behavior, safely handling missing or invalid saved JSON, and using a clear key such as `book-tracker-books`. It prohibited search, status editing, deletion, counts, commits, and pushes.

**Purpose:** Preserve the book list across page refreshes without adding unrelated features.

**Outcome:** `app.js` gained `loadBooks()` and `saveBooks()` using the `book-tracker-books` key. It loaded valid saved arrays, fell back to an empty list for missing or invalid JSON, and saved after new books were added. `node --check app.js` and `git diff --check` were run. No browser persistence test was claimed.

## 5. Feature 3 — search

**Actual prompt text:** “Implement Feature 3 only: add search to my existing Book Tracker.” The prompt required a search box above the list, live case-insensitive partial matching of title and author, restoring the complete list when cleared, preserving localStorage data without modification, and retaining existing functionality. It prohibited status editing, deletion, counts, commits, and pushes.

**Purpose:** Add a non-destructive, case-insensitive filter for the displayed list.

**Outcome:** A search box was added above the list. The rendering logic filters the visible list by lowercase title or author without changing the `books` array or stored data. It displays a no-results message when appropriate. `node --check app.js` and `git diff --check` were run. No browser interaction test was claimed.

## 6. Feature 4 — status changes

**Actual prompt text:** “Implement Feature 4 only: allow users to change a book's status in my existing Book Tracker.” The prompt required a control per displayed book with exactly `To read`, `Reading`, and `Finished`; immediate array and localStorage updates; preservation of the active search query; persistence after refresh; and no unrelated features, commits, or pushes.

**Purpose:** Allow each saved book's reading status to be changed and persisted.

**Outcome:** Each book now has a status selector. Its change handler updates the corresponding in-memory book object, saves the complete array, and re-renders using the active search query. `node --check app.js` and `git diff --check` were run. No browser refresh test was claimed.

## Genuine AI planning mistake and correction

The initial planning response proposed `styles.css` and `script.js` instead of the required `style.css` and `app.js`, and it omitted `PROMPTS.md`. The user identified this discrepancy during plan review and supplied the corrective planning request above. The revised plan used the required filenames and included the prompt log; Feature 1 subsequently created `style.css` and `app.js`.

This was a planning/documentation mistake, not an application runtime bug.

## Reported manual test results

No user-reported manual browser test results are recorded in this conversation. The static checks listed above do not establish browser behavior.
