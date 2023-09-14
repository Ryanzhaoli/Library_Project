console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
    {
      id: 1,
      title: "Name of the Wind",
      author: "Patrick Rothfuss",
      read: true,
    },
  ];
  
  class Book {
    constructor(id, title, author, read) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.read = read;
      this.favorite = false;
    }
  }
  
  class Library {
    constructor(books) {
      this.nextId = books.lenght;
      this.books = books;
    }
    addBook(book) {
      if (book) {
        var { id, title, author, read } = book;
      }
      if (!book) {
        console.log("creating new book ...");
        // Select the Inputs from the form -- title, author, and read
        var titleInput = document.getElementById("title");
        var authorInput = document.getElementById("author");
        var readInput = document.getElementById("read");
        //Increment book count property
        this.nextId++;
  
        // Create an instance from my Book class with the input values
        var newBook = new Book(
          this.nextId,
          titleInput.value,
          authorInput.value,
          readInput.checked
        );
  
        //Push this new book instance into the books array
        this.books.push(newBook);
      }
      // Select the table body
      const tbody = document.getElementById("tableBody");
      // Create new table row
      const newTr = document.createElement("tr");
      newTr.classList.add(id || newBook.id);
      console.log("made it this far");
      newTr.addEventListener("dbclick", () => {
        this.removeBook(id || newBook.id);
      });
      newTr.addEventListener("click", () => {
        this.markFavorite(id || newBook.id);
      });
      //Create three new table data cells
      const newTitle = document.createElement("td");
      const newAuthor = document.createElement("td");
      const newRead = document.createElement("td");
      // Add text content to td's with book values
      newTitle.textContent = title || newBook.title;
      newAuthor.textContent = author || newBook.author;
      const newCheckbox = document.createElement("input");
      newCheckbox.classList.add(id || newBook.id);
      newCheckbox.type = "checkbox";
      newCheckbox.checked = read || readInput.checked;
      newCheckbox.disabled = read || readInput.checked;
      newCheckbox.addEventListener("click", (event) => {
        this.markRead(event.target, id || newBook.id);
      });
      newRead.appendChild(newCheckbox);
      //Append the td's to the tr
      newTr.appendChild(newTitle);
      newTr.appendChild(newAuthor);
      newTr.appendChild(newRead);
      //Append the tr to the body
      tbody.appendChild(newTr);
    }
  
    markRead(checkbox, id) {
      this.books.forEach((book) => {
        if (id === book.id) {
          book.read = true;
          checkbox.disabled = true;
        }
      });
    }
  
    markFavorite(bookId) {
      this.books.foreach((book) => {
        if (book.id === bookId) {
          book.favorite = !book.favorite;
        }
      });
      document.getElementById(bookId)[0].classList.toggle("favorite");
    }
    removeBook(bookId) {
      //Reassign the books array filtering out thr remove book
      this.books = this.books.filter(({ id }) => bookId !== id);
      // Remove the book from the DOM
      const tbody = document.getElementById("tableBody");
      tbody.removeChild(document.getElementById(bookId)[0]);
    }
  }
  
  let library = new Library(books);
  if (books.lenght > 0) {
    library.books.forEach((book) => {
      library.addBook(book);
    });
  }
  const form = document.getElementById("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
  });