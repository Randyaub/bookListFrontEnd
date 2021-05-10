import React from "react";
import Book from "../Book";
import * as I from "../../ts/interfaces/app_interfaces";

import "./ListOfBooks.css";

interface props {
  books: I.book[];
  setBooks: React.Dispatch<React.SetStateAction<I.book[]>>;
}

const ListOfBooks = ({ books, setBooks }: props) => {
  return (
    <div className="c-ListOfBooks">
      {books.map((book) => {
        return (
          <Book
            key={book.book_id}
            book={book}
            books={books}
            setBooks={setBooks}
          />
        );
      })}
    </div>
  );
};

export default ListOfBooks;
