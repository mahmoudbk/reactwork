
import { useState,useEffect,useRef } from "react";
function App() {

  const [name, setName] = useState('');
  /* lets say we want to calculate the numbre of times our component renders 

  a one way comes to head is using the usestate but its a red flag as 
  using it cause the usestate to change therefore rerender the component
  which makes an infinite loop */

  //so instead we do this : 

  const renderCount = useRef(0);
  /* some popular usage of useref as well is referencing elements such as
  the input element as shown below */ 

  const inputRef = useRef();
  const prevName = useRef("");
  useEffect(()=> {
    renderCount.current = renderCount.current +1;
  });
  function focus(){
    inputRef.current.focus();
  }

  // we can also use useref to store previous state element such as  : 

  useEffect(()=> {
    prevName.current = name
  },[name])
  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <div>My name is {name} and it used to be {prevName.current} </div>
    <div>I rendered {renderCount.current} times</div>
    <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
