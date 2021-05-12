import React from "react";
import { useParams } from "react-router";

import CreateUpdateForm from "../../components/CreateUpdateForm";

const UpdatePage: React.FC = (): React.ReactElement<JSX.Element> => {
  const { book_id } = useParams<any>();

  return (
    <div className="c-UpdatePage">
      <h1>Update Page</h1>
      <CreateUpdateForm update book_id={book_id} />
    </div>
  );
};

export default UpdatePage;
