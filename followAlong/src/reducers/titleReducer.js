export const SET_TITLE = 'SET_TITLE'

const titleReducer = (state, action) => {
  if (action.type === SET_TITLE) {
    return {
      ...state,
      title: action.payload
    }
  }
  return state;
}

export default titleReducer;