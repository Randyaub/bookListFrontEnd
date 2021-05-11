import React, { useEffect, useState } from "react";
import ListOfBooks from "../../components/ListOfBooks";
import axios from "axios";
import * as I from "../../ts/interfaces/app_interfaces";
import { Link } from "react-router-dom";

const HomePage: React.FC = (): React.ReactElement<JSX.Element> => {
  const [books, setBooks] = useState<I.book[]>([]);

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      try {
        const { data } = await axios.get("/api/books");
        setBooks(data.books);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="c-HomePage">
      <h1>Welcome</h1>
      <ListOfBooks books={books} setBooks={setBooks} />
      <Link to={`/create_book`} className="primary-btn">
        Add Book
      </Link>
    </div>
  );
};

export default HomePage;
