
export const initialTitleState = {
  title: 'from the reducer',
  editing: false
};

export const titleReducer = (state, action) => {
  // if (action.type === 'TOGGLE_EDITING') {
  //   return {
  //     ...state,
  //     editing: !state.editing
  //   }
  // } else if (action.type === 'SET_TITLE') {
  //   return {
  //     ...state,
  //     title: action.payload,
  //     editing: false
  //   }
  // }
  // return state;
  switch (action.type) {
    case 'TOGGLE_EDITING': return { ...state, editing: !state.editing }
    case 'SET_TITLE': return { ...state, editing: false, title: action.payload }
    default: return state;
  }
};