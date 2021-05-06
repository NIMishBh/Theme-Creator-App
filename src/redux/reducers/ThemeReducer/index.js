const initialState = {
  themeList : [
    { name: "Light", bgcolor: "#ffffff", fgcolor: "#000000" }
  ],
  currentTheme : {name: "Light" ,bgcolor: "#ffffff", fgcolor: "#000000"}
}

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Theme":
      return{
        ...state,
        themeList:[
          ...state.themeList,
          { 
            name : action.payload.name,
            bgcolor: action.payload.bgcolor,
            fgcolor: action.payload.fgcolor
          }
        ]
      }
    case "Set_Theme":
      let index = action.payload;
      state.currentTheme = state.themeList[index];
      console.log("Theme Set Successfully")
      return state;
    default:
      return state;
  }
}

export default ThemeReducer;