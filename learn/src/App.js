import { useState } from "react";


function trackstate(){
  console.log("first state");
  return 4;
}
function App() {
  //this useState works every time the component rerender
  const [count,setCount] = useState(trackstate());
  //to avoid that we can use a function to use useState instead 
  const [count2,setCount2] = useState(()=> {
    console.log("run function..")
    return 4
  })

  //useState when dealing with objects 
  const [state,setState] = useState({count:4,theme:"blue"});
  const count3 = state.count;
  const theme = state.theme;
  
 function decrement(){
  //these only work once because the count is always 4 so they override each others
/*
  setCount(count - 1);
  setCount(count - 1);

  */
  //howerver  this one prev count changes everytime (3, 2 ..etc) so it works multiple times
  setCount((prv)=> prv - 1);
  setCount((prv)=> prv - 1);
 }
 function encrement(){
  setCount(count + 1);
  setCount ((prv)=> prv + 1);
 }

 function encrement2(){
  setCount2((prv)=>prv+1);
 }
 function decrement1(){
  setCount2((prv)=> prv- 1);
 }


 //to test the object

 function encrement3(){
  setState((prv)=>{
    return { ...prv,count:prv.count + 1}
  });
 }
 function decrement3(){
  setState((prv)=> {
    return {...prv,count:prv.count - 1 };
  });
 }
  return (
    <>
    <div>
   <button onClick={decrement}>-</button>
   <span>{count}</span>
   <button onClick={encrement}>+</button>
   </div>

   <h1>count 2</h1>
   <div>
   <button onClick={decrement1}>-</button>
   <span>{count2}</span>
   <button onClick={encrement2}>+</button>
   </div>

   <h1>using objects</h1>
   <div>
   <button onClick={decrement3}>-</button>
   <span>{count3}</span>
   <span>{theme}</span>
   <button onClick={encrement3}>+</button>
   </div>
   </>
  );
}

export default App;
