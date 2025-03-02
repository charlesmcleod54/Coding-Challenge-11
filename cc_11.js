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