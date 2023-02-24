import React from 'react'

export default function Generator() {
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
            <input type="number"/>
        </div>

        <button>Generate</button>



    </div>
  )
}
