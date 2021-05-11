import React from "react";
import { FieldProps, getIn } from "formik";

import "./TextFormField.css";

const TextFormField: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <div>
      <input className="c-TextFormField" {...props} {...field} />
      {!!errorText ? (
        <h4 className="c-TextFormField__error">{errorText}</h4>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextFormField;
