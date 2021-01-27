import React, { useReducer } from "react";
import reducer, { ADD, SUBTRACT, CLEAR, ADD_TO_MEMORY } from './reducers/calcReducer';
import "./styles.css";

const initialState = {
  currentValue: 0,
  memory: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [currentValue, setCurrentValue] = useState(0)

  const handleAddTwo = e => {
    e.preventDefault();
    // do somethign to add 2
    // setCurrentValue(currentValue + 2)
    dispatch({ type: ADD, payload: 2 })
  }

  const handleSubtractThree = e => {
    e.preventDefault();
    dispatch({ type: SUBTRACT, payload: 3000000 });
  }

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: CLEAR })
  }

  const handleAddToMemory = e => {
    e.preventDefault()
    dispatch({ type: ADD_TO_MEMORY })
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn" onClick={handleAddTwo}>
        +2
      </button>
      <button type="button" className="btn" onClick={handleSubtractThree}>
        -300000
      </button>
      <button type="button" className="btn" onClick={handleClear}>
        CR
      </button>
      <button type="button" className="btn" onClick={handleAddToMemory}>
        MR
      </button>
    </div>
  );
}
