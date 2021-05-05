export const AddTheme = (theme) => {
  return {
    type: 'Add_Theme',
    payload: theme
  }
}

export const SetTheme = (theme) => {
  return { 
    type: 'Set_Theme',
    payload: theme 
  }
}