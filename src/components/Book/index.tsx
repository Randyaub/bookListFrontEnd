import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as I from "../../ts/interfaces/app_interfaces";

import "./Book.css";

interface props {
  book: I.book;
  setDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  deleted: boolean;
}

const Book = ({ book, setDeleted, deleted }: props) => {
  const onRemove = async () => {
    try {
      // Use data returned to display message that
      // book is deleted eventually.
      const data = axios.delete(`/api/books/${book.book_id}`);
      setDeleted(!deleted);
      console.log(deleted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-Book">
      <div className="c-BookDetails">
        <h4>{book.title} </h4>
        <span>by {book.publisher_id}</span>
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
