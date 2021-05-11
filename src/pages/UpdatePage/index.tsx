import React from "react";
import CreateUpdateForm from "../../components/CreateUpdateForm";

const UpdatePage: React.FC = (): React.ReactElement<JSX.Element> => {
  return (
    <div className="c-UpdatePage">
      <h1>Update Page</h1>
      <CreateUpdateForm />
    </div>
  );
};

export default UpdatePage;
