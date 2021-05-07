import React, { useEffect, useState } from "react";
import Book from "../Book";
import axios from "axios";
import * as I from "../../ts/interfaces/app_interfaces";

import "./ListOfBooks.css";

const ListOfBooks = () => {
  const [books, setBooks] = useState<I.book[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get("/api/books");
        setBooks(data.books);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [deleted]);

  return (
    <div className="c-ListOfBooks">
      {books.map((book) => {
        return (
          <Book
            key={book.book_id}
            book={book}
            setDeleted={setDeleted}
            deleted={deleted}
          />
        );
      })}
    </div>
  );
};

export default ListOfBooks;
