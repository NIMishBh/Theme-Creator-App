import './App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemeSelector from './components/ThemeSelector';
import ThemeCreationForm from './components/ThemeCreationForm';

function App() {

  const currentTheme = useSelector((state) => state.ThemeReducer.currentTheme)

  console.log("Current Theme is : ", currentTheme);

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
      <h2 style={{ color: currentTheme.fgColor }}>Create A New Theme = </h2>
      <div className="form-content" style={{ color: currentTheme.fgColor }}>
        <ThemeCreationForm />
      </div>
    </div>
  );
}

export default App;
