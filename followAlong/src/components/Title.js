import React, { useState, useReducer } from 'react';

import titleReducer, { SET_TITLE, TOGGLE_EDITING } from '../reducers/titleReducer';

const initialState = {
  title: 'title from reducer',
  editing: false
}

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState)
  const { title, editing } = state
  // application level state
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);

  // component level state
  const [newTitleText, setNewTitleText] = useState(title);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{' '}
          <i onClick={() => {
            //setEditing(!editing)
            dispatch({ type: TOGGLE_EDITING })
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
                //setTitle(newTitleText);
                // TODO: dispatch an action to set the title
                dispatch({ type: SET_TITLE, payload: newTitleText })
                // dispatch({ type: TOGGLE_EDITING })
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