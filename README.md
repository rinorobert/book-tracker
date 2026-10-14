# Book Tracker

Book Tracker is a small, dependency-free web app for recording books you want to read, are currently reading, or have finished.

## Features

- Add a book with a title, author, and initial status.
- Validate required Title and Author fields, including whitespace-only input.
- Display newest books first.
- Search titles and authors with case-insensitive partial matching.
- Change a book's status between `To read`, `Reading`, and `Finished`.
- Keep books and status changes in browser `localStorage`.

## Run locally

Clone or download this repository, then open `index.html` in a modern web browser. No package installation, build step, or server is required.

For a local development server, you may also use an editor extension such as Live Server, but it is not required.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In the GitHub repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch containing these files (usually `main`) and the `/ (root)` folder, then save.
5. GitHub Pages will publish the site and display its URL on the Pages settings screen.

The project is compatible with GitHub Pages because it uses only static HTML, CSS, and browser JavaScript.
