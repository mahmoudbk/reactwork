import React from 'react'
import { useState } from 'react';
export default function Generator({setNumbersQs,setCategory}) {
  const [number,SetNumber] = useState();
  const [cat,setCat] = useState(0);

  
  function handlenumber(e){
    SetNumber(parseInt(e.target.value));
  
  }
  function handleSelect(e){
    
    setCat(parseInt(e.target.selectedOptions[0].id));
  }

  function handleclick(){
    setNumbersQs(number)
    
    setCategory(cat);
  }
  return (
    <div className='generator'>

        <div>
            <label>Category</label>
            <select onChange={handleSelect}>
                <option id='0'>History</option>
                <option id='1'>Science</option>
                <option id='2'>Sports</option>
            </select>
        </div>

        <div>
            <label>Number of questions</label>
            <input type="number" max="3" min="0" onChange={handlenumber}/>
        </div>

        <button onClick={handleclick}>Generate</button>



    </div>
  )
}
