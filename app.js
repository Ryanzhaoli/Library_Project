console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
    }

    addBook() {
        // select the inputs from the form 00 title, author, and read
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        const newBook = new Book(title.value, author.value, read.checked);
        // creates a new book instance from my book class with the values using the "new" operator

        this.books.push(newBook);
        // increment the book count property

        this.bookCount++;
        // pass this new book into my books array using the "push" method.
        // it adds new items to the end of an array.

        const tbody = document.getElementById("tableBody");
        // select the table id="table" OR select the table body. Add an id to the body in HTML.
        // display to the DOM

        const newTr = document.createElement("tr");
        // create a new table row
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        // create three new table data cells

        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;
        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newRead.appendChild(newCheckbox);

        // add text content to tds with book values
        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);
        // append the tds to the tr

        tbody.appendChild(newTr);
        // append the tr to the tbody
    }

    markRead(checkbox, id) {
        // markRead will mark read after it's been added to the library and save as read on the books object
        this.books.forEach(book => {
            if(id === book.id) {
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
                // if you read something you cannot unread it
            }
        });
    }
}

const library = new Library(books);

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // prevent the default -- don't send this to any URL address. Don't refresh the page.
    // when they submit this form (adding a book) I want to grab the information.
        library.addBook();
        // referring to the instance, not the class name
});
