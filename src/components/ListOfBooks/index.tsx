import React, { useEffect, useState } from "react";
import Book from "../Book";
import axios from "axios";

import "./ListOfBooks.css";

interface book {
  book_id: React.Key;
  publisher_id: Number;
  title: String;
  total_pages: Number;
  rating: Number;
  isbn_13: String;
  published_date: String;
}

const ListOfBooks = () => {
  const [books, setBooks] = useState<book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const { data } = await axios.get("/api/books");
      setBooks(data.books);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-ListOfBooks">
      {books.map((book) => {
        return <Book key={book.book_id} details={book} />;
      })}
    </div>
  );
};

export default ListOfBooks;
