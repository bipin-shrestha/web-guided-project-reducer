/*
   reducer is a function that takes two variables,
   the state and an action, and returns a modified state
   based on the action

    action is an object that has a required 'type' key
    and an optional 'payload'
*/

export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const CLEAR = 'CLEAR'
export const ADD_TO_MEMORY = 'ADD_TO_MEMORY'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, currentValue: state.currentValue + action.payload };
    case SUBTRACT:
      return { ...state, currentValue: state.currentValue - action.payload };
    case CLEAR:
      return { ...state, currentValue: 0 };
    case ADD_TO_MEMORY:
      return { ...state, memory: state.currentValue };
    default:
      return state;
  }
};

export default reducer;
