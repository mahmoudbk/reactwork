
import { useReducer, useState } from "react";
import  Todo  from './Todo.js';

export const ACTIONS = {
  ADDTODO:'add-todo',
  TOGGLETODO: 'toggle-todo'
}
function reducer(todos,action){
  switch (action.type){
    case ACTIONS.ADDTODO:
      return [...todos,newTodo(action.payload.name) ]
    case ACTIONS.TOGGLETODO:
      return toggleTodo(todos,action.payload.id)
      
  }
}
function newTodo(name){
  return {id:Date.now(),name:name,complete:false};
}

function toggleTodo(arr,id){
  return arr.map(todo => {
    if(todo.id === id){
      return {...todo, complete:!todo.complete}
    }
    return todo
  })
}

function App() {

  
  const [todos,dispatch] = useReducer(reducer,[]);
  const [name,setName] = useState('');
  
  function hadnlesubmit(e){
    e.preventDefault();
    dispatch({type:ACTIONS.ADDTODO,payload:{name:name}});
    setName("");
  }
  return (
    <>

    <form onSubmit={hadnlesubmit}>

      <input value={name} onChange={(e)=> setName(e.target.value)} />

    </form>

    {todos.map((todo)=> {
      
      return <Todo  key={todo.id} todo={todo} dispatch={dispatch}  />
    })}
    </>
  );
}

export default App;