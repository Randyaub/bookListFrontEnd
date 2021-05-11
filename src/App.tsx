import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UpdatePage from "./pages/UpdatePage";
import CreatePage from "./pages/CreatePage";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/create_book/">
        <CreatePage />
      </Route>
      <Route exact path="/update_book/:book_id">
        <UpdatePage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
