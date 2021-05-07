import React from "react";
import ListOfBooks from "../../components/ListOfBooks";

const HomePage = () => {
  return (
    <div className="c-HomePage">
      <h1>Welcome</h1>
      <ListOfBooks />
      <button className="primary-btn">Add book</button>
    </div>
  );
};

export default HomePage;
