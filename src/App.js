import './App.css';
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {AddTheme} from './redux/actions'
import { Formik } from 'formik';
import ThemeSelector from './components/ThemeSelector'

function App() {

  const currentTheme = useSelector((state) => state.ThemeReducer.currentTheme)

  console.log("Current Theme is : ", currentTheme);

  const dispatch = useDispatch();

  const addTheme = (theme) => {
    dispatch(AddTheme(theme));
  }

  return (
    <div className="App" style={{ background: currentTheme.bgcolor }}>
      <div className="nav">
        <h2>Theme Creator App</h2>
        <ThemeSelector
          title="Select a Theme"
        />
      </div>
      <div className="content">
        <p style={{ fontSize: "20px", color: currentTheme.fgColor }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Dui aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <h2 style={{color: currentTheme.fgColor }}>Create A New Theme = </h2>
      <div className="form-content" style={{color: currentTheme.fgColor }}>
        <Formik
          initialValues={{
            name:'',
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
    </div>
  );
}

export default App;
