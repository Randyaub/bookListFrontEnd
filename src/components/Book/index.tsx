import React from "react";

import "./Book.css";

interface props {
  details: bookDetails;
}

interface bookDetails {
  title: String;
  publisher_id: Number;
  total_pages: Number;
  rating: Number;
  isbn_13: String;
  published_date: String;
}

const Book = ({ details }: props) => {
  return (
    <div className="c-Book">
      <div className="c-BookDetails">
        <h4>{details.title} </h4>
        <span>by {details.publisher_id}</span>
        <span>Page Number: {details.total_pages} </span>
        <span>Rating: {details.rating} Stars</span>
        <span>ISBN: {details.isbn_13} </span>
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
