import { useReducer } from "react";


function reducer(state,action){
  return {count:state.count +1}
}
function App() {


  function incremenet(){
    dispatch();
  }
  const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
      <button>-</button>
      <h1>{state.count}</h1>
      <button onClick={incremenet}>+</button>
    </div>
  );
}

export default App;
