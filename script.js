class Book {
	constructor(title, author, pages, language, dateOfPublish, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.language = language;
		this.dateOfPublish = dateOfPublish;
		this.read = read;
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(title, author, pages, language, dateOfPublish, read) {
		const book = new Book(title, author, pages, language, dateOfPublish, read);
		this.books.push(book);
	}

	displayBooks() {
		const booksGrid = document.querySelector('.books-grid');
		booksGrid.innerHTML = '';

		this.books.forEach((book, index) => {
			// Create the necessary HTML elements
			const bookCard = document.createElement('div');
			const bookDetails = document.createElement('div');
			const bookTitle = document.createElement('h2');
			const bookAuthor = document.createElement('p');
			const bookPages = document.createElement('p');
			const bookLanguage = document.createElement('p');
			const bookPublishDate = document.createElement('p');
			const bookReadStatus = document.createElement('p');
			const readLabel = document.createElement('label');
			const readInput = document.createElement('input');
			const deleteButton = document.createElement('button');

			// Set the attributes and content of the elements
			bookCard.className = 'book-card';
			bookDetails.className = 'book-details';
			bookTitle.className = 'book-title';
			bookTitle.textContent = book.title;
			bookAuthor.className = 'book-author';
			bookAuthor.textContent = `Author: ${book.author}`;
			bookPages.className = 'book-pages';
			bookPages.textContent = `Pages: ${book.pages}`;
			bookLanguage.className = 'book-language';
			bookLanguage.textContent = `Written in: ${book.language}`;
			bookPublishDate.className = 'book-publish-date';
			bookPublishDate.textContent = `Published: ${book.dateOfPublish}`;
			bookReadStatus.className = 'book-read-status';
			readLabel.textContent = 'Read it?';
			readInput.type = 'checkbox';
			readInput.checked = book.read;
			readLabel.appendChild(readInput);
			bookReadStatus.appendChild(readLabel);
			deleteButton.textContent = 'Remove';

			// Append the elements to the selected element
			bookDetails.appendChild(bookTitle);
			bookDetails.appendChild(bookAuthor);
			bookDetails.appendChild(bookPages);
			bookDetails.appendChild(bookLanguage);
			bookDetails.appendChild(bookPublishDate);
			bookDetails.appendChild(bookReadStatus);
			bookDetails.appendChild(deleteButton);
			bookCard.appendChild(bookDetails);
			booksGrid.appendChild(bookCard);

			// Event handlers
			readInput.addEventListener('change', () => {
				book.read = readInput.checked;
				this.displayBooks();
			});
			deleteButton.addEventListener('click', () => {
				this.books.splice(index, 1);
				this.displayBooks();
			});
		});
	}
}

const library = new Library();

const modal = document.getElementById('addBookModal');
const addBookbtn = document.getElementById('addBookBtn');
const modalCloseBtn = document.getElementById('closeChar');

addBookbtn.onclick = function () {
	modal.style.display = 'flex';
	modal.style.flexDirection = 'row';
};

modalCloseBtn.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const language = document.getElementById('language').value;
	const date = document.getElementById('date').value;
	const read = document.getElementById('read').checked;

	library.addBook(title, author, pages, language, date, read);
	library.displayBooks();

	// Resets
	form.reset();
	modal.style.display = 'none';
});
