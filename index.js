/* eslint-disable */
import BookList from './Modules/BookList.js';
import { DateTime } from './Modules/luxon.js';
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
  
  const CurrentDate = () => {
    const dateElement = document.getElementById('date');
    dateElement.textContent = DateTime.now().toFormat('LLLL d yyyy, hh:mm:ss a');
  }
  setInterval(CurrentDate, 1000);