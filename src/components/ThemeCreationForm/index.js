import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { AddTheme } from '../../redux/actions'


function ThemeCreationForm() {
  const dispatch = useDispatch();

  const addTheme = (theme) => {
    dispatch(AddTheme(theme));
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          bgcolor: '',
          fgcolor: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addTheme(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Theme Name: </label>
            <input
              type="text"
              name="name"
              value={values.name}
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Background Color: </label>
            <input
              type="color"
              name="bgcolor"
              value={values.bgcolor}
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Foreground Color: </label>
            <input
              type="color"
              name="fgcolor"
              value={values.fgcolor}
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ThemeCreationForm
