import React from "react";
import data from "../data";
import Book from "../Book";

import "./ListOfBooks.css";

const ListOfBooks = () => {
  return (
    <div className="c-ListOfBooks">
      {data.map((book) => {
        return <Book key={book.id} details={book} />;
      })}
    </div>
  );
};

export default ListOfBooks;
