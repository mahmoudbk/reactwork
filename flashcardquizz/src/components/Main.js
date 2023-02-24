import React from 'react';
import Card from './Card';

import { useState,useEffect } from 'react';
export default function Main({numberqs}) {

 
  const [cards,setCards] = useState([]);

  useEffect(()=> {
    
    for(let i=0;i<numberqs;i++){
      console.log(i);
      setCards(prv=> [...prv,<Card key={i+1} title="title" questions={["q1","q2"]}/>]);
     
    }
  },[numberqs])
  return (
    <div className="main">


        {cards.map((c)=> c)}

    
    </div>
  )
}
