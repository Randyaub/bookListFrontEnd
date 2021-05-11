import React from "react";
import CreateUpdateForm from "../../components/CreateUpdateForm";

const CreatePage: React.FC = (): React.ReactElement<JSX.Element> => {
  return (
    <div className="c-UpdatePage">
      <h1>Create Book</h1>
      <CreateUpdateForm />
    </div>
  );
};

export default CreatePage;
