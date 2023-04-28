const modal = document.getElementById('addBookModal');

const addBookbtn = document.getElementById('addBookBtn');

const span = document.getElementById('closeChar');

// const span = document.getElementsByClassName('close')[0];

addBookbtn.onclick = function () {
	modal.style.display = 'flex';
	modal.style.flexDirection = 'row';
};

span.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

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
