import { startTransition, useState, useTransition } from "react";

function App() {
  const [pending,StartTransition] =  useTransition();
  const [input, setInput] = useState("");
  const [list,setList] = useState([]);

  const MAX_LIMIT = 20000;

  function handleChange(e){
    setInput(e.target.value);
    StartTransition(()=> {
      let l = [];
   
      for(let i=0;i<MAX_LIMIT;i++){
        l.push(e.target.value)
      }
      setList(l);
    })
    
  }

  return (
    <>
    <input  value={input} onChange={handleChange}/>

    { pending ? "Loading ...":list.map((item,index)=> <h3 key={index}>{item}</h3>)}
    </>
  );
}

export default App;
