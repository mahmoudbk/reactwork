import React from 'react'

export default function Card({title,questions}) {
    
  return (
    <div className='card'>
        <h3 className='q-title'>{title}</h3>
        <ul className='q-options'>
            {questions.map((q)=> {
                return <li>q</li>
            })}
        </ul>
    </div>
  )
}
