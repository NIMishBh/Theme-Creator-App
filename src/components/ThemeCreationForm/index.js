import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { AddTheme } from '../../redux/actions';
import './style.css';


function ThemeCreationForm() {
  const dispatch = useDispatch();

  const addTheme = (theme) => {
    dispatch(AddTheme(theme));
  }

  return (
    <div className="container">
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
            <h2>Create A Theme : </h2>
            <div>
              <label>Theme Name : </label>
              <input
                type="text"
                name="name"
                value={values.name}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Background Color : </label>
              <input
                type="color"
                name="bgcolor"
                value={values.bgcolor}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Foreground Color : </label>
              <input
                type="color"
                name="fgcolor"
                value={values.fgcolor}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button className="button button-submit" type="submit" disabled={isSubmitting}>Add Theme</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ThemeCreationForm
