import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import BookList from "./BookList";
import * as Yup from "yup";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = ({ errors, touched, values, isSubmitting, status }) => {
  const [info, setInfo] = useState([]);
  console.log("this is touched", touched);
  useEffect(() => {
    if (status) {
      setInfo([...info, status]);
    }
  }, [info, status]);

  return (
    <SearchDiv>
      <h1>What kind of book are you looking for?</h1>
      <Form>
        <Field
          component="textarea"
          type="text"
          name="bookdesc"
          placeholder="Book Description"
          min-width="500px"
        />
        {touched.bookdesc && errors.booksdesc && <p>{errors.bookdesc}</p>}
      </Form>
      <Text>{JSON.stringify(values)}</Text>
      <button type="submit" disabled={isSubmitting}>
        Submit!
      </button>

      <BookList />
    </SearchDiv>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues({ bookdesc }) {
    return {
      booksdesc: bookdesc || ""
    };
  },

  validationSchema: Yup.object().shape({
    bookdesc: Yup.string().required("A description is required.")
  }),

  handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
    axios

      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(SearchForm);
export default FormikSearchForm;
