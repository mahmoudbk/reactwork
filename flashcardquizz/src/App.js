
import './App.css';
import Generator from './components/Generator';
import Main from './components/Main';
import {useState } from 'react';
function App() {
  const [numberqs,setNumbersQs] = useState(1);
  const [category,setCategory] = useState(0)
  
  return (
    <>
     <Generator setCategory={setCategory} setNumbersQs={setNumbersQs}  />
      <Main numberqs={numberqs} category={category}/>
     </>
     
  );
}

export default App;
