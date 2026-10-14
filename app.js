const books = [];

const bookForm = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const statusInput = document.querySelector('#status');
const titleError = document.querySelector('#title-error');
const authorError = document.querySelector('#author-error');
const bookList = document.querySelector('#book-list');

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

  bookList.innerHTML = '';

  books.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';

    const details = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const status = document.createElement('span');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    status.className = 'status-label';
    status.textContent = book.status;

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

  bookForm.reset();
  renderBooks();
  titleInput.focus();
});

titleInput.addEventListener('input', () => validateRequiredField(titleInput, titleError, 'Title'));
authorInput.addEventListener('input', () => validateRequiredField(authorInput, authorError, 'Author'));
