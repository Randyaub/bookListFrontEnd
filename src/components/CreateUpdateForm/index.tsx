import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import TextFormField from "../../components/TextFormField";
import { useHistory } from "react-router";
import * as yup from "yup";

import "./CreateUpdateForm.css";

const validationSchema = yup.object({
  title: yup.string().label("Title").required().max(255),
  publisher_id: yup.string().label("Publisher").required(),
  total_pages: yup
    .number()
    .label("Total Pages")
    .required()
    .positive("Total Pages must be a positive number"),
  rating: yup
    .number()
    .label("Rating")
    .required()
    .min(0, "Please select a number between 0 and 5")
    .max(5, "Please select a number between 0 and 5"),
  isbn_13: yup
    .number()
    .label("ISBN")
    .required()
    .positive("ISBN is a positive number"),
  published_date: yup.string().label("Published Date").required().max(10),
});

const CreateUpdateForm: React.FC = (): React.ReactElement<JSX.Element> => {
  const history = useHistory();

  const handleCreate = async (values: any) => {
    try {
      await axios.post("api/books", values);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        publisher_id: 0,
        total_pages: 0,
        rating: 0,
        isbn_13: "",
        published_date: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleCreate(values);
      }}
    >
      {() => (
        <Form>
          <label>
            Title
            <Field
              label="Title"
              type="input"
              name="title"
              component={TextFormField}
            />
          </label>
          <label>
            Publisher
            <Field
              label="Publisher"
              type="input"
              name="publisher_id"
              component={TextFormField}
            />
          </label>
          <label>
            Total Pages
            <Field
              label="Total Pages"
              type="number"
              name="total_pages"
              component={TextFormField}
            />
          </label>
          <label>
            Rating
            <Field
              label="Rating"
              type="number"
              name="rating"
              component={TextFormField}
            />
          </label>
          <label>
            ISBN
            <Field
              label="ISBN13"
              type="input"
              name="isbn_13"
              component={TextFormField}
            />
          </label>
          <label>
            Published Date
            <Field
              label="Published Date"
              type="date"
              name="published_date"
              component={TextFormField}
            />
          </label>
          <button className="primary-btn" type="submit">
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateUpdateForm;
