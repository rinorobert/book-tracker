const STORAGE_KEY = 'book-tracker-books';
const STATUS_OPTIONS = ['To read', 'Reading', 'Finished'];
const books = loadBooks();

const bookForm = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const statusInput = document.querySelector('#status');
const titleError = document.querySelector('#title-error');
const authorError = document.querySelector('#author-error');
const searchInput = document.querySelector('#search');
const bookList = document.querySelector('#book-list');

function loadBooks() {
  try {
    const savedBooks = localStorage.getItem(STORAGE_KEY);

    if (!savedBooks) {
      return [];
    }

    const parsedBooks = JSON.parse(savedBooks);
    return Array.isArray(parsedBooks) ? parsedBooks : [];
  } catch {
    return [];
  }
}

function saveBooks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch {
    // Keep the current in-memory list usable if storage is unavailable.
  }
}

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.toggle('input-invalid', Boolean(message));
  input.setAttribute('aria-invalid', String(Boolean(message)));
}

function validateRequiredField(input, errorElement, label) {
  const value = input.value.trim();

  if (!value) {
    setFieldError(input, errorElement, `${label} is required.`);
    return null;
  }

  setFieldError(input, errorElement, '');
  return value;
}

function renderBooks() {
  if (books.length === 0) {
    bookList.innerHTML = '<p class="empty-state">No books added yet. Your list will appear here.</p>';
    return;
  }

  const searchTerm = searchInput.value.trim().toLowerCase();
  const visibleBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  });

  bookList.innerHTML = '';

  if (visibleBooks.length === 0) {
    bookList.innerHTML = '<p class="empty-state">No books match your search.</p>';
    return;
  }

  visibleBooks.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';

    const details = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const status = document.createElement('select');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    status.className = 'status-control';
    status.setAttribute('aria-label', `Change status for ${book.title}`);

    STATUS_OPTIONS.forEach((statusOption) => {
      const option = document.createElement('option');
      option.value = statusOption;
      option.textContent = statusOption;
      option.selected = statusOption === book.status;
      status.append(option);
    });

    status.addEventListener('change', () => {
      book.status = status.value;
      saveBooks();
      renderBooks();
    });

    details.append(title, author);
    card.append(details, status);
    bookList.append(card);
  });
}

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = validateRequiredField(titleInput, titleError, 'Title');
  const author = validateRequiredField(authorInput, authorError, 'Author');

  if (!title || !author) {
    return;
  }

  books.unshift({
    title,
    author,
    status: statusInput.value,
  });

  saveBooks();
  bookForm.reset();
  renderBooks();
  titleInput.focus();
});

titleInput.addEventListener('input', () => validateRequiredField(titleInput, titleError, 'Title'));
authorInput.addEventListener('input', () => validateRequiredField(authorInput, authorError, 'Author'));
searchInput.addEventListener('input', renderBooks);

renderBooks();
