import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as I from "../../ts/interfaces/app_interfaces";

import "./Book.css";

interface props {
  book: I.book;
  books: I.book[];
  setBooks: React.Dispatch<React.SetStateAction<I.book[]>>;
}

const Book: React.FC<props> = ({
  book,
  books,
  setBooks,
}: props): ReactElement<JSX.Element> => {
  const onRemove = async (): Promise<void> => {
    try {
      // Use data returned to display message that
      // book is deleted eventually.
      const data = await axios.delete(`/api/books/${book.book_id}`);
      const newBooks = books.filter(
        (removedBook) => removedBook.book_id !== book.book_id
      );
      setBooks(newBooks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-Book">
      <div className="c-BookDetails">
        <h4>{book.title} </h4>
        <span>by {book.publisher_id} </span>
        <span>Page Number: {book.total_pages} </span>
        <span>Rating: {book.rating} Stars</span>
        <span>ISBN: {book.isbn_13} </span>
        <span>Published Date: {book.published_date} </span>
      </div>
      <div className="c-Book__btns">
        <Link to={`/update_book/:${book.book_id}`} className="primary-btn">
          Update
        </Link>
        <button className="primary-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Book;
