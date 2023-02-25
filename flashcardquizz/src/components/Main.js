import React from 'react';
import Card from './Card';

import { useState,useEffect } from 'react';
import categories from '../data/data.json'
export default function Main({numberqs, category}) {

 
  const [cards,setCards] = useState([]);
 
  useEffect(()=> {
 
    const cats  = categories.categories
    for(let i=0;i<numberqs;i++){
     
      setCards(prv=> [...prv,<Card key={i} title={cats[category].questions[i].question} options={[...cats[category].questions[i].options]} answer={cats[category].questions[i].answer}/>]);
     
    }
   
   
    return  ()=> {
      setCards([]);
    }
  },[numberqs,category])
  return (
    <div className="main">


        {cards.map((c)=> c)}

    
    </div>
  )
}
