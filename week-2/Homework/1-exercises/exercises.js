/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(function (persona) {
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    content.appendChild(h1);
    content.appendChild(h2);
    h1.innerText = persona.name;
    h2.innerText = persona.job;
  })

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  //Write your code in here
  const listaDesordenada = document.getElementById('content');
  const ul = document.createElement('ul');
  listaDesordenada.appendChild(ul);

  const elementosLista = document.querySelector('div#content ul');
  shopping.forEach(function (articulo) {
    let li = document.createElement('li');
    elementosLista.appendChild(li);
    li.innerText = articulo;
  })

}

/**
    I'd like to display my three favorite books inside a nice webpage!
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).
    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here

  const nuevoDiv = document.querySelector('#content');
  const div = document.createElement('div');
  nuevoDiv.appendChild(div).className = 'book-list';
  let img1 =  "https://s3.bukalapak.com/img/8512958085/s-330-330/The_Design_of_Everyday_Things_Revised_and_Expanded_Edition_b.jpg.webp" 
  let img2 = "https://images4.penguinrandomhouse.com/cover/9780385533072";
  let img3 = "data:image/jpeg;base64,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"
  const booksContent = document.querySelector('.book-list');
  const h1 = document.createElement('h1');
  booksContent.appendChild(h1);
  h1.innerText = 'Books List'

  const listaLibros = document.querySelector('.book-list');
  const ul = document.createElement('ul');
  listaLibros.appendChild(ul);

  let libro = document.querySelector('.book-list ul')
  books.forEach(function (book) {
    let li = document.createElement('li');
    libro.appendChild(li);
    li.innerHTML = `<p>${book.title}-${book.author}</p> <img src=>`
      if(book.alreadyRead) {
        li.style.backgroundColor = 'green'
      } else {
        li.style.backgroundColor = 'red'
      }
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);