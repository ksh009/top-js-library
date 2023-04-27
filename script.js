class Library {
	constructor() {
		this.books = [];
	}

	addBook(title, author, numPages, language, publishDate, isRead) {
		const book = {
			title: title,
			author: author,
			numPages: numPages,
			language: language,
			publishDate: publishDate,
			isRead: isRead,
		};
		this.books.push(book);
	}

	getBooks() {
		return this.books;
	}
}

const myLibrary = new Library();

// ADD/CREATE Books

console.log('Adding books...');

myLibrary.addBook(
	'The Great Gatsby',
	'F. Scott Fitzgerald',
	180,
	'English',
	'April 10, 1925',
	true
);
myLibrary.addBook(
	'To Kill a Mockingbird',
	'Harper Lee',
	281,
	'English',
	'July 11, 1960',
	false
);
myLibrary.addBook(
	'The Lord of the Rings',
	'Novel by J. R. R. Tolkien',
	1222,
	'English',
	'July 29, 1954',
	true
);

// Read Books
console.log(myLibrary.getBooks());
