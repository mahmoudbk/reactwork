import React from 'react'
import { useState } from 'react';
export default function Generator({changenumber}) {
  const [number,SetNumber] = useState();
  function handlenumber(e){
    SetNumber(parseInt(e.target.value));
  
  }

  function handleclick(){
    changenumber(number)
  }
  return (
    <div className='generator'>

        <div>
            <label>Category</label>
            <select>
                <option>Math: plus sign</option>
                <option>games : whatever</option>
            </select>
        </div>

        <div>
            <label>Number of questions</label>
            <input type="number" onChange={handlenumber}/>
        </div>

        <button onClick={handleclick}>Generate</button>



    </div>
  )
}
