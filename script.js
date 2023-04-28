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

// Constructor can be modified to take a book in on initialization
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

		this.books.forEach((book) => {
			// Create the necessary HTML elements
			const bookCard = document.createElement('div');
			const bookDetails = document.createElement('div');
			const bookTitle = document.createElement('h2');
			const bookAuthor = document.createElement('p');
			const bookPages = document.createElement('p');
			const bookLanguage = document.createElement('p');
			const bookPublishDate = document.createElement('p');
			const bookReadStatus = document.createElement('p');

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
			bookPublishDate.textContent = `Date published: ${book.dateOfPublish}`;
			bookReadStatus.className = 'book-read-status';
			bookReadStatus.textContent = `Read it?: ${book.read ? 'Yes' : 'Not yet'}`;

			// Append the elements to the selected element
			bookDetails.appendChild(bookTitle);
			bookDetails.appendChild(bookAuthor);
			bookDetails.appendChild(bookPages);
			bookDetails.appendChild(bookLanguage);
			bookDetails.appendChild(bookPublishDate);
			bookDetails.appendChild(bookReadStatus);
			bookCard.appendChild(bookDetails);
			booksGrid.appendChild(bookCard);
			// const bookDiv = document.createElement('div');
			// bookDiv.classList.add('book');

			// const titleDiv = document.createElement('div');
			// titleDiv.textContent = book.title;
			// bookDiv.appendChild(titleDiv);

			// const authorDiv = document.createElement('div');
			// authorDiv.textContent = book.author;
			// bookDiv.appendChild(authorDiv);

			// const pagesDiv = document.createElement('div');
			// pagesDiv.textContent = book.pages;
			// bookDiv.appendChild(pagesDiv);

			// const lagnuageDiv = document.createElement('div');
			// lagnuageDiv.textContent = book.pages;
			// bookDiv.appendChild(lagnuageDiv);

			// const dateOfPublishDiv = document.createElement('div');
			// dateOfPublishDiv.textContent = book.pages;
			// bookDiv.appendChild(dateOfPublishDiv);

			// const readDiv = document.createElement('div');
			// readDiv.textContent = book.read;
			// bookDiv.appendChild(readDiv);

			// booksGrid.appendChild(bookDiv);
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

	modal.style.display = 'none';
});

// class Library {
// 	constructor() {
// 		this.books = [];
// 	}

// 	addBook(title, author, numPages, language, publishDate, isRead) {
// 		const book = {
// 			title: title,
// 			author: author,
// 			numPages: numPages,
// 			language: language,
// 			publishDate: publishDate,
// 			isRead: isRead,
// 		};
// 		this.books.push(book);
// 	}

// 	updateBook(index, updatedBook) {
// 		this.books[index] = { ...this.books[index], ...updatedBook };
// 	}

// 	deleteBook(index) {
// 		this.books.splice(index, 1);
// 	}

// 	getBooks() {
// 		return this.books;
// 	}
// }

// const myLibrary = new Library();

// // ADD/CREATE Books

// console.log('Adding books...');

// myLibrary.addBook(
// 	'The Great Gatsby',
// 	'F. Scott Fitzgerald',
// 	180,
// 	'English',
// 	'April 10, 1925',
// 	true
// );
// myLibrary.addBook(
// 	'To Kill a Mockingbird',
// 	'Harper Lee',
// 	281,
// 	'English',
// 	'July 11, 1960',
// 	false
// );
// myLibrary.addBook(
// 	'The Lord of the Rings',
// 	'Novel by J. R. R. Tolkien',
// 	1222,
// 	'English',
// 	'July 29, 1954',
// 	true
// );

// // Read Books
// console.log(myLibrary.getBooks());

// // Update Book
// console.log('Updating book...');
// myLibrary.updateBook(1, {
// 	title: 'New Title',
// 	numPages: 999,
// });
// myLibrary.updateBook(2, {
// 	language: 'German',
// 	author: 'unknown',
// });

// // Read Books
// console.log(myLibrary.getBooks());

// // Delete Book
// console.log('Deleting book...');
// myLibrary.deleteBook(0);

// // Read Books
// console.log(myLibrary.getBooks());
