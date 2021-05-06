import React from 'react';
import './style.css';
import {useSelector, useDispatch} from "react-redux";
import {SetTheme} from '../../redux/actions'

function ThemeSelector() {

  const themeList = useSelector((state) => state.ThemeReducer.themeList);
  console.log(themeList)
  const dispatch = useDispatch();

  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">Select a Theme</button>
        <div class="dropdown-content">
          {
              themeList.map((val, index) => {
              return(
                <p onClick={() => dispatch(SetTheme(index)) } style={{ cursor: 'pointer' }}>{val.name}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ThemeSelector
