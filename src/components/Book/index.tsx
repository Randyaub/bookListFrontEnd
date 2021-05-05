import React from "react";

import "./Book.css";

interface props {
  details: bookDetails;
}

interface bookDetails {
  title: String;
  publisher: String;
  page_numbers: Number;
  rating: Number;
  isbn: Number;
  published_date: String;
}

const Book = ({ details }: props) => {
  return (
    <div className="c-Book">
      <div className="c-BookDetails">
        <h4>{details.title} </h4>
        <span>by {details.publisher}</span>
        <span>Page Number: {details.page_numbers} </span>
        <span>Rating: {details.rating} Stars</span>
        <span>ISBN: {details.isbn} </span>
        <span>Published Date: {details.published_date} </span>
      </div>
      <div className="c-Book__btns">
        <button className="primary-btn">Update</button>
        <button className="primary-btn">Remove</button>
      </div>
    </div>
  );
};

export default Book;
