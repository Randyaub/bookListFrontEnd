import React from "react";
import { Field, Form, Formik } from "formik";
import TextFormField from "../../components/TextFormField";
import * as yup from "yup";

import "./CreateUpdateForm.css";

const validationSchema = yup.object({
  title: yup.string().label("Title").required().max(255),
  total_pages: yup
    .number()
    .typeError("Total Pages must be a number")
    .label("Total Pages")
    .required()
    .positive("Total Pages must be a positive number")
    .integer(),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .label("Rating")
    .required()
    .integer()
    .min(0, "Please select a number between 0 and 5")
    .max(5, "Please select a number between 0 and 5"),
  isbn13: yup
    .number()
    .typeError("ISBN is a number")
    .label("ISBN")
    .required()
    .max(13)
    .positive("ISBN is a positive number")
    .integer(),
  published_date: yup.string().label("Published Date").required().max(10),
});

const CreateUpdateForm: React.FC = (): React.ReactElement<JSX.Element> => {
  return (
    <Formik
      initialValues={{
        title: "",
        total_pages: "",
        rating: "",
        isbn13: "",
        published_date: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {({}) => (
        <div>
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
              Total Pages
              <Field
                label="Total Pages"
                type="input"
                name="total_pages"
                component={TextFormField}
              />
            </label>
            <label>
              Rating
              <Field
                label="Rating"
                type="input"
                name="rating"
                component={TextFormField}
              />
            </label>
            <label>
              ISBN
              <Field
                label="ISBN13"
                type="input"
                name="isbn13"
                component={TextFormField}
              />
            </label>
            <label>
              Published Date
              <Field
                label="Published Date"
                type="input"
                name="published_date"
                component={TextFormField}
              />
            </label>
          </Form>
          <button className="primary-btn" type="submit">
            Create
          </button>
        </div>
      )}
    </Formik>
  );
};

export default CreateUpdateForm;
