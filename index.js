document.addEventListener('DOMContentLoaded', function() {
  // Function Constructor
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  // Empty Array for Objects!
  const Books = [];
  // Function Add for Adding Books;
  function Add() {
    const AddButton = document.getElementById('add-btn');
    //i used as key value, As we know setItem takes two parameters Key and Value
    let i = 1;
    //Add Event Listener to Add Button so if any User clicks the Book added as Object!
    AddButton.addEventListener('click', () => {
    // To Taking inputs from Users; 
      const Title = document.getElementById('title').value;
      const Author = document.getElementById('author').value;
    // The New Object Created with help of 'new' that is constructor func.
      const book = new Book(Title, Author);
    // LocalStorage Setup!
      if (localStorage.length === 0) {
        localStorage.setItem(i, JSON.stringify(book));
        //Object book Pushed(Added) in Books Array.
        Books.push(book);
        // display line shows last added book in Array Books!
        display(Books.length - 1);
      } else {
        localStorage.setItem(i++, JSON.stringify(book));
         //Object book Pushed(Added) in Books Array.
        Books.push(book);
        // display line shows last added book in Array Books!
        display(Books.length - 1);
      }
    });
  }

  Add();

  function display(objectIndex) {
    const Book_list = document.getElementById('booklist');
    //Create Table for Books!
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <td>Title</td>
        <td>Author</td>
      </tr>
      <tr>
        <td>${Books[objectIndex].title}</td>
        <td>${Books[objectIndex].author}</td>
      </tr>
      <tr>
        <td><button type="button" class="remove-btn" data-index="${objectIndex}">Remove</button></td>
      </tr>
    `;
    //data-set that i used in remove button to get index id of object.
    //Now we can append the Table to Book_list!
    Book_list.appendChild(table);
    // intialize removeButton instead display func because removebutton is made dynamically inside display func.
    const removeButton = table.querySelector('.remove-btn');
    removeButton.addEventListener('click', (event) => {
      //event.target triggers event to dataset of index in order to find out index of book for delete.
      const index = event.target.dataset.index;
      //Here removeBook(index) used as CallBack Function! 
      removeBook(index);
      //table.remove() removes row of table in which book was existed.
      table.remove();
    });
  }
  function removeBook(index) {
    //localStorage.removeItem() removes item from LocalStorage.
    localStorage.removeItem(index);
    //Splice cut off the space that the deleted element(index of array) takes!
    //Splice takes two arguements(index => index of array) and 1 => one element at a Time.
    Books.splice(index, 1);
  }
});
/* Tadaa! */