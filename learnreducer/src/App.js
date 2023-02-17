import { useReducer } from "react";

const ACTIONS = {
  INCREMENT:"increment",
  DECREMENT:"decrement"
}
function reducer(state,action){
  switch (action.type){
    case ACTIONS.INCREMENT:
      return { count: state.count + 1}
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    default:
      return state
  }
  
}
function App() {


  function incremenet(){
    dispatch({type:ACTIONS.INCREMENT});
  }
  function decrement(){
    dispatch({type:ACTIONS.DECREMENT})
  }
  const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={incremenet}>+</button>
    </div>
  );
}

export default App;
