import React, { useState, useReducer } from 'react';
import { titleReducer, initialTitleState } from '../reducers/titleReducer';

const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  const [state, dispatch] = useReducer(titleReducer, initialTitleState);

  // component state
  const [newTitleText, setNewTitleText] = useState(initialTitleState.title);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => {
            // dispatch an action that will toggle the editing value
            dispatch({ type: 'TOGGLE_EDITING' });
            // setEditing(!editing);
          }} className="far fa-edit" />
        </h1>
      ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="newTitleText"
              value={newTitleText}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                dispatch({ type: 'SET_TITLE', payload: newTitleText })
                // setTitle(newTitleText);
                // setEditing(false);
              }}
            >
              Update title
          </button>
          </div>
        )}
    </div>
  );
};

export default Title;