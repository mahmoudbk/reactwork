
import './App.css';
import Generator from './components/Generator';
import Main from './components/Main';
import { useState,useEffect } from 'react';
function App() {
  const [numberqs,setNumbersQs] = useState(1);

  return (
    <>
     <Generator changenumber={setNumbersQs}  />
      <Main numberqs={numberqs}/>
     </>
     
  );
}

export default App;
