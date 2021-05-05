const initialState = {
  themeList : [
    { name: "Light", bgcolor: "#ffffff", fgcolor: "#000000" }
  ],
  currentTheme : {name: "Light" ,bgcolor: "#ffffff", fgcolor: "#000000"}
}

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Theme":
      state.themeList.push(action.payload);
      console.log("Theme Added Succesfully")
      return state;
    case "Set_Theme":
      state.currentTheme = action.payload
      console.log("Theme set successfully")
      return state;
    default:
      return state;
  }
}

export default ThemeReducer;