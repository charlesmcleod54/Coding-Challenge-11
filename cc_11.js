// Task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return 'Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: {this.copies}';
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

const book1 = new Book("Frankenstein", "Mary Shelley", 274958, 10);

book1.updateCopies(-1);
console.log(book1.getDetails());

// Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }

    returnBook(bookTitle) {
        const index = this.borrowedBooks.indexOf(bookTitle);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

const borrower1 = new Borrower("Jack Smith", 362);
borrower1.borrowBook("Frankenstein");
console.log(borrower1.borrowedBooks);

// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book => {
            console.log(book.getDetails());
        });
    }
}

const library = new Library();
library.addBook(book1);
library.listBooks();

// Task 4: Implementing Book Borrowing
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.bookd.push(book);
    }

    listBooks() {
        this.bookd.forEach(book => {
            console.log(book.getDetails());
        });
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }
}

library.addBook(book1);
library.lendBook(362, 274958);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);

