import React from 'react'

export default function Card({title,options,answer}) {
    
  return (
    <div className='card'>
      <div className='front'>
        <h3 className='q-title'>{title}</h3>
        <ul className='q-options'>
            {options.map((q)=> {
                return <li key={q}>{q}</li>
            })}
        </ul>
        </div>

        <div className='back'>
          <h3 className='answer'>The answer is  {answer}</h3>
        </div>
    </div>
  )
}
