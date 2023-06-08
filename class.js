/* eslint-disable */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.addBook();
    this.loadBooks();
  }

  addBook() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => {
      const storedTitle = localStorage.getItem('title');
      const storedAuthor = localStorage.getItem('author');

      if (storedTitle && storedAuthor) {
        document.getElementById('title').value = storedTitle;
        document.getElementById('author').value = storedAuthor;
      }

      const titleInput = document.getElementById('title').value;
      const authorInput = document.getElementById('author').value;

      const book = new Book(titleInput, authorInput);
      this.books.push(book);

      localStorage.setItem('title', '');
      localStorage.setItem('author', '');
      localStorage.setItem('books', JSON.stringify(this.books));

      this.displayBook(book);
    });
  }

  loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.books.forEach(book => {
        this.displayBook(book);
      });
    }
  }

  displayBook(book) {
    const bookList = document.getElementById('booklist');
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
      <td>
        "${book.title}" by 
        ${book.author}
        </td>
        <td>
        <button type="button" class="remove-btn">Remove</button></td>
      </tr>
    `;
    bookList.appendChild(table);

    const removeButton = table.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
      this.removeBook(book);
      table.remove();
    });
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bookList = new BookList();
});

const Booklink = document.getElementById('book-link');
const Addlink = document.getElementById('add-link');
const Contactlink = document.getElementById('contact-link')
const Booklist = document.getElementById('booklist');
const AddBook = document.getElementById('Add-Books');
const Contact = document.getElementById('contact');
const main = document.getElementById('hidden');

Booklink.addEventListener('click', () => {
    Booklist.style.display = 'block';
    AddBook.style.display = 'none';
    Contact.style.display = 'none';
});

Addlink.addEventListener('click', () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'block';
  Contact.style.display = 'none';
});

Contactlink.addEventListener('click', () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'none';
  Contact.style.display = 'flex';
});

function CurrentDate() {
  const dateElement = document.getElementById('date');
  const currentDate = new Date();

  // Get the current date and time
  const formattedDate = currentDate.toLocaleString();

  // Set the formatted date as the content of the element
  dateElement.textContent = formattedDate;
}

window.onload = function() {
  CurrentDate();
};


