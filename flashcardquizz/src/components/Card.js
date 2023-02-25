import React from 'react'

export default function Card({title,questions,answer}) {
    
  return (
    <div className='card'>
      <div className='front'>
        <h3 className='q-title'>{title}</h3>
        <ul className='q-options'>
            {questions.map((q)=> {
                return <li key={q}>q</li>
            })}
        </ul>
        </div>

        <div className='back'>
          <h3 className='answer'>Here comes the answer</h3>
        </div>
    </div>
  )
}
