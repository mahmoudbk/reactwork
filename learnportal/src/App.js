
import { useState } from "react";
import  ReactDOM from "react-dom";


function PopUp({ onClose }){

  return ReactDOM.createPortal(
    <div>
      <h2>this is a popup as you can tell probably</h2>
      <button onClick={onClose}>closepop</button>
    </div>
  ,document.body);
}

function App() {
  const [showPop, SetPop] = useState(false);
  function toggleButton(){
    SetPop((prv)=> !prv);
  }
  return (
    <>
    <h1>
      this is a pop up click the button below to open it
    </h1>
    

    <button onClick={toggleButton}>openpop</button>
    { showPop && <PopUp onClose={toggleButton}/>}
    </>
  );
}

export default App;
