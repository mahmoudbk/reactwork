import { useState } from "react";

function App() {
  const [count,setCount] = useState(4);
 function decrement(){
  //these only work once because the count is always 4 so they override each others
/*
  setCount(count - 1);
  setCount(count - 1);

  */
  //howerver  this one prev count changes so it works multiple times
  setCount((prv)=> prv - 1);
  setCount((prv)=> prv - 1);
 }
 function encrement(){
  setCount(count + 1);
 }
  return (
    <>
   <button onClick={decrement}>-</button>
   <span>{count}</span>
   <button onClick={encrement}>+</button>
   </>
  );
}

export default App;
