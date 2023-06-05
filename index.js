document.addEventListener('DOMContentLoaded', function() {
    function Book(title,author){
        this.title = title;
        this.author = author; 
    }
    const Book1 = new Book('Nahj-al-Balagha','Imam Ali a.s');
    let Books = [];
    function add(index) {
        const AddBtn = document.getElementById('add-btn');
        AddBtn.addEventListener('click', (e) => {
            if(localStorage.length === 0){
                let i = 1;
                localStorage.setItem('1',JSON.stringify('Book'));
                console.log(JSON.parse(localStorage.getItem('Book')));
            }
            else {
                localStorage.setItem('2', JSON.stringify('Book'));   
            }
    });
   }
   add();
});

/*document.addEventListener('DOMContentLoaded', function() {
    const Books = [
      {
        Title: 'Nahj-al-Balagha',
        Author: 'Imam Ali a.s'
      },
      {
        Title: 'Learning-Spirituality-from-ImamHusayn',
        Author: 'Javad & Zahraa'
      },
      {
        Title: '100 years of Solitude',
        Author: 'Gabriel García Márquez'
      }
    ];
    
    const Book_list = document.getElementById('booklist');
    
    function display(objectIndex) {
      Book_list.innerHTML += `<table>
        <tr>
        <td>Title</td>
        <td>Author</td>
        </tr>
        <tr>
          <td>${Books[objectIndex].Title}</td>
          <td>${Books[objectIndex].Author}</td>
        </tr>
      </table>`;
    }
    
    for (let i = 0; i < Books.length; i += 1) {
      display(i);
    }
  });
  */