import Book from './BookClass.js';
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
      var table = document.createElement("table");
      table.classList.add("table", "table-striped" );
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
  export default BookList;