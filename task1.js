class Library {
    #books;
 
    constructor(books) {
       if (!Array.isArray(books)) {
          throw Error("Список книг не массив");
       }
       if (arr => arr.filter((item, index) => arr.indexOf(item) !== index).length === 0) {
          this.#books = books;
       } else {
          throw Error("В списке книг содержаться дубликаты");
       }
    };
 
    allBooks () {
       return this.#books;
    };
 
    addBook (title) {
       if (this.hasBook(title)) {
          throw Error("Такая книга уже существует");
       }
       this.#books.push(title);
    };
 
    removeBook (title) {
       if (!this.hasBook(title)) {
          throw Error("Такая книга не существует");
       }
       const id = this.#books.findIndex(e => e === title);
       this.#books.splice(id, 1);
    };
 
    hasBook (title) {
       return this.#books.includes(title);
    }
 }
 
 
 
 const lib = new Library(["Первая", "Вторая", "Третья"]);
 console.log(lib.allBooks());
 
 // lib.addBook("Вторая");
 lib.addBook("Еще одна");
 console.log(lib.allBooks());
 
 lib.removeBook("Еще одна");
 // lib.removeBook("Какая то");
 console.log(lib.allBooks());
 
 console.log(lib.hasBook("Еще одна"));
 console.log(lib.hasBook("Вторая"));