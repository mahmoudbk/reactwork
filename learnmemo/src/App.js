import { useState,useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
/* the point of using memo is to catch results of slow operations to 
optimize performance */
  //instead of doing this 
  //const doubleNumber = slowFunction(number);


  //we do this 

  const doubleNumber = useMemo(()=> {
    return slowFunction(number)
  },[number])
  

  const themeStyles = useMemo(()=> {
    return {backgroundColor:dark ? 'black':'white',
    color:dark ? 'white':'black'
    }
  },[dark])

    useEffect(()=> {
      console.log("theme changed");
    },[themeStyles])
  
  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setDark(prev => !prev)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}
function slowFunction(num){
  for(let i=0;i<1000000000;i++){

  }
  return num*2
}
export default App;
