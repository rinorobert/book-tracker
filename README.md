# Book Tracker

Book Tracker is a small, dependency-free web app for recording books you want to read, are currently reading, or have finished.

**Live Demo:** [Open Book Tracker](https://rinorobert.github.io/book-tracker/)

## Features

- Add books with a title, author, and reading status.
- Validate required Title and Author fields, including whitespace-only input.
- Display newest books first.
- Search titles and authors with case-insensitive partial matching.
- Change reading status between `To read`, `Reading`, and `Finished`, with changes saved in browser `localStorage`.
- Delete a book after confirmation.
- View a Reading Dashboard with total books, counts by status, completion percentage, and a progress bar.
- Filter books by reading status.
- Sort books by newest first, title A–Z, or author A–Z.
- Combine search, status filtering, and sorting.
- Use a responsive layout for smaller screens.

## Run locally

Clone or download this repository, then open `index.html` in a modern web browser. No package installation, build step, or server is required.

For a local development server, you may also use an editor extension such as Live Server, but it is not required.

## Data Storage

Books are stored in the browser's `localStorage`, so they remain available after refreshing the page in the same browser. Data is browser-specific and is not synchronized across devices.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In the GitHub repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch containing these files (usually `main`) and the `/ (root)` folder, then save.
5. GitHub Pages will publish the site and display its URL on the Pages settings screen.

The project is compatible with GitHub Pages because it uses only static HTML, CSS, and browser JavaScript.

## About the Author

**Rino Robert**  
B.Tech in Artificial Intelligence and Data Science

- **GitHub:** [rinorobert](https://github.com/rinorobert)
- **LinkedIn:** [Rino Robert](https://www.linkedin.com/in/rino-robert/)
- **Email:** [rinorobert710@gmail.com](mailto:rinorobert710@gmail.com)
