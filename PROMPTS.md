# AI Prompt Record — Book Tracker

This file records the important prompts used during development of the Book Tracker assessment. It reflects the conversation and observed work only; it does not claim unreported tests or invent issues.

## 1. Initial planning prompt

### What was asked

The user asked for a plan to build a Book Tracker web app for an internship recruitment assessment using plain HTML, CSS, and JavaScript with browser `localStorage`. The requested features were adding books with a title, author, and status; newest-first display; title/author search; status changes; and persistence after refresh. The user asked for the implementation approach, recommended files, an explanation of `localStorage`, and a staged implementation/testing plan before any files were changed.

### What happened

The response proposed a dependency-free, single-page static site suitable for GitHub Pages. It recommended separate HTML, CSS, and JavaScript files and described storing the book array as JSON in `localStorage`, loading it on page start, and saving after changes. It also outlined a staged implementation and manual testing approach. No files were created or modified.

## 2. Corrective planning prompt

### What was asked

The user asked for the plan to be revised to exactly match the assessment workflow. They required the filenames `index.html`, `style.css`, `app.js`, `PROMPTS.md`, and `README.md`; required an accurate prompt log including a genuine AI mistake and verified fix; required a feature-by-feature implementation, review, test, commit, and push sequence; and required waiting for approval before making changes.

### What happened

The response revised the plan to use the required filenames and to treat `PROMPTS.md` as an assessment deliverable. It also described the required feature order and confirmed that the application would remain compatible with GitHub Pages as a plain static site. No files were created or modified at this planning stage.

## 3. Feature 1 implementation prompt

### What was asked

The user approved the plan and asked to implement only Feature 1. The requirements were to create only `index.html`, `style.css`, and `app.js`; provide Title, Author, and Status fields; default Status to `To read`; validate trimmed Title and Author values; show field-specific messages beneath invalid fields; add valid books to the top of an in-memory list; clear the form after success; and keep the site suitable for GitHub Pages. The user explicitly prohibited persistence, search, status-changing controls, deletion, counts, `README.md`, `PROMPTS.md`, commits, and pushes.

### What happened

`index.html`, `style.css`, and `app.js` were created. The page includes the requested form and an initially empty book list. The JavaScript trims and validates Title and Author, displays a relevant error beneath each invalid field, adds valid entries to an in-memory array with newest books first, renders the list, and resets the form after a successful add. The status is displayed as the chosen initial status only; it cannot be changed after adding a book. No persistence, search, deletion, counts, documentation, commit, or push was added.

Two non-browser checks were run: `node --check app.js` and `git diff --check`. They completed without errors.

## Genuine planning mistake and correction

### Mistake

The initial planning response recommended `styles.css` and `script.js` instead of the assessment-required filenames `style.css` and `app.js`. It also omitted `PROMPTS.md` from the recommended deliverables.

### Detection and verified correction

The user detected the discrepancy while reviewing the initial plan and supplied a corrective planning prompt. The revised plan explicitly used `index.html`, `style.css`, `app.js`, `PROMPTS.md`, and `README.md`, and it included the prompt log as an important assessment deliverable. The subsequent Feature 1 implementation created `style.css` and `app.js`, confirming that the corrected filenames were followed.

This was a planning/documentation mistake, not an application runtime bug.

## Reported manual test results for Feature 1

No manual browser test results have been reported by the user yet. The suggested manual tests have not been recorded as passed or failed, and no code bug or code fix has been claimed for Feature 1.
