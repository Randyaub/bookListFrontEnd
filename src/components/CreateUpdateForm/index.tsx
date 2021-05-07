import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./CreateUpdateForm.css";

const CreateUpdateForm = () => {
  const [title, setTitle] = useState<string>();
  //const [publisher, setPublisher] = useState<String>();
  const [totalPages, setTotalPages] = useState<string>();
  const [rating, setRating] = useState<string>();
  const [isbn13, setISBN13] = useState<string>();
  const [publishedDate, setPublishedDate] = useState<string>();
  const { book_id } = useParams<{ book_id?: string }>();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form className="c-CreateUpdateForm" onSubmit={handleSubmit}>
      <label className="c-CreateUpdateForm__label">
        Title
        <input
          className="c-CreateUpdateForm__input"
          type="text"
          id="title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        ></input>
      </label>
      {/* <label className="c-CreateUpdateForm__label">
        Publisher
        <input type="text"></input>
      </label> */}
      <label className="c-CreateUpdateForm__label">
        Total Pages
        <input
          className="c-CreateUpdateForm__input"
          type="text"
          id="totalPages"
          value={totalPages}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTotalPages(e.target.value)
          }
        ></input>
      </label>
      <label className="c-CreateUpdateForm__label">
        Rating
        <input
          className="c-CreateUpdateForm__input"
          type="text"
          id="rating"
          value={rating}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRating(e.target.value)
          }
        ></input>
      </label>
      <label className="c-CreateUpdateForm__label">
        ISBN13
        <input
          className="c-CreateUpdateForm__input"
          type="text"
          id="isbn13"
          value={isbn13}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setISBN13(e.target.value)
          }
        ></input>
      </label>
      <label className="c-CreateUpdateForm__label">
        Published Date
        <input
          className="c-CreateUpdateForm__input"
          type="text"
          id="publishedDate"
          value={publishedDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPublishedDate(e.target.value)
          }
        ></input>
      </label>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default CreateUpdateForm;
